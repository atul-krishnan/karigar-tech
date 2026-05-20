import { Check, X } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { adminQueue } from "@/lib/demo-data/textile";

export default function AdminSuppliersPage() {
  return (
    <AppShell role="admin">
      <PageHeading
        eyebrow="Supplier verification"
        title="Approve, reject, or suspend suppliers"
        description="Verification decisions are audited and control which suppliers can be invited to RFQs."
      />
      <Card>
        <CardHeader title="Review queue" />
        <div className="divide-y divide-slate-200">
          {adminQueue.map((item) => (
            <div key={item.supplier} className="grid gap-4 p-5 lg:grid-cols-[1fr_220px] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-semibold text-slate-950">{item.supplier}</h2>
                  <Badge tone={item.status === "Document mismatch" ? "amber" : "blue"}>{item.status}</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-500">{item.categories}</p>
                <p className="mt-1 text-sm text-slate-500">{item.docs}</p>
              </div>
              <div className="flex gap-2">
                <button className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md bg-emerald-600 px-3 text-sm font-semibold text-white">
                  <Check className="h-4 w-4" /> Approve
                </button>
                <button className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 text-sm font-semibold text-slate-900">
                  <X className="h-4 w-4" /> Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
