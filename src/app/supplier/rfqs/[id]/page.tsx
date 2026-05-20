import { Send } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { FormField, inputClass } from "@/components/ui/form-field";

export default async function SupplierRfqPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <AppShell role="supplier">
      <PageHeading
        eyebrow={id}
        title="Invited RFQ: Cotton combed yarn 40s"
        description="Supplier can submit or revise their own bid before deadline. Competing supplier bids are never visible."
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <Card>
          <CardHeader title="RFQ details" />
          <div className="grid gap-4 p-5 md:grid-cols-2">
            {[
              ["Buyer", "Kaveri Garments"],
              ["Quantity", "8,000 kg"],
              ["Delivery", "Erode, Tamil Nadu"],
              ["Deadline", "Today, 6:00 PM"],
              ["Payment preference", "30 days credit"],
              ["Quality", "Contamination-controlled export knitting yarn"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 p-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
                <div className="mt-2 font-semibold text-slate-950">{value}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader title="Submit bid" description="This maps to POST /api/bids." />
          <form className="grid gap-4 p-5">
            <FormField label="Price per kg">
              <input className={inputClass} defaultValue="238" />
            </FormField>
            <FormField label="Freight charges">
              <input className={inputClass} defaultValue="36000" />
            </FormField>
            <FormField label="Delivery timeline">
              <input className={inputClass} defaultValue="8 days" />
            </FormField>
            <FormField label="Payment terms">
              <input className={inputClass} defaultValue="30 days credit" />
            </FormField>
            <FormField label="Validity">
              <input className={inputClass} type="date" defaultValue="2026-05-25" />
            </FormField>
            <div className="flex items-center justify-between rounded-lg bg-slate-100 p-4">
              <span className="text-sm font-semibold">Estimated landed cost</span>
              <Badge tone="green">₹19,04,000</Badge>
            </div>
            <button className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white">
              <Send className="h-4 w-4" /> Submit bid
            </button>
          </form>
        </Card>
      </div>
    </AppShell>
  );
}
