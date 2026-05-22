"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  dictionaries,
  type Dictionary,
  type Language,
  LANGUAGES,
} from "./dictionaries";

const STORAGE_KEY = "karigar:lang";

type Ctx = {
  lang: Language;
  setLang: (l: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<Ctx | null>(null);

function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && (LANGUAGES as readonly string[]).includes(value);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  // Hydrate from localStorage on mount. Default is English so the SSR-rendered
  // HTML and the first client render agree.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLanguage(stored) && stored !== lang) setLangState(stored);
    } catch {
      /* localStorage may be unavailable (privacy mode) — just stay on English */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Reflect language on <html> so screen readers and CSS can branch on it
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useT(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Fallback for server components / out-of-tree usage: return EN so things
    // still render before/without the provider.
    return { lang: "en", setLang: () => {}, t: dictionaries.en };
  }
  return ctx;
}
