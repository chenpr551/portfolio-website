export type VideoEmbed =
  | { kind: "youtube"; id: string }
  | { kind: "xinpianchang"; aid: string; mid: string };

/** Facade thumbnail shown before the iframe loads. YouTube has a public
 * thumbnail CDN; xinpianchang doesn't, so callers fall back to the
 * project's own cover image for that case. */
export function getEmbedThumbnail(embed: VideoEmbed): string | undefined {
  return embed.kind === "youtube" ? `https://img.youtube.com/vi/${embed.id}/hqdefault.jpg` : undefined;
}

export function getEmbedIframeSrc(embed: VideoEmbed): string {
  return embed.kind === "youtube"
    ? `https://www.youtube.com/embed/${embed.id}?autoplay=1`
    : `https://player.xinpianchang.com/?aid=${embed.aid}&mid=${embed.mid}`;
}
