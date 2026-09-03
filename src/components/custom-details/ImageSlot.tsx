import Image from "next/image";

export function ImageSlot({
  filename,
  note,
  aspect = "aspect-[4/3]",
  variant = "block",
  className = "",
  src,
  alt,
}: {
  filename: string;
  note?: string;
  aspect?: string;
  variant?: "block" | "bg";
  className?: string;
  src?: string;
  alt?: string;
}) {
  if (src) {
    if (variant === "bg") {
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <Image src={src} alt={alt ?? filename} fill sizes="100vw" className="object-cover" />
        </div>
      );
    }
    return (
      <div
        className={`relative overflow-hidden border border-line bg-bg-alt ${aspect} ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? filename}
          fill
          sizes="(min-width: 1400px) 700px, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (variant === "bg") {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center overflow-hidden bg-bg-alt/50 ${className}`}
      >
        <span className="rotate-[-6deg] whitespace-nowrap font-display text-[10px] tracking-widest text-fg-dim/40">
          {filename}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 border border-dashed border-line bg-bg-alt/40 px-3 py-4 text-center ${aspect} ${className}`}
    >
      <span className="font-display text-[10px] tracking-widest text-fg-dim">
        VISUAL PLACEHOLDER
      </span>
      {note && (
        <span className="max-w-[85%] text-[10px] leading-snug text-fg-dim/80">{note}</span>
      )}
      <span className="font-mono text-[9px] text-fg-dim/60">{filename}</span>
    </div>
  );
}
