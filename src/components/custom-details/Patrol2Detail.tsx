"use client";

import { useLanguage } from "@/lib/language";
import { ui } from "@/lib/ui-strings";
import { ImageSlot } from "./ImageSlot";

const NODES = [
  { key: "node-wireframe", zh: "线框建筑", en: "Wireframe Buildings" },
  { key: "node-sphere", zh: "球体/菱形节点", en: "Sphere / Diamond Node" },
  { key: "node-datatexture", zh: "数据纹理", en: "Data Texture" },
  { key: "node-gradient", zh: "灰阶渐变", en: "Grayscale Gradient" },
];

/** key -> bare filename under public/images/ai-video/patrol-2/ */
export const PATROL2_ASSETS: Record<string, string> = {
  "node-wireframe": "node-wireframe.webp",
  "node-sphere": "node-sphere.webp",
  "node-datatexture": "node-datatexture.webp",
  "node-gradient": "node-gradient.webp",
  "camera-in-scene": "camera-in-scene.webp",
  "cityscape-wide": "cityscape-wide.webp",
  "handtrack-demo": "handtrack-demo.jpg",
  "child-statue": "child-statue.webp",
  "final-1": "final-1.webp",
  "final-2": "final-2.webp",
};

export function Patrol2Detail({ images = {} }: { images?: Record<string, string | undefined> }) {
  const { lang } = useLanguage();
  const isZh = lang === "zh";

  return (
    <div key={lang} className="lang-fade">
      {/* 1. 标题区 */}
      <section className="relative overflow-hidden border-b border-line py-10 sm:py-14">
        <div className="absolute right-0 top-0 h-full w-1/3">
          <ImageSlot
            filename={PATROL2_ASSETS["child-statue"]}
            src={images["child-statue"]}
            variant="bg"
            note={isZh ? "灰阶3D扫描小孩雕像" : "Grayscale 3D-scanned child statue"}
            className="opacity-40"
          />
        </div>
        <div className="relative max-w-xl">
          <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">PATROL 2</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            {isZh ? "Patrol 2：宇宙" : "Patrol 2: Universe"}
          </h2>
          {isZh && <p className="text-sm tracking-wide text-fg-dim">Patrol 2: Universe</p>}
          <p className="mt-4 text-sm font-medium text-fg">
            {isZh
              ? "交织LiDAR点云与实时生成环境"
              : "Interweaving LiDAR Point Clouds and Real-time Generative Environments."}
          </p>
          {isZh && (
            <p className="text-xs tracking-wide text-fg-dim">
              Interweaving LiDAR Point Clouds and Real-time Generative Environments.
            </p>
          )}
          <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-fg-dim">
            {isZh
              ? "《Patrol 2：宇宙》将LiDAR点云与实时生成环境交织在一起。世界不再是静态的观察对象，而是一个动态的「被计算的宇宙」。通过把LiDAR扫描的城市遗迹迁移进实时交互引擎，作品探索了物理现实与算法重构之间的临界点。"
              : 'In Patrol 2, the world is no longer a static observation but a dynamic "Computed Universe." By migrating LiDAR-scanned urban remnants into a real-time interactive engine, the project explores the threshold between physical reality and algorithmic reconstruction.'}
          </p>
        </div>
      </section>

      {/* 2. 技术流程（横向自适应网格） */}
      <section className="border-b border-line py-9">
        <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">
          {ui.blockProcess[lang]}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {NODES.map((node) => (
            <div key={node.key} className="border border-line bg-bg-alt/40 p-3 text-center">
              <ImageSlot
                filename={PATROL2_ASSETS[node.key]}
                src={images[node.key]}
                aspect="aspect-video"
              />
              <p className="mt-2 font-display text-xs font-bold">{isZh ? node.zh : node.en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 点云城市 + 相机定位画面 */}
      <section className="border-b border-line py-9">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ImageSlot
            filename={PATROL2_ASSETS["cityscape-wide"]}
            src={images["cityscape-wide"]}
            note={isZh ? "点云城市大图" : "Point-cloud cityscape (wide)"}
            aspect="aspect-video"
          />
          <ImageSlot
            filename={PATROL2_ASSETS["camera-in-scene"]}
            src={images["camera-in-scene"]}
            note={
              isZh
                ? "相机对象在点云空间中定位（camblend1）"
                : "Camera object positioned within the point-cloud space (camblend1)"
            }
            aspect="aspect-video"
          />
        </div>
      </section>

      {/* 4. 手势追踪说明文字 + 配图 */}
      <section className="border-b border-line py-9">
        <p className="max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">
          {isZh
            ? "系统基于 MediaPipe 手势追踪，赋予观众对数字空间的主导权。"
            : "The system utilizes MediaPipe-based hand tracking to grant the viewer agency over the digital space."}
        </p>
        <ImageSlot
          filename={PATROL2_ASSETS["handtrack-demo"]}
          src={images["handtrack-demo"]}
          note={isZh ? "手势追踪演示（需与封面不同的画面）" : "Hand-tracking demo (different frame from cover)"}
          aspect="aspect-video"
          className="mt-5 max-w-[760px]"
        />
      </section>

      {/* 5. 交互方式说明文字 */}
      <section className="border-b border-line py-9">
        <p className="max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">
          {isZh
            ? "通过握拳、张开等直觉手势，观众可以操控点云宇宙的物质密度与扩张程度。"
            : "Through intuitive gestures such as clenching and expanding, users can manipulate the density of matter and the expansion of the point cloud universe."}
        </p>
      </section>

      {/* 6. 结尾双图并排 */}
      <section className="border-b border-line py-9">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ImageSlot
            filename={PATROL2_ASSETS["final-1"]}
            src={images["final-1"]}
            note={isZh ? "实时生成环境渲染图" : "Real-time generative environment render"}
            aspect="aspect-video"
          />
          <ImageSlot
            filename={PATROL2_ASSETS["final-2"]}
            src={images["final-2"]}
            note={isZh ? "实时生成环境渲染图" : "Real-time generative environment render"}
            aspect="aspect-video"
          />
        </div>
      </section>

      {/* 7. 引语（全文收尾） */}
      <section className="py-10">
        <p className="max-w-3xl font-display text-[28px] font-bold italic leading-snug sm:text-[36px]">
          &quot;Images are no longer windows, but maps.&quot;
        </p>
        <p className="mt-3 text-sm tracking-wide text-fg-dim">— Flusser Vilem</p>
      </section>
    </div>
  );
}
