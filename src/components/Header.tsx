"use client";

import { useState } from "react";
import { PERSONAL_DATA } from "@/lib/constants";
import { FiSun, FiMoon } from "react-icons/fi";

interface HeaderProps {
  lang: "fa" | "en";
  setLang: (lang: "fa" | "en") => void;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

export default function Header({ lang, setLang, theme, setTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#hero", labelFa: "خانه و معرفی", labelEn: "Home" },
    { href: "#skills", labelFa: "مهارت‌ها", labelEn: "Skills" },
    { href: "#projects", labelFa: "پروژه‌ها", labelEn: "Projects" },
    { href: "#testimonials", labelFa: "نظرات", labelEn: "Testimonials" },
    { href: "#faq", labelFa: "سوالات متداول", labelEn: "FAQ" },
    { href: "#contact", labelFa: "تماس", labelEn: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: theme === "dark" ? "rgba(9, 10, 15, 0.85)" : "rgba(248, 250, 252, 0.85)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <div className="w-full h-full rounded-full p-0.5 border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors overflow-hidden bg-transparent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatar.png"
                alt="Arad Dev"
                className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[var(--bg-surface)]"></span>
          </div>
          <div className="flex flex-col text-right rtl:text-right ltr:text-left">
            <span className="text-lg sm:text-xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              {lang === "fa" ? PERSONAL_DATA.nameFa : PERSONAL_DATA.nameEn}
            </span>
            <span className="text-[11px] font-medium" style={{ color: "var(--accent)" }}>
              {lang === "fa" ? "توسعه‌دهنده وب & سئو نوین" : "Full-Stack & Modern SEO"}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {lang === "fa" ? link.labelFa : link.labelEn}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* دکمه تغییر تم دارک / لایت */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-xl border transition-all hover:border-[var(--accent)] flex items-center justify-center"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-primary)",
            }}
            title={theme === "dark" ? "سوییچ به حالت روشن (Light Mode)" : "سوییچ به حالت تاریک (Dark Mode)"}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <FiSun className="w-4 h-4 text-amber-400 animate-spin-slow" />
            ) : (
              <FiMoon className="w-4 h-4 text-emerald-600" />
            )}
          </button>

          {/* دکمه تغییر زبان */}
          <button
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            className="px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all hover:border-[var(--accent)]"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-secondary)",
            }}
            aria-label="تغییر زبان / Change Language"
          >
            {lang === "fa" ? "English" : "فارسی"}
          </button>
          
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-bold rounded-xl transition-all shadow-md active:scale-95"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-contrast)",
            }}
          >
            {lang === "fa" ? "شروع پروژه" : "Let's Talk"}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          {/* دکمه تم در موبایل */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-primary)",
            }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <FiSun className="w-4 h-4 text-amber-400" />
            ) : (
              <FiMoon className="w-4 h-4 text-emerald-600" />
            )}
          </button>

          {/* دکمه زبان در موبایل */}
          <button
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-secondary)",
            }}
          >
            {lang === "fa" ? "EN" : "FA"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg focus:outline-none"
            style={{ color: "var(--text-primary)" }}
            aria-label="منو"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-x-0 top-20 border-b transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-96 py-6 shadow-2xl" : "opacity-0 max-h-0 py-0 overflow-hidden"
        }`}
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-primary)" }}
            >
              {lang === "fa" ? link.labelFa : link.labelEn}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center py-2.5 text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-contrast)",
            }}
          >
            {lang === "fa" ? "شروع پروژه" : "Let's Talk"}
          </a>
        </div>
      </div>
    </header>
  );
}