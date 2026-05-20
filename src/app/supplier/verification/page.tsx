import { UploadCloud } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";

export default function SupplierVerificationPage() {
  return (
    <AppShell role="supplier">
      <PageHeading
        eyebrow="Supplier onboarding"
        title="Verification documents"
        description="Supplier verification is organization-level. Admin approval controls which suppliers can be invited by buyers."
      />
      <Card>
        <CardHeader title="Document checklist" description="Supported document uploads: GST, PAN, bank details, certifications, and quality documents." />
        <div className="grid gap-4 p-5 md:grid-cols-2">
          {[
            ["GST certificate", "Uploaded", "green"],
            ["PAN", "Uploaded", "green"],
            ["Bank proof", "Pending", "amber"],
            ["Quality certificate", "Review required", "blue"],
          ].map(([doc, status, tone]) => (
            <div key={doc} className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-4">
              <div>
                <div className="font-semibold text-slate-950">{doc}</div>
                <div className="mt-1 text-sm text-slate-500">PDF, image, Excel, or XML where applicable</div>
              </div>
              <Badge tone={tone as "green" | "amber" | "blue"}>{status}</Badge>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-200 p-5">
          <button className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white">
            <UploadCloud className="h-4 w-4" /> Upload document
          </button>
        </div>
      </Card>
    </AppShell>
  );
}
