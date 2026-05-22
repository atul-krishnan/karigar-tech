import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { Card, CardHeader } from "@/components/ui/card";
import { textileCategories } from "@/lib/demo-data/textile";

export default function AdminCategoriesPage() {
  return (
    <AppShell role="admin">
      <PageHeading
        eyebrow="Catalog master"
        title="Categories and item master"
        description="Manage procurement categories, attributes, and item-level specs. Launch catalog is seeded with textile data; the schema is built to extend into logistics, packaging, maintenance, and industrial services."
      />
      <Card>
        <CardHeader
          title="Active catalog"
          description="Seeded for launch — textile clusters"
        />
        <div className="grid gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
          {textileCategories.map((category) => (
            <div key={category.slug} className="rounded-lg border border-slate-200 p-4">
              <h2 className="font-semibold text-slate-950">{category.name}</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
