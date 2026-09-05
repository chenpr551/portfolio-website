"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categoryMeta } from "@/data/projects";
import { useLanguage } from "@/lib/language";
import { ui } from "@/lib/ui-strings";

const links = [
  ...Object.values(categoryMeta).map((c) => ({
    href: `/${c.slug}`,
    zh: c.label,
    en: c.labelEn,
  })),
  { href: "/about", zh: ui.navAbout.zh, en: ui.navAbout.en },
];

function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-2 text-[13px] tracking-wide">
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={`transition-all duration-150 active:scale-95 ${
          lang === "zh" ? "font-bold text-fg" : "text-fg-dim hover:text-fg"
        }`}
      >
        中
      </button>
      <span className="text-line">|</span>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={`transition-all duration-150 active:scale-95 ${
          lang === "en" ? "font-bold text-fg" : "text-fg-dim hover:text-fg"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="font-display text-sm font-medium tracking-[0.08em] text-fg"
        >
          PENGRAN CHEN
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] tracking-wide">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative py-1 transition-colors ${
                    active ? "text-fg" : "text-fg-dim hover:text-fg"
                  }`}
                >
                  <span key={lang} className="lang-fade inline-block">
                    {lang === "zh" ? l.zh : l.en}
                  </span>
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px w-full bg-accent-orange transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
