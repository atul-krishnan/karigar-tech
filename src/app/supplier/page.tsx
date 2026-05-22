import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { Card, CardHeader } from "@/components/ui/card";
import { buyerAnalytics } from "@/lib/demo-data/textile";

export default function SupplierDashboard() {
  return (
    <AppShell role="supplier">
      <PageHeading
        eyebrow="Supplier workspace"
        title="Surat Tex Yarns"
        description="Respond to invited RFQs, revise bids before the deadline, accept POs, update order status, and upload invoices for fast payment."
      />
      <div className="space-y-6">
        <MetricGrid
          metrics={[
            { ...buyerAnalytics[0], label: "Platform revenue", value: "₹72.6L" },
            { ...buyerAnalytics[1], label: "RFQs received", value: "31" },
            { ...buyerAnalytics[2], label: "Win rate", value: "38%" },
            { ...buyerAnalytics[3], label: "Open orders", value: "7" },
          ]}
        />
        <Card>
          <CardHeader title="Bid history" description="Suppliers see only their own bids and order history." />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-5 py-3">RFQ</th>
                  <th className="px-5 py-3">Bid</th>
                  <th className="px-5 py-3">Rank</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">Deadline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["Cotton combed yarn 40s", "₹238/kg", "#1", "Submitted", "Today, 6:00 PM"],
                  ["Greige cotton fabric", "₹71/meter", "#2", "Lost", "Closed"],
                  ["Polyester filament yarn", "₹116/kg", "#1", "Won", "Closed"],
                ].map(([rfq, bid, rank, status, deadline]) => (
                  <tr key={rfq}>
                    <td className="px-5 py-4 font-semibold text-slate-950">{rfq}</td>
                    <td className="px-5 py-4">{bid}</td>
                    <td className="px-5 py-4">{rank}</td>
                    <td className="px-5 py-4">{status}</td>
                    <td className="px-5 py-4">{deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
