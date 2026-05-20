import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export function MetricGrid({
  metrics,
}: {
  metrics: Array<{ label: string; value: string; change?: string; icon: LucideIcon; tone?: string; sublabel?: string }>;
}) {
  const tones = [
    "from-blue-600 to-blue-500",
    "from-violet-600 to-violet-500",
    "from-emerald-600 to-emerald-500",
    "from-teal-600 to-cyan-500",
    "from-orange-500 to-orange-400",
    "from-rose-500 to-red-500",
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.label} className="p-5">
            <div className="flex items-center gap-4">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${metric.tone ?? tones[index % tones.length]} text-white shadow-lg shadow-slate-200`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-600">{metric.label}</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">{metric.value}</p>
                {metric.sublabel ? <p className="mt-1 text-xs text-slate-500">{metric.sublabel}</p> : null}
              </div>
            </div>
            {metric.change ? <p className="mt-3 text-xs font-semibold text-emerald-700">↑ {metric.change}</p> : null}
          </Card>
        );
      })}
    </div>
  );
}
