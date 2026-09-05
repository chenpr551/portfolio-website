"use client";

import { useLanguage } from "@/lib/language";
import { ImageSlot } from "./ImageSlot";

const MJ_PARAMS = "--ar16:9 --raw --v7 --stylize 200 --chaos 10";

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

export function PatrolDetail({ images = {} }: { images?: Record<string, string | undefined> }) {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <div key={lang} className="lang-fade">
      {/* 1. 标题区 */}
      <section className="relative overflow-hidden border-b border-line py-10 sm:py-14">
        <ImageSlot
          filename={PATROL_ASSETS["still-1"]}
          src={images["still-1"]}
          variant="bg"
          className="opacity-40"
        />
        <div className="relative">
          <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">
            PATROL — CONSTRUCTING A &quot;COMPUTED UNIVERSE&quot;
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            {isZh
              ? "构建一个「被计算的宇宙」：通过非人类的视角"
              : 'Constructing a "Computed Universe" Through Non-human Vision'}
          </h2>
          {isZh && (
            <p className="mt-1 max-w-2xl text-sm tracking-wide text-fg-dim">
              Constructing a &quot;Computed Universe&quot; Through Non-human Vision
            </p>
          )}
        </div>
      </section>

      {/* 2. 剧照网格 */}
      <section className="border-b border-line py-9">
        <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">
          {isZh ? "剧照 STILLS" : "STILLS"}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <ImageSlot
              key={n}
              filename={PATROL_ASSETS[`still-${n}`]}
              src={images[`still-${n}`]}
              aspect="aspect-[4/3]"
            />
          ))}
        </div>
      </section>

      {/* 3. 概念文本块 */}
      <section className="border-b border-line py-9">
        <p className="font-display text-sm font-bold tracking-wide">
          {isZh ? "「生活在超对象之中：AI与技术圈层」" : "Living with Hyperobjects — AI and the Technosphere"}
        </p>
        {isZh && (
          <p className="text-xs tracking-wide text-fg-dim">
            Living with Hyperobjects — AI and the Technosphere
          </p>
        )}
        <p className="mt-4 max-w-[760px] border-l-2 border-accent-orange pl-5 text-[15px] leading-[1.7] text-fg-dim">
          {isZh
            ? "在《Patrol》的世界里，AI并不认为人类的情感有意义，而是将其拆解为一个个独立的数据粒子。人类的情感冲突因此失去了私人意义，只被视为「数据异常」——只是需要被算法修复、管理、归一化的噪声。"
            : "In the world of Patrol, the AI doesn't see human emotions as meaningful or lived experiences. Instead, it breaks them down into separate data particles. Because of this, human emotional conflicts lose all their private meaning and are seen only as \"data irregularities.\" To the AI, these are just noise in its computed universe that needs to be fixed, managed, or normalized through algorithms."}
        </p>
        <p className="mt-4 text-xs tracking-wide text-fg-dim">
          {isZh ? "使用工具：Ouster LiDAR, Seedance 2.0" : "Tools: Ouster LiDAR, Seedance 2.0"}
        </p>
      </section>

      {/* 4. 引语（大号拉出式引用） */}
      <section className="border-b border-line py-10">
        <p className="max-w-3xl font-display text-[28px] font-bold italic leading-snug sm:text-[36px]">
          &quot;mosaic-like combinations of particles&quot;
        </p>
        <p className="mt-3 text-sm tracking-wide text-fg-dim">— Flusser Vilem</p>
      </section>

      {/* 5. 装饰性横幅图形 */}
      <section className="overflow-hidden border-b border-line py-10">
        <div
          className="relative mx-auto w-[120%] -translate-x-[8%] -rotate-2 py-3 text-center"
          style={{
            backgroundColor: "var(--accent-orange)",
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(0,0,0,0.15) 0 14px, transparent 14px 28px)",
          }}
        >
          <p className="font-display text-lg font-black tracking-wide text-bg sm:text-2xl">
            {isZh ? "AI 与人类签署和平条约" : "AI Signs Peace Treaty with Humans"}
          </p>
          {isZh && (
            <p className="text-xs font-bold tracking-[0.2em] text-bg/80">
              AI SIGNS PEACE TREATY WITH HUMANS
            </p>
          )}
        </div>
      </section>

      {/* 6. 社会评论式小气泡引用 */}
      <section className="border-b border-line py-9">
        <div className="inline-block max-w-sm rounded-2xl rounded-bl-sm border border-line bg-bg-alt px-4 py-3 text-sm italic leading-relaxed text-fg-dim">
          &quot;Why should I have to pay $1200 to get medical care in my own province?&quot;
        </div>
      </section>

      {/* 7. 支撑图片 */}
      <section className="border-b border-line py-9">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ImageSlot
            filename={PATROL_ASSETS["light-installation"]}
            src={images["light-installation"]}
            note={isZh ? "彩色灯光装置 / 舞者照片" : "Colored light installation / dancer photo"}
            aspect="aspect-[4/3]"
          />
          <ImageSlot
            filename={PATROL_ASSETS["lidar-panorama"]}
            src={images["lidar-panorama"]}
            note={isZh ? "黑白 LiDAR 全景图" : "Black-and-white LiDAR panorama"}
            aspect="aspect-[4/3]"
          />
        </div>
      </section>

      {/* 8. 收尾文本 */}
      <section className="border-b border-line py-9">
        <p className="max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">
          {isZh
            ? "当 Ouster LiDAR 扫描是数字骨骼，AI生成的影像是算法皮肤——身体在哪里？我们该如何填补它？"
            : "When Ouster LiDAR scanning is the digital skeleton and AI-generated video is the algorithmic skin. Where is the body? How can we fill it?"}
        </p>
      </section>

      {/* 9. 装饰性底纹 */}
      <section className="overflow-hidden py-6">
        <div className="whitespace-nowrap font-mono text-[10px] tracking-widest text-fg-dim/30">
          {Array.from({ length: 8 }, () => MJ_PARAMS).join("   ")}
        </div>
      </section>
    </div>
  );
}
