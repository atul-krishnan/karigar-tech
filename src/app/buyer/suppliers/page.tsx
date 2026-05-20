import { Download, Filter, MapPin, Star } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { InsightList } from "@/components/dashboard/procure-panels";
import { IndiaMap } from "@/components/maps/india-map";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { mapPins, supplierNetwork } from "@/lib/demo-data/textile";

export default function SupplierNetworkPage() {
  return (
    <AppShell role="buyer" title="Supplier Network">
      <div className="space-y-5">
        <Card className="p-5">
          <div className="grid gap-4 md:grid-cols-5">
            {["Material Type", "Location", "Certification", "MOQ", "Payment Terms"].map((label, index) => (
              <label key={label} className="grid gap-2 text-sm font-bold text-slate-700">
                {label}
                <select className="rounded-lg border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700">
                  <option>{["Cotton Yarn 30s", "All India", "OEKO-TEX, GOTS", "Min 500 Kgs", "30 Days"][index]}</option>
                </select>
              </label>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
            <span className="font-semibold text-slate-500">Popular Searches:</span>
            {["Cotton Yarn 20s", "Cotton Fabric", "Polyester Yarn", "Dyes & Chemicals", "Packaging"].map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
            <button className="ml-auto inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 font-bold text-slate-700">
              <Filter className="h-4 w-4" /> More Filters
            </button>
          </div>
        </Card>

        <div className="grid gap-5 xl:grid-cols-[1fr_540px]">
          <Card>
            <CardHeader
              title="126 Suppliers found"
              description="Showing top matches"
              action={<ButtonLink href="#" variant="secondary"><Download className="h-4 w-4" /> Export</ButtonLink>}
            />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>
                    <th className="px-5 py-3">Supplier</th>
                    <th className="px-5 py-3">Location</th>
                    <th className="px-5 py-3">Categories</th>
                    <th className="px-5 py-3">Rating</th>
                    <th className="px-5 py-3">OTIF</th>
                    <th className="px-5 py-3">Price</th>
                    <th className="px-5 py-3">Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {supplierNetwork.map((row, index) => (
                    <tr key={row[0]} className={index === 0 ? "bg-blue-50/40" : undefined}>
                      <td className="px-5 py-4 font-bold text-blue-700">{row[0]}<div className="mt-1"><Badge tone="green">Verified</Badge></div></td>
                      <td className="px-5 py-4">{row[1]}</td>
                      <td className="px-5 py-4">{row[2]}</td>
                      <td className="px-5 py-4"><Star className="mr-1 inline h-4 w-4 fill-amber-400 text-amber-400" />{row[3]}</td>
                      <td className="px-5 py-4 text-emerald-700">{row[4]}</td>
                      <td className="px-5 py-4 text-emerald-700">{row[5]}</td>
                      <td className="px-5 py-4"><Badge tone={row[6] === "Low" ? "green" : "amber"}>{row[6]}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card>
            <CardHeader title="Featured Supplier" action={<ButtonLink href="#" variant="secondary">Invite to RFQ</ButtonLink>} />
            <div className="p-5">
              <div className="flex gap-4">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-blue-900 text-2xl font-bold text-white">S</div>
                <div>
                  <h2 className="text-xl font-bold">Shakti Textiles Pvt. Ltd.</h2>
                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-4 w-4" /> Surat, Gujarat, India</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge tone="green">GST Verified</Badge>
                    <Badge tone="blue">ISO 9001:2015</Badge>
                    <Badge tone="blue">OEKO-TEX</Badge>
                    <Badge tone="green">Low Risk</Badge>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-4 gap-3 rounded-xl border border-slate-200 p-4 text-center">
                {[
                  ["Capacity", "180 MT"],
                  ["Response", "96%"],
                  ["Quality", "4.8/5"],
                  ["OTIF", "96%"],
                ].map(([label, value]) => (
                  <div key={label}><div className="text-xs text-slate-500">{label}</div><div className="mt-1 font-bold">{value}</div></div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_1fr_1.1fr]">
          <Card>
            <CardHeader title="Supplier Concentration" description="Active suppliers by textile cluster" />
            <div className="p-5">
              <div className="mx-auto max-w-[340px]">
                <IndiaMap pins={mapPins} variant="concentration" />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-orange-500" /> Active hub</span>
                <span className="text-slate-400">126 suppliers across 5 clusters</span>
              </div>
            </div>
          </Card>
          <InsightList
            title="AI Supplier Suggestions"
            items={[
              { label: "Alternates for you", body: "Sudarshan Fibres and Pragati Yarns match the RFQ with lower price variance.", cta: "Add to shortlist" },
              { label: "Recommended shortlist", body: "Use Shakti, KPR Mills, and Sudarshan for competitive closed bidding.", cta: "Manage shortlist" },
            ]}
          />
          <Card>
            <CardHeader title="Recent Transaction History" />
            <div className="space-y-3 p-5 text-sm">
              {["Ramesh Exports - Cotton Yarn 30s - ₹18.20L - 96%", "Global Fashions - Grey Fabric 44 - ₹14.60L - 94%", "Trendy Garments - Cotton Yarn 20s - ₹21.30L - 95%"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 p-3 font-semibold text-slate-700">{item}</div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
