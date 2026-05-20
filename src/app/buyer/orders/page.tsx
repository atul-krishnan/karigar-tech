import { Contact, Download, Printer, Truck } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { AlertList, MiniTrend, QuickActions, StatusStepper } from "@/components/dashboard/procure-panels";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { ShipmentMap } from "@/components/maps/shipment-map";
import { orderMetrics, orderRows, shipmentStops } from "@/lib/demo-data/textile";

export default function OrdersPage() {
  return (
    <AppShell role="buyer" title="Orders & Shipment Control">
      <div className="space-y-5">
        <MetricGrid metrics={orderMetrics} />
        <div className="grid gap-5 xl:grid-cols-[1fr_420px]">
          <Card>
            <CardHeader title="Order Control Center" />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>{["PO No.", "Supplier", "Material", "Quantity", "Order Value", "Current Stage", "Exception"].map((h) => <th key={h} className="px-5 py-3">{h}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {orderRows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, index) => (
                        <td key={cell} className={`px-5 py-3 ${index === 0 ? "font-bold text-blue-700" : ""}`}>
                          {index >= 5 ? <Badge tone={cell.includes("Risk") || cell.includes("Delayed") ? "amber" : "green"}>{cell}</Badge> : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <AlertList items={[
            { title: "Delayed Truck", body: "PO-2405-1031 ETA delayed by 2 days.", tone: "red", action: "Expedite" },
            { title: "Partial Dispatch", body: "12,000 of 18,000 Kgs dispatched.", tone: "amber", action: "Contact supplier" },
            { title: "Invoice Pending", body: "Invoice not received for PO-2405-1027.", tone: "blue", action: "Follow up" },
          ]} />
        </div>
        <div className="grid gap-5 xl:grid-cols-[1.1fr_0.75fr_0.8fr]">
          <Card>
            <CardHeader title="Shipment Tracking - PO-2405-1027" action={<Badge tone="green">In-Transit</Badge>} />
            <div className="p-5">
              <StatusStepper steps={[
                { label: "PO Confirmed", meta: "10 May 2026", done: true },
                { label: "Ready for Dispatch", meta: "15 May 2026", done: true },
                { label: "In Transit", meta: "Bengaluru Hub", active: true },
                { label: "Delivered", meta: "ETA 21 May 2026" },
              ]} />
              <div className="mt-4 rounded-xl border border-slate-200 bg-white p-3">
                <div className="mx-auto max-w-[360px]">
                  <ShipmentMap stops={shipmentStops} />
                </div>
              </div>
            </div>
          </Card>
          <MiniTrend
            title="Logistics Cost Trend"
            subtitle="Weekly freight + handling spend across all lanes"
            value="₹2,18,450"
            yUnit="₹"
            period="7 weeks"
            delta={{ value: "+8.3%", tone: "up" }}
            points={[192000, 198000, 201000, 205000, 211000, 215000, 218450]}
            xLabels={["W14", "W15", "W16", "W17", "W18", "W19", "W20"]}
          />
          <QuickActions actions={[
            { label: "Expedite Shipment", href: "#", icon: Truck },
            { label: "Contact Supplier", href: "#", icon: Contact },
            { label: "Download POD", href: "#", icon: Download },
            { label: "Print GRN", href: "#", icon: Printer },
          ]} />
        </div>
      </div>
    </AppShell>
  );
}
