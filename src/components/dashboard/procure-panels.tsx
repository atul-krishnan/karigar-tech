import type { LucideIcon } from "lucide-react";
import { AlertTriangle, ArrowRight, CheckCircle2, CircleDollarSign, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function HealthPanel({
  title,
  score,
  items,
}: {
  title: string;
  score: number;
  items: Array<{ label: string; status: string; tone?: "green" | "amber" | "red" | "blue" }>;
}) {
  return (
    <Card>
      <CardHeader title={title} action={<Badge tone="green">Good</Badge>} />
      <div className="grid gap-5 p-5 md:grid-cols-[180px_1fr]">
        <div className="flex flex-col items-center justify-center">
          <div
            className="grid h-32 w-32 place-items-center rounded-full"
            style={{
              background: `conic-gradient(#2fa65a ${score * 3.6}deg, #e8edf5 0deg)`,
            }}
          >
            <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-center">
              <div>
                <div className="text-4xl font-bold text-slate-950">{score}</div>
                <div className="text-xs text-slate-500">/100</div>
              </div>
            </div>
          </div>
          <Link href="/buyer/analytics" className="mt-5 text-sm font-semibold text-blue-700">
            View full analysis →
          </Link>
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
              <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              <Badge tone={item.tone ?? "green"}>{item.status}</Badge>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function QuickActions({
  actions,
}: {
  actions: Array<{ label: string; href: string; icon: LucideIcon; tone?: string }>;
}) {
  return (
    <Card>
      <CardHeader title="Quick Actions" />
      <div className="grid gap-3 p-5 sm:grid-cols-2">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.label}
              href={action.href}
              className="flex min-h-20 items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 font-semibold text-slate-900 transition hover:border-blue-200 hover:bg-blue-50"
            >
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br text-white", action.tone ?? (index % 2 ? "from-teal-600 to-cyan-500" : "from-blue-600 to-blue-500"))}>
                <Icon className="h-5 w-5" />
              </div>
              {action.label}
            </Link>
          );
        })}
      </div>
    </Card>
  );
}

export function InsightList({
  title = "AI Recommendations",
  items,
}: {
  title?: string;
  items: Array<{ label: string; body: string; tone?: "green" | "amber" | "red" | "blue"; cta?: string }>;
}) {
  return (
    <Card>
      <CardHeader
        title={title}
        action={
          <Link href="/buyer/analytics" className="text-sm font-semibold text-blue-700">
            View all →
          </Link>
        }
      />
      <div className="space-y-3 p-5">
        {items.map((item) => (
          <div key={item.label} className="flex gap-4 rounded-xl border border-slate-200 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <Badge tone={item.tone ?? "blue"}>{item.label}</Badge>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              {item.cta ? <div className="mt-2 text-sm font-semibold text-blue-700">{item.cta} →</div> : null}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function AlertList({
  items,
}: {
  items: Array<{ title: string; body: string; tone?: "red" | "amber" | "blue" | "green"; action?: string }>;
}) {
  const toneClass = {
    red: "bg-red-50 text-red-600 border-red-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    green: "bg-emerald-50 text-emerald-600 border-emerald-100",
  };

  return (
    <Card>
      <CardHeader title="Alerts" action={<Link href="#" className="text-sm font-semibold text-blue-700">View all →</Link>} />
      <div className="space-y-3 p-5">
        {items.map((item) => (
          <div key={item.title} className={cn("rounded-xl border p-4", toneClass[item.tone ?? "amber"])}>
            <div className="flex gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-700">{item.body}</p>
                {item.action ? <p className="mt-2 text-sm font-semibold text-blue-700">{item.action} →</p> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function MiniTrend({ title, value, color = "#0d6efd" }: { title: string; value: string; color?: string }) {
  const points = [20, 18, 22, 24, 23, 28, 30, 32, 31, 35, 38, 41];
  const path = points.map((point, index) => `${index * 28},${70 - point}`).join(" ");

  return (
    <Card>
      <CardHeader title={title} action={<Badge tone="neutral">7 Days</Badge>} />
      <div className="p-5">
        <div className="text-2xl font-bold text-slate-950">{value}</div>
        <svg viewBox="0 0 310 90" className="mt-4 h-32 w-full overflow-visible">
          <polyline fill="none" stroke={color} strokeWidth="4" points={path} strokeLinecap="round" strokeLinejoin="round" />
          <polygon points={`${path} 308,90 0,90`} fill={color} opacity="0.08" />
        </svg>
      </div>
    </Card>
  );
}

export function DonutPanel({
  title,
  center,
  rows,
}: {
  title: string;
  center: string;
  rows: Array<{ label: string; value: string; color: string }>;
}) {
  return (
    <Card>
      <CardHeader title={title} />
      <div className="grid gap-5 p-5 sm:grid-cols-[160px_1fr]">
        <div className="grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#1764ff_0_42%,#10a78a_42%_63%,#7b54d8_63%_80%,#ff9f2e_80%_92%,#94a3b8_92%_100%)]">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-white text-center text-sm font-bold text-slate-950">
            {center}
          </div>
        </div>
        <div className="space-y-3">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex items-center gap-2 text-slate-600">
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: row.color }} />
                {row.label}
              </span>
              <span className="font-bold text-slate-950">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function StatusStepper({
  steps,
}: {
  steps: Array<{ label: string; meta: string; done?: boolean; active?: boolean }>;
}) {
  return (
    <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-4">
      {steps.map((step, index) => (
        <div key={step.label} className="relative flex items-start gap-3">
          <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2", step.done ? "border-emerald-500 bg-emerald-500 text-white" : step.active ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-300 bg-white text-slate-400")}>
            {step.done ? <CheckCircle2 className="h-5 w-5" /> : index + 1}
          </div>
          <div>
            <div className="font-bold text-slate-950">{step.label}</div>
            <div className="mt-1 text-xs text-slate-500">{step.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FinanceOfferCard({ title, amount, rate }: { title: string; amount: string; rate: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700">
          <CircleDollarSign className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <Badge tone="green">Recommended</Badge>
          <h3 className="mt-2 font-bold text-slate-950">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{amount}</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span>
              <span className="block text-slate-500">Rate p.a.</span>
              <span className="font-bold text-slate-950">{rate}</span>
            </span>
            <button className="rounded-lg border border-blue-200 px-4 py-2 font-bold text-blue-700">
              Quick Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ActionRow({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2 text-sm font-bold text-blue-700">
      {label} <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
