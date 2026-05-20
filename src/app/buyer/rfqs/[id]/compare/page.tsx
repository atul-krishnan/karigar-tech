import { FileText } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeading } from "@/components/layout/page-heading";
import { BidComparisonTable } from "@/components/rfq/bid-comparison-table";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { bidComparison } from "@/lib/demo-data/textile";

export default async function BidComparePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <AppShell role="buyer">
      <PageHeading
        eyebrow={id}
        title="Compare live supplier bids"
        description="Buyer live bid visibility is enabled. Supplier-side access remains closed: suppliers cannot see competing quotes."
        action={
          <ButtonLink href="/buyer/purchase-orders/po-tx-9021">
            <FileText className="h-4 w-4" /> Generate PO
          </ButtonLink>
        }
      />
      <div className="space-y-6">
        <BidComparisonTable bids={bidComparison} />
        <Card className="p-5">
          <h2 className="font-semibold text-slate-950">Recommendation rationale</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Surat Tex Yarns ranks first because it has the best landed cost, strong quality score,
            verified status, and acceptable delivery timeline. Tiruppur Knit Source is faster but has
            a higher landed cost for this quantity.
          </p>
        </Card>
      </div>
    </AppShell>
  );
}
