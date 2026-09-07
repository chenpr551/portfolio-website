export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname === "youtu.be") return u.pathname.slice(1).split("/")[0] || null;
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") return u.searchParams.get("v");
      // Covers /embed/ID, /shorts/ID, /v/ID, /live/ID -- any future path-based
      // format can be added to this alternation without touching the caller.
      const match = u.pathname.match(/^\/(?:embed|shorts|v|live)\/([^/]+)/);
      if (match) return match[1];
    }
    return null;
  } catch {
    return null;
  }
}
