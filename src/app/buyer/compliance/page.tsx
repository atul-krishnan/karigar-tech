import { Download, FileCheck2, UploadCloud } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { MetricGrid } from "@/components/dashboard/metric-grid";
import { AlertList, DonutPanel, HealthPanel, QuickActions } from "@/components/dashboard/procure-panels";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { complianceMetrics } from "@/lib/demo-data/textile";

export default function CompliancePage() {
  return (
    <AppShell role="buyer" title="Compliance & Documentation">
      <div className="space-y-5">
        <MetricGrid metrics={complianceMetrics} />
        <div className="grid gap-5 xl:grid-cols-[1fr_0.8fr_0.85fr]">
          <HealthPanel
            title="Compliance Overview"
            score={91}
            items={[
              { label: "Legal Compliance", status: "94%" },
              { label: "Tax Compliance", status: "92%" },
              { label: "Quality Compliance", status: "90%" },
              { label: "Document Health", status: "82%", tone: "amber" },
            ]}
          />
          <DonutPanel title="Compliance Summary" center="126 Suppliers" rows={[
            { label: "Compliant", value: "78%", color: "#2fa65a" },
            { label: "At Risk", value: "14%", color: "#ff8a1f" },
            { label: "Non-Compliant", value: "8%", color: "#ef4444" },
          ]} />
          <QuickActions actions={[
            { label: "Request Document", href: "#", icon: FileCheck2 },
            { label: "Verify Now", href: "#", icon: FileCheck2 },
            { label: "Download Pack", href: "#", icon: Download },
            { label: "Upload Documents", href: "#", icon: UploadCloud },
          ]} />
        </div>
        <div className="grid gap-5 xl:grid-cols-[1.4fr_0.75fr]">
          <Card>
            <CardHeader title="Supplier Documents" action={<Badge tone="blue">248 Documents</Badge>} />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                  <tr>{["Supplier", "Document Type", "Document No.", "Valid Until", "Status", "Verification"].map((h) => <th key={h} className="px-5 py-3">{h}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ["Shakti Textiles", "GST Certificate", "27AAKCS1234M1Z6", "18 May 2027", "Valid", "Verified"],
                    ["Vardhman Yarns", "PAN Card", "AAACP1234K", "-", "Valid", "Verified"],
                    ["Nitin Spinners", "Test Report", "TR/2024/0456", "05 Jun 2026", "Expiring Soon", "Pending"],
                    ["DyeWell Industries", "E-Way Bill", "EWB5647382910", "12 May 2026", "Expired", "Failed"],
                  ].map((row) => (
                    <tr key={row[0]}>{row.map((cell, index) => <td key={cell} className="px-5 py-3">{index >= 4 ? <Badge tone={cell.includes("Expired") || cell === "Failed" ? "red" : cell.includes("Pending") || cell.includes("Soon") ? "amber" : "green"}>{cell}</Badge> : cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card>
            <CardHeader title="Document Preview" action={<Badge tone="green">Verified</Badge>} />
            <div className="m-5 rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full border-4 border-slate-300" />
              <div className="text-sm font-bold">GST Registration Certificate</div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-500">
                {["Legal Name", "Trade Name", "Business Type", "Liability"].map((item) => <div key={item} className="rounded border bg-white p-2">{item}</div>)}
              </div>
            </div>
          </Card>
        </div>
        <div className="grid gap-5 xl:grid-cols-[0.9fr_1fr_0.8fr]">
          <Card className="p-5">
            <h2 className="font-bold">Onboarding Compliance Checklist</h2>
            <p className="mt-3 text-sm text-slate-600">7 / 10 completed. ISO and quality certificate pending.</p>
          </Card>
          <Card className="p-5">
            <h2 className="font-bold">Document Workflow</h2>
            <div className="mt-4 grid grid-cols-4 gap-3 text-center text-sm font-bold">
              {["Submitted 23", "Under Review 15", "Approved 182", "Rejected 8"].map((item) => <div key={item} className="rounded-xl border border-slate-200 p-4">{item}</div>)}
            </div>
          </Card>
          <AlertList items={[
            { title: "Expiring Certificates", body: "12 documents expire in the next 30 days.", tone: "red", action: "View documents" },
            { title: "Verification Pending", body: "15 documents await verification.", tone: "amber", action: "Review now" },
          ]} />
        </div>
      </div>
    </AppShell>
  );
}
