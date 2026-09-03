import { ImageSlot } from "./ImageSlot";

const MJ_PARAMS = "--ar16:9 --raw --v7 --stylize 200 --chaos 10";

export function PatrolDetail() {
  return (
    <div>
      {/* 1. 标题区 */}
      <section className="relative overflow-hidden border-b border-line py-10 sm:py-14">
        <ImageSlot filename="patrol-still-1.jpg" variant="bg" className="opacity-40" />
        <div className="relative">
          <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">
            PATROL — CONSTRUCTING A &quot;COMPUTED UNIVERSE&quot;
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            构建一个「被计算的宇宙」：通过非人类的视角
          </h2>
          <p className="mt-1 max-w-2xl text-sm tracking-wide text-fg-dim">
            Constructing a &quot;Computed Universe&quot; Through Non-human Vision
          </p>
        </div>
      </section>

      {/* 2. 剧照网格 */}
      <section className="border-b border-line py-9">
        <p className="font-display text-[11px] tracking-[0.15em] text-fg-dim">STILLS</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <ImageSlot key={n} filename={`patrol-still-${n}.jpg`} aspect="aspect-[4/3]" />
          ))}
        </div>
      </section>

      {/* 3. 概念文本块 */}
      <section className="border-b border-line py-9">
        <p className="font-display text-sm font-bold tracking-wide">
          「生活在超对象之中：AI与技术圈层」
        </p>
        <p className="text-xs tracking-wide text-fg-dim">
          Living with Hyperobjects — AI and the Technosphere
        </p>
        <p className="mt-4 max-w-[760px] border-l-2 border-accent-orange pl-5 text-[15px] leading-[1.7] text-fg-dim">
          在《Patrol》的世界里，AI并不认为人类的情感有意义，而是将其拆解为一个个独立的数据粒子。人类的情感冲突因此失去了私人意义，只被视为「数据异常」——只是需要被算法修复、管理、归一化的噪声。
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
            AI 与人类签署和平条约
          </p>
          <p className="text-xs font-bold tracking-[0.2em] text-bg/80">
            AI SIGNS PEACE TREATY WITH HUMANS
          </p>
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
            filename="patrol-light-installation.jpg"
            note="彩色灯光装置 / 舞者照片"
            aspect="aspect-[4/3]"
          />
          <ImageSlot
            filename="patrol-lidar-panorama.jpg"
            note="黑白 LiDAR 全景图"
            aspect="aspect-[4/3]"
          />
        </div>
      </section>

      {/* 8. 收尾文本 */}
      <section className="border-b border-line py-9">
        <p className="max-w-[760px] text-[15px] leading-[1.7] text-fg-dim">
          当 Ouster LiDAR 扫描是数字骨骼，AI生成的影像是算法皮肤——身体在哪里？我们该如何填补它？
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
