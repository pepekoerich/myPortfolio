"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = experimental_useFormStatus();
  return (
    <button
      type="submit"
      className="group flex dark:border dark:hover:bg-white dark:hover:text-slate-800 items-center justify-center gap-2 
      h-[3rem] w-[8rem] bg-slate-800 text-white rounded-full outline-none hover:scale-110 transition duration-300 hover:font-semibold
        hover:bg-slate-950 disabled:scale-100 disabled:opacity-90 disabled:hover:bg-slate-800 dark:hover dark:border-[#353F4F] "
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar{" "}
          <FaPaperPlane className="text-sm opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
        </>
      )}
    </button>
  );
}
