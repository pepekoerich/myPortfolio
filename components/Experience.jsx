"use client";

import SectionHeader from "./SectionHeader";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/libs/data";
import React from "react";
import useSectionInView from "@/libs/hooks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContextProvider";

export default function Experience() {
  const { ref } = useSectionInView("Experiência", 0.5);
  const {theme, toggleTheme} = useTheme()
  return (
    <section id="experiencia" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeader title={"Experiência"} />

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible
                contentStyle={{
                  background: theme === "light" ? "white" : "#1E293B",
                  boxShadow: "none",
                  border: theme === "light" ? "1px solid #e5e7eb" : "1px solid #353F4F",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "white",
                  border: "none",
                  fontSize: "1.5rem",
                  color: theme === "dark" ?  "#1E293B" : "",
                }}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  custom={index}
                >
                  <h3 className="font-semibold capitalize dark:text-white">{item.title}</h3>
                  <p className="font-normal !mt-0">{item.location}</p>
                  <p className="!font-normal text-slate-700 dark:text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
