import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { RfqTable } from "@/components/rfq/rfq-table";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { activeRfqs, adminQueue, metrics } from "@/lib/demo-data/textile";

export default function AdminDashboard() {
  return (
    <AppShell role="admin">
      <PageHeading
        eyebrow="Admin operations"
        title="Supplier, RFQ, and transaction monitoring"
        description="Admins curate suppliers, verify documents, create RFQs for buyers, intervene in disputes, and monitor platform risk."
        action={<ButtonLink href="/admin/rfqs/new">Create RFQ for buyer</ButtonLink>}
      />
      <div className="space-y-6">
        <MetricGrid metrics={metrics} />
        <Card>
          <CardHeader title="Supplier verification queue" action={<ButtonLink href="/admin/suppliers" variant="secondary">Review all</ButtonLink>} />
          <div className="grid gap-4 p-5 lg:grid-cols-3">
            {adminQueue.map((item) => (
              <div key={item.supplier} className="rounded-lg border border-slate-200 p-4">
                <div className="font-semibold text-slate-950">{item.supplier}</div>
                <div className="mt-2 text-sm text-slate-500">{item.categories}</div>
                <div className="mt-4 text-xs text-slate-500">{item.docs}</div>
              </div>
            ))}
          </div>
        </Card>
        <RfqTable title="Platform RFQs" rfqs={activeRfqs} />
      </div>
    </AppShell>
  );
}
