import { NextResponse } from "next/server";
import { getSessionContext } from "@/lib/auth/context";
import { assertCan } from "@/lib/domain/permissions";
import { createRfq } from "@/lib/domain/procurement-service";
import { createRfqSchema } from "@/lib/validation/procurement";

export async function POST(request: Request) {
  const session = await getSessionContext();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    assertCan(session.role, session.role === "admin" ? "rfq:create_for_buyer" : "rfq:create");
    const payload = createRfqSchema.parse(await request.json());
    const rfq = await createRfq(payload, session.userId);
    return NextResponse.json({ rfq }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to create RFQ" },
      { status: 400 },
    );
  }
}
