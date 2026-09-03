import { Fragment } from "react";
import type { DetailBlock } from "@/data/projects";
import { BLOCK_COLORS } from "@/lib/media";
import { ImageSlot } from "./custom-details/ImageSlot";

const STEP_TEXT_COLORS = [
  "text-accent-orange",
  "text-accent-lime",
  "text-accent-yellow",
  "text-accent-blue",
];

function BlockLabel({ index, zh, en }: { index: number; zh: string; en: string }) {
  return (
    <div className="flex items-baseline gap-2 font-display text-[11px] tracking-[0.15em] text-fg-dim">
      <span className="num">{String(index).padStart(2, "0")}</span>
      <span>
        · {zh} {en}
      </span>
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
  return (
    <div>
      <BlockLabel index={index} zh="概念" en="CONCEPT" />
      <div className="mt-4 max-w-[760px] space-y-4 border-l-2 border-accent-orange pl-5">
        {block.quote.map((paragraph, i) => (
          <p key={i} className="font-display text-[23px] font-bold leading-snug">
            {paragraph}
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
          {block.body}
        </p>
      )}
      {block.body2 && (
        <div className="mt-6 max-w-[760px]">
          {block.body2.heading && (
            <p className="mb-2 font-display text-sm font-medium text-fg">
              {block.body2.heading}
            </p>
          )}
          <p className="text-[15px] leading-[1.7] text-fg-dim">{block.body2.text}</p>
        </div>
      )}
      {block.toolsNote && (
        <p className="mt-4 text-xs tracking-wide text-fg-dim">{block.toolsNote}</p>
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
  return (
    <div>
      <BlockLabel index={index} zh="技术流程" en="PROCESS" />
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
              <p className="mt-1 text-xs leading-relaxed text-fg-dim">{node.caption}</p>
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
        <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">{block.summary}</p>
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
  const zh = block.heading ?? "交互规则";
  const en = block.headingEn ?? "HOW IT WORKS";

  if (block.compact) {
    return (
      <div>
        <BlockLabel index={index} zh={zh} en={en} />
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-5">
          {block.steps.map((step, i) => (
            <div key={step.title} className="w-full sm:w-[calc(33.333%-1rem)]">
              <span className={`font-display text-sm font-bold ${STEP_TEXT_COLORS[i % STEP_TEXT_COLORS.length]}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-display text-sm font-bold">{step.title}</p>
              {step.caption && (
                <p className="mt-1 text-xs leading-relaxed text-fg-dim">{step.caption}</p>
              )}
            </div>
          ))}
        </div>
        {block.note && (
          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">{block.note}</p>
        )}
      </div>
    );
  }

  return (
    <div>
      <BlockLabel index={index} zh={zh} en={en} />
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
        {block.steps.map((step, i) => (
          <Fragment key={step.title}>
            <div className="flex-1 border border-line px-4 py-4">
              <span className={`font-display text-sm font-bold ${STEP_TEXT_COLORS[i % STEP_TEXT_COLORS.length]}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <ImageSlot
                filename={step.title}
                src={step.src}
                aspect="aspect-[16/10]"
                className="mt-3"
              />
              <p className="mt-3 font-display text-sm font-bold">{step.title}</p>
              {step.caption && (
                <p className="mt-1 text-xs leading-relaxed text-fg-dim">{step.caption}</p>
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
        <p className="mt-5 max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">{block.note}</p>
      )}
      {block.noteImages && block.noteImages.length > 0 && (
        <div className="mt-3 flex max-w-[760px] gap-3">
          {block.noteImages.map((img) => (
            <ImageSlot
              key={img.src}
              filename={img.filename}
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
  return (
    <div>
      <BlockLabel index={index} zh={block.heading ?? "配图"} en={block.headingEn ?? "VISUALS"} />
      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Array.from({ length: block.count }).map((_, i) => (
          <div
            key={i}
            className="flex aspect-[4/3] items-center justify-center border border-dashed border-line"
          >
            <span className="px-2 text-center font-display text-[10px] tracking-widest text-fg-dim">
              VISUAL PLACEHOLDER
            </span>
          </div>
        ))}
      </div>
      {block.note && <p className="mt-3 text-xs leading-relaxed text-fg-dim">{block.note}</p>}
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
  return (
    <div>
      <BlockLabel index={index} zh="现场反馈" en="FEEDBACK" />
      <div className="mt-5 space-y-6">
        {block.quotes.map((q, i) => (
          <div key={i}>
            <span className="font-display text-4xl leading-none text-accent-lime">“</span>
            <p className="mt-1 max-w-[760px] text-lg italic leading-relaxed text-fg">{q.text}</p>
            {q.source && (
              <p className="mt-2 text-xs tracking-wide text-fg-dim">— {q.source}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function BodyBlock({ block }: { block: Extract<DetailBlock, { type: "body" }> }) {
  return (
    <div>
      {block.heading && (
        <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">
          {block.heading}
        </p>
      )}
      <div className="mt-3 max-w-[760px] space-y-3">
        {block.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-[1.7] text-fg-dim">
            {p}
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
  infoStrip?: string;
  blocks?: DetailBlock[];
}) {
  if (!infoStrip && (!blocks || blocks.length === 0)) return null;

  let numberedIndex = 0;

  return (
    <div>
      {infoStrip && (
        <div className="mb-8 inline-block rounded-full border border-line px-3 py-1 text-[11px] tracking-wide text-fg-dim">
          {infoStrip}
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
