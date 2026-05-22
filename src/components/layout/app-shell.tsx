"use client";

import {
  BarChart3,
  Bell,
  ClipboardList,
  DollarSign,
  FileText,
  Home,
  LayoutDashboard,
  Landmark,
  PackageCheck,
  Search,
  Settings,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { KarigarMark } from "@/components/brand/karigar-mark";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useT } from "@/lib/i18n/provider";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

type NavItem = { href: string; key: keyof Dictionary["nav"]; icon: LucideIcon };

const navByRole: Record<"buyer" | "supplier" | "admin", NavItem[]> = {
  buyer: [
    { href: "/buyer", key: "dashboard", icon: LayoutDashboard },
    { href: "/buyer/rfqs/new", key: "rfqs", icon: ClipboardList },
    { href: "/buyer/suppliers", key: "suppliers", icon: Users },
    { href: "/buyer/orders", key: "orders", icon: FileText },
    { href: "/buyer/inventory", key: "inventory", icon: Warehouse },
    { href: "/buyer/analytics", key: "analytics", icon: BarChart3 },
    { href: "/finance", key: "finance", icon: DollarSign },
    { href: "/buyer/compliance", key: "compliance", icon: ShieldCheck },
    { href: "/buyer/settings", key: "settings", icon: Settings },
  ],
  supplier: [
    { href: "/supplier", key: "dashboard", icon: Home },
    { href: "/supplier/verification", key: "verification", icon: ShieldCheck },
    { href: "/supplier/rfqs/rfq-tx-1042", key: "invitedRfqs", icon: ClipboardList },
    { href: "/supplier/orders", key: "orders", icon: Truck },
    { href: "/finance", key: "finance", icon: Landmark },
  ],
  admin: [
    { href: "/admin", key: "dashboard", icon: Home },
    { href: "/admin/suppliers", key: "supplierReview", icon: Users },
    { href: "/admin/rfqs/new", key: "createRfq", icon: ClipboardList },
    { href: "/admin/categories", key: "catalog", icon: PackageCheck },
    { href: "/finance", key: "financeQueue", icon: Landmark },
  ],
};

export function AppShell({
  role,
  title,
  children,
}: {
  role: keyof typeof navByRole;
  title?: string;
  children: React.ReactNode;
}) {
  const { t } = useT();
  const items = navByRole[role];
  const defaultTitle = `${t.nav[role]} ${t.nav.dashboard}`;

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#07122f]">
      <aside className="fixed inset-y-0 left-0 hidden w-[276px] border-r border-blue-950/40 bg-[linear-gradient(180deg,#062c60_0%,#061f49_45%,#041735_100%)] text-white lg:block">
        <div className="flex h-full flex-col">
          <Link href="/" className="px-6 py-7">
            <div className="flex items-center gap-3">
              <KarigarMark />
              <div>
                <div className="text-xl font-bold tracking-tight">{t.brand.name}</div>
                <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                  {t.brand.tagline}
                </div>
              </div>
            </div>
          </Link>
          <nav className="flex-1 space-y-2 px-4 py-2">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-12 items-center gap-3 rounded-lg px-4 text-sm font-semibold text-blue-50/90 transition hover:bg-white/12 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                  {t.nav[item.key]}
                </Link>
              );
            })}
          </nav>
          <div className="space-y-4 p-4">
            <div className="rounded-xl border border-white/10 bg-white/8 p-4 shadow-2xl shadow-black/10">
              <div className="flex h-6 w-9 overflow-hidden rounded-sm shadow-sm" aria-hidden>
                <div className="flex-1 bg-[#FF9933]" />
                <div className="flex flex-1 items-center justify-center bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#000080]" />
                </div>
                <div className="flex-1 bg-[#138808]" />
              </div>
              <div className="mt-3 text-sm font-bold">{t.brand.msmeBuilt}</div>
              <p className="mt-2 text-sm leading-6 text-blue-50/80">{t.brand.bharatLine}</p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 p-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-500 text-sm font-bold">
                PS
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-bold">Prakash Singh</div>
                <div className="truncate text-xs text-blue-100/75">Shree Textiles Pvt. Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="lg:pl-[276px]">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="lg:hidden">
              <Link href="/" className="flex items-center gap-2 font-semibold text-slate-950">
                <KarigarMark size="sm" tone="light" />
                {t.brand.name}
              </Link>
              <div className="mt-1 text-sm font-bold text-slate-950">{title ?? defaultTitle}</div>
            </div>
            <h1 className="hidden text-xl font-bold tracking-tight text-slate-950 lg:block">
              {title ?? defaultTitle}
            </h1>
            <div className="flex min-w-[240px] max-w-xl flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm lg:flex-none lg:basis-[460px]">
              <Search className="h-4 w-4 text-slate-400" />
              <span className="truncate text-sm text-slate-500">{t.header.search}</span>
              <span className="ml-auto rounded-md border border-slate-200 px-1.5 py-0.5 text-xs font-semibold text-slate-500">
                ⌘K
              </span>
            </div>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <button
                type="button"
                aria-label={t.header.notifications}
                className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <Bell className="h-5 w-5 text-slate-700" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  3
                </span>
              </button>
              <div className="hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm xl:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                  <Landmark className="h-5 w-5 text-slate-700" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-950">Shree Textiles Pvt. Ltd.</div>
                  <div className="text-xs text-slate-500">Coimbatore, Tamil Nadu</div>
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow-sm">
                PS
              </div>
            </div>
          </div>
          <nav className="mt-4 flex gap-2 overflow-x-auto lg:hidden">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700",
                )}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        <footer className="pb-6 text-center text-xs text-slate-500">{t.common.inrNotice}</footer>
      </div>
    </div>
  );
}
