import { UploadCloud, ShoppingCart, Shuffle, ClipboardList } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { AlertList, DonutPanel, HealthPanel, MiniTrend, QuickActions } from "@/components/dashboard/procure-panels";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { inventoryMetrics, inventoryRows } from "@/lib/demo-data/textile";

export default function InventoryPage() {
  return (
    <AppShell role="buyer" title="Inventory & Demand Planning">
      <div className="space-y-5">
        <MetricGrid metrics={inventoryMetrics} />
        <div className="grid gap-5 xl:grid-cols-[0.75fr_1.45fr_0.8fr]">
          <HealthPanel
            title="Inventory Health"
            score={76}
            items={[
              { label: "Stock Availability", status: "Good" },
              { label: "Demand Forecast", status: "Good" },
              { label: "Stock Turnover", status: "Medium", tone: "amber" },
              { label: "Slow Moving Items", status: "Attention", tone: "red" },
            ]}
          />
          <Card>
            <CardHeader title="Inventory Overview (All Warehouses)" />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>{["Material", "On-Hand", "Reorder", "In-Transit", "Days Cover", "Risk", "Total Value"].map((h) => <th key={h} className="px-5 py-3">{h}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {inventoryRows.map((row) => (
                    <tr key={row[0]}>{row.map((cell, index) => <td key={cell} className="px-5 py-3">{index === 5 ? <Badge tone={cell === "Low" ? "green" : "amber"}>{cell}</Badge> : cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <AlertList items={[
            { title: "High Stockout Risk", body: "Reactive dyes may stock out in 4 days.", tone: "red", action: "Take action" },
            { title: "Reorder Point Breached", body: "Cotton Yarn 20s is below reorder point.", tone: "amber", action: "Reorder now" },
            { title: "Demand Spike Forecast", body: "Expected 28% increase in Grey Fabric 44 demand.", tone: "blue", action: "View forecast" },
          ]} />
        </div>
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.85fr_0.7fr]">
          <MiniTrend title="Demand Forecast (Next 8 Weeks)" value="Forecast accuracy: 87%" />
          <Card>
            <CardHeader title="Replenishment Suggestions (AI)" />
            <div className="space-y-3 p-5">
              {["Cotton Yarn 20s - Reorder 12,000 Kgs", "Reactive Dyes - Urgent reorder 1,500 Kgs", "Grey Fabric 44 - Create PO for 7,000 Mtrs"].map((item, index) => (
                <div key={item} className="flex items-center justify-between rounded-lg border border-slate-200 p-3 text-sm font-semibold">
                  {item}
                  <Badge tone={index === 1 ? "red" : "blue"}>{index === 2 ? "Create PO" : "Reorder"}</Badge>
                </div>
              ))}
            </div>
          </Card>
          <QuickActions actions={[
            { label: "Create Purchase Plan", href: "#", icon: ClipboardList },
            { label: "Reorder Now", href: "#", icon: ShoppingCart },
            { label: "Upload GRN", href: "#", icon: UploadCloud },
            { label: "Stock Transfer", href: "#", icon: Shuffle },
          ]} />
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          <Card className="p-5">
            <h2 className="font-bold">Bundle Purchase Opportunities</h2>
            <p className="mt-3 text-sm text-emerald-700">Save up to ₹96,800 by purchasing cotton yarn, reactive dyes, and cartons together.</p>
          </Card>
          <DonutPanel title="Warehouse Distribution" center="₹2.86 Cr" rows={[
            { label: "Coimbatore Main", value: "49.6%", color: "#1764ff" },
            { label: "Bengaluru Hub", value: "23.9%", color: "#10a78a" },
            { label: "Ludhiana Unit", value: "16.1%", color: "#7b54d8" },
          ]} />
          <Card className="p-5">
            <h2 className="font-bold">Dead Stock / Slow Moving Items</h2>
            <p className="mt-3 text-sm text-slate-600">Polyester 75D black, dyed yarn assorted, and old cartons total ₹7.48 Lakh in slow-moving value.</p>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
