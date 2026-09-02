import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ProjectEntry } from "@/components/ProjectEntry";
import { categoryMeta, getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = { title: "装置 Installations — Pengran Chen" };

export default function InstallationsPage() {
  const meta = categoryMeta.installations;
  const items = getProjectsByCategory("installations");

  return (
    <>
      <PageHeader
        index={meta.index}
        label={meta.label}
        labelEn={meta.labelEn}
        description="动作捕捉、投影与实时生成系统构建的空间叙事装置。"
      />
      <div className="px-5 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          {items.map((p, i) => (
            <ProjectEntry key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
