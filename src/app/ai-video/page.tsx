import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ProjectAccordionProvider } from "@/components/ProjectAccordion";
import { ProjectEntry } from "@/components/ProjectEntry";
import { LangText } from "@/components/LangText";
import { categoryMeta, getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = { title: "AI影像 AI Video — Pengran Chen" };

export default function AiVideoPage() {
  const meta = categoryMeta["ai-video"];
  const items = getProjectsByCategory("ai-video");
  const personal = items.filter((p) => p.kind === "personal");
  const client = items.filter((p) => p.kind === "client");

  return (
    <>
      <PageHeader
        index={meta.index}
        label={meta.label}
        labelEn={meta.labelEn}
        description={{
          zh: "生成式影像与跨媒介叙事实验，涵盖个人创作与商业委托。",
          en: "Generative imagery and transmedia narrative experiments, spanning personal work and commissioned projects.",
        }}
      />

      <div className="px-5 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <ProjectAccordionProvider>
            <LangText
              as="h2"
              className="block pt-14 font-display text-xl tracking-wide text-fg-dim sm:pt-20"
              field={{ zh: "个人创作 / 获奖作品", en: "Personal Work / Awarded" }}
            />
            {personal.map((p, i) => (
              <ProjectEntry key={p.id} project={p} index={i} />
            ))}

            <LangText
              as="h2"
              className="block pt-14 font-display text-xl tracking-wide text-fg-dim sm:pt-20"
              field={{ zh: "客户委托作品", en: "Client Commissions" }}
            />
            {client.map((p, i) => (
              <ProjectEntry key={p.id} project={p} index={personal.length + i} />
            ))}
          </ProjectAccordionProvider>
        </div>
      </div>
    </>
  );
}
