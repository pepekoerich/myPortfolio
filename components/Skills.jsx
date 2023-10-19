"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import { skillsData } from "@/libs/data";
import useSectionInView from "@/libs/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Habilidades", 0.75);
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.07 * index, type: "spring", stiffness: 125 },
    }),
  };

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="habilidades"
      ref={ref}
    >
      <SectionHeader title={"Habilidades"} />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="bg-white border border-slate-900/10 px-5 py-3 rounded-lg dark:bg-slate-800 dark:text-white dark:border-white/10"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
