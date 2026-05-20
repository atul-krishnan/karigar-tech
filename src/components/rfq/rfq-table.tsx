import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";

export function RfqTable({
  title = "Active RFQs",
  rfqs,
}: {
  title?: string;
  rfqs: Array<{
    id: string;
    title: string;
    buyer: string;
    category: string;
    quantity: string;
    delivery: string;
    deadline: string;
    status: string;
    bids: number;
    invited: number;
    bestLandedCost: string;
  }>;
}) {
  return (
    <Card>
      <CardHeader title={title} description="Live bid visibility is enabled for buyers in this MVP." />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3">RFQ</th>
              <th className="px-5 py-3">Buyer</th>
              <th className="px-5 py-3">Qty</th>
              <th className="px-5 py-3">Delivery</th>
              <th className="px-5 py-3">Deadline</th>
              <th className="px-5 py-3">Bids</th>
              <th className="px-5 py-3">Best landed</th>
              <th className="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rfqs.map((rfq) => (
              <tr key={rfq.id} className="bg-white">
                <td className="px-5 py-4">
                  <Link href={`/buyer/rfqs/${rfq.id}/compare`} className="font-semibold text-slate-950 hover:underline">
                    {rfq.title}
                  </Link>
                  <div className="mt-1 text-xs text-slate-500">{rfq.category}</div>
                </td>
                <td className="px-5 py-4 text-slate-700">{rfq.buyer}</td>
                <td className="px-5 py-4 text-slate-700">{rfq.quantity}</td>
                <td className="px-5 py-4 text-slate-700">{rfq.delivery}</td>
                <td className="px-5 py-4 text-slate-700">{rfq.deadline}</td>
                <td className="px-5 py-4 text-slate-700">
                  {rfq.bids}/{rfq.invited}
                </td>
                <td className="px-5 py-4 font-semibold text-slate-950">{rfq.bestLandedCost}</td>
                <td className="px-5 py-4">
                  <Badge tone={rfq.status === "Draft" ? "neutral" : "green"}>{rfq.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
