import { categoryMeta, type Project } from "@/data/projects";
import { resolveAsset } from "@/lib/assets";
import { resolveProject } from "@/lib/resolveProject";
import { getYouTubeId } from "@/lib/youtube";
import { ProjectMediaCard } from "./ProjectMediaCard";
import { PATROL_ASSETS } from "./custom-details/PatrolDetail";
import { PATROL2_ASSETS } from "./custom-details/Patrol2Detail";
import Image from "next/image";

function resolveCustomImages(project: Project): Record<string, string | undefined> | undefined {
  const slug = project.assetSlug ?? project.id;
  if (project.id === "patrol") {
    return Object.fromEntries(
      Object.entries(PATROL_ASSETS).map(([key, filename]) => [
        key,
        resolveAsset(project.category, slug, filename),
      ])
    );
  }
  if (project.id === "patrol-2") {
    return Object.fromEntries(
      Object.entries(PATROL2_ASSETS).map(([key, filename]) => [
        key,
        resolveAsset(project.category, slug, filename),
      ])
    );
  }
  return undefined;
}

export function ProjectEntry({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const resolved = resolveProject(project);
  const videoLink = project.links?.find((link) => getYouTubeId(link.url));
  const youtubeId = videoLink ? getYouTubeId(videoLink.url) ?? undefined : undefined;
  const otherLinks = project.links?.filter((link) => link !== videoLink) ?? [];

  return (
    <article className="border-t border-line py-14 sm:py-20">
      <ProjectMediaCard
        id={project.id}
        index={index}
        title={project.title}
        year={project.year}
        categoryLabel={categoryMeta[project.category]?.label}
        youtubeId={youtubeId}
        seed={index}
        infoStrip={resolved.infoStrip}
        detail={resolved.detail}
        coverSrc={resolved.coverSrc}
        customLayout={project.layout === "custom"}
        customImages={resolveCustomImages(project)}
      />

      <div className="mt-8 max-w-[760px]">
        {project.client && (
          <span className="font-display text-sm text-fg-dim">{project.client}</span>
        )}

        {project.role && <p className="mt-3 text-sm text-fg-dim">{project.role}</p>}

        <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-fg/90">
          {project.description}
        </p>

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

        {otherLinks.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-5">
            {otherLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm tracking-wide text-fg transition-colors hover:text-accent-orange"
              >
                {link.label}
                <span className="transition-transform group-hover:translate-x-1">→</span>
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
  const coverSrc = resolveAsset(project.category, project.assetSlug ?? project.id, "cover.webp");

  return (
    <article className="group flex flex-col gap-2 border-t border-line py-6 sm:flex-row sm:items-baseline sm:gap-6 sm:py-7">
      <span className="num font-display text-sm text-fg-dim sm:w-10">
        {String(index + 1).padStart(2, "0")}
      </span>
      {coverSrc && (
        <div className="relative h-14 w-24 shrink-0 overflow-hidden border border-line bg-bg-alt">
          <Image src={coverSrc} alt={project.title} fill sizes="96px" className="object-cover" />
        </div>
      )}
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
