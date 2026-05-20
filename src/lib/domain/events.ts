export const procurementEvents = {
  supplierSubmittedForVerification: "supplier.submitted_for_verification",
  supplierVerified: "supplier.verified",
  rfqPublished: "rfq.published",
  rfqSupplierInvited: "rfq.supplier_invited",
  bidSubmitted: "bid.submitted",
  bidRevised: "bid.revised",
  rfqClosed: "rfq.closed",
  rfqAwarded: "rfq.awarded",
  poIssued: "po.issued",
  poAccepted: "po.accepted",
  orderStatusChanged: "order.status_changed",
  invoiceUploaded: "invoice.uploaded",
  paymentStatusChanged: "payment.status_changed",
} as const;

export type ProcurementEventName = (typeof procurementEvents)[keyof typeof procurementEvents];

export function buildNotificationEvent(eventType: ProcurementEventName, payload: Prisma.InputJsonObject) {
  return {
    eventType,
    channel: "in_app",
    payload,
  };
}
import { Prisma } from "@prisma/client";
