"use client";

import { useLanguage } from "@/lib/language";
import type { Bilingual } from "@/lib/language";

export default function PageHeader({
  index,
  label,
  labelEn,
  description,
}: {
  index: string;
  label: string;
  labelEn: string;
  description?: Bilingual;
}) {
  const { lang } = useLanguage();

  return (
    <div className="border-b border-line px-5 pb-10 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-[1200px]">
        <span className="num font-display text-sm text-fg-dim">{index}</span>
        <h1 className="mt-3 font-display text-6xl font-medium leading-[0.95] tracking-tight sm:text-8xl">
          <span key={lang} className="lang-fade inline-block">
            {lang === "zh" ? label : labelEn}
          </span>
          {lang === "zh" && (
            <span
              key={`${lang}-sub`}
              className="lang-fade ml-4 align-middle text-lg font-normal tracking-wide text-fg-dim sm:text-2xl"
            >
              {labelEn}
            </span>
          )}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-fg-dim">
            <span key={lang} className="lang-fade inline-block">
              {description[lang]}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
