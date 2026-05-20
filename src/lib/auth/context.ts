import { createSupabaseServerClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/db/prisma";

export type AppRole = "buyer" | "supplier" | "admin";

export type SessionContext = {
  userId: string;
  authUserId: string;
  email: string;
  organizationId: string;
  role: AppRole;
};

export async function getSessionContext(): Promise<SessionContext | null> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return null;
  }

  const appUser = await prisma.user.upsert({
    where: { authUserId: user.id },
    update: {
      email: user.email,
      fullName: user.user_metadata?.full_name ?? user.email,
    },
    create: {
      authUserId: user.id,
      email: user.email,
      fullName: user.user_metadata?.full_name ?? user.email,
    },
  });

  return {
    userId: appUser.id,
    authUserId: user.id,
    email: user.email,
    organizationId: user.user_metadata?.organization_id ?? "",
    role: user.user_metadata?.role ?? "buyer",
  };
}
