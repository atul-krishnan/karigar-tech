import type { AppRole } from "@/lib/auth/context";

export type Action =
  | "rfq:create"
  | "rfq:create_for_buyer"
  | "rfq:view"
  | "rfq:invite"
  | "bid:submit"
  | "bid:view_competing"
  | "po:issue"
  | "po:accept"
  | "order:update_status"
  | "invoice:upload"
  | "supplier:verify"
  | "catalog:manage"
  | "analytics:view";

const rolePermissions: Record<AppRole, Action[]> = {
  buyer: [
    "rfq:create",
    "rfq:view",
    "rfq:invite",
    "bid:view_competing",
    "po:issue",
    "invoice:upload",
    "analytics:view",
  ],
  supplier: ["rfq:view", "bid:submit", "po:accept", "order:update_status", "invoice:upload", "analytics:view"],
  admin: [
    "rfq:create_for_buyer",
    "rfq:view",
    "rfq:invite",
    "bid:view_competing",
    "po:issue",
    "order:update_status",
    "invoice:upload",
    "supplier:verify",
    "catalog:manage",
    "analytics:view",
  ],
};

export function can(role: AppRole, action: Action) {
  return rolePermissions[role].includes(action);
}

export function assertCan(role: AppRole, action: Action) {
  if (!can(role, action)) {
    throw new Error(`Role ${role} cannot perform ${action}`);
  }
}

export function canSupplierAccessRfq({
  isInvited,
  isAdmin,
}: {
  isInvited: boolean;
  isAdmin: boolean;
}) {
  return isAdmin || isInvited;
}

export function canBuyerViewBid({
  allowLiveVisibility,
  bidDeadline,
}: {
  allowLiveVisibility: boolean;
  bidDeadline: Date;
}) {
  return allowLiveVisibility || new Date() >= bidDeadline;
}
