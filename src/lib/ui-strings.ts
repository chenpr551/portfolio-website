import type { Bilingual } from "./language";

/** Site-wide interface labels (nav, buttons, block tags) -- not project content. */
export const ui = {
  navAbout: { zh: "关于", en: "About" },
  close: { zh: "收起 CLOSE", en: "CLOSE" },
  playDemo: { zh: "试玩 Demo", en: "Play Demo" },
  blockConcept: { zh: "概念 CONCEPT", en: "CONCEPT" },
  blockProcess: { zh: "技术流程 PROCESS", en: "PROCESS" },
  blockHowItWorks: { zh: "交互规则 HOW IT WORKS", en: "HOW IT WORKS" },
  blockVisuals: { zh: "配图 VISUALS", en: "VISUALS" },
  blockFeedback: { zh: "现场反馈 FEEDBACK", en: "FEEDBACK" },
  projectInfo: { zh: "项目信息", en: "Project Info" },
  myRole: { zh: "我的角色与贡献", en: "My Role & Contribution" },
  homeName: { zh: "PENGRAN CHEN · 陈芃然", en: "PENGRAN CHEN" },
  homeHero: {
    zh: "交互装置与\nAI 影像艺术家",
    en: "Interactive Installation\n& AI Video Artist",
  },
  homeSubtitle: {
    zh: "Interactive Installation & AI Video Artist — 用新兴技术与分析性思维，在身体、空间与生成影像之间寻找叙事的裂缝。",
    en: "Using emerging technologies and analytical thinking to find narrative fractures between the body, space, and generative imagery.",
  },
} satisfies Record<string, Bilingual>;
