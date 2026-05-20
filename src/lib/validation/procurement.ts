import { z } from "zod";

export const rfqItemSchema = z.object({
  itemId: z.string().min(1),
  quantity: z.coerce.number().positive(),
  unit: z.string().min(1),
  specifications: z.record(z.string(), z.unknown()).optional(),
});

export const createRfqSchema = z.object({
  buyerOrgId: z.string().min(1),
  categoryId: z.string().min(1),
  title: z.string().min(4).max(160),
  deliveryLocation: z.string().min(3),
  expectedDeliveryDate: z.coerce.date(),
  bidDeadline: z.coerce.date(),
  paymentTermsPreference: z.string().optional(),
  qualityRequirements: z.string().optional(),
  technicalSpecifications: z.string().optional(),
  supplierOrgIds: z.array(z.string()).default([]),
  allowBuyerLiveBidVisibility: z.boolean().default(true),
  items: z.array(rfqItemSchema).min(1),
});

export const submitBidSchema = z.object({
  rfqId: z.string().min(1),
  supplierOrgId: z.string().min(1),
  pricePerUnit: z.coerce.number().positive(),
  totalPrice: z.coerce.number().positive(),
  taxes: z.coerce.number().min(0).default(0),
  freightCharges: z.coerce.number().min(0).default(0),
  deliveryTimelineDays: z.coerce.number().int().positive(),
  paymentTerms: z.string().min(2),
  minimumOrderQuantity: z.coerce.number().positive().optional(),
  validityDate: z.coerce.date(),
  notes: z.string().optional(),
});

export const issuePurchaseOrderSchema = z.object({
  rfqId: z.string().min(1),
  winningBidId: z.string().min(1),
  buyerOrgId: z.string().min(1),
  supplierOrgId: z.string().min(1),
});

export const uploadInvoiceSchema = z.object({
  purchaseOrderId: z.string().min(1),
  invoiceNumber: z.string().min(1),
  invoiceDate: z.coerce.date(),
  dueDate: z.coerce.date().optional(),
  amount: z.coerce.number().positive(),
  taxAmount: z.coerce.number().min(0).default(0),
  attachments: z
    .array(
      z.object({
        fileName: z.string(),
        storageKey: z.string(),
        mimeType: z.enum([
          "application/pdf",
          "image/png",
          "image/jpeg",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/xml",
          "text/xml",
        ]),
        sizeBytes: z.number().int().positive().max(50 * 1024 * 1024),
      }),
    )
    .default([]),
});
