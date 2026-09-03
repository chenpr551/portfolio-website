import "server-only";
import type { DetailBlock, Project } from "@/data/projects";
import { resolveAsset } from "./assets";

function resolveBlock(category: string, slug: string, block: DetailBlock): DetailBlock {
  switch (block.type) {
    case "process":
      return {
        ...block,
        nodes: block.nodes.map((n) => ({
          ...n,
          src: resolveAsset(category, slug, n.src),
        })),
      };
    case "steps":
      return {
        ...block,
        steps: block.steps.map((s) => ({
          ...s,
          src: resolveAsset(category, slug, s.src),
        })),
        noteImages: block.noteImages
          ?.map((img) => ({ ...img, src: resolveAsset(category, slug, img.src) }))
          .filter((img): img is { src: string; filename: string } => Boolean(img.src)),
      };
    case "visuals":
      return {
        ...block,
        images: block.images.map((img) => ({
          ...img,
          src: resolveAsset(category, slug, img.filename),
        })),
      };
    case "feedback":
      return {
        ...block,
        quotes: block.quotes.map((q) => ({
          ...q,
          src: resolveAsset(category, slug, q.src),
        })),
      };
    default:
      return block;
  }
}

/**
 * Resolves every bare filename in a project's detail blocks (and its cover)
 * against the filesystem, replacing each with a real URL if the file exists
 * under public/images/<category>/<slug>/, or undefined otherwise so the
 * caller renders its placeholder. Server-only -- call this in a Server
 * Component before handing the project to client components.
 */
export function resolveProject(project: Project): Project & { coverSrc?: string } {
  const category = project.category;
  const slug = project.assetSlug ?? project.id;

  return {
    ...project,
    coverSrc: resolveAsset(category, slug, "cover.webp"),
    detail: project.detail?.map((block) => resolveBlock(category, slug, block)),
  };
}
