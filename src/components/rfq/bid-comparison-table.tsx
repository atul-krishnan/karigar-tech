import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { formatCurrency, percent } from "@/lib/utils";

export function BidComparisonTable({
  bids,
}: {
  bids: Array<{
    supplier: string;
    verified: boolean;
    landedCost: number;
    pricePerUnit: number;
    freight: number;
    deliveryDays: number;
    paymentTerms: string;
    rating: number;
    qualityScore: number;
    onTimeDelivery: number;
    distanceKm: number;
    recommendationScore: number;
  }>;
}) {
  return (
    <Card>
      <CardHeader
        title="Bid comparison"
        description="Recommendation score blends landed cost, delivery, quality, reliability, and distance."
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Supplier</th>
              <th className="px-4 py-3">Landed cost</th>
              <th className="px-4 py-3">Unit price</th>
              <th className="px-4 py-3">Freight</th>
              <th className="px-4 py-3">Delivery</th>
              <th className="px-4 py-3">Terms</th>
              <th className="px-4 py-3">Quality</th>
              <th className="px-4 py-3">On-time</th>
              <th className="px-4 py-3">Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {bids
              .slice()
              .sort((a, b) => b.recommendationScore - a.recommendationScore)
              .map((bid, index) => (
                <tr key={bid.supplier} className={index === 0 ? "bg-emerald-50/50" : "bg-white"}>
                  <td className="px-4 py-4">
                    <div className="font-semibold text-slate-950">{bid.supplier}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <Badge tone={bid.verified ? "green" : "amber"}>
                        {bid.verified ? "Verified" : "Pending"}
                      </Badge>
                      <span className="text-xs text-slate-500">{bid.distanceKm} km</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-semibold text-slate-950">{formatCurrency(bid.landedCost)}</td>
                  <td className="px-4 py-4 text-slate-700">₹{bid.pricePerUnit}/kg</td>
                  <td className="px-4 py-4 text-slate-700">{formatCurrency(bid.freight)}</td>
                  <td className="px-4 py-4 text-slate-700">{bid.deliveryDays} days</td>
                  <td className="max-w-40 px-4 py-4 text-slate-700">{bid.paymentTerms}</td>
                  <td className="px-4 py-4 text-slate-700">{bid.qualityScore}/100</td>
                  <td className="px-4 py-4 text-slate-700">{percent(bid.onTimeDelivery)}</td>
                  <td className="px-4 py-4">
                    <Badge tone={index === 0 ? "green" : "blue"}>{bid.recommendationScore}</Badge>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
