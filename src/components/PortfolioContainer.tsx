"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function PortfolioContainer() {
  const [lang, setLang] = useState<"fa" | "en">("fa");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      queueMicrotask(() => setTheme(savedTheme));
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      queueMicrotask(() => setTheme("light"));
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

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
        setTheme={toggleTheme}
      />
      
      <main className="space-y-12 sm:space-y-16">
        <Hero lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
