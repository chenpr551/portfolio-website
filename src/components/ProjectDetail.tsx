"use client";

import { Fragment } from "react";
import Image from "next/image";
import type { DetailBlock } from "@/data/projects";
import type { Bilingual } from "@/lib/language";
import { useLanguage } from "@/lib/language";
import { ui } from "@/lib/ui-strings";
import { BLOCK_COLORS } from "@/lib/media";
import { ImageSlot } from "./custom-details/ImageSlot";

const STEP_TEXT_COLORS = [
  "text-accent-orange",
  "text-accent-lime",
  "text-accent-yellow",
  "text-accent-blue",
];

function BlockLabel({ index, label }: { index: number; label: Bilingual }) {
  const { lang } = useLanguage();
  return (
    <div className="flex items-baseline gap-2 font-display text-[11px] tracking-[0.15em] text-fg-dim">
      <span className="num">{String(index).padStart(2, "0")}</span>
      <span>· {label[lang]}</span>
    </div>
  );
}

function ConceptBlock({
  index,
  block,
}: {
  index: number;
  block: Extract<DetailBlock, { type: "concept" }>;
}) {
  const { lang } = useLanguage();
  return (
    <div>
      <BlockLabel index={index} label={ui.blockConcept} />
      <div className="mt-4 max-w-[760px] space-y-4 border-l-2 border-accent-orange pl-5">
        {block.quote.map((paragraph, i) => (
          <p key={i} className="font-display text-[23px] font-bold leading-snug">
            {paragraph[lang]}
          </p>
        ))}
      </div>
      {block.citation && (
        <p className="mt-4 max-w-[760px] pl-5 text-sm italic text-fg-dim">
          “{block.citation.text}” — {block.citation.source}
        </p>
      )}
      {block.body && (
        <p className="mt-4 max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">
          {block.body[lang]}
        </p>
      )}
      {block.body2 && (
        <div className="mt-6 max-w-[760px]">
          {block.body2.heading && (
            <p className="mb-2 font-display text-sm font-medium text-fg">
              {block.body2.heading[lang]}
            </p>
          )}
          <p className="text-[15px] leading-[1.7] text-fg-dim">{block.body2.text[lang]}</p>
        </div>
      )}
      {block.toolsNote && (
        <p className="mt-4 text-xs tracking-wide text-fg-dim">{block.toolsNote[lang]}</p>
      )}
    </div>
  );
}

function ProcessBlock({
  index,
  block,
}: {
  index: number;
  block: Extract<DetailBlock, { type: "process" }>;
}) {
  const { lang } = useLanguage();
  return (
    <div>
      <BlockLabel index={index} label={ui.blockProcess} />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
        {block.nodes.map((node, i) => (
          <Fragment key={node.name}>
            <div className="flex-1 border border-line px-4 py-3">
              {node.src && (
                <ImageSlot filename={node.name} src={node.src} aspect="aspect-video" className="mb-3" />
              )}
              <span
                className={`inline-block h-2.5 w-2.5 rounded-sm ${
                  BLOCK_COLORS[i % BLOCK_COLORS.length]
                }`}
              />
              <p className="mt-2 font-display text-sm font-bold">{node.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-fg-dim">{node.caption[lang]}</p>
            </div>
            {i < block.nodes.length - 1 && (
              <div className="flex items-center justify-center py-1 text-fg-dim/50 sm:px-3 sm:py-0">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
      {block.summary && (
        <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">
          {block.summary[lang]}
        </p>
      )}
    </div>
  );
}

function StepsBlock({
  index,
  block,
}: {
  index: number;
  block: Extract<DetailBlock, { type: "steps" }>;
}) {
  const { lang } = useLanguage();
  const label: Bilingual = block.heading
    ? { zh: `${block.heading.zh} HOW IT WORKS`, en: block.heading.en }
    : ui.blockHowItWorks;

  if (block.compact) {
    return (
      <div>
        <BlockLabel index={index} label={label} />
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-8">
          {block.steps.map((step, i) => (
            <div key={step.title.en} className="w-full sm:w-[calc(33.333%-1rem)]">
              <span className={`font-display text-sm font-bold ${STEP_TEXT_COLORS[i % STEP_TEXT_COLORS.length]}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <ImageSlot
                filename={step.title[lang]}
                src={step.src}
                aspect="aspect-[4/3]"
                className="mt-2"
              />
              <p className="mt-2 font-display text-sm font-bold">{step.title[lang]}</p>
              {step.caption && (
                <p className="mt-1 text-xs leading-relaxed text-fg-dim">{step.caption[lang]}</p>
              )}
            </div>
          ))}
        </div>
        {block.note && (
          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">
            {block.note[lang]}
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <BlockLabel index={index} label={label} />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
        {block.steps.map((step, i) => (
          <Fragment key={step.title.en}>
            <div className="flex-1 border border-line px-4 py-4">
              <span className={`font-display text-sm font-bold ${STEP_TEXT_COLORS[i % STEP_TEXT_COLORS.length]}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <ImageSlot
                filename={step.title[lang]}
                src={step.src}
                aspect="aspect-[16/10]"
                className="mt-3"
              />
              <p className="mt-3 font-display text-sm font-bold">{step.title[lang]}</p>
              {step.caption && (
                <p className="mt-1 text-xs leading-relaxed text-fg-dim">{step.caption[lang]}</p>
              )}
            </div>
            {i < block.steps.length - 1 && (
              <div className="flex items-center justify-center py-1 text-fg-dim/50 sm:px-3 sm:py-0">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
      {block.note && (
        <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">
          {block.note[lang]}
        </p>
      )}
      {block.noteImages && block.noteImages.length > 0 && (
        <div className="mt-3 flex max-w-[760px] gap-3">
          {block.noteImages.map((img) => (
            <ImageSlot
              key={img.src}
              filename={img.filename[lang]}
              src={img.src}
              aspect="aspect-[4/3]"
              className="flex-1"
            />
          ))}
        </div>
      )}
    </div>
  );
}

function VisualsBlock({
  index,
  block,
}: {
  index: number;
  block: Extract<DetailBlock, { type: "visuals" }>;
}) {
  const { lang } = useLanguage();
  const label: Bilingual = block.heading
    ? { zh: `${block.heading.zh} VISUALS`, en: block.heading.en }
    : ui.blockVisuals;

  return (
    <div>
      <BlockLabel index={index} label={label} />
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {block.images.map((img) => (
          <ImageSlot
            key={img.filename}
            filename={img.filename}
            src={img.src}
            aspect="aspect-[4/3]"
          />
        ))}
      </div>
      {block.note && (
        <p className="mt-3 text-xs leading-relaxed text-fg-dim">{block.note[lang]}</p>
      )}
    </div>
  );
}

function FeedbackBlock({
  index,
  block,
}: {
  index: number;
  block: Extract<DetailBlock, { type: "feedback" }>;
}) {
  const { lang } = useLanguage();
  const introQuotes = block.quotes.filter((q) => !q.src);
  const photoQuotes = block.quotes.filter((q) => q.src);
  const photoPending = lang === "zh" ? "照片待放" : "Photo Pending";
  const onSitePhoto = lang === "zh" ? "现场照片" : "On-site Photo";

  return (
    <div>
      <BlockLabel index={index} label={ui.blockFeedback} />

      {introQuotes.length > 0 && (
        <div className="mt-5 space-y-6">
          {introQuotes.map((q, i) => (
            <div key={i}>
              <span className="font-display text-4xl leading-none text-accent-lime">“</span>
              <p className="mt-1 max-w-[760px] text-lg italic leading-relaxed text-fg">
                {q.text}
              </p>
              {q.source && (
                <p className="mt-2 text-xs tracking-wide text-fg-dim">— {q.source[lang]}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {photoQuotes.length > 0 && (
        <div
          className={`grid max-w-[760px] grid-cols-1 gap-10 sm:grid-cols-2 ${
            introQuotes.length > 0 ? "mt-10" : "mt-5"
          }`}
        >
          {photoQuotes.map((q, i) => (
            <div
              key={i}
              className={`group bg-[#f4f1ea] px-4 pb-12 pt-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out hover:rotate-0 hover:scale-[1.03] ${
                i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
              }`}
            >
              {q.src ? (
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={q.src}
                    alt={q.source ? q.source[lang] : onSitePhoto}
                    fill
                    sizes="(min-width: 1400px) 500px, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-[#e8e3d8] text-center">
                  <span className="px-4 font-handwriting text-lg text-[#2a2a2a]/50">
                    {photoPending}
                  </span>
                </div>
              )}
              <p className="mt-3 text-center font-handwriting text-lg leading-snug text-[#2a2a2a]">
                {q.text}
              </p>
              {q.source && (
                <p className="mt-1 text-center text-[10px] tracking-wide text-[#2a2a2a]/60">
                  — {q.source[lang]}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BodyBlock({ block }: { block: Extract<DetailBlock, { type: "body" }> }) {
  const { lang } = useLanguage();
  return (
    <div>
      {block.heading && (
        <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">
          {block.heading[lang]}
        </p>
      )}
      <div className="mt-3 max-w-[760px] space-y-3">
        {block.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-[1.7] text-fg-dim">
            {p[lang]}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ProjectDetail({
  infoStrip,
  blocks,
}: {
  infoStrip?: Bilingual;
  blocks?: DetailBlock[];
}) {
  const { lang } = useLanguage();
  if (!infoStrip && (!blocks || blocks.length === 0)) return null;

  let numberedIndex = 0;

  return (
    <div key={lang} className="lang-fade">
      {infoStrip && (
        <div className="mb-8 inline-block rounded-full border border-line px-3 py-1 text-[11px] tracking-wide text-fg-dim">
          {infoStrip[lang]}
        </div>
      )}
      {blocks?.map((block, i) => {
        if (block.type !== "body") numberedIndex += 1;
        return (
          <div key={i} className={i === 0 ? "pb-9" : "border-t border-line py-9"}>
            {block.type === "concept" && <ConceptBlock index={numberedIndex} block={block} />}
            {block.type === "process" && <ProcessBlock index={numberedIndex} block={block} />}
            {block.type === "steps" && <StepsBlock index={numberedIndex} block={block} />}
            {block.type === "visuals" && <VisualsBlock index={numberedIndex} block={block} />}
            {block.type === "feedback" && <FeedbackBlock index={numberedIndex} block={block} />}
            {block.type === "body" && <BodyBlock block={block} />}
          </div>
        );
      })}
    </div>
  );
}
