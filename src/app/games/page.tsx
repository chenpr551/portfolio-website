import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ProjectDetail } from "@/components/ProjectDetail";
import { ProjectLine } from "@/components/ProjectEntry";
import { categoryMeta, getProjectsByCategory } from "@/data/projects";
import { resolveProject } from "@/lib/resolveProject";

export const metadata: Metadata = { title: "游戏 Games — Pengran Chen" };

export default function GamesPage() {
  const meta = categoryMeta.games;
  const items = getProjectsByCategory("games");

  return (
    <>
      <PageHeader index={meta.index} label={meta.label} labelEn={meta.labelEn} />
      <div className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          {items.map((p, i) => {
            const resolved = resolveProject(p);
            return (
              <div key={p.id}>
                <ProjectLine project={p} index={i} />
                {(resolved.infoStrip || resolved.detail) && (
                  <div className="pb-14 pt-2 sm:pl-16">
                    <ProjectDetail infoStrip={resolved.infoStrip} blocks={resolved.detail} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
