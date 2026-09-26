"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyCustom from "@/components/WhyCustom";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ProjectEstimator from "@/components/ProjectEstimator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

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
