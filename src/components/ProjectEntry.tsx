import type { Project } from "@/data/projects";

const BLOCK_COLORS = [
  "bg-accent-orange",
  "bg-accent-lime",
  "bg-accent-blue",
  "bg-accent-yellow",
];

function GeometricPlaceholder({ seed }: { seed: number }) {
  const color = BLOCK_COLORS[seed % BLOCK_COLORS.length];
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-line bg-bg-alt">
      <div
        className={`absolute -right-8 -top-10 h-40 w-40 rotate-12 ${color} opacity-90 mix-blend-lighten`}
      />
      <div className="absolute left-6 bottom-6 h-16 w-16 rounded-full border border-fg/30" />
      <span className="absolute bottom-3 right-4 font-display text-[11px] tracking-widest text-fg-dim">
        VISUAL PLACEHOLDER
      </span>
    </div>
  );
}

export function ProjectEntry({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="grid grid-cols-1 gap-8 border-t border-line py-14 sm:py-20 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-5">
        <GeometricPlaceholder seed={index} />
      </div>

      <div className="lg:col-span-7">
        <div className="flex items-baseline gap-4 font-display">
          <span className="num text-sm text-fg-dim">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="num text-sm text-fg-dim">{project.year}</span>
          {project.client && (
            <span className="text-sm text-fg-dim">· {project.client}</span>
          )}
        </div>

        <h3 className="mt-3 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          {project.title}
        </h3>

        {project.role && (
          <p className="mt-3 text-sm text-fg-dim">{project.role}</p>
        )}

        <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-fg/90">
          {project.description}
        </p>

        {project.process && project.process.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] tracking-wide text-fg-dim">
            {project.process.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-line px-3 py-1">
                  {step}
                </span>
                {i < project.process!.length - 1 && <span>→</span>}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-line px-3 py-1 text-[12px] text-fg-dim"
            >
              {tool}
            </span>
          ))}
        </div>

        {project.quotes && project.quotes.length > 0 && (
          <div className="mt-6 space-y-2">
            {project.quotes.map((q) => (
              <blockquote
                key={q}
                className="border-l-2 border-accent-orange pl-4 text-sm italic text-fg-dim"
              >
                “{q}”
              </blockquote>
            ))}
          </div>
        )}

        {project.links && project.links.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-5">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm tracking-wide text-fg transition-colors hover:text-accent-orange"
              >
                {link.label}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function ProjectLine({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-baseline sm:gap-6 sm:py-7">
      <span className="num font-display text-sm text-fg-dim sm:w-10">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-display text-2xl font-medium tracking-tight sm:flex-1 sm:text-3xl">
        {project.title}
      </h3>
      <span className="num text-sm text-fg-dim">{project.year}</span>
      <div className="flex flex-wrap gap-2 sm:w-64 sm:justify-end">
        {project.tools.slice(0, 3).map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-line px-3 py-1 text-[11px] text-fg-dim"
          >
            {tool}
          </span>
        ))}
      </div>
      {project.links && project.links.length > 0 && (
        <a
          href={project.links[0].url}
          target="_blank"
          rel="noreferrer"
          className="text-sm tracking-wide text-fg-dim transition-colors group-hover:text-accent-orange sm:w-24 sm:text-right"
        >
          {project.links[0].label} →
        </a>
      )}
      {project.description && (
        <p className="basis-full pt-1 text-sm leading-relaxed text-fg-dim sm:hidden">
          {project.description}
        </p>
      )}
    </article>
  );
}
