import type { Metadata } from "next";

export const metadata: Metadata = { title: "关于 About — Pengran Chen" };

const experience = [
  {
    role: "AIGC Internship",
    org: "Beijing Storycom",
    period: "2025.7 – 2025.9",
  },
  {
    role: "AIGC Creator Internship",
    org: "CTVV Media Group",
    period: "2025.4 – 2025.6",
  },
  {
    role: "UI/UX Designer",
    org: "PayYou Education, Montreal",
    period: "2021.6 – 2022.1",
  },
];

const education = [
  {
    program: "MFACM Creative Media",
    org: "City University of Hong Kong",
    period: "2026.9 – 2028.4",
    note: "在读",
  },
  {
    program: "BDES(Hons) Digital Futures",
    org: "OCAD University, Toronto",
    period: "2023.8 – 2027.4",
  },
  {
    program: "Interactive Media Art",
    org: "Dawson College, Montreal",
    period: "2022.4 – 2023.4",
  },
];

export default function AboutPage() {
  return (
    <div className="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-3xl">
        <span className="num font-display text-sm text-fg-dim">05</span>
        <h1 className="mt-3 font-display text-6xl font-medium leading-[0.95] tracking-tight sm:text-7xl">
          关于
          <span className="ml-4 align-middle text-lg font-normal tracking-wide text-fg-dim sm:text-2xl">
            About
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-fg/90">
          研究驱动的创意设计师，专注视觉传达与数字媒体，擅长运用新兴技术与分析性思维解决复杂视觉问题。
        </p>

        <section className="mt-16">
          <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
            工作经历 · EXPERIENCE
          </h2>
          <div className="mt-4">
            {experience.map((e) => (
              <div
                key={e.role + e.org}
                className="flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-display text-lg">{e.role}</p>
                  <p className="text-sm text-fg-dim">{e.org}</p>
                </div>
                <span className="num text-sm text-fg-dim">{e.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
            教育背景 · EDUCATION
          </h2>
          <div className="mt-4">
            {education.map((e) => (
              <div
                key={e.program + e.org}
                className="flex flex-col gap-1 border-t border-line py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <p className="font-display text-lg">
                    {e.program}
                    {e.note && (
                      <span className="ml-2 text-sm text-accent-orange">
                        {e.note}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-fg-dim">{e.org}</p>
                </div>
                <span className="num text-sm text-fg-dim">{e.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-10">
          <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
            联系 · CONTACT
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <a
              href="mailto:chenpengran0315@gmail.com"
              className="font-display text-2xl tracking-tight transition-colors hover:text-accent-orange"
            >
              chenpengran0315@gmail.com
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm tracking-wide text-fg-dim transition-colors hover:text-fg"
            >
              下载简历 Resume ↓
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
