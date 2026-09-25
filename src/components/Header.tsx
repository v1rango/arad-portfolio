"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PERSONAL_DATA } from "@/lib/constants";
import { FiSun, FiMoon, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

interface HeaderProps {
  lang?: "fa" | "en";
  setLang?: (lang: "fa" | "en") => void;
  theme?: "dark" | "light";
  setTheme?: (theme: "dark" | "light") => void;
}

export default function Header({
  lang: propLang,
  setLang,
  theme: propTheme,
  setTheme,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDemosOpen, setIsDemosOpen] = useState(false);
  const [internalLang, setInternalLang] = useState<"fa" | "en">("fa");
  const [internalTheme, setInternalTheme] = useState<"dark" | "light">("dark");

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDemosOpen(false);
      }
    };
    if (isDemosOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDemosOpen]);

  const lang = propLang || internalLang;
  const theme = propTheme || internalTheme;

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    if (setTheme) {
      setTheme(next);
    } else {
      setInternalTheme(next);
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("portfolio-theme", next);
      } catch (e) {}
    }
  };

  const toggleLang = () => {
    const next = lang === "fa" ? "en" : "fa";
    if (setLang) {
      setLang(next);
    } else {
      setInternalLang(next);
    }
  };

  const navLinks = [
    { href: "/#hero", labelFa: "خانه", labelEn: "Home" },
    { href: "/#services", labelFa: "خدمات", labelEn: "Services" },
    { href: "/#process", labelFa: "مراحل کار", labelEn: "Process" },
    { href: "/#projects", labelFa: "پروژه‌ها", labelEn: "Projects" },
    { href: "/case-studies/arad-gallery", labelFa: "مطالعه موردی", labelEn: "Case Study" },
    { href: "/#contact", labelFa: "تماس", labelEn: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300"
      style={{
        backgroundColor: theme === "dark" ? "rgba(9, 10, 15, 0.85)" : "rgba(248, 250, 252, 0.85)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex-shrink-0">
            <div className="w-full h-full rounded-full p-0.5 border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors overflow-hidden bg-transparent">
              <Image
                src="/avatar.png"
                alt={`${PERSONAL_DATA.nameEn} — Full-Stack Developer`}
                width={40}
                height={40}
                priority
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
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-secondary)" }}
            >
              {lang === "fa" ? link.labelFa : link.labelEn}
            </Link>
          ))}

          {/* منوی دراپ‌داون دموهای زنده - کاملاً دکمه‌ای و کلیکی */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDemosOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 active:scale-95 transition-all select-none cursor-pointer"
              aria-expanded={isDemosOpen}
              aria-label={lang === "fa" ? "مشاهده دموهای زنده" : "View Live Demos"}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{lang === "fa" ? "دموهای زنده (۳ تم)" : "Live Demos (3 Themes)"}</span>
              <FiChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isDemosOpen ? "rotate-180 text-emerald-300" : "text-emerald-400/70"
                }`}
              />
            </button>

            {isDemosOpen && (
              <div
                className="absolute top-full right-0 rtl:right-0 ltr:left-0 mt-2 w-64 p-2 rounded-2xl border shadow-2xl backdrop-blur-xl animate-in fade-in duration-200 z-50"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <Link
                  href="/services/corporate"
                  onClick={() => setIsDemosOpen(false)}
                  className="block p-2.5 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors text-right"
                >
                  <span className="block text-xs font-bold text-[var(--text-primary)]">
                    {lang === "fa" ? "سایت شرکتی & کلینیک" : "Corporate & Clinic"}
                  </span>
                  <span className="block text-[11px] text-[var(--text-secondary)] mt-0.5">
                    {lang === "fa" ? "دمو با ۳ تم + رزرو نوبت" : "3 Themes + Appointment"}
                  </span>
                </Link>

                <Link
                  href="/services/ecommerce"
                  onClick={() => setIsDemosOpen(false)}
                  className="block p-2.5 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors text-right"
                >
                  <span className="block text-xs font-bold text-[var(--text-primary)]">
                    {lang === "fa" ? "فروشگاه آنلاین پرسرعت" : "Headless E-Commerce"}
                  </span>
                  <span className="block text-[11px] text-[var(--text-secondary)] mt-0.5">
                    {lang === "fa" ? "سبد خرید اسلایدی بدون رفرش" : "Slide-over instant cart"}
                  </span>
                </Link>

                <Link
                  href="/services/web-app"
                  onClick={() => setIsDemosOpen(false)}
                  className="block p-2.5 rounded-xl hover:bg-[var(--bg-elevated)] transition-colors text-right"
                >
                  <span className="block text-xs font-bold text-[var(--text-primary)]">
                    {lang === "fa" ? "وب‌اپلیکیشن & اتوماسیون" : "Web App & Dashboard"}
                  </span>
                  <span className="block text-[11px] text-[var(--text-secondary)] mt-0.5">
                    {lang === "fa" ? "داشبورد لایو با تاخیر ۴۲ms" : "42ms low latency dashboard"}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* دکمه تغییر تم دارک / لایت */}
          <button
            onClick={toggleTheme}
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
            onClick={toggleLang}
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
            href="/#contact"
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
            onClick={toggleTheme}
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
            onClick={toggleLang}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-secondary)",
            }}
            aria-label={lang === "fa" ? "Switch language to English" : "تغییر زبان به فارسی"}
          >
            {lang === "fa" ? "EN" : "FA"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            style={{ color: "var(--text-primary)" }}
            aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
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
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-20 border-b transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 max-h-96 py-6 shadow-2xl" : "opacity-0 max-h-0 py-0 overflow-hidden"
        }`}
        style={{
          backgroundColor: "var(--bg-surface)",
          borderColor: "var(--border)",
        }}
      >
        <div className="flex flex-col gap-3 px-6 max-h-[70vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-primary)" }}
            >
              {lang === "fa" ? link.labelFa : link.labelEn}
            </Link>
          ))}

          <div className="pt-2 border-t border-[var(--border)] flex flex-col gap-2">
            <span className="text-[11px] font-bold text-[var(--accent)]">
              {lang === "fa" ? "⚡ دموهای زنده با ۳ تم:" : "⚡ Live Demos (3 Themes):"}
            </span>
            <Link
              href="/services/corporate"
              onClick={() => setIsOpen(false)}
              className="text-xs text-[var(--text-secondary)] hover:text-white"
            >
              {lang === "fa" ? "• سایت شرکتی و کلینیک زیبایی" : "• Corporate & Clinic"}
            </Link>
            <Link
              href="/services/ecommerce"
              onClick={() => setIsOpen(false)}
              className="text-xs text-[var(--text-secondary)] hover:text-white"
            >
              {lang === "fa" ? "• فروشگاه آنلاین فوق‌سریع" : "• Headless E-Commerce"}
            </Link>
            <Link
              href="/services/web-app"
              onClick={() => setIsOpen(false)}
              className="text-xs text-[var(--text-secondary)] hover:text-white"
            >
              {lang === "fa" ? "• وب‌اپلیکیشن و اتوماسیون" : "• Web App & Automation"}
            </Link>
          </div>

          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center py-2.5 text-sm font-bold rounded-xl shadow-md transition-all active:scale-95"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-contrast)",
            }}
          >
            {lang === "fa" ? "شروع پروژه" : "Let's Talk"}
          </Link>
        </div>
      </div>
    </header>
  );
}