import { Download, Upload } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { purchaseOrderTimeline } from "@/lib/demo-data/textile";

export default async function PurchaseOrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <AppShell role="buyer">
      <PageHeading
        eyebrow={id}
        title="Purchase order PO-TX-9021"
        description="PO PDFs are part of the v1 scope. The storage layer is designed for signed URLs and secure document access."
        action={
          <ButtonLink href="#" variant="secondary">
            <Download className="h-4 w-4" /> Download PDF
          </ButtonLink>
        }
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <Card>
          <CardHeader title="Order summary" description="Generated from RFQ RFQ-TX-1042 and winning bid from Surat Tex Yarns." />
          <div className="grid gap-4 p-5 md:grid-cols-2">
            {[
              ["Supplier", "Surat Tex Yarns"],
              ["Buyer", "Kaveri Garments"],
              ["Item", "Cotton combed yarn 40s"],
              ["Quantity", "8,000 kg"],
              ["Total landed cost", "₹19,04,000"],
              ["Payment terms", "30 days credit"],
              ["Status", "Issued"],
              ["Invoice status", "Pending"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 p-4">
                <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
                <div className="mt-2 font-semibold text-slate-950">{value}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <CardHeader title="Status timeline" />
          <div className="space-y-4 p-5">
            {purchaseOrderTimeline.map((event, index) => (
              <div key={event.status} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-slate-950" />
                  {index < purchaseOrderTimeline.length - 1 ? <div className="h-full w-px bg-slate-200" /> : null}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-950">{event.status}</span>
                    <Badge tone={event.date === "Pending" ? "neutral" : "green"}>{event.date}</Badge>
                  </div>
                  <p className="mt-1 text-sm text-slate-500">{event.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader title="Invoice and payment tracking" description="Supports PDF, image, Excel, and XML invoice attachments up to Supabase free-tier limits." />
        <div className="flex flex-wrap items-center justify-between gap-3 p-5">
          <div>
            <div className="font-semibold text-slate-950">No invoice uploaded yet</div>
            <p className="mt-1 text-sm text-slate-500">Supplier can upload invoice after dispatch or delivery.</p>
          </div>
          <button className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-slate-200 px-4 text-sm font-semibold text-slate-900">
            <Upload className="h-4 w-4" /> Upload invoice
          </button>
        </div>
      </Card>
    </AppShell>
  );
}
