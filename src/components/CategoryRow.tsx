"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LangOnly, LangText } from "./LangText";
import { useCursorAccent } from "@/lib/cursor";

export function CategoryRow({
  href,
  index,
  label,
  labelEn,
  accent,
  coverSrc,
}: {
  href: string;
  index: number;
  label: string;
  labelEn: string;
  accent: string;
  coverSrc: string;
}) {
  const [hovered, setHovered] = useState(false);
  const { setAccent } = useCursorAccent();

  return (
    <Link
      href={href}
      className={`nav-row group flex items-baseline justify-between gap-6 border-b border-line py-8 transition-colors last:border-b-0 sm:py-10 ${
        hovered ? "is-hovered" : ""
      }`}
      onMouseEnter={() => {
        setHovered(true);
        setAccent(accent);
      }}
      onMouseLeave={() => {
        setHovered(false);
        setAccent(null);
      }}
    >
      <div className="nav-row-bg" aria-hidden="true">
        <Image src={coverSrc} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="nav-row-content flex items-baseline gap-5 sm:gap-8">
        <span className="num font-display text-sm text-fg-dim">
          {String(index + 1).padStart(2, "0")}
        </span>
        <LangText
          as="span"
          className="block font-display text-4xl font-medium tracking-tight transition-colors group-hover:text-accent-orange sm:text-6xl"
          field={{ zh: label, en: labelEn }}
        />
        <LangOnly show="zh">
          <span className="hidden text-sm tracking-wide text-fg-dim sm:inline">{labelEn}</span>
        </LangOnly>
      </div>
      <span className="nav-row-content font-display text-2xl text-fg-dim transition-transform group-hover:translate-x-2 group-hover:text-fg sm:text-3xl">
        →
      </span>
    </Link>
  );
}
