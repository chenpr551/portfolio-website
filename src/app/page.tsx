import ParticleField from "@/components/ParticleField";
import { CategoryRow } from "@/components/CategoryRow";
import { LangText } from "@/components/LangText";
import { categoryMeta } from "@/data/projects";
import { CATEGORY_ACCENTS } from "@/lib/media";
import { ui } from "@/lib/ui-strings";

/** One representative cover per category, in categoryMeta order
 * (installations/ai-video/experimental-video/games), for the home page's
 * row-hover background reveal. */
const CATEGORY_COVERS = [
  "/images/installations/temporary-roommate/cover.webp",
  "/images/ai-video/patrol/cover.webp",
  "/images/experimental-video/between-steps/cover.webp",
  "/images/games/close-the-ad/cover.webp",
];

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
            <CategoryRow
              key={c.slug}
              href={`/${c.slug}`}
              index={i}
              label={c.label}
              labelEn={c.labelEn}
              accent={CATEGORY_ACCENTS[i % CATEGORY_ACCENTS.length]}
              coverSrc={CATEGORY_COVERS[i % CATEGORY_COVERS.length]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
