import {
  ArrowRight,
  BadgeCheck,
  Database,
  LockKeyhole,
  Sparkles,
  TrendingDown,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { KarigarMark } from "@/components/brand/karigar-mark";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { roleCards } from "@/lib/demo-data/textile";

const roleAccent: Record<string, { bg: string; ring: string; text: string }> = {
  "/buyer": { bg: "bg-blue-600", ring: "ring-blue-200", text: "text-blue-700" },
  "/supplier": { bg: "bg-emerald-600", ring: "ring-emerald-200", text: "text-emerald-700" },
  "/admin": { bg: "bg-violet-600", ring: "ring-violet-200", text: "text-violet-700" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <KarigarMark size="md" tone="light" />
            <div>
              <div className="text-lg font-extrabold tracking-tight">Karigar</div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Textile Procurement
              </div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 text-sm font-semibold text-slate-600 md:flex">
            <Link href="/buyer" className="rounded-md px-3 py-2 hover:bg-slate-100">Buyer</Link>
            <Link href="/supplier" className="rounded-md px-3 py-2 hover:bg-slate-100">Supplier</Link>
            <Link href="/admin" className="rounded-md px-3 py-2 hover:bg-slate-100">Admin</Link>
            <Link href="/finance" className="rounded-md px-3 py-2 hover:bg-slate-100">Finance</Link>
          </nav>
          <ButtonLink href="/buyer" className="hidden sm:inline-flex">
            Open workspace <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#062c60_0%,#061f49_55%,#041735_100%)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" /> Built for MSMEs in India
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                Closed bidding · Live compare · Finance-ready
              </span>
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              The procurement OS for
              <span className="block bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
                Indian textile mills.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/80">
              Karigar runs your RFQ-to-payment loop end to end — curated suppliers, closed bidding,
              live bid comparison, purchase orders, delivery tracking, invoices, and clean
              finance-ready data trails.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/buyer">Open buyer workspace</ButtonLink>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Admin operations <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {[
                ["126", "Verified suppliers"],
                ["₹4.32 Cr", "YTD savings"],
                ["96%", "OTIF on-time"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="text-2xl font-extrabold tracking-tight text-white">{value}</dt>
                  <dd className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-200/80">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative grid content-center gap-4">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-cyan-400/10 blur-3xl" aria-hidden />
            {roleCards.map((card) => {
              const Icon = card.icon;
              const accent = roleAccent[card.href] ?? roleAccent["/buyer"];
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-white/[0.1]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent.bg} text-white shadow-lg shadow-black/20 ring-4 ${accent.ring} ring-opacity-30`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="flex items-center gap-2 font-bold text-white">
                        {card.title}
                        <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-blue-100/80">{card.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="blue">Why Karigar</Badge>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Procurement designed for how Indian textile MSMEs actually work
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Every flow — from inviting a yarn supplier in Surat to releasing a final invoice — is
            modelled as a server-side workflow with a clean audit trail.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: "Workflow-first",
              body: "RFQ, bid, PO, order, invoice, and payment transitions are modelled as server-side workflows.",
              accent: "bg-indigo-100 text-indigo-700",
            },
            {
              icon: LockKeyhole,
              title: "Closed bidding",
              body: "Suppliers only see invited RFQs and never see competing bids. Buyers see bids live, by line item.",
              accent: "bg-emerald-100 text-emerald-700",
            },
            {
              icon: Database,
              title: "Finance-ready",
              body: "Schema captures the behaviour future purchase finance, invoice discounting, and risk scoring need.",
              accent: "bg-orange-100 text-orange-700",
            },
            {
              icon: BadgeCheck,
              title: "Verified suppliers",
              body: "GST, PAN, ISO, OEKO-TEX checks before a supplier ever lands in a buyer's shortlist.",
              accent: "bg-blue-100 text-blue-700",
            },
            {
              icon: TrendingDown,
              title: "Live price intelligence",
              body: "Cotton, polyester, and dye benchmarks per cluster — Surat, Tiruppur, Ludhiana, Coimbatore.",
              accent: "bg-purple-100 text-purple-700",
            },
            {
              icon: Sparkles,
              title: "AI-assisted recommendations",
              body: "Shortlist nudges, negotiation insights, and replenishment hints throughout the procurement loop.",
              accent: "bg-pink-100 text-pink-700",
            },
          ].map(({ icon: Icon, title, body, accent }) => (
            <Card key={title} className="p-5">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${accent}`}>
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-xs font-semibold text-slate-500 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <KarigarMark size="sm" tone="light" />
            <span>Karigar · Built for Bharat</span>
          </div>
          <div>All amounts in INR · Demo data as of 20 May 2026</div>
        </div>
      </footer>
    </main>
  );
}
