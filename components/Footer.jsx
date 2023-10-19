import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500">
      <small className="mb-2 block">&copy; 2023 Pedro Koerich. Todos os direitos reservados.</small>
      <p className="text-xs">
        <span className="font-semibold">Esta página foi construída com: </span> React & Next.Js (App
        Router & Server Actions), Javascript, TailwindCSS, Framer Motion, React
        Hot Toast, React Icons, React Timeline Component, React Email & Resend,
        Vercel Hosting.
      </p>
    </footer>
  );
}
