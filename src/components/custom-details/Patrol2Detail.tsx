import { Fragment } from "react";
import { ImageSlot } from "./ImageSlot";
import { NodeConnector } from "./NodeConnector";

const NODES = [
  { label: "线框建筑", filename: "patrol2-node-wireframe.jpg" },
  { label: "球体/菱形节点", filename: "patrol2-node-sphere.jpg" },
  { label: "数据纹理", filename: "patrol2-node-datatexture.jpg" },
  { label: "灰阶渐变", filename: "patrol2-node-gradient.jpg" },
];

export function Patrol2Detail() {
  return (
    <div className="max-w-4xl">
      {/* 1. 标题区 */}
      <section className="relative overflow-hidden border-b border-line py-10 sm:py-14">
        <div className="absolute right-0 top-0 h-full w-1/3">
          <ImageSlot
            filename="patrol2-child-statue.jpg"
            variant="bg"
            note="灰阶3D扫描小孩雕像"
            className="opacity-40"
          />
        </div>
        <div className="relative max-w-xl">
          <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">PATROL 2</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Patrol 2：宇宙
          </h2>
          <p className="text-sm tracking-wide text-fg-dim">Patrol 2: Universe</p>
          <p className="mt-4 text-sm font-medium text-fg">交织LiDAR点云与实时生成环境</p>
          <p className="text-xs tracking-wide text-fg-dim">
            Interweaving LiDAR Point Clouds and Real-time Generative Environments.
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-fg-dim">
            《Patrol 2：宇宙》将LiDAR点云与实时生成环境交织在一起。世界不再是静态的观察对象，而是一个动态的「被计算的宇宙」。通过把LiDAR扫描的城市遗迹迁移进实时交互引擎，作品探索了物理现实与算法重构之间的临界点。
          </p>
        </div>
      </section>

      {/* 2. "监视器画框"特写 */}
      <section className="border-b border-line py-9">
        <div className="mx-auto max-w-lg rounded-md border-4 border-fg/20 bg-black p-2 shadow-[0_0_40px_rgba(0,0,0,0.4)]">
          <div className="flex items-center justify-between px-1 pb-1">
            <span className="font-mono text-[10px] text-accent-lime">● REC</span>
            <span className="font-mono text-[10px] text-fg-dim">CAM 2</span>
          </div>
          <ImageSlot
            filename="patrol2-monitor-view.jpg"
            note="cam2 点云截图"
            aspect="aspect-video"
            className="border-fg/10"
          />
        </div>
      </section>

      {/* 3. 技术流程（纵向节点连线） */}
      <section className="border-b border-line py-9">
        <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">PROCESS</p>
        <div className="mt-5 flex flex-col items-center">
          {NODES.map((node, i) => (
            <Fragment key={node.label}>
              <div className="w-full max-w-xs border border-line bg-bg-alt/40 p-3 text-center">
                <ImageSlot filename={node.filename} aspect="aspect-video" />
                <p className="mt-2 font-display text-xs font-bold">{node.label}</p>
              </div>
              {i < NODES.length - 1 && (
                <div className="py-1">
                  <NodeConnector height={48} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      {/* 4. 点云城市 + 相机定位画面 */}
      <section className="border-b border-line py-9">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ImageSlot filename="patrol2-cityscape-wide.jpg" note="点云城市大图" aspect="aspect-[4/3]" />
          <ImageSlot
            filename="patrol2-camera-in-scene.jpg"
            note="相机对象在点云空间中定位（camblend1）"
            aspect="aspect-[4/3]"
          />
        </div>
      </section>

      {/* 5. 手势追踪说明文字 + 散点图案 */}
      <section className="border-b border-line py-9">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto]">
          <p className="max-w-md text-[15px] leading-[1.7] text-fg-dim">
            系统基于 MediaPipe 手势追踪，赋予观众对数字空间的主导权。
          </p>
          <ImageSlot
            filename="patrol2-handtrack-dots.jpg"
            note="手势追踪散点截图"
            aspect="aspect-square"
            className="w-32"
          />
        </div>
      </section>

      {/* 6. 引语 */}
      <section className="border-b border-line py-10">
        <p className="max-w-3xl font-display text-[28px] font-bold italic leading-snug sm:text-[36px]">
          &quot;Images are no longer windows, but maps.&quot;
        </p>
        <p className="mt-3 text-sm tracking-wide text-fg-dim">— Flusser Vilem</p>
      </section>

      {/* 7. 交互方式说明文字 */}
      <section className="border-b border-line py-9">
        <p className="max-w-2xl text-[15px] leading-[1.7] text-fg-dim">
          通过握拳、张开等直觉手势，观众可以操控点云宇宙的物质密度与扩张程度。
        </p>
      </section>

      {/* 8. 结尾双图并排 */}
      <section className="py-9">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ImageSlot filename="patrol2-final-1.jpg" note="灰阶渲染图" aspect="aspect-[4/3]" />
          <ImageSlot filename="patrol2-final-2.jpg" note="灰阶渲染图" aspect="aspect-[4/3]" />
        </div>
      </section>
    </div>
  );
}
