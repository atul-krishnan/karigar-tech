import { NextResponse } from "next/server";
import { getSessionContext } from "@/lib/auth/context";
import { assertCan } from "@/lib/domain/permissions";
import { submitBid } from "@/lib/domain/procurement-service";
import { submitBidSchema } from "@/lib/validation/procurement";

export async function POST(request: Request) {
  const session = await getSessionContext();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    assertCan(session.role, "bid:submit");
    const payload = submitBidSchema.parse(await request.json());
    const bid = await submitBid(payload, session.userId);
    return NextResponse.json({ bid }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to submit bid" },
      { status: 400 },
    );
  }
}
