"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "dark" | "light";
type Language = "fa" | "en";

interface ThemeLanguageContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined);

export function ThemeLanguageProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [lang, setLangState] = useState<Language>("fa");

  useEffect(() => {
    queueMicrotask(() => {
      const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
      const currentAttr = document.documentElement.getAttribute("data-theme") as Theme | null;
      
      if (savedTheme) {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else if (currentAttr) {
        setThemeState(currentAttr);
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setThemeState("light");
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        setThemeState("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      }

      const savedLang = localStorage.getItem("portfolio-lang") as Language | null;
      if (savedLang) {
        setLangState(savedLang);
        document.documentElement.setAttribute("lang", savedLang);
        document.documentElement.setAttribute("dir", savedLang === "fa" ? "rtl" : "ltr");
      }
    });
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("portfolio-theme", newTheme);
    } catch {}
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("portfolio-lang", newLang);
    } catch {}
    document.documentElement.setAttribute("lang", newLang);
    document.documentElement.setAttribute("dir", newLang === "fa" ? "rtl" : "ltr");
  };

  const toggleLang = () => {
    const next = lang === "fa" ? "en" : "fa";
    setLang(next);
  };

  return (
    <ThemeLanguageContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        lang,
        setLang,
        toggleLang,
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  const context = useContext(ThemeLanguageContext);
  if (!context) {
    return {
      theme: "dark" as Theme,
      setTheme: () => {},
      toggleTheme: () => {},
      lang: "fa" as Language,
      setLang: () => {},
      toggleLang: () => {},
    };
  }
  return context;
}
