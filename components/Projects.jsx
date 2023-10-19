"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/libs/data";
import ProjectCard from "./ProjectCard";
import useSectionInView from "@/libs/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projetos", 0.5);

  return (
    <section id="projetos" className="scroll-mt-32 mb-28" ref={ref}>
      <SectionHeader title={"Projetos"} />
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
