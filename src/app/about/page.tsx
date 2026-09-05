import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import { LangOnly } from "@/components/LangText";

export const metadata: Metadata = { title: "关于 About — Pengran Chen" };

export default function AboutPage() {
  return (
    <div className="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <span className="num font-display text-sm text-fg-dim">05</span>
        <h1 className="mt-3 font-display text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl">
          <LangOnly show="zh">
            关于
            <span className="ml-4 align-middle text-lg font-normal tracking-wide text-fg-dim sm:text-2xl">
              About
            </span>
          </LangOnly>
          <LangOnly show="en">About</LangOnly>
        </h1>

        <AboutContent />
      </div>
    </div>
  );
}
