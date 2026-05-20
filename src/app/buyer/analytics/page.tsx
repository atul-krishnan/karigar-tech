import { AppShell } from "@/components/layout/app-shell";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { AlertList, DonutPanel, InsightList, MiniTrend } from "@/components/dashboard/procure-panels";
import { Card, CardHeader } from "@/components/ui/card";
import { IndiaMap } from "@/components/maps/india-map";
import { buyerAnalytics, marketIntelPins } from "@/lib/demo-data/textile";

export default function BuyerAnalyticsPage() {
  return (
    <AppShell role="buyer" title="Analytics & Market Intelligence">
      <div className="space-y-5">
        <Card className="p-5">
          <div className="grid gap-4 md:grid-cols-5">
            {["Date Range", "Category", "Cluster / Location", "Supplier", "Material Type"].map((label, index) => (
              <label key={label} className="grid gap-2 text-sm font-bold text-slate-700">
                {label}
                <select className="rounded-lg border border-slate-200 px-3 py-3 text-sm">
                  <option>{["1 Apr - 20 May 2026", "All Categories", "All Clusters", "All Suppliers", "All Materials"][index]}</option>
                </select>
              </label>
            ))}
          </div>
        </Card>
        <MetricGrid
          metrics={[
            { ...buyerAnalytics[1], label: "Total Savings YTD", value: "₹4.32 Cr" },
            { ...buyerAnalytics[3], label: "Supplier OTIF", value: "96%" },
            { ...buyerAnalytics[0], label: "Purchase Price Variance", value: "-5.8%" },
            { ...buyerAnalytics[4], label: "Working Capital Impact", value: "₹12.47 Cr" },
            { ...buyerAnalytics[2], label: "Price Index", value: "102.6" },
          ]}
        />
        <div className="grid gap-5 xl:grid-cols-[0.8fr_1.3fr_0.9fr]">
          <DonutPanel title="Spend Analysis" center="₹12.4 Cr" rows={[
            { label: "Cotton Yarn 30s", value: "38%", color: "#1764ff" },
            { label: "Polyester Yarn 20s", value: "24%", color: "#10a78a" },
            { label: "Dyes & Chemicals", value: "16%", color: "#ff9f2e" },
            { label: "Grey Fabric", value: "12%", color: "#7b54d8" },
            { label: "Packaging", value: "6%", color: "#94a3b8" },
          ]} />
          <MiniTrend title="Price Trends (₹ / Kg)" value="Cotton Yarn 30s ₹234.50" />
          <InsightList title="AI Insights" items={[
            { label: "Overall Intelligence", body: "Cotton yarn prices are trending down in key hubs, creating a good buying window for the next 2-3 weeks.", cta: "View full analysis" },
          ]} />
        </div>
        <div className="grid gap-5 xl:grid-cols-[1fr_1fr_0.75fr]">
          <Card>
            <CardHeader title="Savings Waterfall (YTD)" />
            <div className="flex h-72 items-end gap-4 p-5">
              {["₹18.0 Cr", "+₹2.45 Cr", "+₹1.32 Cr", "+₹0.85 Cr", "-₹0.30 Cr", "₹4.32 Cr"].map((bar, index) => (
                <div key={bar} className="flex flex-1 flex-col items-center gap-2">
                  <div className={`w-full rounded-t-lg ${index === 5 ? "bg-blue-600" : index === 4 ? "bg-red-500" : "bg-emerald-500"}`} style={{ height: `${80 + index * 18}px` }} />
                  <span className="text-xs font-bold text-slate-600">{bar}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader title="Supplier Performance Matrix" />
            <div className="relative m-5 h-72 rounded-xl border border-slate-200 bg-[linear-gradient(90deg,#fef2f2,#f7fee7)]">
              {["ST", "VG", "KM", "NS", "SF"].map((label, index) => (
                <div key={label} className="absolute grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white" style={{ left: `${18 + index * 16}%`, top: `${56 - index * 7}%` }}>
                  {label}
                </div>
              ))}
            </div>
          </Card>
          <AlertList items={[
            { title: "Lock Cotton Yarn 30s", body: "Lock 25,000 Kgs now from Surat suppliers to maximize savings.", tone: "green", action: "Take action" },
            { title: "Diversify Dye Suppliers", body: "Add 1-2 alternate suppliers to mitigate volatility risk.", tone: "amber", action: "Explore suppliers" },
          ]} />
        </div>
        <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
          <Card>
            <CardHeader title="Market Intelligence — India" description="Cotton Yarn 30s price across hubs" />
            <div className="p-5">
              <IndiaMap pins={marketIntelPins} variant="intel" showLegend showRoutes />
            </div>
          </Card>
          <MiniTrend title="Forecast & Scenario Analysis" value="Base case ₹228/kg" color="#10a78a" />
        </div>
      </div>
    </AppShell>
  );
}
