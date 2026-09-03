import fs from "fs";
import path from "path";

/**
 * Server-only. Checks whether a file exists under /public.
 * Never import this from a "use client" module -- `fs` doesn't run in the browser.
 */
export function fileExists(relativePath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", relativePath));
  } catch {
    return false;
  }
}

/**
 * Resolves `filename` under public/images/<category>/<slug>/ to a public URL
 * if the file exists on disk, else undefined (caller renders a placeholder).
 */
export function resolveAsset(
  category: string,
  slug: string,
  filename: string | undefined
): string | undefined {
  if (!filename) return undefined;
  const rel = `images/${category}/${slug}/${filename}`;
  return fileExists(rel) ? `/${rel}` : undefined;
}
