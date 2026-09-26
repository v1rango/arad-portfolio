"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

// Lazy-load below-the-fold components with SSR enabled for maximum SEO and sub-100ms TBT
const WhyCustom = dynamic(() => import("@/components/WhyCustom"));
const Process = dynamic(() => import("@/components/Process"));
const Projects = dynamic(() => import("@/components/Projects"));
const Skills = dynamic(() => import("@/components/Skills"));
const ProjectEstimator = dynamic(() => import("@/components/ProjectEstimator"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function PortfolioContainer() {
  const { theme, setTheme, lang, setLang } = useThemeLanguage();

  return (
    <div
      data-theme={theme}
      className={`min-h-screen font-sans transition-colors duration-300 ${
        lang === "fa" ? "rtl" : "ltr"
      }`}
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
      dir={lang === "fa" ? "rtl" : "ltr"}
    >
      <Header
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />
      
      <main className="space-y-12 sm:space-y-16">
        <Hero lang={lang} />
        <Services lang={lang} />
        <WhyCustom lang={lang} />
        <Process lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <ProjectEstimator lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      <FloatingMobileBar lang={lang} />
    </div>
  );
}
