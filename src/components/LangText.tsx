"use client";

import type { ElementType, ReactNode } from "react";
import { useLanguage, type Bilingual } from "@/lib/language";

/** Renders the current-language string from a bilingual field, with a short fade on language switch. */
export function LangText({
  field,
  as,
  className,
}: {
  field: Bilingual;
  as?: ElementType;
  className?: string;
}) {
  const { lang } = useLanguage();
  const As = as ?? "span";
  return (
    <As key={lang} className={`lang-fade${className ? ` ${className}` : ""}`}>
      {field[lang]}
    </As>
  );
}

/** For cases needing the raw string (e.g. inside alt="", title props) rather than a wrapper element. */
export function useT() {
  const { lang } = useLanguage();
  return (field: Bilingual) => field[lang];
}

export function LangFade({ children }: { children: ReactNode }) {
  const { lang } = useLanguage();
  return (
    <span key={lang} className="lang-fade contents">
      {children}
    </span>
  );
}

/** Renders children only when the active language matches `show`. */
export function LangOnly({ show, children }: { show: "zh" | "en"; children: ReactNode }) {
  const { lang } = useLanguage();
  if (lang !== show) return null;
  return <>{children}</>;
}
