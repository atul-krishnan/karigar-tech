import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";

export default function SupplierOrdersPage() {
  return (
    <AppShell role="supplier">
      <PageHeading
        eyebrow="Supplier orders"
        title="Purchase order execution"
        description="MVP order tracking is manual status updates with delivery proof upload later."
      />
      <Card>
        <CardHeader title="Open orders" />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3">PO</th>
                <th className="px-5 py-3">Buyer</th>
                <th className="px-5 py-3">Item</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                ["PO-TX-9021", "Kaveri Garments", "Cotton combed yarn 40s", "₹19,04,000", "Issued"],
                ["PO-TX-9008", "Threadline Exports", "Polyester filament yarn", "₹8,72,000", "Processing"],
              ].map(([po, buyer, item, amount, status]) => (
                <tr key={po}>
                  <td className="px-5 py-4 font-semibold text-slate-950">{po}</td>
                  <td className="px-5 py-4">{buyer}</td>
                  <td className="px-5 py-4">{item}</td>
                  <td className="px-5 py-4">{amount}</td>
                  <td className="px-5 py-4"><Badge tone="blue">{status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AppShell>
  );
}
