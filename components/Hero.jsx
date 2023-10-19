"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import useSectionInView from "@/libs/hooks";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const {setLastClicked, setActiveSection} = useActiveSectionContext()

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-36"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "twenn", duration: 0.2 }}
          >
            <Image
              src="/Editada.jpeg"
              alt="mypicture"
              width={192}
              height={192}
              quality={"95"}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.3rem] border-white shadow-xl"
            />
            <motion.span
              className="text-2xl absolute bottom-0 right-0"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                duration: 0.2,
                delay: 0.1,
              }}
            >
              &#128512;
            </motion.span>
          </motion.div>
        </div>
      </div>
      <div>
        <motion.p
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Olá,</span> me chamo{" "}
          <span className="font-bold"> Pedro.</span> Sou um{" "}
          <span className="font-bold">desenvolvedor full stack</span> com
          <span className="font-bold"> 1 ano </span> de experiência. Sou
          apaixonado por criar
          <span className="italic font-semibold">
            {" "}
            sites e aplicações.
          </span>{" "}
          Hoje em dia o meu foco é trabalhar com
          <span className="font-bold underline"> React(Next.js) </span>
        </motion.p>
      </div>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-3 font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <Link
          href={"#contato"}
          className="bg-slate-900/95 text-white rounded-full flex items-center justify-center gap-2 px-7 py-3 
          outline-none focus:scale-105 hover:scale-105 transition duration-300 hover:bg-slate-950 active:scale-105"
          onClick={() => {
            setLastClicked(Date.now())
            setActiveSection("ontato")
          }}
        >
          Entre em contato <BsArrowRight className="opacity-70" />
        </Link>
        <a
          href="/CV - Pedro - FullStack.pdf"
          download={true}
          className="bg-white text-slate/900/95 font-semibold rounded-full flex items-center justify-center gap-2 px-7 py-3 
          outline-none focus:scale-105 hover:scale-105 transition duration-300 active:scale-105 dark:text-slate-950 dark:bg-opacity-70"
        >
          Download CV <HiDownload className="opacity-70" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/pedrokoerichc/"
          target="_blank"
          className="text-3xl focus:scale-125 hover:scale-125 transition duration-500  active:scale-125 hover:-rotate-6 dark:text-white/70"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://www.github.com/pepekoerich"
          target="_blank"
          className="text-[2.1rem] hover:scale-125 active:scale-125 transition duration-500 hover:rotate-6 dark:bg-opacity-70 dark:text-white/70 "
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
