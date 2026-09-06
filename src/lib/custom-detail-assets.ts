/**
 * Bare filenames for the Patrol / Patrol 2 custom detail layouts.
 *
 * Kept in a plain (non-"use client") module so Server Components (ProjectEntry)
 * can read the real object at build/render time -- importing a named export from
 * a "use client" file from server code resolves to an opaque client reference,
 * not the actual value, which silently produced an empty asset map.
 */

/** key -> bare filename under public/images/ai-video/patrol/ */
export const PATROL_ASSETS: Record<string, string> = {
  "still-1": "still-1.webp",
  "still-2": "still-2.webp",
  "still-3": "still-3.webp",
  "still-4": "still-4.webp",
  "still-5": "still-5.webp",
  "still-6": "still-6.webp",
  "banner-treaty": "banner-treaty.jpg",
  "light-installation": "light-installation.webp",
  "lidar-panorama": "lidar-panorama.webp",
};

/** key -> bare filename under public/images/ai-video/patrol-2/ */
export const PATROL2_ASSETS: Record<string, string> = {
  "node-wireframe": "node-wireframe.webp",
  "node-sphere": "node-sphere.webp",
  "node-datatexture": "node-datatexture.webp",
  "node-gradient": "node-gradient.webp",
  "camera-in-scene": "camera-in-scene.webp",
  "cityscape-wide": "cityscape-wide.webp",
  "child-statue": "child-statue.webp",
  "final-1": "final-1.webp",
  "final-2": "final-2.webp",
};
