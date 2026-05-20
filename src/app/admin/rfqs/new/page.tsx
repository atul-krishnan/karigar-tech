import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { Card, CardHeader } from "@/components/ui/card";
import { FormField, inputClass } from "@/components/ui/form-field";
import { textileCategories, textileSuppliers } from "@/lib/demo-data/textile";

export default function AdminCreateRfqPage() {
  return (
    <AppShell role="admin">
      <PageHeading
        eyebrow="Managed procurement"
        title="Create RFQ on behalf of a buyer"
        description="This supports assisted onboarding for MSMEs still operating on WhatsApp and Excel."
      />
      <Card>
        <CardHeader title="Buyer-assisted RFQ" description="Admin-created RFQs still produce the same audit trail and supplier invitation events." />
        <form className="grid gap-5 p-5 lg:grid-cols-2">
          <FormField label="Buyer organization">
            <select className={inputClass}>
              <option>Kaveri Garments</option>
              <option>Rangoli Processors</option>
              <option>Threadline Exports</option>
            </select>
          </FormField>
          <FormField label="Category">
            <select className={inputClass}>
              {textileCategories.map((category) => (
                <option key={category.slug}>{category.name}</option>
              ))}
            </select>
          </FormField>
          <FormField label="Requirement">
            <input className={inputClass} defaultValue="Greige cotton fabric" />
          </FormField>
          <FormField label="Quantity">
            <input className={inputClass} defaultValue="12000 meters" />
          </FormField>
          <div className="lg:col-span-2">
            <div className="mb-3 text-sm font-semibold text-slate-700">Admin-selected suppliers</div>
            <div className="grid gap-3 md:grid-cols-3">
              {textileSuppliers.map((supplier) => (
                <label key={supplier.id} className="flex gap-3 rounded-lg border border-slate-200 p-4 text-sm">
                  <input type="checkbox" defaultChecked={supplier.verified} className="mt-1" />
                  <span>
                    <span className="block font-semibold text-slate-950">{supplier.name}</span>
                    <span className="mt-1 block text-slate-500">{supplier.categories.join(", ")}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button className="inline-flex min-h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white lg:col-span-2">
            Publish on behalf of buyer
          </button>
        </form>
      </Card>
    </AppShell>
  );
}
