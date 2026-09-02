"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categoryMeta } from "@/data/projects";

const links = [
  ...Object.values(categoryMeta).map((c) => ({
    href: `/${c.slug}`,
    label: c.label,
    labelEn: c.labelEn,
  })),
  { href: "/about", label: "关于", labelEn: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="font-display text-sm font-medium tracking-[0.08em] text-fg"
        >
          PENGRAN CHEN
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[13px] tracking-wide">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative py-1 transition-colors ${
                  active
                    ? "text-fg"
                    : "text-fg-dim hover:text-fg"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full bg-accent-orange transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
