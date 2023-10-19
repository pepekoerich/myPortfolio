"use client";
import { motion } from "framer-motion";
import { links } from "@/libs/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Header() {
  const { activeSection, setActiveSection, setLastClicked } = useActiveSectionContext();
 

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 -translate-x-1/2 left-1/2 h-[4.5rem] w-full rounded-none 
         bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] 
         backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-slate-950/60"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500
         dark:text-white/60 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "w-full flex items-center justify-center px-2 py-3 hover:text-slate-950 dark:hover:text-white transition duration-300",
                  {
                    "text-slate-950 dark:text-white ": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name)
                  setLastClicked(Date.now())
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      duration: 0.2,
                      delay: 0.1,
                    }}
                    className="bg-slate-200/95 dark:bg-slate-800/60 rounded-full absolute inset-0 -z-10"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
