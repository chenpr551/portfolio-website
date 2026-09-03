"use client";

import Image from "next/image";
import { useState, type ComponentType } from "react";
import type { DetailBlock } from "@/data/projects";
import { BLOCK_COLORS } from "@/lib/media";
import { useProjectAccordion } from "./ProjectAccordion";
import { ProjectDetail } from "./ProjectDetail";
import { PatrolDetail } from "./custom-details/PatrolDetail";
import { Patrol2Detail } from "./custom-details/Patrol2Detail";

const CUSTOM_LAYOUTS: Record<string, ComponentType> = {
  patrol: PatrolDetail,
  "patrol-2": Patrol2Detail,
};

export function ProjectMediaCard({
  id,
  index,
  title,
  year,
  categoryLabel,
  youtubeId,
  seed,
  infoStrip,
  detail,
  coverSrc,
  customLayout,
}: {
  id: string;
  index: number;
  title: string;
  year: number;
  categoryLabel?: string;
  youtubeId?: string;
  seed: number;
  infoStrip?: string;
  detail?: DetailBlock[];
  coverSrc?: string;
  customLayout?: boolean;
}) {
  const { expandedId, toggle } = useProjectAccordion();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const isOpen = expandedId === id;
  const color = BLOCK_COLORS[seed % BLOCK_COLORS.length];
  const CustomDetail = customLayout ? CUSTOM_LAYOUTS[id] : undefined;
  const hasDetail = CustomDetail || infoStrip || (detail && detail.length > 0);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => toggle(id)}
        aria-expanded={isOpen}
        className="group relative block aspect-video w-full cursor-pointer overflow-hidden border border-line bg-bg-alt text-left"
      >
        {coverSrc ? (
          <Image
            src={coverSrc}
            alt={title}
            fill
            sizes="(min-width: 1400px) 1400px, 100vw"
            priority={index < 2}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : (
          <>
            <div
              className={`absolute -right-10 -top-16 h-64 w-64 rotate-12 ${color} opacity-90 transition-transform duration-500 ease-out group-hover:scale-110`}
            />
            <div className="absolute left-10 bottom-14 h-24 w-24 rounded-full border border-fg/30" />
            <span className="absolute left-4 top-4 font-display text-[11px] tracking-widest text-fg-dim">
              VISUAL PLACEHOLDER
            </span>
          </>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/95" />

        <div className="absolute bottom-0 right-0 p-5 text-right sm:p-8">
          <div className="flex items-baseline justify-end gap-3 font-display">
            <span className="num text-sm text-white/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="num text-sm text-white/70">
              {year}
              {categoryLabel ? ` · ${categoryLabel}` : ""}
            </span>
          </div>
          <h3 className="mt-1 font-display text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl">
            {title}
          </h3>
        </div>

        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-transform duration-300 group-hover:scale-110">
          {isOpen ? "×" : youtubeId ? "▶" : "+"}
        </div>
      </button>

      <div
        className="grid transition-[grid-template-rows] ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transitionDuration: "350ms",
        }}
      >
        <div className="overflow-hidden">
          <div
            className={`transition-opacity duration-300 ${
              isOpen ? "opacity-100 delay-150" : "opacity-0"
            }`}
          >
            {isOpen && (
              <div className="border border-t-0 border-line bg-bg-alt/40 px-5 py-6 sm:px-8">
                <button
                  type="button"
                  onClick={() => toggle(id)}
                  aria-label="收起"
                  className="mb-5 flex items-center gap-2 text-xs tracking-widest text-fg-dim transition-colors hover:text-fg"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line">
                    ×
                  </span>
                  收起 CLOSE
                </button>

                {youtubeId && (
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    {iframeLoaded ? (
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                        title={title}
                        allow="accelerate; autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIframeLoaded(true)}
                        className="group relative block h-full w-full"
                        aria-label={`播放 ${title}`}
                      >
                        <Image
                          src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
                          alt={title}
                          fill
                          sizes="(min-width: 1400px) 1400px, 100vw"
                          className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                        />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-2xl text-bg transition-transform group-hover:scale-110">
                            ▶
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                )}

                {hasDetail && (
                  <div className={youtubeId ? "mt-9" : ""}>
                    {CustomDetail ? (
                      <CustomDetail />
                    ) : (
                      <ProjectDetail infoStrip={infoStrip} blocks={detail} />
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
