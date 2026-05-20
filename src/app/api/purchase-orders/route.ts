import { NextResponse } from "next/server";
import { getSessionContext } from "@/lib/auth/context";
import { assertCan } from "@/lib/domain/permissions";
import { issuePurchaseOrder } from "@/lib/domain/procurement-service";
import { issuePurchaseOrderSchema } from "@/lib/validation/procurement";

export async function POST(request: Request) {
  const session = await getSessionContext();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    assertCan(session.role, "po:issue");
    const payload = issuePurchaseOrderSchema.parse(await request.json());
    const purchaseOrder = await issuePurchaseOrder(payload, session.userId);
    return NextResponse.json({ purchaseOrder }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to issue purchase order" },
      { status: 400 },
    );
  }
}
