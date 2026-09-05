import { categoryMeta, type Project } from "@/data/projects";
import { resolveAsset } from "@/lib/assets";
import { resolveProject } from "@/lib/resolveProject";
import { getYouTubeId } from "@/lib/youtube";
import { LangText } from "./LangText";
import { ProjectMediaCard } from "./ProjectMediaCard";
import { PATROL_ASSETS } from "./custom-details/PatrolDetail";
import { PATROL2_ASSETS } from "./custom-details/Patrol2Detail";

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
        categoryLabel={
          categoryMeta[project.category]
            ? { zh: categoryMeta[project.category].label, en: categoryMeta[project.category].labelEn }
            : undefined
        }
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
          <LangText as="span" className="block font-display text-sm text-fg-dim" field={project.client} />
        )}

        {project.role && (
          <LangText as="p" className="mt-3 block text-sm text-fg-dim" field={project.role} />
        )}

        <LangText
          as="p"
          className="mt-5 block max-w-prose text-[15px] leading-relaxed text-fg/90"
          field={project.description}
        />

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <LangText
              key={tool.en}
              as="span"
              className="block rounded-full border border-line px-3 py-1 text-[12px] text-fg-dim"
              field={tool}
            />
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
                <LangText field={link.label} />
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
