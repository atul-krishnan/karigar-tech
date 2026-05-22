"use client";

import { Check, Globe, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  LANGUAGES,
  LANGUAGE_LABELS,
  type Language,
} from "@/lib/i18n/dictionaries";
import { useT } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

type Props = {
  variant?: "header" | "marketing";
  className?: string;
};

export function LanguageSwitcher({ variant = "header", className }: Props) {
  const { lang, setLang, t } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onSelect = (next: Language) => {
    setLang(next);
    setOpen(false);
  };

  return (
    <div className={cn("relative", className)} ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.header.languageLabel}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex items-center gap-2 rounded-xl border text-sm font-bold transition",
          variant === "header"
            ? "h-11 border-slate-200 bg-white px-3 text-slate-700 shadow-sm hover:bg-slate-50"
            : "h-9 border-white/20 bg-white/10 px-3 text-white hover:bg-white/15",
        )}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{LANGUAGE_LABELS[lang].native}</span>
        <span className="sm:hidden">{LANGUAGE_LABELS[lang].short}</span>
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.header.languageLabel}
          className="absolute right-0 z-40 mt-2 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 text-sm shadow-lg shadow-slate-900/10"
        >
          {LANGUAGES.map((code) => {
            const meta = LANGUAGE_LABELS[code];
            const selected = code === lang;
            return (
              <li key={code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => onSelect(code)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-slate-700 transition hover:bg-slate-50",
                    selected && "bg-blue-50/70 text-blue-700",
                  )}
                >
                  <span className="flex flex-col">
                    <span className="font-bold leading-tight">{meta.native}</span>
                    <span className="text-xs text-slate-500">{meta.english}</span>
                  </span>
                  {selected && <Check className="h-4 w-4 text-blue-600" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
