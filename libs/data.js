import tastehub from "@/public/tastehub.png";
import quicksubs from "@/public/quicksubs.png";
import { TbChefHat } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Experiência",
    hash: "#experiencia",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
];

export const experiencesData = [
  {
    title: "Cook II",
    location: "Laguna Niguel - CA - USA",
    description:
      "Responsável por preparar alimentos para os restaurantes do hotel, incluindo o restaurante 180blu, que é um dos melhores restaurantes de frutos do mar da Califórnia. Também responsável por preparar alimentos para eventos e banquetes, incluindo casamentos, festas de aniversário, festas de fim de ano, etc.",
    icon: <TbChefHat />,
    date: "2021",
  },

  {
    title: "Estudante de Deenvolvimento Web",
    location: "Florianópolis - SC - BR",
    description:
      "Estudando desenvolvimento web no curso livre da TERA, com foco em React, React Native, Next.js, JavaScript, MongoDB, TailwindCSS, Bootstrap, Node.js, Express.js, AWS S3 e GitHub",

    icon: <HiOutlineAcademicCap />,
    date: "2023",
  },

  {
    title: "Desenvolvedor Full Stack",
    location: "Florianópolis - SC - BR",
    description:
      "Trabalhando em projetos próprios e de clientes. Meu foco inclui React, Next.js, Javascript, TailwindCSS, MongoDB e AWS S3. Estou aberto novas oportunidades e projetos.",
    icon: <FaReact />,
    date: "2023 - Atualmente",
  },
];

export const projectsData = [
  {
    title: "TasteHub",
    description:
      "Plataforma voltada para o ramo da gastronomia. O objetivo é conectar clientes e profissionais de forma rápida e fácil.",
    tags: ["React", "Express.js", "Bootstrap", "MongoDB", "AWS S3", "Node.js"],
    imageUrl: tastehub,
    link: "https://tastehub.com.br",
  },
  {
    title: "QuickSubs",
    description:
      "Aplicação web para automação de legendas. O usuário pode enviar um vídeo e receberá a legenda conforme o idioma do vídeo.",
    tags: ["Next.js", "TailwindCSS", "AWS S3"],
    imageUrl: quicksubs,
    link: "https://quicksubs.vercel.app/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TailwindCSS",
  "Bootstrap",
  "GitHub",
  "S3",
  "AWS",
  "Framer Motion",
  "Full Stack",
];
