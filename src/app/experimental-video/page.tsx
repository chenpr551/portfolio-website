import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ProjectAccordionProvider } from "@/components/ProjectAccordion";
import { ProjectEntry } from "@/components/ProjectEntry";
import { categoryMeta, getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "实验影像 Experimental Video — Pengran Chen",
};

export default function ExperimentalVideoPage() {
  const meta = categoryMeta["experimental-video"];
  const items = getProjectsByCategory("experimental-video");

  return (
    <>
      <PageHeader index={meta.index} label={meta.label} labelEn={meta.labelEn} />
      <div className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <ProjectAccordionProvider>
            {items.map((p, i) => (
              <ProjectEntry key={p.id} project={p} index={i} />
            ))}
          </ProjectAccordionProvider>
        </div>
      </div>
    </>
  );
}
