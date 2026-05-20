import { NextResponse } from "next/server";
import { getSessionContext } from "@/lib/auth/context";
import { assertCan } from "@/lib/domain/permissions";
import { uploadInvoice } from "@/lib/domain/procurement-service";
import { uploadInvoiceSchema } from "@/lib/validation/procurement";

export async function POST(request: Request) {
  const session = await getSessionContext();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    assertCan(session.role, "invoice:upload");
    const payload = uploadInvoiceSchema.parse(await request.json());
    const invoice = await uploadInvoice(payload);
    return NextResponse.json({ invoice }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to upload invoice" },
      { status: 400 },
    );
  }
}
