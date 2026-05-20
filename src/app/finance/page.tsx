import { FileText, Landmark, Lock, Truck } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import {
  AlertList,
  DonutPanel,
  FinanceOfferCard,
  MiniTrend,
  QuickActions,
  StatusStepper,
} from "@/components/dashboard/procure-panels";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { financeMetrics } from "@/lib/demo-data/textile";

export default function FinanceComingSoonPage() {
  return (
    <AppShell role="buyer" title="Finance & Order Tracking">
      <div className="space-y-5">
        <MetricGrid metrics={financeMetrics} />
        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.75fr_0.9fr]">
          <Card>
            <CardHeader title="Order Tracking Overview" />
            <div className="p-5">
              <StatusStepper
                steps={[
                  { label: "PO Raised", meta: "12 May 2026", done: true },
                  { label: "Dispatched", meta: "17 May 2026", done: true },
                  { label: "In-Transit", meta: "ETA 21 May 2026", active: true },
                  { label: "Delivered", meta: "Pending" },
                ]}
              />
              <div className="mt-5 grid gap-3 rounded-xl border border-slate-200 p-4 text-sm md:grid-cols-4">
                {["Dispatched from Coimbatore", "In transit via VRL Logistics", "Current location Bengaluru Hub", "Estimated delivery 21 May 2026"].map((item) => (
                  <div key={item} className="font-semibold text-slate-700">{item}</div>
                ))}
              </div>
            </div>
          </Card>
          <Card>
            <CardHeader title="Supply Chain Finance Solutions" />
            <div className="grid gap-3 p-5 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              {["Early Payment", "Invoice Financing", "Buyer Credit", "Pay-Later", "Discounting"].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 p-4">
                  <div className="font-bold text-slate-950">{item}</div>
                  <p className="mt-1 text-xs leading-5 text-slate-500">Coming soon for eligible transactions.</p>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader title="Financing Eligibility" action={<Badge tone="amber"><Lock className="mr-1 h-3 w-3" /> Coming soon</Badge>} />
            <div className="space-y-3 p-5">
              <FinanceOfferCard title="Early Payment Offer" amount="Get up to ₹5.20 Cr early" rate="10.75%" />
              <FinanceOfferCard title="Invoice Financing Offer" amount="Get up to ₹6.00 Cr" rate="12.25%" />
            </div>
          </Card>
        </div>
        <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr_0.85fr]">
          <Card>
            <CardHeader title="Live Order Tracking" />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>{["PO No.", "Supplier", "Material", "Invoice Amount", "Due Date", "Stage"].map((h) => <th key={h} className="px-5 py-3">{h}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["PO-2405-1027", "Cotton Yarn Mills", "Cotton Yarn 30s", "₹2,34,500", "24 May 2026", "In-Transit"],
                    ["PO-2405-1028", "DyeWell Industries", "Reactive Dyes", "₹1,18,800", "26 May 2026", "Dispatched"],
                    ["PO-2405-1029", "Shakti Fabrics", "Grey Fabric 44", "₹3,78,200", "30 May 2026", "PO Raised"],
                  ].map((cells) => (
                    <tr key={cells[0]}>
                      {cells.map((cell, index) => (
                        <td key={`${cells[0]}-${cell}`} className="px-5 py-3">
                          {index === 5 ? <Badge tone="blue">{cell}</Badge> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <AlertList items={[
            { title: "Delayed Shipment", body: "PO-2405-1029 ETA delayed by 3 days.", tone: "red", action: "View details" },
            { title: "Invoice Mismatch", body: "Invoice INV-2405-210 has mismatch amount diff ₹12,450.", tone: "amber", action: "Resolve now" },
            { title: "Payment Due Tomorrow", body: "Two invoices worth ₹3,85,300 due on 21 May.", tone: "blue", action: "View invoices" },
          ]} />
          <DonutPanel title="Financing Utilization" center="₹7.42 Cr" rows={[
            { label: "Invoice Financing", value: "45%", color: "#1764ff" },
            { label: "Early Payment", value: "25%", color: "#10a78a" },
            { label: "Buyer Credit", value: "15%", color: "#7b54d8" },
            { label: "Pay-Later", value: "10%", color: "#ff9f2e" },
          ]} />
        </div>
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.8fr]">
          <MiniTrend title="Cash Flow Impact (Next 30 Days)" value="Net impact: -₹0.85 Cr" color="#1764ff" />
          <QuickActions actions={[
            { label: "Request Finance", href: "#", icon: Landmark },
            { label: "Upload Invoice", href: "#", icon: FileText },
            { label: "Track Shipment", href: "/buyer/orders", icon: Truck },
            { label: "View Credit Limit", href: "#", icon: Landmark },
          ]} />
        </div>
      </div>
    </AppShell>
  );
}
