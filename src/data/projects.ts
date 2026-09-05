export type ProjectCategory =
  | "installations"
  | "ai-video"
  | "experimental-video"
  | "games";

export interface LinkItem {
  label: string;
  url: string;
}

export type DetailBlock =
  | {
      type: "concept";
      /** Large pull-quote paragraphs */
      quote: string[];
      citation?: { text: string; source: string };
      /** Muted explanatory paragraph below the quote */
      body?: string;
      /** A secondary labeled paragraph ("A延伸段落") */
      body2?: { heading?: string; text: string };
      toolsNote?: string;
    }
  | {
      type: "process";
      /** `src` is a bare filename under the project's asset folder, resolved at render time */
      nodes: { name: string; caption: string; src?: string }[];
      summary?: string;
    }
  | {
      type: "steps";
      heading?: string;
      headingEn?: string;
      compact?: boolean;
      /** `src` is a bare filename under the project's asset folder, resolved at render time */
      steps: { title: string; caption?: string; src?: string }[];
      note?: string;
      /** Small supplementary images shown alongside `note` (bare filenames) */
      noteImages?: { src: string; filename: string }[];
    }
  | {
      type: "visuals";
      heading?: string;
      headingEn?: string;
      /** Bare filenames under the project's asset folder, each resolved (or placeholder'd) individually. `src` is populated by resolveProject(). */
      images: { filename: string; src?: string }[];
      note?: string;
    }
  | {
      type: "feedback";
      /** Quotes with a `src` render as a tilted polaroid-style photo card (bare filename, resolved at render time); quotes without one render as a plain lead-in line */
      quotes: { text: string; source?: string; src?: string }[];
    }
  | {
      type: "body";
      heading?: string;
      paragraphs: string[];
    };

export interface Project {
  id: string;
  category: ProjectCategory;
  /**
   * Folder name under public/images/<category>/ if it differs from `id`
   * (e.g. id "ccp-104" -> folder "104th-anniversary"). Defaults to `id`.
   */
  assetSlug?: string;
  /** Only used within ai-video to split personal vs. commissioned work */
  kind?: "personal" | "client";
  title: string;
  subtitle?: string;
  year: number;
  tools: string[];
  description: string;
  client?: string;
  role?: string;
  links?: LinkItem[];
  featured?: boolean;
  /** One-line award / client / date strip shown above the detail blocks */
  infoStrip?: string;
  /** Extended detail content shown when the project card is expanded */
  detail?: DetailBlock[];
  /** "custom" routes the expanded card to a bespoke component instead of ProjectDetail */
  layout?: "custom";
}

export const projects: Project[] = [
  // ---- Installations ----
  {
    id: "temporary-roommate",
    category: "installations",
    title: "Temporary Roommate",
    year: 2026,
    tools: ["MediaPipe 人体姿态追踪", "TouchDesigner", "Unity"],
    description:
      "动作捕捉 + 空间叙事的交互装置。参与者进入镜头视野后被实时转化为随机生成的家具，家具随人物移动；当两人靠近，各自的家具会跨越边界融合成更大的家具；融合后的家具 20 秒后消失。",
    featured: true,
    detail: [
      {
        type: "concept",
        quote: [
          "「Temporary Roommate」是一件结合动作捕捉与空间叙事的交互装置。当「居住」从私人化的空间占用，转变为多个个体的重叠与融合，数字空间中的「存在」便被重新定义为一种协作性的流动状态。",
          "作品探讨的是人与周围环境的联系，也是人与人之间的联系。",
        ],
      },
      {
        type: "process",
        nodes: [
          { name: "MediaPipe", caption: "人体姿态追踪", src: "process-mediapipe.png" },
          { name: "OSC", caption: "参数传输", src: "process-osc.png" },
          { name: "TouchDesigner", caption: "实时处理", src: "process-touchdesigner.png" },
          { name: "Unity", caption: "场景生成", src: "process-unity.gif" },
        ],
        summary:
          "参与者进入摄像头视野后，MediaPipe 实时捕捉人体姿态数据，通过 OSC 协议传输至 TouchDesigner 进行参数映射，再由 Unity 实时生成对应的虚拟家具，家具的位置与移动完全跟随参与者的身体动作。",
      },
      {
        type: "steps",
        steps: [
          {
            title: "吸引 Attraction",
            caption: "被一个与自己相似的「数字人」所吸引",
            src: "step-attraction.gif",
          },
          {
            title: "融合 Merge",
            caption: "当两人靠得足够近，各自的家具会跨越边界融合成一件更大的家具",
            src: "step-merge.gif",
          },
          {
            title: "消失 Disappear",
            caption: "融合后的家具会在 20 秒后消失",
            src: "step-disappear.gif",
          },
        ],
        note: "补充：参与者可摆出特定姿势，切换同类家具的不同风格——沙发/椅子/台灯/床",
        noteImages: [
          { src: "style-switch-chair.gif", filename: "转椅子" },
          { src: "style-switch-bed.gif", filename: "换床" },
          { src: "style-switch-lamp.gif", filename: "换台灯" },
        ],
      },
      {
        type: "visuals",
        heading: "装置展览现场",
        images: [{ filename: "exhibition-1.jpg" }, { filename: "exhibition-2.jpg" }],
        note: "投影幕布 + 参与者剪影的现场照片",
      },
    ],
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
    detail: [
      {
        type: "concept",
        quote: [
          "作品探讨城市公共空间的「修复」与「更新」——公共空间并非静止不变，而是被日常的「行为」持续塑造。从冬到春的转变，隐喻着人的行为对空间的影响。",
        ],
        body: "技术实现说明：通过网络摄像头用 MediaPipe 检测手部位置，追踪数据实时传入 TouchDesigner 并映射为交互参数。侦测到手部时，系统会生成一个圆形交互区域，如同橡皮擦一样逐渐擦除画面上层的「冬景」视频层，露出下方的「春景」。",
      },
      {
        type: "steps",
        heading: "交互设计流程",
        headingEn: "HOW IT WORKS",
        compact: true,
        steps: [
          { title: "自然手势交互", src: "step-1.webp" },
          {
            title: "实时感应与追踪",
            caption: "MediaPipe 从摄像头捕捉手部关键点",
            src: "step-2.webp",
          },
          { title: "数据映射与处理", src: "step-3.webp" },
          { title: "动态视觉反馈", caption: "橡皮擦效果", src: "step-4.webp" },
          {
            title: "精确投影映射",
            caption: "Kantan Mapper 对齐立体花朵模型",
            src: "step-5.webp",
          },
          {
            title: "硬件协同背光",
            caption: "Arduino Uno R3 控制 LED 灯带",
            src: "step-6.webp",
          },
        ],
      },
      {
        type: "feedback",
        quotes: [
          {
            text: "I really appreciate the scale of this installation; it sits quietly beside the bench without disrupting the harmony of the public space.",
            source: "现场观众",
          },
          {
            text: "My daughter likes it a lot.",
            source: "现场观众",
            src: "site-photo-child.webp",
          },
          {
            text: "It's like magic! The real-time visual feedback is so smooth, it feels like I'm bringing this corner to life with my own hands.",
            source: "现场观众",
            src: "site-photo-closeup.webp",
          },
        ],
      },
    ],
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
    layout: "custom",
  },
  {
    id: "patrol-2",
    category: "ai-video",
    kind: "personal",
    title: "Patrol 2",
    year: 2026,
    tools: ["数字建模", "手势交互"],
    description: "将 Patrol 的叙事世界转化为可交互的 3D 点云宇宙。",
    links: [{ label: "YouTube", url: "https://youtu.be/40M8dXoJFhg" }],
    featured: true,
    layout: "custom",
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
    infoStrip: "2025联想《双子星》AIGC创作大赛 · 新星奖",
    detail: [
      {
        type: "concept",
        quote: [
          "联想AI智能中心邀请全网AIGC创作者，共同探索「AI与爱」这一宏大科幻主题，并用AI工具完成创作。这是一部完全由AI生成的科幻短片，原创故事、原创角色，个人独立完成，在15天的限定周期内制作。全程使用Midjourney与即梦AI，从图片到视频逐帧生产。",
        ],
      },
      {
        type: "visuals",
        images: [{ filename: "support-1.webp" }, { filename: "support-2.webp" }],
        note: "控制室「地球联合国委员会」场景、发光手部特效场景",
      },
    ],
  },
  {
    id: "gallery-of-the-mist",
    category: "ai-video",
    kind: "personal",
    title: "The Gallery of The Mist 雾之书廊",
    year: 2025,
    tools: ["Premiere Pro", "CapCut"],
    description: "中国风 AI 动画短片，探索东方美学与 MV 式剪辑的结合。",
    infoStrip: "The Gallery of The Mist 雾之书廊 · 2025.04–2025.05",
    detail: [
      {
        type: "concept",
        quote: [
          "这是一部中国风AI动画短片，后期剪辑与合成使用Premiere Pro与CapCut完成。这是我第一次尝试将东方美学构图与MV式剪辑结合，力图在中国风动画中营造戏剧张力与电影感的视觉冲击。",
        ],
      },
      {
        type: "visuals",
        images: [
          { filename: "calligraphy.webp" },
          { filename: "pavilion.webp" },
          { filename: "scroll-writing.webp" },
        ],
        note: "书法字构图、古建筑雾中场景、握笔书写古卷轴的手部特写",
      },
    ],
  },

  // ---- AI Video — client commissions ----
  {
    id: "ccp-104",
    assetSlug: "104th-anniversary",
    category: "ai-video",
    kind: "client",
    title: "建党104周年 AI 短片",
    year: 2025,
    client: "中视影光 CTW",
    tools: ["AI 视频生成"],
    description: "建党 104 周年主题 AI 短片。",
    infoStrip: "庆祝党104周年生日系列短片 · 2025.06.17–2025.07.01 · 甲方：中视影光CTW",
    detail: [
      {
        type: "concept",
        quote: [
          "这是一部完全由AI生成的104秒短片，尝试讲述一位优秀共产党员的一生。全片由21个镜头与10个转场组成，总计消耗超过8000点数，使用即梦3.0 Pro + 可灵2.0视频模型 + Google Veo3 AI制作完成。",
        ],
      },
      {
        type: "visuals",
        images: [{ filename: "badge-closeup.webp" }],
        note: "手持党徽特写",
      },
    ],
  },
  {
    id: "bbmg",
    assetSlug: "bbmg-cement",
    category: "ai-video",
    kind: "client",
    title: "BBMG 金隅冀东水泥 AI 形象动画",
    year: 2025,
    client: "BBMG 金隅冀东水泥",
    role: "商业委托角色设计",
    tools: ["即梦 AI", "After Effects"],
    description: "商业委托角色设计与形象动画。",
    infoStrip:
      "AI Character Design for BBMG Jidong Cement Group Co., Ltd. · 金隅冀东水泥低碳发展专题片AI形象动画制作 · 2025.05–2025.06",
    detail: [
      {
        type: "concept",
        quote: [
          "这是该公司首次尝试在商业短片中引入AI生成的动画角色，成片获得客户高度评价。使用即梦3.0 Pro模型生成，并结合After Effects进行视觉特效与合成。",
        ],
      },
      {
        type: "visuals",
        images: [{ filename: "mascot-closeup.webp" }, { filename: "banner.webp" }],
        note: "吉祥物「小C」、「让我们携手并进 共绘美丽中国新画卷」宣传banner",
      },
    ],
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
    detail: [
      {
        type: "concept",
        quote: [
          "楼梯从不只是连接不同标高的建筑构件；它是一种典型的阈限空间（liminal space）——一处知觉过渡与存在性迷失的场所。通过探索「无限楼梯」与Dreamcore美学，我试图解构楼梯作为「垂直通行工具」的功能性，将其重新想象为一个不稳定的、循环往复的场域。",
          "乍看之下，这个空间梦幻而安静。但当你真正置身其中，它会变得压抑而孤立。",
        ],
        body2: {
          heading: "视觉手法说明",
          text: "黑白影像与画面中彩色女孩之间的高对比，强调了一种无助感。当她在空间中移动，色彩的痕迹留在地面上，促使人们反思当下的意义与自身的身份认同。",
        },
      },
      {
        type: "visuals",
        images: [
          { filename: "sketch.jpg" },
          { filename: "contact-sheet.jpg" },
          { filename: "glitch-still.jpg" },
        ],
        note: "手绘无限楼梯草图、原始摄影小样 contact sheet、RGB色差故障效果剧照",
      },
    ],
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
    infoStrip: "单人2D游戏 · 2025 · 7人团队开发",
    detail: [
      {
        type: "body",
        heading: "项目信息",
        paragraphs: [
          "玩家扮演一名在有限时间内使用电脑的学生，需要在层出不穷的误导性广告与干扰中周旋，随着人生阶段推进，选择将影响情绪值并导向不同结局。",
        ],
      },
      {
        type: "body",
        heading: "我的角色与贡献",
        paragraphs: [
          "作为核心程序员，我用GML搭建了游戏的核心框架，重点开发了支撑复杂关卡推进与多线叙事分支的全局状态管理系统。我主导了UI交互逻辑的开发，通过状态控制的可见性机制保证玩家反馈的流畅性。为保证系统稳定性，我采用了严谨的实例校验等防御性编程模式以减少运行时错误。此外，我通过自定义渲染函数优化了精灵缩放与坐标控制的视觉表现。",
        ],
      },
      {
        type: "visuals",
        images: [
          { filename: "gamemaker-objects.webp" },
          { filename: "level-script.webp" },
          { filename: "fake-antivirus.webp" },
          { filename: "fake-ad.webp" },
        ],
        note: "GameMaker对象列表面板、关卡控制脚本代码截图、虚假「Super Antivirus」警告弹窗、「Paster Battle」游戏内假广告",
      },
    ],
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
