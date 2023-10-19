"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import useSectionInView from "@/libs/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/libs/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function Contact() {
  const { ref } = useSectionInView("Contato", 0.9);
  const formRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contato"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeader title={"Contato"} />
      <p className="text-slate-700 dark:text-white/80">
        Faça contato direto em{" "}
        <a href="mailto:pedrokoerich27@gmail.com" className="underline">
          pedro_koerich@hotmail.com
        </a>{" "}
        ou por este formulário.
      </p>
      <form
        ref={formRef}
        id="submitForm"
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
          }

          toast.success("Email enviado com sucesso.");
          document.getElementById("submitForm").reset()
        }}
      >
        <input
          className="h-14 rounded-lg border border-slate-800/20 p-4 dark:bg-slate-800 dark:text-white dark:placeholder:text-white/70 dark:border-[#353F4F]"
          name="email"
          type="email"
          placeholder="Email"
          required
          maxLength={50}
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-slate-800/20 p-4  dark:bg-slate-800 dark:text-white dark:placeholder:text-white/70 dark:border-[#353F4F]"
          name="message"
          placeholder="Mensagem"
          required
          maxLength={500}
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
