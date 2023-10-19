import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRef } from "react";

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  link,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
      className="group"
    >
      <article className="bg-slate-200/50 max-w-[42rem] border border-slate-900/5 overflow-hidden sm:pr-8 relative sm:h-[21rem] mb-3 sm:mb-8 rounded-xl last:mb-8  hover:bg-slate-200 transition cursor-pointer project dark:bg-slate-800/90 dark:hover:bg-slate-800/60">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-700 dark:text-white/80">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-slate-950/[0.7] px-3 py-1 uppercase tracking-wider font-semibold text-white rounded-full text-xs dark:text-slate-900 dark:bg-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Link href={link}>
          <Image
            src={imageUrl}
            priority
            alt={title}
            quality={100}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl shadow-slate-900/50 
            group-even:-right-[initial] 
            group-even:-left-40 
            group-hover:-translate-x-3 
            group-hover:translate-y-3 
            group-hover:-rotate-3 transition duration-500 
            group-hover:scale-125
            group-even:group-hover:translate-x-3 
            group-even:group-hover:translate-y-3 
            group-even:group-hover:rotate-3 "
          />
        </Link>
      </article>
    </motion.div>
  );
}
