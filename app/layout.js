import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ActiveSectionContext from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import DarkModeToogle from "@/components/DarkModeToogle";
import ThemeContextProvider from "@/context/ThemeContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pedro K. - Portfolio",
  description:
    "Pedro Koerich is a software engineer based in Brazil. With a focus on building (and occasionally designing) exceptional websites, applications, and everything in between.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-100 text-slate-900 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-slate-100`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28r] xl:left[-15rem] 2xl:left[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContext>
            <Header />
            {children}
            <Toaster position="top-center" />
            <DarkModeToogle />
          </ActiveSectionContext>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
