"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-slate-900/10 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-white/50"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 125, duration: 0.1 }}
    ></motion.div>
  );
}
