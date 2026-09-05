import type { Bilingual } from "@/lib/language";

export type ProjectCategory =
  | "installations"
  | "ai-video"
  | "experimental-video"
  | "games";

export interface LinkItem {
  label: Bilingual;
  url: string;
}

export type DetailBlock =
  | {
      type: "concept";
      /** Large pull-quote paragraphs */
      quote: Bilingual[];
      /** A literary/artistic quote -- kept identical in both languages */
      citation?: { text: string; source: string };
      /** Muted explanatory paragraph below the quote */
      body?: Bilingual;
      /** A secondary labeled paragraph ("A延伸段落") */
      body2?: { heading?: Bilingual; text: Bilingual };
      toolsNote?: Bilingual;
    }
  | {
      type: "process";
      /** `name` is a proper noun (tool/product name), unchanged across languages. `src` is a bare filename, resolved at render time */
      nodes: { name: string; caption: Bilingual; src?: string }[];
      summary?: Bilingual;
    }
  | {
      type: "steps";
      /** Full bilingual heading override; defaults to ui.blockHowItWorks */
      heading?: Bilingual;
      compact?: boolean;
      /** `src` is a bare filename under the project's asset folder, resolved at render time */
      steps: { title: Bilingual; caption?: Bilingual; src?: string }[];
      note?: Bilingual;
      /** Small supplementary images shown alongside `note` (bare filenames) */
      noteImages?: { src: string; filename: Bilingual }[];
    }
  | {
      type: "visuals";
      /** Full bilingual heading override; defaults to ui.blockVisuals */
      heading?: Bilingual;
      /** Bare filenames under the project's asset folder, each resolved (or placeholder'd) individually */
      images: { filename: string; src?: string }[];
      note?: Bilingual;
    }
  | {
      type: "feedback";
      /** `text` is a verbatim quote, kept identical in both languages. Quotes with a `src` render as a tilted polaroid-style photo card (bare filename, resolved at render time); quotes without one render as a plain lead-in line */
      quotes: { text: string; source?: Bilingual; src?: string }[];
    }
  | {
      type: "body";
      heading?: Bilingual;
      paragraphs: Bilingual[];
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
  title: Bilingual;
  year: number;
  tools: Bilingual[];
  description: Bilingual;
  client?: Bilingual;
  role?: Bilingual;
  links?: LinkItem[];
  featured?: boolean;
  /** One-line award / client / date strip shown above the detail blocks */
  infoStrip?: Bilingual;
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
    title: { zh: "Temporary Roommate", en: "Temporary Roommate" },
    year: 2026,
    tools: [
      { zh: "MediaPipe 人体姿态追踪", en: "MediaPipe Pose Tracking" },
      { zh: "TouchDesigner", en: "TouchDesigner" },
      { zh: "Unity", en: "Unity" },
    ],
    description: {
      zh: "动作捕捉 + 空间叙事的交互装置。参与者进入镜头视野后被实时转化为随机生成的家具，家具随人物移动；当两人靠近，各自的家具会跨越边界融合成更大的家具；融合后的家具 20 秒后消失。",
      en: "Motion capture + spatial storytelling installation. Participants entering the camera's field of view are instantly transformed into randomly generated furniture, moving with them; when two people come close, their furniture crosses boundaries and merges into a larger piece; merged furniture disappears after 20 seconds.",
    },
    featured: true,
    detail: [
      {
        type: "concept",
        quote: [
          {
            zh: "「Temporary Roommate」是一件结合动作捕捉与空间叙事的交互装置。当「居住」从私人化的空间占用，转变为多个个体的重叠与融合，数字空间中的「存在」便被重新定义为一种协作性的流动状态。",
            en: '"Temporary Roommate" is an interactive installation that combines motion capture with spatial storytelling. When "dwelling" shifts from being a private occupation of space to an overlap and fusion of multiple individual entities, existence in the digital space is redefined as collaborative fluidity.',
          },
          {
            zh: "作品探讨的是人与周围环境的联系，也是人与人之间的联系。",
            en: "The work explores the connections between people and their surroundings, as well as between themselves.",
          },
        ],
      },
      {
        type: "process",
        nodes: [
          { name: "MediaPipe", caption: { zh: "人体姿态追踪", en: "Pose Tracking" }, src: "process-mediapipe.png" },
          { name: "OSC", caption: { zh: "参数传输", en: "Parameter Transmission" }, src: "process-osc.png" },
          { name: "TouchDesigner", caption: { zh: "实时处理", en: "Real-time Processing" }, src: "process-touchdesigner.png" },
          { name: "Unity", caption: { zh: "场景生成", en: "Scene Generation" }, src: "process-unity.gif" },
        ],
        summary: {
          zh: "参与者进入摄像头视野后，MediaPipe 实时捕捉人体姿态数据，通过 OSC 协议传输至 TouchDesigner 进行参数映射，再由 Unity 实时生成对应的虚拟家具，家具的位置与移动完全跟随参与者的身体动作。",
          en: "Participants step into the camera's field of view, and the system instantly transforms them into a randomly generated piece of furniture within the virtual scene. The furniture moves in real time alongside the participant.",
        },
      },
      {
        type: "steps",
        steps: [
          {
            title: { zh: "吸引 Attraction", en: "Attraction" },
            caption: {
              zh: "被一个与自己相似的「数字人」所吸引",
              en: 'Being drawn to an unfamiliar "digital person" who is just like you',
            },
            src: "step-attraction.gif",
          },
          {
            title: { zh: "融合 Merge", en: "Merge" },
            caption: {
              zh: "当两人靠得足够近，各自的家具会跨越边界融合成一件更大的家具",
              en: "When they are close enough, the two pieces will cross their individual boundaries and merge into a larger piece of furniture",
            },
            src: "step-merge.gif",
          },
          {
            title: { zh: "消失 Disappear", en: "Disappear" },
            caption: {
              zh: "融合后的家具会在 20 秒后消失",
              en: "Merged furniture disappears after 20 seconds",
            },
            src: "step-disappear.gif",
          },
        ],
        note: {
          zh: "补充：参与者可摆出特定姿势，切换同类家具的不同风格——沙发/椅子/台灯/床",
          en: 'Additionally, participants can perform a "specific pose" to switch between different styles of the same type of furniture (sofa/chair/lamp/bed)',
        },
        noteImages: [
          { src: "style-switch-chair.gif", filename: { zh: "转椅子", en: "Chair Style" } },
          { src: "style-switch-bed.gif", filename: { zh: "换床", en: "Bed Style" } },
          { src: "style-switch-lamp.gif", filename: { zh: "换台灯", en: "Lamp Style" } },
        ],
      },
      {
        type: "visuals",
        heading: { zh: "装置展览现场", en: "Exhibition" },
        images: [{ filename: "exhibition-1.jpg" }, { filename: "exhibition-2.jpg" }],
        note: {
          zh: "投影幕布 + 参与者剪影的现场照片",
          en: "On-site photos of the projection surface and participants' silhouettes",
        },
      },
    ],
  },
  {
    id: "blooming-breathe",
    category: "installations",
    title: { zh: "Blooming Breathe", en: "Blooming Breathe" },
    year: 2025,
    tools: [
      { zh: "手势追踪（MediaPipe）", en: "Hand Tracking (MediaPipe)" },
      { zh: "TouchDesigner", en: "TouchDesigner" },
      { zh: "投影", en: "Projection Mapping" },
      { zh: "数字制造", en: "Digital Fabrication" },
      { zh: "灯光（Arduino 控制 LED 背光）", en: "Light (Arduino-controlled LED backlight)" },
    ],
    description: {
      zh: "观众用手势「唤醒」投影在雪景装置上的春天景象，探讨城市公共空间的「修复」与「更新」。",
      en: 'An installation that combines interactive visuals, projection mapping, and digital fabrication. It allows the audience to "wake up" the spring landscape hidden under winter snow through simple body movements, using natural hand gestures to change the scene and turn the hope for spring into a visual and touch-like experience.',
    },
    links: [{ label: { zh: "YouTube", en: "YouTube" }, url: "https://youtu.be/qQFO6nPYWic" }],
    featured: true,
    detail: [
      {
        type: "concept",
        quote: [
          {
            zh: "作品探讨城市公共空间的「修复」与「更新」——公共空间并非静止不变，而是被日常的「行为」持续塑造。从冬到春的转变，隐喻着人的行为对空间的影响。",
            en: 'The work explores the "restoration" and "renewal" of urban public spaces, inviting viewers to participate in transforming the environment through interaction. Public spaces are not static but are continually shaped by everyday "actions." This transition from winter to spring serves as a metaphor for the impact of human activity on space.',
          },
        ],
        body: {
          zh: "技术实现说明：通过网络摄像头用 MediaPipe 检测手部位置，追踪数据实时传入 TouchDesigner 并映射为交互参数。侦测到手部时，系统会生成一个圆形交互区域，如同橡皮擦一样逐渐擦除画面上层的「冬景」视频层，露出下方的「春景」。",
          en: "MediaPipe is used to detect hand presence and position from a web camera. The tracking data is transferred into TouchDesigner and mapped to interaction parameters in real time. When a hand is detected, the system generates a circular interaction area that functions as an eraser, gradually removing the upper video layer. As the hand moves, the erased area follows continuously and reveals the spring video underneath.",
        },
      },
      {
        type: "steps",
        heading: { zh: "交互设计流程", en: "Interactive Design Process" },
        compact: true,
        steps: [
          { title: { zh: "自然手势交互", en: "Natural Gesture Interaction" }, src: "step-1.webp" },
          {
            title: { zh: "实时感应与追踪", en: "Real-time Sensing & Tracking" },
            caption: {
              zh: "MediaPipe 从摄像头捕捉手部关键点",
              en: "MediaPipe captures hand keypoints from the camera",
            },
            src: "step-2.webp",
          },
          { title: { zh: "数据映射与处理", en: "Data Mapping & Processing" }, src: "step-3.webp" },
          {
            title: { zh: "动态视觉反馈", en: "Dynamic Visual Feedback" },
            caption: { zh: "橡皮擦效果", en: "Eraser Effect" },
            src: "step-4.webp",
          },
          {
            title: { zh: "精确投影映射", en: "Precise Projection Mapping" },
            caption: {
              zh: "Kantan Mapper 对齐立体花朵模型",
              en: "Kantan Mapper aligns the 3D flower model",
            },
            src: "step-5.webp",
          },
          {
            title: { zh: "硬件协同背光", en: "Hardware Co-ordinated Backlighting" },
            caption: {
              zh: "Arduino Uno R3 控制 LED 灯带",
              en: "Arduino Uno R3 controls the LED strip",
            },
            src: "step-6.webp",
          },
        ],
      },
      {
        type: "feedback",
        quotes: [
          {
            text: "It's like magic! The real-time visual feedback is so smooth, it feels like I'm bringing this corner to life with my own hands.",
            source: { zh: "现场观众", en: "On-site Visitor" },
          },
          {
            text: "My daughter likes it a lot.",
            source: { zh: "现场观众", en: "On-site Visitor" },
            src: "site-photo-child.webp",
          },
          {
            text: "I really appreciate the scale of this installation; it sits quietly beside the bench without disrupting the harmony of the public space.",
            source: { zh: "现场观众", en: "On-site Visitor" },
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
    title: { zh: "Patrol", en: "Patrol" },
    year: 2026,
    tools: [
      { zh: "AI 动画", en: "AI Animation" },
      { zh: "Ouster LiDAR 空间扫描", en: "Ouster LiDAR Scanning" },
      { zh: "真人表演", en: "Live-action Performance" },
    ],
    description: {
      zh: "跨媒介实验动画。",
      en: "A transmedia experimental animation.",
    },
    links: [{ label: { zh: "YouTube", en: "YouTube" }, url: "https://youtu.be/KWh6XKj9E8Y" }],
    featured: true,
    layout: "custom",
  },
  {
    id: "patrol-2",
    category: "ai-video",
    kind: "personal",
    title: { zh: "Patrol 2", en: "Patrol 2" },
    year: 2026,
    tools: [
      { zh: "数字建模", en: "Digital Mapping" },
      { zh: "手势交互", en: "Hand Tracking" },
    ],
    description: {
      zh: "将 Patrol 的叙事世界转化为可交互的 3D 点云宇宙。",
      en: "Transforms Patrol's narrative world into an interactive 3D point-cloud universe.",
    },
    links: [{ label: { zh: "YouTube", en: "YouTube" }, url: "https://youtu.be/40M8dXoJFhg" }],
    featured: true,
    layout: "custom",
  },
  {
    id: "fight-until-the-end",
    category: "ai-video",
    kind: "personal",
    title: { zh: "Fight Until The End", en: "Fight Until The End" },
    year: 2025,
    tools: [
      { zh: "Midjourney", en: "Midjourney" },
      { zh: "即梦 AI", en: "Jimeng AI" },
    ],
    description: {
      zh: "2025 联想《双子星》AIGC 创作大赛新星奖作品，个人独立完成，15 天内制作，纯 AI 生成科幻短片。",
      en: '2025 Lenovo "Binary Star" AIGC Creation Contest Rising Star Award. A fully AI-generated sci-fi short film with an original story and character, produced solo within 15 days.',
    },
    infoStrip: {
      zh: "2025联想《双子星》AIGC创作大赛 · 新星奖",
      en: '2025 Lenovo "Binary Star" AIGC Creation Contest · Rising Star Award',
    },
    detail: [
      {
        type: "concept",
        quote: [
          {
            zh: "联想AI智能中心邀请全网AIGC创作者，共同探索「AI与爱」这一宏大科幻主题，并用AI工具完成创作。这是一部完全由AI生成的科幻短片，原创故事、原创角色，个人独立完成，在15天的限定周期内制作。全程使用Midjourney与即梦AI，从图片到视频逐帧生产。",
            en: 'Lenovo AI Intelligence Center invites AIGC creators across the web to collectively explore the grand sci-fi theme of "AI and Love" and complete their creations using AI tools. This is a fully AI-generated sci-fi short video with an original story and original character. This is an individual work, produced within a limited time of 15 days. Midjourney and Jimeng AI were the two platforms used to produce the work from image to video, frame by frame.',
          },
        ],
      },
      {
        type: "visuals",
        images: [{ filename: "support-1.webp" }, { filename: "support-2.webp" }],
        note: {
          zh: "控制室「地球联合国委员会」场景、发光手部特效场景",
          en: 'Control room "Earth United Nations Committee" scene, glowing hand-effect scene',
        },
      },
    ],
  },
  {
    id: "gallery-of-the-mist",
    category: "ai-video",
    kind: "personal",
    title: { zh: "The Gallery of The Mist 雾之书廊", en: "The Gallery of The Mist" },
    year: 2025,
    tools: [
      { zh: "即梦 AI", en: "Jimeng AI" },
      { zh: "DeepSeek", en: "DeepSeek" },
      { zh: "ChatGPT", en: "ChatGPT" },
      { zh: "Midjourney", en: "Midjourney" },
    ],
    description: {
      zh: "中国风 AI 动画短片，探索东方美学与 MV 式剪辑的结合。",
      en: "A Chinese-style AI animated short film exploring the combination of Eastern aesthetics and MV-style editing.",
    },
    infoStrip: {
      zh: "The Gallery of The Mist 雾之书廊 · 2025.04–2025.05",
      en: "The Gallery of The Mist · 2025.04 – 2025.05",
    },
    detail: [
      {
        type: "concept",
        quote: [
          {
            zh: "这是一部中国风AI动画短片，后期剪辑与合成使用Premiere Pro与CapCut完成。这是我第一次尝试将东方美学构图与MV式剪辑结合，力图在中国风动画中营造戏剧张力与电影感的视觉冲击。",
            en: "This is a Chinese-style AI animated short film. Post-production editing and compositing were done in Premiere Pro and CapCut. This project marks my first attempt at combining Eastern aesthetic composition with MV-style editing, aiming to create dramatic tension and cinematic visual impact within a Chinese-style animation.",
          },
        ],
      },
      {
        type: "visuals",
        images: [
          { filename: "calligraphy.webp" },
          { filename: "pavilion.webp" },
          { filename: "scroll-writing.webp" },
        ],
        note: {
          zh: "书法字构图、古建筑雾中场景、握笔书写古卷轴的手部特写",
          en: "Calligraphy character composition, ancient architecture in mist, close-up of a hand writing on an ancient scroll",
        },
      },
    ],
  },

  // ---- AI Video — client commissions ----
  {
    id: "ccp-104",
    assetSlug: "104th-anniversary",
    category: "ai-video",
    kind: "client",
    title: {
      zh: "建党104周年 AI 短片",
      en: "AI Short Video Celebrating the 104th Anniversary of the Communist Party",
    },
    year: 2025,
    client: { zh: "中视影光 CTW", en: "CTW (China Television Works)" },
    tools: [
      { zh: "即梦 AI", en: "Jimeng AI" },
      { zh: "可灵 AI", en: "KlingAI" },
      { zh: "DeepSeek", en: "DeepSeek" },
    ],
    description: {
      zh: "建党 104 周年主题 AI 短片。",
      en: "A short film celebrating the 104th anniversary of the founding of the Communist Party.",
    },
    infoStrip: {
      zh: "庆祝党104周年生日系列短片 · 2025.06.17–2025.07.01 · 甲方：中视影光CTW",
      en: "104th Anniversary short film series · 2025.06.17 – 2025.07.01 · Client: CTW (China Television Works)",
    },
    detail: [
      {
        type: "concept",
        quote: [
          {
            zh: "这是一部完全由AI生成的104秒短片，尝试讲述一位优秀共产党员的一生。全片由21个镜头与10个转场组成，总计消耗超过8000点数，使用即梦3.0 Pro + 可灵2.0视频模型 + Google Veo3 AI制作完成。",
            en: "This 104-second short film is generated entirely by AI. It is an attempt to tell the life story of an outstanding Communist Party member. The film consists of 21 clips and 10 transitions, consuming a total of over 8,000 points. Jiemeng 3.0 Pro + Kelin 2.0 video model + Google Veo3 AI.",
          },
        ],
      },
      {
        type: "visuals",
        images: [{ filename: "badge-closeup.webp" }],
        note: { zh: "手持党徽特写", en: "Close-up of hands holding a Party badge" },
      },
    ],
  },
  {
    id: "bbmg",
    assetSlug: "bbmg-cement",
    category: "ai-video",
    kind: "client",
    title: {
      zh: "BBMG 金隅冀东水泥 AI 形象动画",
      en: "AI Character Design for BBMG Jidong Cement Group Co., Ltd.",
    },
    year: 2025,
    client: { zh: "BBMG 金隅冀东水泥", en: "BBMG Jidong Cement Group Co., Ltd." },
    role: { zh: "商业委托角色设计", en: "Commissioned Character Design" },
    tools: [
      { zh: "即梦 AI", en: "Jimeng AI" },
      { zh: "可灵 AI", en: "KlingAI" },
    ],
    description: {
      zh: "商业委托角色设计与形象动画。",
      en: "Commissioned character design and animation.",
    },
    infoStrip: {
      zh: "AI Character Design for BBMG Jidong Cement Group Co., Ltd. · 金隅冀东水泥低碳发展专题片AI形象动画制作 · 2025.05–2025.06",
      en: "AI Character Design for BBMG Jidong Cement Group Co., Ltd. · 2025.05 – 2025.06",
    },
    detail: [
      {
        type: "concept",
        quote: [
          {
            zh: "这是该公司首次尝试在商业短片中引入AI生成的动画角色，成片获得客户高度评价。使用即梦3.0 Pro模型生成，并结合After Effects进行视觉特效与合成。",
            en: "This was the company's first attempt to incorporate an AI-generated animated character into a commercial short film, and the film received high praise from the client. It was created using the JiMeng 3.0 Pro model combined with After Effects visual effects and compositing.",
          },
        ],
      },
      {
        type: "visuals",
        images: [{ filename: "mascot-closeup.webp" }, { filename: "banner.webp" }],
        note: {
          zh: "吉祥物「小C」、「让我们携手并进 共绘美丽中国新画卷」宣传banner",
          en: 'Mascot "Xiao C", promotional banner reading "Let\'s move forward hand in hand to paint a beautiful new China"',
        },
      },
    ],
  },

  // ---- Experimental Video ----
  {
    id: "between-steps",
    category: "experimental-video",
    title: { zh: "Between Steps", en: "Between Steps" },
    year: 2024,
    tools: [
      { zh: "摄影", en: "Photography" },
      { zh: "动态影像", en: "Moving Image" },
      { zh: "声音", en: "Sound" },
    ],
    description: {
      zh: "探讨「无限楼梯」与空间失序感。",
      en: "An experimental audiovisual work exploring liminal space and spatial disorientation, built around the idea of an infinite staircase and dreamcore.",
    },
    links: [{ label: { zh: "YouTube", en: "YouTube" }, url: "https://youtu.be/B6ze_bWcdW0" }],
    featured: true,
    detail: [
      {
        type: "concept",
        quote: [
          {
            zh: "楼梯从不只是连接不同标高的建筑构件；它是一种典型的阈限空间（liminal space）——一处知觉过渡与存在性迷失的场所。通过探索「无限楼梯」与Dreamcore美学，我试图解构楼梯作为「垂直通行工具」的功能性，将其重新想象为一个不稳定的、循环往复的场域。",
            en: 'Stairs are never merely architectural conduits between elevations; they function as a quintessential liminal space—a site of perceptual transition and existential disorientation. Through the exploration of "infinite staircases" and the Dreamcore aesthetic, I aim to deconstruct the staircase\'s utility as a tool for vertical progress, reimagining it as an unstable, recursive field.',
          },
          {
            zh: "乍看之下，这个空间梦幻而安静。但当你真正置身其中，它会变得压抑而孤立。",
            en: "At first glance, the space appears dream-like and quiet. But when experienced from within, it turns oppressive and isolating.",
          },
        ],
        body2: {
          heading: { zh: "视觉手法说明", en: "Visual Approach" },
          text: {
            zh: "黑白影像与画面中彩色女孩之间的高对比，强调了一种无助感。当她在空间中移动，色彩的痕迹留在地面上，促使人们反思当下的意义与自身的身份认同。",
            en: "The high contrast between the black-and-white imagery and the colorful girl emphasizes helplessness. As she moves through the space, traces of color remain on the floor, prompting people to reflect on the meaning of the present and their own identity.",
          },
        },
      },
      {
        type: "visuals",
        images: [
          { filename: "sketch.jpg" },
          { filename: "contact-sheet.jpg" },
          { filename: "glitch-still.jpg" },
        ],
        note: {
          zh: "手绘无限楼梯草图、原始摄影小样 contact sheet、RGB色差故障效果剧照",
          en: "Hand-drawn infinite-staircase sketch, original photography contact sheet, RGB chromatic-aberration glitch still",
        },
      },
    ],
  },

  // ---- Games ----
  {
    id: "close-the-ad",
    category: "games",
    title: { zh: "Close the Ad", en: "Close the Ad" },
    year: 2025,
    tools: [
      { zh: "GameMaker", en: "GameMaker" },
      { zh: "GML", en: "GML" },
    ],
    role: {
      zh: "核心程序员 — 全局状态管理与 UI 交互逻辑",
      en: "Core Programmer — Global State Management & UI Interaction Logic",
    },
    description: {
      zh: "7 人团队开发的单人 2D 游戏。",
      en: "A single-player 2D game developed by a seven-person team.",
    },
    links: [
      {
        label: { zh: "试玩 Demo", en: "Play Demo" },
        url: "https://gx.games/games/pv1jle/close-the-ad-6-10/",
      },
    ],
    featured: true,
    infoStrip: {
      zh: "单人2D游戏 · 2025 · 7人团队开发",
      en: "Single-player 2D Game · 2025 · Developed by a seven-person team",
    },
    detail: [
      {
        type: "body",
        heading: { zh: "项目信息", en: "Project Info" },
        paragraphs: [
          {
            zh: "玩家扮演一名在有限时间内使用电脑的学生，需要在层出不穷的误导性广告与干扰中周旋，随着人生阶段推进，选择将影响情绪值并导向不同结局。",
            en: "Close the Ad is a single-player 2D game where players take the role of a student working on a computer under a limited time constraint. Players navigate misleading ads and interruptions while progressing through different life stages. Their choices affect their emotional values and directly lead to multiple endings.",
          },
        ],
      },
      {
        type: "body",
        heading: { zh: "我的角色与贡献", en: "My Role & Contribution" },
        paragraphs: [
          {
            zh: "作为核心程序员，我用GML搭建了游戏的核心框架，重点开发了支撑复杂关卡推进与多线叙事分支的全局状态管理系统。我主导了UI交互逻辑的开发，通过状态控制的可见性机制保证玩家反馈的流畅性。为保证系统稳定性，我采用了严谨的实例校验等防御性编程模式以减少运行时错误。此外，我通过自定义渲染函数优化了精灵缩放与坐标控制的视觉表现。",
            en: "As the Core Programmer, I engineered the game's fundamental framework using GML, focusing on a robust global state management system that facilitated complex level progression and multi-narrative branching. I spearheaded the development of the UI interaction logic, utilizing state-controlled visibility to ensure seamless player feedback. To guarantee system stability, I implemented defensive programming patterns, such as rigorous instance validation, to minimize runtime errors. Additionally, I optimized the visual experience by leveraging custom rendering functions for precise sprite scaling and coordinate control.",
          },
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
        note: {
          zh: "GameMaker对象列表面板、关卡控制脚本代码截图、虚假「Super Antivirus」警告弹窗、「Paster Battle」游戏内假广告",
          en: 'GameMaker object list panel, level-control script code, fake "Super Antivirus" warning popup, "Paster Battle" in-game fake ad',
        },
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
