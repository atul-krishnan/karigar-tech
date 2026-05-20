import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db/prisma";
import { buildNotificationEvent, procurementEvents } from "@/lib/domain/events";
import { assertPoTransition, type PurchaseOrderWorkflowStatus } from "@/lib/domain/workflows";
import type {
  createRfqSchema,
  issuePurchaseOrderSchema,
  submitBidSchema,
  uploadInvoiceSchema,
} from "@/lib/validation/procurement";
import type { z } from "zod";

export async function createRfq(input: z.infer<typeof createRfqSchema>, actorUserId: string) {
  const referenceCode = `RFQ-${Date.now()}`;

  return prisma.$transaction(async (tx) => {
    const rfq = await tx.rfq.create({
      data: {
        buyerOrgId: input.buyerOrgId,
        createdByUserId: actorUserId,
        categoryId: input.categoryId,
        title: input.title,
        referenceCode,
        technicalSpecifications: input.technicalSpecifications,
        expectedDeliveryDate: input.expectedDeliveryDate,
        bidDeadline: input.bidDeadline,
        paymentTermsPreference: input.paymentTermsPreference,
        qualityRequirements: input.qualityRequirements,
        allowBuyerLiveBidVisibility: input.allowBuyerLiveBidVisibility,
        status: "PUBLISHED",
        publishedAt: new Date(),
        items: {
          create: input.items.map((item) => ({
            item: { connect: { id: item.itemId } },
            unit: { connect: { id: item.unit } },
            quantity: item.quantity,
            specifications: item.specifications as Prisma.InputJsonValue,
          })),
        },
        invitations: {
          create: input.supplierOrgIds.map((supplierOrgId) => ({
            supplierOrg: { connect: { id: supplierOrgId } },
            invitedByUserId: actorUserId,
          })),
        },
      },
    });

    await tx.auditLog.create({
      data: {
        actorUserId,
        organizationId: input.buyerOrgId,
        entityType: "rfq",
        entityId: rfq.id,
        action: "rfq.published",
        metadata: { supplierOrgIds: input.supplierOrgIds },
      },
    });

    await tx.notificationEvent.create({
      data: buildNotificationEvent(procurementEvents.rfqPublished, {
        rfqId: rfq.id,
        referenceCode,
      }),
    });

    return rfq;
  });
}

export async function submitBid(input: z.infer<typeof submitBidSchema>, actorUserId: string) {
  const totalLandedCost = input.totalPrice + input.taxes + input.freightCharges;

  return prisma.$transaction(async (tx) => {
    const invitation = await tx.rfqInvitation.findUnique({
      where: { rfqId_supplierOrgId: { rfqId: input.rfqId, supplierOrgId: input.supplierOrgId } },
    });

    if (!invitation) {
      throw new Error("Supplier is not invited to this RFQ");
    }

    const bid = await tx.bid.upsert({
      where: { rfqId_supplierOrgId: { rfqId: input.rfqId, supplierOrgId: input.supplierOrgId } },
      update: {
        status: "REVISED",
        pricePerUnit: input.pricePerUnit,
        totalPrice: input.totalPrice,
        taxes: input.taxes,
        freightCharges: input.freightCharges,
        totalLandedCost,
        deliveryTimelineDays: input.deliveryTimelineDays,
        paymentTerms: input.paymentTerms,
        minimumOrderQuantity: input.minimumOrderQuantity,
        validityDate: input.validityDate,
        notes: input.notes,
        submittedAt: new Date(),
      },
      create: {
        rfqId: input.rfqId,
        supplierOrgId: input.supplierOrgId,
        createdByUserId: actorUserId,
        status: "SUBMITTED",
        pricePerUnit: input.pricePerUnit,
        totalPrice: input.totalPrice,
        taxes: input.taxes,
        freightCharges: input.freightCharges,
        totalLandedCost,
        deliveryTimelineDays: input.deliveryTimelineDays,
        paymentTerms: input.paymentTerms,
        minimumOrderQuantity: input.minimumOrderQuantity,
        validityDate: input.validityDate,
        notes: input.notes,
        submittedAt: new Date(),
      },
    });

    await tx.auditLog.create({
      data: {
        actorUserId,
        organizationId: input.supplierOrgId,
        entityType: "bid",
        entityId: bid.id,
        action: "bid.submitted",
        metadata: { rfqId: input.rfqId, totalLandedCost },
      },
    });

    await tx.notificationEvent.create({
      data: buildNotificationEvent(procurementEvents.bidSubmitted, {
        rfqId: input.rfqId,
        bidId: bid.id,
      }),
    });

    return bid;
  });
}

export async function issuePurchaseOrder(input: z.infer<typeof issuePurchaseOrderSchema>, actorUserId: string) {
  const bid = await prisma.bid.findUnique({
    where: { id: input.winningBidId },
    include: { rfq: true },
  });

  if (!bid || bid.rfqId !== input.rfqId) {
    throw new Error("Winning bid does not belong to the selected RFQ");
  }

  return prisma.$transaction(async (tx) => {
    await tx.bid.update({
      where: { id: input.winningBidId },
      data: { status: "WON" },
    });

    await tx.bid.updateMany({
      where: { rfqId: input.rfqId, id: { not: input.winningBidId } },
      data: { status: "LOST" },
    });

    const po = await tx.purchaseOrder.create({
      data: {
        rfqId: input.rfqId,
        winningBidId: input.winningBidId,
        buyerOrgId: input.buyerOrgId,
        supplierOrgId: input.supplierOrgId,
        poNumber: `PO-${Date.now()}`,
        status: "ISSUED",
        subtotal: bid.totalPrice,
        taxes: bid.taxes,
        freightCharges: bid.freightCharges,
        totalAmount: bid.totalLandedCost,
        paymentTerms: bid.paymentTerms,
        issuedAt: new Date(),
        statusEvents: {
          create: {
            status: "ISSUED",
            actor: { connect: { id: actorUserId } },
            notes: "Generated from winning bid",
          },
        },
      },
    });

    await tx.rfq.update({
      where: { id: input.rfqId },
      data: { status: "AWARDED", closedAt: new Date() },
    });

    await tx.auditLog.create({
      data: {
        actorUserId,
        organizationId: input.buyerOrgId,
        entityType: "purchase_order",
        entityId: po.id,
        action: "po.issued",
        metadata: { rfqId: input.rfqId, winningBidId: input.winningBidId },
      },
    });

    await tx.notificationEvent.create({
      data: buildNotificationEvent(procurementEvents.poIssued, {
        purchaseOrderId: po.id,
      }),
    });

    return po;
  });
}

export async function updatePurchaseOrderStatus(
  purchaseOrderId: string,
  nextStatus: PurchaseOrderWorkflowStatus,
  actorUserId: string,
  notes?: string,
) {
  const current = await prisma.purchaseOrder.findUniqueOrThrow({ where: { id: purchaseOrderId } });
  assertPoTransition(current.status as PurchaseOrderWorkflowStatus, nextStatus);

  return prisma.$transaction(async (tx) => {
    const po = await tx.purchaseOrder.update({
      where: { id: purchaseOrderId },
      data: {
        status: nextStatus,
        acceptedAt: nextStatus === "ACCEPTED" ? new Date() : undefined,
      },
    });

    await tx.orderStatusEvent.create({
      data: { purchaseOrderId, status: nextStatus, actorUserId, notes },
    });

    await tx.notificationEvent.create({
      data: buildNotificationEvent(procurementEvents.orderStatusChanged, {
        purchaseOrderId,
        status: nextStatus,
      }),
    });

    return po;
  });
}

export async function uploadInvoice(input: z.infer<typeof uploadInvoiceSchema>) {
  return prisma.invoice.create({
    data: {
      purchaseOrderId: input.purchaseOrderId,
      invoiceNumber: input.invoiceNumber,
      invoiceDate: input.invoiceDate,
      dueDate: input.dueDate,
      amount: input.amount,
      taxAmount: input.taxAmount,
      attachments: {
        create: input.attachments,
      },
    },
    include: { attachments: true },
  });
}
