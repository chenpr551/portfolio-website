"use client";

import { useLanguage, type Bilingual } from "@/lib/language";

const summary: Bilingual = {
  zh: "研究驱动的创意设计师，专注视觉传达与数字媒体，擅长运用新兴技术与分析性思维解决复杂视觉问题。",
  en: "Creative design student with a research-oriented approach to visual communication and digital media practices. Possesses solid technical proficiency in software tools and emerging technologies, along with strong analytical thinking, adaptability, and effective time management. Experienced in collaborative project-based environments and committed to producing thoughtful, high-quality creative outcomes.",
};

interface ExperienceItem {
  role: Bilingual;
  org: Bilingual;
  period: string;
  description?: Bilingual;
}

const experience: ExperienceItem[] = [
  {
    role: { zh: "AIGC Internship", en: "AIGC Internship" },
    org: { zh: "Beijing Storycom", en: "Beijing Storycom International Culture Communication Co., Ltd. — Beijing, China" },
    period: "2025.7 – 2025.9",
    description: {
      zh: "深度参与科幻电影《深空之下》的动画改编项目。作为AI技术项目组的技术负责人，参与该动画电影的前期筹备讨论。在有限时间内，带领团队使用 Midjourney 等 AI 技术制作了两集动画及一支预告片，为项目争取到核心投资。同时协助运营总监对接多家公司，深入了解动画电影行业的运作模式与商业前景。",
      en: "Deeply involved in the animation adaptation project for the sci-fi film \"Deep In.\" As the technical team leader for the artificial intelligence project group, participated in the pre-production discussions for this animated film. Within a limited timeframe, led the team in using AI technologies like Midjourney to produce two animated episodes and a trailer, which secured core investment for the project. Also assisted the Operations Director in coordinating with various companies, gaining an in-depth understanding of the animation film industry's operational model and commercial prospects.",
    },
  },
  {
    role: { zh: "AIGC Creator Internship", en: "AIGC Creator Internship" },
    org: { zh: "CTVV Media Group", en: "CTVV Media Group Co., Ltd. — Beijing, China" },
    period: "2025.4 – 2025.6",
    description: {
      zh: "负责 BBMG 金隅冀东水泥宣传片项目中的创新媒体板块，成片获得客户高度评价。为这家历史悠久的传统工厂客户带去了新的 AI 技术，帮助其实现迈入现代电子化时代的愿景。同时负责中国国云体育官方公众号的视频剪辑工作，为短视频制作 AI 生成的视觉特效。",
      en: "Managed the innovative media segment for the promotional video project of BBMG Jidong Cement Group Co., Ltd. The finished work received high praise from the client. Brought the company new AI technology to help their long-established, historic factory clients achieve their vision of entering the modern electronic era. Also handled video editing for China Guoyun Sports' official WeChat public account, creating AI-generated visual effects for short videos.",
    },
  },
  {
    role: { zh: "UI/UX Designer", en: "UI/UX Designer" },
    org: { zh: "PayYou Education, Montreal", en: "PayYou Education — Montreal, Canada" },
    period: "2021.6 – 2022.1",
    description: {
      zh: "为该教育机构的社交媒体渠道制作每周及每月的推广内容，全面负责从视觉内容到文案的所有推广工作，并持续维护网站的推广活动与公司公告更新。",
      en: "Developed weekly and monthly promotional content for the educational institution's social media channels. Took full responsibility for all aspects of promotion, from visual content to copywriting. Maintained website updates with new promotions and corporate announcements.",
    },
  },
];

interface EducationItem {
  program: Bilingual;
  org: Bilingual;
  period: string;
  note?: Bilingual;
  focus?: Bilingual;
}

const education: EducationItem[] = [
  {
    program: { zh: "MFACM Creative Media", en: "MFACM Creative Media" },
    org: { zh: "City University of Hong Kong", en: "City University of Hong Kong" },
    period: "2026.9 – 2028.4",
    note: { zh: "在读", en: "In Progress" },
  },
  {
    program: { zh: "BDES(Hons) Digital Futures", en: "BDES (Hons) Digital Futures · Bachelor of Design · GPA: 83/100" },
    org: { zh: "OCAD University, Toronto", en: "OCAD University — Aug. 2023 – Apr. 2027" },
    period: "2023.8 – 2027.4",
    focus: {
      zh: "研究方向：人、数字与物体之间的多重交互。",
      en: "Focused Area: Multi-Interaction between human, digital, and object.",
    },
  },
  {
    program: { zh: "Interactive Media Art", en: "Interactive Media Art" },
    org: { zh: "Dawson College, Montreal", en: "Dawson College — Apr. 2022 – Apr. 2023" },
    period: "2022.4 – 2023.4",
    focus: {
      zh: "研究方向：互动3D游戏与娱乐。使用 UE4 独立开发跑酷游戏《Breakout: The Villa》，获得年度最佳游戏奖。",
      en: "Focused Area: Interactive 3D games and entertainment. Independently developed a parkour game titled \"Breakout: The Villa\" using UE4, which won the Best Game of the Academic Year award.",
    },
  },
  {
    program: { zh: "Graphic Design", en: "Graphic Design · Diplôme d'études professionnelles" },
    org: { zh: "Centre De Technologie Rosemount", en: "Centre De Technologie Rosemount — Aug. 2018 – Apr. 2020" },
    period: "2018.8 – 2020.4",
    focus: {
      zh: "研究方向：视觉传达系统中的数字技术。",
      en: "Focused Area: Digital technologies in visual communication systems.",
    },
  },
];

const keySkills: Bilingual = {
  zh: "创意思维、问题解决、团队领导、细节把控、时间管理、有效沟通、跨平台开发、AI技术应用、游戏设计、脚本与可视化编程、投影映射、音频制作、激光切割、3D打印、3D建模、数字插画、塑料成型、摄影",
  en: "Creative thinking, Problem solving, Leadership, Attention to details, Time management skills, Effective communication, Cross-platform developing, AI technologies, Game Design, Scripting & Visual Programming, Projection mapping, Audio producing, Laser cutting, 3D printing, 3D modeling, Digital Illustration, Plastic fabrication, Photography",
};

const certificate: Bilingual = {
  zh: "数字媒体技能证书 — 安大略艺术设计大学，2024年9月",
  en: "Digital Media Skills Certificate — OCAD University, September 2024",
};

const languages: Bilingual = {
  zh: "中文（母语） · 英语（雅思 6.5） · 法语（TEFAQ B2）",
  en: "Chinese (Native) · English (IELTS 6.5) · French (TEFAQ B2)",
};

export default function AboutContent() {
  const { lang } = useLanguage();

  return (
    <div key={lang} className="lang-fade">
      <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-fg/90">{summary[lang]}</p>

      <section className="mt-16">
        <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
          {lang === "zh" ? "工作经历 · EXPERIENCE" : "EXPERIENCE"}
        </h2>
        <div className="mt-4">
          {experience.map((e) => (
            <div key={e.role.en + e.org.en} className="border-t border-line py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-display text-lg">{e.role[lang]}</p>
                  <p className="text-sm text-fg-dim">{e.org[lang]}</p>
                </div>
                <span className="num text-sm text-fg-dim">{e.period}</span>
              </div>
              {e.description && (
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-fg-dim">
                  {e.description[lang]}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
          {lang === "zh" ? "教育背景 · EDUCATION" : "EDUCATION"}
        </h2>
        <div className="mt-4">
          {education.map((e) => (
            <div key={e.program.en + e.org.en} className="border-t border-line py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-display text-lg">
                    {e.program[lang]}
                    {e.note && (
                      <span className="ml-2 text-sm text-accent-orange">{e.note[lang]}</span>
                    )}
                  </p>
                  <p className="text-sm text-fg-dim">{e.org[lang]}</p>
                </div>
                <span className="num text-sm text-fg-dim">{e.period}</span>
              </div>
              {e.focus && (
                <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-fg-dim">
                  {e.focus[lang]}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
          {lang === "zh" ? "核心技能 · KEY SKILLS" : "KEY SKILLS"}
        </h2>
        <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-fg-dim">
          {keySkills[lang]}
        </p>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
            {lang === "zh" ? "证书 · CERTIFICATE" : "CERTIFICATE"}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-fg-dim">{certificate[lang]}</p>
        </div>
        <div>
          <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
            {lang === "zh" ? "语言 · LANGUAGES" : "LANGUAGES"}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-fg-dim">{languages[lang]}</p>
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-10">
        <h2 className="font-display text-sm tracking-[0.15em] text-fg-dim">
          {lang === "zh" ? "联系 · CONTACT" : "CONTACT"}
        </h2>
        <p className="mt-3 text-sm text-fg-dim">
          {lang === "zh" ? "多伦多，安大略" : "Toronto, Ontario"}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-6">
          <a
            href="mailto:chenpengran0315@gmail.com"
            className="font-display text-2xl tracking-tight transition-colors hover:text-accent-orange"
          >
            chenpengran0315@gmail.com
          </a>
          <a
            href="https://instagram.com/chenpr_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-wide text-fg-dim transition-colors hover:text-fg"
          >
            @chenpr_
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm tracking-wide text-fg-dim transition-colors hover:text-fg"
          >
            {lang === "zh" ? "下载简历 Resume ↓" : "Resume ↓"}
          </a>
        </div>
      </section>
    </div>
  );
}
