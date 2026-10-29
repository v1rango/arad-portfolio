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
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    try {
      // 1. Language: Default to "en" unless user previously stored a choice
      const savedLang = localStorage.getItem("portfolio-lang") as Language | null;
      if (savedLang === "fa" || savedLang === "en") {
        setLangState(savedLang);
        document.documentElement.setAttribute("lang", savedLang);
        document.documentElement.setAttribute("dir", savedLang === "fa" ? "rtl" : "ltr");
      } else {
        setLangState("en");
        document.documentElement.setAttribute("lang", "en");
        document.documentElement.setAttribute("dir", "ltr");
      }

      // 2. Theme: Follow device preference (prefers-color-scheme) by default
      const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        setThemeState(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
      } else if (typeof window !== "undefined" && window.matchMedia) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const systemTheme: Theme = prefersDark ? "dark" : "light";
        setThemeState(systemTheme);
        document.documentElement.setAttribute("data-theme", systemTheme);
      }
    } catch {}

    // 3. Dynamic listener: update theme when user changes system appearance (unless manual override is saved)
    if (typeof window !== "undefined" && window.matchMedia) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        try {
          const hasManualOverride = localStorage.getItem("portfolio-theme");
          if (!hasManualOverride) {
            const nextTheme: Theme = e.matches ? "dark" : "light";
            setThemeState(nextTheme);
            document.documentElement.setAttribute("data-theme", nextTheme);
          }
        } catch {}
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
    }
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
      lang: "en" as Language,
      setLang: () => {},
      toggleLang: () => {},
    };
  }
  return context;
}
