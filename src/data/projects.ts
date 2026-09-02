export type ProjectCategory =
  | "installations"
  | "ai-video"
  | "experimental-video"
  | "games";

export interface LinkItem {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  /** Only used within ai-video to split personal vs. commissioned work */
  kind?: "personal" | "client";
  title: string;
  subtitle?: string;
  year: number;
  tools: string[];
  description: string;
  client?: string;
  role?: string;
  process?: string[];
  quotes?: string[];
  links?: LinkItem[];
  featured?: boolean;
}

export const projects: Project[] = [
  // ---- Installations ----
  {
    id: "temporary-roommate",
    category: "installations",
    title: "Temporary Roommate",
    year: 2025,
    tools: ["MediaPipe 人体姿态追踪", "TouchDesigner", "Unity"],
    description:
      "动作捕捉 + 空间叙事的交互装置。参与者进入镜头视野后被实时转化为随机生成的家具，家具随人物移动；当两人靠近，各自的家具会跨越边界融合成更大的家具；融合后的家具 20 秒后消失。",
    process: ["MediaPipe", "OSC", "TouchDesigner", "Unity"],
    quotes: [],
    featured: true,
  },
  {
    id: "blooming-breathe",
    category: "installations",
    title: "Blooming Breathe",
    year: 2025,
    tools: [
      "手势追踪（MediaPipe）",
      "TouchDesigner",
      "投影",
      "数字制造",
      "灯光（Arduino 控制 LED 背光）",
    ],
    description:
      "观众用手势「唤醒」投影在雪景装置上的春天景象，探讨城市公共空间的「修复」与「更新」。",
    links: [{ label: "YouTube", url: "https://youtu.be/qQFO6nPYWic" }],
    featured: true,
  },

  // ---- AI Video — personal / awarded ----
  {
    id: "patrol",
    category: "ai-video",
    kind: "personal",
    title: "Patrol",
    year: 2026,
    tools: ["AI 动画", "Ouster LiDAR 空间扫描", "真人表演"],
    description: "跨媒介实验动画。",
    links: [{ label: "YouTube", url: "https://youtu.be/KWh6XKj9E8Y" }],
    featured: true,
  },
  {
    id: "patrol-2",
    category: "ai-video",
    kind: "personal",
    title: "Patrol 2",
    year: 2026,
    tools: ["数字建模", "手势交互"],
    description:
      "将 Patrol 的叙事世界转化为可交互的 3D 点云宇宙。",
    links: [{ label: "YouTube", url: "https://youtu.be/40M8dXoJFhg" }],
    featured: true,
  },
  {
    id: "fight-until-the-end",
    category: "ai-video",
    kind: "personal",
    title: "Fight Until The End",
    year: 2025,
    tools: ["Midjourney", "即梦 AI"],
    description:
      "2025 联想《双子星》AIGC 创作大赛新星奖作品，个人独立完成，15 天内制作，纯 AI 生成科幻短片。",
  },
  {
    id: "gallery-of-the-mist",
    category: "ai-video",
    kind: "personal",
    title: "The Gallery of The Mist 雾之书廊",
    year: 2025,
    tools: ["Premiere Pro", "CapCut"],
    description: "中国风 AI 动画短片，探索东方美学与 MV 式剪辑的结合。",
  },

  // ---- AI Video — client commissions ----
  {
    id: "ccp-104",
    category: "ai-video",
    kind: "client",
    title: "建党104周年 AI 短片",
    year: 2025,
    client: "中视影光 CTW",
    tools: ["AI 视频生成"],
    description: "建党 104 周年主题 AI 短片。",
  },
  {
    id: "bbmg",
    category: "ai-video",
    kind: "client",
    title: "BBMG 金隅冀东水泥 AI 形象动画",
    year: 2025,
    client: "BBMG 金隅冀东水泥",
    role: "商业委托角色设计",
    tools: ["即梦 AI", "After Effects"],
    description: "商业委托角色设计与形象动画。",
  },

  // ---- Experimental Video ----
  {
    id: "between-steps",
    category: "experimental-video",
    title: "Between Steps",
    year: 2024,
    tools: ["摄影", "动态影像", "声音"],
    description: "探讨「无限楼梯」与空间失序感。",
    links: [{ label: "YouTube", url: "https://youtu.be/B6ze_bWcdW0" }],
    featured: true,
  },

  // ---- Games ----
  {
    id: "close-the-ad",
    category: "games",
    title: "Close the Ad",
    year: 2025,
    tools: ["GameMaker", "GML"],
    role: "核心程序员 — 全局状态管理与 UI 交互逻辑",
    description: "7 人团队开发的单人 2D 游戏。",
    links: [
      {
        label: "试玩 Demo",
        url: "https://gx.games/games/pv1jle/close-the-ad-6-10/",
      },
    ],
    featured: true,
  },
];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export const categoryMeta: Record<
  ProjectCategory,
  { label: string; labelEn: string; slug: string; index: string }
> = {
  installations: {
    label: "装置",
    labelEn: "Installations",
    slug: "installations",
    index: "01",
  },
  "ai-video": {
    label: "AI影像",
    labelEn: "AI Video",
    slug: "ai-video",
    index: "02",
  },
  "experimental-video": {
    label: "实验影像",
    labelEn: "Experimental Video",
    slug: "experimental-video",
    index: "03",
  },
  games: {
    label: "游戏",
    labelEn: "Games",
    slug: "games",
    index: "04",
  },
};
