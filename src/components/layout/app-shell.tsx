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
} from "lucide-react";
import Link from "next/link";
import { KarigarMark } from "@/components/brand/karigar-mark";
import { cn } from "@/lib/utils";

const navByRole = {
  buyer: [
    { href: "/buyer", label: "Dashboard", icon: LayoutDashboard },
    { href: "/buyer/rfqs/new", label: "RFQs", icon: ClipboardList },
    { href: "/buyer/suppliers", label: "Suppliers", icon: Users },
    { href: "/buyer/orders", label: "Orders", icon: FileText },
    { href: "/buyer/inventory", label: "Inventory", icon: Warehouse },
    { href: "/buyer/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/finance", label: "Finance", icon: DollarSign },
    { href: "/buyer/compliance", label: "Compliance", icon: ShieldCheck },
    { href: "/buyer/settings", label: "Settings", icon: Settings },
  ],
  supplier: [
    { href: "/supplier", label: "Dashboard", icon: Home },
    { href: "/supplier/verification", label: "Verification", icon: ShieldCheck },
    { href: "/supplier/rfqs/rfq-tx-1042", label: "Invited RFQs", icon: ClipboardList },
    { href: "/supplier/orders", label: "Orders", icon: Truck },
    { href: "/finance", label: "Finance", icon: Landmark },
  ],
  admin: [
    { href: "/admin", label: "Dashboard", icon: Home },
    { href: "/admin/suppliers", label: "Supplier review", icon: Users },
    { href: "/admin/rfqs/new", label: "Create buyer RFQ", icon: ClipboardList },
    { href: "/admin/categories", label: "Catalog", icon: PackageCheck },
    { href: "/finance", label: "Finance queue", icon: Landmark },
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
  const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#07122f]">
      <aside className="fixed inset-y-0 left-0 hidden w-[276px] border-r border-blue-950/40 bg-[linear-gradient(180deg,#062c60_0%,#061f49_45%,#041735_100%)] text-white lg:block">
        <div className="flex h-full flex-col">
          <Link href="/" className="px-6 py-7">
            <div className="flex items-center gap-3">
              <KarigarMark />
              <div>
                <div className="text-xl font-bold tracking-tight">Karigar</div>
                <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
                  Textile Procurement
                </div>
              </div>
            </div>
          </Link>
          <nav className="flex-1 space-y-2 px-4 py-2">
            {navByRole[role].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-12 items-center gap-3 rounded-lg px-4 text-sm font-semibold text-blue-50/90 transition hover:bg-white/12 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="space-y-4 p-4">
            <div className="rounded-xl border border-white/10 bg-white/8 p-4 shadow-2xl shadow-black/10">
              <div className="flex h-6 w-9 overflow-hidden rounded-sm shadow-sm">
                <div className="flex-1 bg-[#FF9933]" />
                <div className="flex flex-1 items-center justify-center bg-white">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#000080]" />
                </div>
                <div className="flex-1 bg-[#138808]" />
              </div>
              <div className="mt-3 text-sm font-bold">Built for MSMEs in India</div>
              <p className="mt-2 text-sm leading-6 text-blue-50/80">
                Growing Bharat. Powering Procurement.
              </p>
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
                Karigar
              </Link>
              <div className="mt-1 text-sm font-bold text-slate-950">{title ?? `${roleLabel} Workspace`}</div>
            </div>
            <h1 className="hidden text-xl font-bold tracking-tight text-slate-950 lg:block">
              {title ?? `${roleLabel} Workspace`}
            </h1>
            <div className="flex min-w-[240px] max-w-xl flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm lg:flex-none lg:basis-[520px]">
              <Search className="h-4 w-4 text-slate-400" />
              <span className="text-sm text-slate-500">Search RFQs, suppliers, materials...</span>
              <span className="ml-auto rounded-md border border-slate-200 px-1.5 py-0.5 text-xs font-semibold text-slate-500">
                ⌘K
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                <Bell className="h-5 w-5 text-slate-700" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  3
                </span>
              </button>
              <div className="hidden items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm sm:flex">
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
            {navByRole[role].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        <footer className="pb-6 text-center text-xs text-slate-500">
          All amounts are in INR&nbsp;&nbsp;|&nbsp;&nbsp;Data as of 20 May 2026, 10:30 AM
        </footer>
      </div>
    </div>
  );
}
