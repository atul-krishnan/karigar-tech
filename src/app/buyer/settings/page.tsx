import { AppShell } from "@/components/layout/app-shell";
import { Card, CardHeader } from "@/components/ui/card";
import { FormField, inputClass } from "@/components/ui/form-field";

export default function BuyerSettingsPage() {
  return (
    <AppShell role="buyer" title="Settings">
      <div className="grid gap-5 xl:grid-cols-2">
        <Card>
          <CardHeader title="Organization Profile" description="Multi-user organization structure is ready for Supabase Auth." />
          <div className="grid gap-4 p-5">
            <FormField label="Company name"><input className={inputClass} defaultValue="Shree Textiles Pvt. Ltd." /></FormField>
            <FormField label="GST number"><input className={inputClass} defaultValue="33AAKCS1234M1Z6" /></FormField>
            <FormField label="Primary location"><input className={inputClass} defaultValue="Coimbatore, Tamil Nadu" /></FormField>
          </div>
        </Card>
        <Card>
          <CardHeader title="Procurement Rules" />
          <div className="space-y-4 p-5 text-sm font-semibold">
            <label className="flex items-center justify-between"><span>Show buyer bids as they arrive</span><input type="checkbox" defaultChecked /></label>
            <label className="flex items-center justify-between"><span>Require admin-curated suppliers</span><input type="checkbox" defaultChecked /></label>
            <label className="flex items-center justify-between"><span>Enable finance coming-soon prompts</span><input type="checkbox" defaultChecked /></label>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
