import Link from "next/link";
import ParticleField from "@/components/ParticleField";
import { categoryMeta } from "@/data/projects";

export default function Home() {
  const entries = Object.values(categoryMeta);

  return (
    <>
      <section className="relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-16 pt-32 sm:px-8">
        <ParticleField />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40" />

        <div className="relative z-10">
          <p className="font-display text-sm tracking-[0.2em] text-fg-dim">
            PENGRAN CHEN · 陈芃然
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-6xl font-medium leading-[0.95] tracking-tight sm:text-8xl">
            交互装置与
            <br />
            AI 影像艺术家
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg-dim">
            Interactive Installation &amp; AI Video Artist — 用新兴技术与分析性思维，
            在身体、空间与生成影像之间寻找叙事的裂缝。
          </p>
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
                <span className="font-display text-4xl font-medium tracking-tight transition-colors group-hover:text-accent-orange sm:text-6xl">
                  {c.label}
                </span>
                <span className="hidden text-sm tracking-wide text-fg-dim sm:inline">
                  {c.labelEn}
                </span>
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
