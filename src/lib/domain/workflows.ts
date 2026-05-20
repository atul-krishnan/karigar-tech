export const poTransitions = {
  DRAFT: ["ISSUED", "CANCELLED"],
  ISSUED: ["ACCEPTED", "CANCELLED"],
  ACCEPTED: ["PROCESSING", "CANCELLED"],
  PROCESSING: ["READY_FOR_DISPATCH", "CANCELLED"],
  READY_FOR_DISPATCH: ["SHIPPED", "CANCELLED"],
  SHIPPED: ["DELIVERED"],
  DELIVERED: ["COMPLETED"],
  COMPLETED: [],
  CANCELLED: [],
} as const;

export type PurchaseOrderWorkflowStatus = keyof typeof poTransitions;

export function assertPoTransition(from: PurchaseOrderWorkflowStatus, to: PurchaseOrderWorkflowStatus) {
  if (!(poTransitions[from] as readonly string[]).includes(to)) {
    throw new Error(`Invalid purchase order transition from ${from} to ${to}`);
  }
}

export function canReviseBid({ deadline, status }: { deadline: Date; status: string }) {
  return new Date() < deadline && ["DRAFT", "SUBMITTED", "REVISED"].includes(status);
}
