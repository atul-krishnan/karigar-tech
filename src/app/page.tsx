"use client";

import {
  ArrowRight,
  BadgeCheck,
  Database,
  Factory,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { KarigarMark } from "@/components/brand/karigar-mark";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useT } from "@/lib/i18n/provider";

type RoleSpec = {
  href: string;
  icon: LucideIcon;
  accent: { bg: string; ring: string };
  titleKey: "buyerTitle" | "supplierTitle" | "adminTitle";
  bodyKey: "buyerBody" | "supplierBody" | "adminBody";
};

const ROLES: RoleSpec[] = [
  {
    href: "/buyer",
    icon: Factory,
    accent: { bg: "bg-blue-600", ring: "ring-blue-200" },
    titleKey: "buyerTitle",
    bodyKey: "buyerBody",
  },
  {
    href: "/supplier",
    icon: PackageCheck,
    accent: { bg: "bg-emerald-600", ring: "ring-emerald-200" },
    titleKey: "supplierTitle",
    bodyKey: "supplierBody",
  },
  {
    href: "/admin",
    icon: ShieldCheck,
    accent: { bg: "bg-violet-600", ring: "ring-violet-200" },
    titleKey: "adminTitle",
    bodyKey: "adminBody",
  },
];

export default function Home() {
  const { t } = useT();

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <KarigarMark size="md" tone="light" />
            <div>
              <div className="text-lg font-extrabold tracking-tight">{t.brand.name}</div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.brand.tagline}
              </div>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 text-sm font-semibold text-slate-600 md:flex">
            <Link href="/buyer" className="rounded-md px-3 py-2 hover:bg-slate-100">
              {t.nav.buyer}
            </Link>
            <Link href="/supplier" className="rounded-md px-3 py-2 hover:bg-slate-100">
              {t.nav.supplier}
            </Link>
            <Link href="/admin" className="rounded-md px-3 py-2 hover:bg-slate-100">
              {t.nav.admin}
            </Link>
            <Link href="/finance" className="rounded-md px-3 py-2 hover:bg-slate-100">
              {t.nav.finance}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ButtonLink href="/buyer" className="hidden sm:inline-flex">
              {t.common.openWorkspace} <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
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
                <Sparkles className="h-3.5 w-3.5" /> {t.home.eyebrow}
              </span>
            </div>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {t.home.headlinePart1}
              <span className="block bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
                {t.home.headlinePart2}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100/80">{t.home.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/buyer">{t.home.primaryCta}</ButtonLink>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                {t.home.secondaryCta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-6">
              {[
                ["126", t.home.stats.suppliers],
                ["₹4.32 Cr", t.home.stats.savings],
                ["96%", t.home.stats.otif],
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
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-cyan-200/80">
              {t.home.rolesTitle}
            </div>
            {ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <Link
                  key={role.href}
                  href={role.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-white/[0.1]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${role.accent.bg} text-white shadow-lg shadow-black/20 ring-4 ${role.accent.ring} ring-opacity-30`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="flex items-center gap-2 font-bold text-white">
                        {t.home.roles[role.titleKey]}
                        <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-blue-100/80">
                        {t.home.roles[role.bodyKey]}
                      </p>
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
            <Badge tone="blue">{t.home.whyEyebrow}</Badge>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">{t.home.whyTitle}</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">{t.home.whyLead}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Workflow,
              title: t.home.features.workflowTitle,
              body: t.home.features.workflowBody,
              accent: "bg-indigo-100 text-indigo-700",
            },
            {
              icon: LockKeyhole,
              title: t.home.features.closedBidTitle,
              body: t.home.features.closedBidBody,
              accent: "bg-emerald-100 text-emerald-700",
            },
            {
              icon: Database,
              title: t.home.features.financeTitle,
              body: t.home.features.financeBody,
              accent: "bg-orange-100 text-orange-700",
            },
            {
              icon: BadgeCheck,
              title: t.home.features.verifiedTitle,
              body: t.home.features.verifiedBody,
              accent: "bg-blue-100 text-blue-700",
            },
            {
              icon: TrendingDown,
              title: t.home.features.priceTitle,
              body: t.home.features.priceBody,
              accent: "bg-purple-100 text-purple-700",
            },
            {
              icon: Sparkles,
              title: t.home.features.aiTitle,
              body: t.home.features.aiBody,
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
            <span>{t.home.footer}</span>
          </div>
          <div>{t.common.inrNotice}</div>
        </div>
      </footer>
    </main>
  );
}
