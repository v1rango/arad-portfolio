"use client";

import { useState } from "react";
import { PERSONAL_DATA } from "@/lib/constants";

interface HeaderProps {
  lang: "fa" | "en";
  setLang: (lang: "fa" | "en") => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", labelFa: "درباره من", labelEn: "About" },
    { href: "#skills", labelFa: "مهارت‌ها", labelEn: "Skills" },
    { href: "#projects", labelFa: "پروژه‌ها", labelEn: "Projects" },
    { href: "#testimonials", labelFa: "نظرات", labelEn: "Testimonials" },
    { href: "#contact", labelFa: "تماس", labelEn: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <a href="#" className="flex flex-col text-right">
          <span className="text-xl font-bold tracking-tight text-white">
            {lang === "fa" ? PERSONAL_DATA.nameFa : PERSONAL_DATA.nameEn}
          </span>
          <span className="text-xs text-[var(--text-secondary)]">
            {lang === "fa" ? "توسعه‌دهنده وب & سئو" : "Web Dev & SEO"}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[var(--text-secondary)] transition-colors duration-200"
            >
              {lang === "fa" ? link.labelFa : link.labelEn}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            className="px-3 py-1.5 text-xs font-semibold rounded-md border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] transition-all"
            aria-label="تغییر زبان / Change Language"
          >
            {lang === "fa" ? "English" : "فارسی"}
          </button>
          
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-[var(--accent)] text-[#021024] hover:bg-opacity-90 transition-all shadow-md font-bold"
          >
            {lang === "fa" ? "شروع پروژه" : "Let's Talk"}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            className="px-2.5 py-1 text-xs font-semibold rounded border border-[var(--border)] text-[var(--text-secondary)]"
          >
            {lang === "fa" ? "EN" : "FA"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none"
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
        className={`md:hidden fixed inset-x-0 top-20 bg-[var(--bg-surface)] border-b border-[var(--border)] transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-96 py-6" : "opacity-0 max-h-0 py-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-200 hover:text-[var(--text-secondary)]"
            >
              {lang === "fa" ? link.labelFa : link.labelEn}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center py-2.5 text-sm font-bold rounded-lg bg-[var(--accent)] text-[#021024]"
          >
            {lang === "fa" ? "شروع پروژه" : "Let's Talk"}
          </a>
        </div>
      </div>
    </header>
  );
}