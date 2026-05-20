import { AppShell } from "@/components/layout/app-shell";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import {
  AlertList,
  DonutPanel,
  HealthPanel,
  InsightList,
  MiniTrend,
  QuickActions,
} from "@/components/dashboard/procure-panels";
import { RfqTable } from "@/components/rfq/rfq-table";
import { Card, CardHeader } from "@/components/ui/card";
import {
  activeRfqs,
  aiRecommendations,
  alertItems,
  metrics,
  quickActions,
  supplierNetwork,
} from "@/lib/demo-data/textile";

export default function BuyerDashboard() {
  return (
    <AppShell role="buyer" title="Procurement Dashboard">
      <div className="space-y-5">
        <MetricGrid metrics={metrics} />
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.95fr_0.9fr]">
          <HealthPanel
            title="Procurement Health"
            score={78}
            items={[
              { label: "Spend Control", status: "Good" },
              { label: "Supplier Performance", status: "Good" },
              { label: "Risk & Compliance", status: "Medium", tone: "amber" },
              { label: "Savings Realization", status: "Good" },
            ]}
          />
          <QuickActions actions={quickActions} />
          <InsightList items={aiRecommendations} />
        </div>
        <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
          <RfqTable rfqs={activeRfqs} />
          <AlertList items={alertItems.slice(0, 2)} />
        </div>
        <div className="grid gap-5 xl:grid-cols-[1fr_0.85fr_1.05fr]">
          <Card>
            <CardHeader title="Supplier Performance (Top 5)" />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Supplier</th>
                    <th className="px-5 py-3">OTIF</th>
                    <th className="px-5 py-3">Quality</th>
                    <th className="px-5 py-3">Price</th>
                    <th className="px-5 py-3">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {supplierNetwork.map((row, index) => (
                    <tr key={row[0]}>
                      <td className="px-5 py-3 font-bold text-slate-950">{row[0]}</td>
                      <td className="px-5 py-3">{row[4]}</td>
                      <td className="px-5 py-3">{row[3]}/5</td>
                      <td className="px-5 py-3 text-emerald-700">{row[5]}</td>
                      <td className="px-5 py-3">
                        <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-700">
                          {92 - index * 3}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <MiniTrend title="Raw Material Price Trend" value="₹234.50/kg ↑ 4.0%" color="#0f9f8f" />
          <DonutPanel
            title="Spend by Category"
            center="₹1.24 Cr"
            rows={[
              { label: "Raw Materials", value: "62%", color: "#1764ff" },
              { label: "Packaging", value: "18%", color: "#10a78a" },
              { label: "Dyes & Chemicals", value: "10%", color: "#7b54d8" },
              { label: "Machinery & Others", value: "6%", color: "#ff9f2e" },
              { label: "Logistics", value: "4%", color: "#94a3b8" },
            ]}
          />
        </div>
      </div>
    </AppShell>
  );
}
