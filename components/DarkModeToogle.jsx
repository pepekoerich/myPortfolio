"use client";


import { useTheme } from "@/context/ThemeContextProvider";
import { BsMoon, BsSun } from "react-icons/bs";

export default function DarkModeToogle() {
  const {theme, toggleTheme} = useTheme()

  return (
    <button
      className="fixed bottom-5 right-5 bg-white text-xl p-2 rounded-full border bg-opacity-70 border-slate-400/40
     text-slate-950 hover:scale-110 active:scale-110 transition-all duration-300 backdrop-blur-[0.1rem]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
