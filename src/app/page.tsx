import Link from "next/link";
import ParticleField from "@/components/ParticleField";
import { LangOnly, LangText } from "@/components/LangText";
import { categoryMeta } from "@/data/projects";
import { ui } from "@/lib/ui-strings";

export default function Home() {
  const entries = Object.values(categoryMeta);

  return (
    <>
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-16 pt-32 sm:px-8">
        <ParticleField />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

        <div className="relative z-10">
          <LangText
            as="p"
            className="block font-display text-sm tracking-[0.2em] text-fg-dim"
            field={ui.homeName}
          />
          <LangText
            as="h1"
            className="mt-4 block max-w-4xl whitespace-pre-line font-display text-6xl font-medium leading-[0.95] tracking-tight sm:text-8xl"
            field={ui.homeHero}
          />
          <LangText
            as="p"
            className="mt-6 block max-w-md text-[15px] leading-relaxed text-fg-dim"
            field={ui.homeSubtitle}
          />
        </div>
      </section>

      <section className="border-t border-line px-5 py-6 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          {entries.map((c, i) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group flex items-baseline justify-between gap-6 border-b border-line py-8 transition-colors last:border-b-0 sm:py-10"
            >
              <div className="flex items-baseline gap-5 sm:gap-8">
                <span className="num font-display text-sm text-fg-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <LangText
                  as="span"
                  className="block font-display text-4xl font-medium tracking-tight transition-colors group-hover:text-accent-orange sm:text-6xl"
                  field={{ zh: c.label, en: c.labelEn }}
                />
                <LangOnly show="zh">
                  <span className="hidden text-sm tracking-wide text-fg-dim sm:inline">
                    {c.labelEn}
                  </span>
                </LangOnly>
              </div>
              <span className="font-display text-2xl text-fg-dim transition-transform group-hover:translate-x-2 group-hover:text-fg sm:text-3xl">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
