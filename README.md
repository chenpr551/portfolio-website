# Pengran Chen — Portfolio

Pengran Chen（陈芃然）个人作品集网站。Next.js（App Router）+ TypeScript + Tailwind CSS v4。

## 开发

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 项目结构

- `src/app/` — 页面路由：首页 `/`，装置 `/installations`，AI影像 `/ai-video`，实验影像 `/experimental-video`，游戏 `/games`，关于 `/about`
- `src/data/projects.ts` — 所有作品的数据源。新增作品/类别时只需在这个数组里追加一条记录，无需改动页面结构
- `src/components/` — `Nav`、`Footer`、`ParticleField`（首页鼠标/触控跟随发光粒子）、`ProjectEntry` / `ProjectLine`（作品展示两种排版）、`PageHeader`

## 待办 / 接入真实素材

- 用真实项目图片/视频替换 `ProjectEntry` 里的 `GeometricPlaceholder` 占位色块（建议图片放入 `public/images/<project-id>/`，在 `src/data/projects.ts` 里加 `image` 字段后接入）
- `/about` 页的简历下载按钮链接到 `/resume.pdf`，需要把简历文件放进 `public/resume.pdf`
- 装置项目的观众反馈引语（`quotes` 字段）目前为空，有素材后可直接填入 `projects.ts`

## 部署

推送到 GitHub 后，在 [Vercel](https://vercel.com/new) 导入仓库即可，Vercel 会自动识别 Next.js 项目并配置好 CI/CD。
