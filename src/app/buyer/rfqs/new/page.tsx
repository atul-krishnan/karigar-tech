import { Send } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { InsightList } from "@/components/dashboard/procure-panels";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { FormField, inputClass } from "@/components/ui/form-field";
import { textileCategories, textileSuppliers } from "@/lib/demo-data/textile";

const steps = ["Material Details", "Delivery Details", "Payment Terms", "Quality & Compliance", "Supplier Targeting", "Review & Send"];

export default function NewRfqPage() {
  return (
    <AppShell role="buyer" title="Create RFQ">
      <div className="space-y-5">
        <div className="flex gap-3 overflow-x-auto border-b border-slate-200 pb-4">
          {steps.map((step, index) => (
            <div key={step} className="flex shrink-0 items-center gap-3 text-sm font-bold text-slate-600">
              <span className={`grid h-8 w-8 place-items-center rounded-full border ${index === 0 ? "border-blue-600 bg-white text-blue-700" : "border-slate-200 bg-slate-100 text-slate-500"}`}>
                {index + 1}
              </span>
              {step}
              {index < steps.length - 1 ? <span className="text-slate-300">—</span> : null}
            </div>
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
          <div className="space-y-4">
            <Card>
              <CardHeader title="1 Material Details" />
              <div className="grid gap-4 p-5 lg:grid-cols-4">
                <FormField label="Category *">
                  <select className={inputClass} defaultValue="Yarn">
                    {textileCategories.map((category) => (
                      <option key={category.slug}>{category.name}</option>
                    ))}
                  </select>
                </FormField>
                <FormField label="Material Name *">
                  <input className={inputClass} defaultValue="Cotton Yarn 30s" />
                </FormField>
                <FormField label="Grade / Specification *">
                  <input className={inputClass} defaultValue="Carded, Combed, 30s Ne" />
                </FormField>
                <FormField label="Unit *">
                  <select className={inputClass} defaultValue="Kgs">
                    <option>Kgs</option>
                    <option>Mtrs</option>
                    <option>Pcs</option>
                  </select>
                </FormField>
                <FormField label="Quantity *">
                  <input className={inputClass} defaultValue="25,000" />
                </FormField>
                <FormField label="Target Price">
                  <input className={inputClass} defaultValue="234.50" />
                </FormField>
                <FormField label="Incoterms *">
                  <select className={inputClass}><option>EXW</option><option>FOR</option><option>CIF</option></select>
                </FormField>
                <FormField label="Currency *">
                  <select className={inputClass}><option>INR</option></select>
                </FormField>
                <div className="lg:col-span-4">
                  <FormField label="Additional Specifications">
                    <textarea className={`${inputClass} min-h-24 py-3`} defaultValue="100% Cotton, low hairiness, even twist, moisture <= 8%" />
                  </FormField>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader title="2 Delivery Details" />
              <div className="grid gap-4 p-5 lg:grid-cols-4">
                <FormField label="Delivery Location *">
                  <input className={inputClass} defaultValue="Coimbatore, Tamil Nadu, India" />
                </FormField>
                <FormField label="Required Date *">
                  <input className={inputClass} type="date" defaultValue="2026-05-31" />
                </FormField>
                <FormField label="Shipping Mode *">
                  <select className={inputClass}><option>Road Transport</option><option>Rail</option></select>
                </FormField>
                <label className="flex items-center gap-3 pt-7 text-sm font-semibold text-slate-700">
                  <input type="checkbox" defaultChecked className="h-5 w-5" /> Allow partial delivery
                </label>
              </div>
            </Card>

            <Card>
              <CardHeader title="3 Payment Terms" />
              <div className="grid gap-4 p-5 lg:grid-cols-4">
                <FormField label="Advance Payment (%)"><input className={inputClass} defaultValue="10" /></FormField>
                <FormField label="Credit Period (Days)"><input className={inputClass} defaultValue="30" /></FormField>
                <FormField label="Preferred Financing"><select className={inputClass}><option>TReDS / Invoice Discounting</option><option>Buyer Credit</option></select></FormField>
                <FormField label="Price Validity (Days)"><input className={inputClass} defaultValue="30" /></FormField>
              </div>
            </Card>

            <Card>
              <CardHeader title="4 Quality & Compliance" />
              <div className="grid gap-4 p-5 lg:grid-cols-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="mb-3 text-sm font-bold text-slate-700">Certifications Required</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="blue">ISO 9001</Badge>
                    <Badge tone="blue">OEKO-TEX Standard 100</Badge>
                    <Badge tone="neutral">+ Add</Badge>
                  </div>
                </div>
                <div className="rounded-xl border border-dashed border-slate-300 p-4 text-sm font-semibold text-slate-600">
                  Upload test report, PDF/JPG/PNG up to 10MB
                </div>
                <div className="space-y-4">
                  <label className="flex items-center justify-between text-sm font-semibold"><span>GST Invoice Required</span><input type="checkbox" defaultChecked /></label>
                  <label className="flex items-center justify-between text-sm font-semibold"><span>Inspection Required</span><input type="checkbox" /></label>
                </div>
              </div>
            </Card>

            <Card>
              <CardHeader title="5 Supplier Targeting" />
              <div className="grid gap-4 p-5 lg:grid-cols-3">
                <div className="space-y-3">
                  <div className="text-sm font-bold text-slate-700">Suggested Suppliers</div>
                  {textileSuppliers.map((supplier, index) => (
                    <label key={supplier.id} className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 text-sm">
                      <input type="checkbox" defaultChecked={supplier.verified} />
                      <span className="flex-1">
                        <span className="block font-bold text-slate-950">{supplier.name}</span>
                        <span className="text-slate-500">{supplier.location}</span>
                      </span>
                      <Badge tone="green">{96 - index * 3}% Match</Badge>
                    </label>
                  ))}
                </div>
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="text-sm font-bold text-slate-700">Invite by Cluster</div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge tone="neutral">Coimbatore Cluster</Badge>
                    <Badge tone="neutral">Erode Cluster</Badge>
                    <Badge tone="neutral">Tiruppur Cluster</Badge>
                  </div>
                </div>
                <div className="space-y-3 rounded-xl border border-slate-200 p-4">
                  <FormField label="Minimum Rating"><select className={inputClass}><option>4 Star & above</option></select></FormField>
                  <FormField label="Turnover Range"><select className={inputClass}><option>₹5 Cr - ₹100 Cr</option></select></FormField>
                  <label className="flex items-center justify-between text-sm font-semibold"><span>Prefer MSMEs</span><input type="checkbox" defaultChecked /></label>
                </div>
              </div>
            </Card>

            <div className="flex justify-between gap-3">
              <button className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold">Save as Draft</button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-bold text-white">
                Next: Delivery Details <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <Card>
              <CardHeader title="RFQ Summary" action={<Badge tone="green">Draft</Badge>} />
              <div className="space-y-4 p-5 text-sm">
                <div><div className="text-slate-500">RFQ Title</div><div className="font-bold">Cotton Yarn 30s - 25,000 Kgs</div></div>
                <div><div className="text-slate-500">Estimated Spend</div><div className="text-2xl font-bold">₹58.63 Lakh</div></div>
                <div><div className="text-slate-500">Expected Supplier Matches</div><div className="text-2xl font-bold text-blue-700">18 - 24</div></div>
                <div><div className="text-slate-500">Risk Level</div><Badge tone="amber">Medium</Badge></div>
                <button className="mt-2 w-full rounded-lg bg-blue-700 px-5 py-3 font-bold text-white">Send RFQ →</button>
              </div>
            </Card>
            <InsightList
              title="AI Assistant"
              items={[
                { label: "Convert request", body: "Turn a plain-language requirement into a structured RFQ.", cta: "Convert to RFQ" },
                { label: "Recommended fields", body: "Add incoterms and price validity to improve supplier clarity.", cta: "Review" },
                { label: "Bundle buy", body: "You may save 3-5% by bundling with Polyester Yarn 75D.", cta: "View bundles" },
              ]}
            />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
