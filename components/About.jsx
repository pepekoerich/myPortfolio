"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
import useSectionInView from "@/libs/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre", 0.75);

  return (
    <motion.section
      ref={ref}
      className="text-center max-w-[45rem] mb-28 leading-7 scroll-mt-36"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      id="sobre"
    >
      <SectionHeader title={"Sobre"} />
      <p className="mb-3">
        Sou Pedro, um estudante de{" "}
        <span className="font-semibold">desenvolvimento web</span> apaixonado
        por
        <span className="font-semibold"> tecnologia</span>, com uma trajetória
        profissional que pode parecer incomum à primeira vista. Formei-me em{" "}
        <span className="font-semibold">Gastronomia</span> há 10 anos e desde
        então construí uma carreira sólida nessa área. Durante essa jornada,
        desenvolvi habilidades valiosas em{" "}
        <span className="font-semibold">comunicação</span>,{" "}
        <span className="font-semibold">trabalho em equipe</span> e
        <span className="font-semibold"> gestão de tempo</span>. No entanto,
        minha paixão pela <span className="font-semibold">tecnologia</span> e
        pelo
        <span className="font-semibold"> desenvolvimento web</span> sempre foi
        uma parte intrínseca de quem eu sou.
      </p>
      <p className="mb-3">
        Recentemente, decidi seguir minha paixão pela{" "}
        <span className="font-semibold">programação</span> e comecei a estudar{" "}
        <span className="font-semibold">desenvolvimento web</span> de forma
        intensa. Estou entusiasmado em aprender e crescer nesta área em
        constante evolução, e estou confiante de que minha experiência anterior
        e habilidades adquiridas na indústria
        <span className="font-semibold"> gastronômica</span> podem ser
        transferidas com sucesso para a área de
        <span className="font-semibold"> tecnologia</span>. Meu histórico
        profissional como <span className="font-semibold">chef</span> e{" "}
        <span className="font-semibold">gerente</span> me ensinou a ser{" "}
        <span className="font-semibold">altamente organizado</span>,{" "}
        <span className="font-semibold">criativo</span>, e a buscar
        constantemente soluções inovadoras para desafios complexos.
      </p>
      <p className="mb-3">
        Essas habilidades, juntamente com minha dedicação à aprendizagem e meu
        compromisso com a <span className="font-semibold">excelência</span>,
        fazem de mim um candidato motivado e adaptável que está ansioso para se
        destacar em um novo campo. Acredito que a cultura de{" "}
        <span className="font-semibold">inovação</span> e
        <span className="font-semibold"> excelência</span> é um ambiente no qual
        eu gostaria de contribuir e crescer.
      </p>
    </motion.section>
  );
}
