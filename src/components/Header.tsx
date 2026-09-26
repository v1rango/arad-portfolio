"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PERSONAL_DATA } from "@/lib/constants";
import { FiSun, FiMoon, FiChevronDown, FiX, FiMenu } from "react-icons/fi";
import Link from "next/link";
import ScrollProgress from "@/components/ScrollProgress";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

interface HeaderProps {
  lang?: "fa" | "en";
  setLang?: (lang: "fa" | "en") => void;
  theme?: "dark" | "light";
  setTheme?: (theme: "dark" | "light") => void;
}

export default function Header({
  lang: propLang,
  setLang: propSetLang,
  theme: propTheme,
  setTheme: propSetTheme,
}: HeaderProps) {
  const context = useThemeLanguage();

  const lang = propLang ?? context.lang;
  const theme = propTheme ?? context.theme;

  const handleToggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    if (propSetTheme) {
      propSetTheme(next);
    } else {
      context.setTheme(next);
    }
  };

  const handleToggleLang = () => {
    const next = lang === "fa" ? "en" : "fa";
    if (propSetLang) {
      propSetLang(next);
    } else {
      context.setLang(next);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isDemosOpen, setIsDemosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // بستن دراپ‌داون دمو با کلیک خارج
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

  // بستن منوی موبایل با کلید Escape یا تغییر ابعاد صفحه
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setIsDemosOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // جلوگیری از اسکرول صفحه وقتی منوی موبایل باز است
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/#hero", labelFa: "خانه", labelEn: "Home" },
    { href: "/#services", labelFa: "خدمات", labelEn: "Services" },
    { href: "/#process", labelFa: "مراحل کار", labelEn: "Process" },
    { href: "/#projects", labelFa: "پروژه‌ها", labelEn: "Projects" },
    { href: "/#estimator", labelFa: "برآورد هزینه", labelEn: "Estimator" },
    { href: "/case-studies/arad-gallery", labelFa: "روش کار", labelEn: "Workflow" },
    { href: "/#contact", labelFa: "تماس", labelEn: "Contact" },
  ];

  return (
    <>
      {/* نوار پیشرفت مطالعه اسکرول */}
      <ScrollProgress />

      <header
        className="sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-colors duration-300"
        style={{
          backgroundColor: theme === "dark" ? "rgba(9, 10, 15, 0.85)" : "rgba(248, 250, 252, 0.88)",
          borderColor: "var(--border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* لوگو و نام برند */}
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

          {/* ناوبری دسکتاپ */}
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

            {/* دراپ‌داون دموهای زنده */}
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
                  className="absolute top-full right-0 rtl:right-0 ltr:left-0 mt-2 w-64 p-2 rounded-2xl border shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-200 z-50"
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

          {/* اکشن‌های دسکتاپ (تم، زبان، شروع پروژه) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleToggleTheme}
              className="p-2.5 rounded-xl border transition-all hover:border-[var(--accent)] hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-primary)",
              }}
              title={theme === "dark" ? "سوییچ به حالت روشن (Light Mode)" : "سوییچ به حالت تاریک (Dark Mode)"}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FiSun className="w-4 h-4 text-amber-400" />
              ) : (
                <FiMoon className="w-4 h-4 text-emerald-600" />
              )}
            </button>

            <button
              onClick={handleToggleLang}
              className="px-3 py-1.5 text-xs font-semibold rounded-xl border transition-all hover:border-[var(--accent)] hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-secondary)",
              }}
              aria-label="تغییر زبان / Change Language"
            >
              {lang === "fa" ? "English" : "فارسی"}
            </button>
            
            <Link
              href="/#contact"
              className="px-4 py-2 text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-95"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-contrast)",
              }}
            >
              {lang === "fa" ? "شروع پروژه" : "Let's Talk"}
            </Link>
          </div>

          {/* اکشن‌های موبایل */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleToggleTheme}
              className="p-2.5 rounded-xl border cursor-pointer active:scale-90 transition-transform"
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

            <button
              onClick={handleToggleLang}
              className="px-2.5 py-1.5 text-xs font-bold rounded-xl border cursor-pointer active:scale-90 transition-transform"
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
              className="p-2.5 rounded-xl border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] active:scale-90 transition-transform cursor-pointer"
              style={{
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-primary)",
              }}
              aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <FiX className="w-5 h-5 text-rose-400" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* منوی مدرن کشویی موبایل همراه با بک‌دراپ بلور تاریک */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-20 z-50 border-b shadow-2xl transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
        style={{
          backgroundColor: theme === "dark" ? "rgba(17, 20, 31, 0.98)" : "rgba(255, 255, 255, 0.98)",
          borderColor: "var(--border)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div className="flex flex-col gap-3.5 px-6 pt-5 pb-[max(1.75rem,env(safe-area-inset-bottom))] max-h-[75vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-semibold py-1.5 transition-colors hover:text-[var(--accent)] flex items-center justify-between border-b border-[var(--border)]/30"
              style={{ color: "var(--text-primary)" }}
            >
              <span>{lang === "fa" ? link.labelFa : link.labelEn}</span>
              <span className="text-xs text-[var(--text-muted)]">←</span>
            </Link>
          ))}

          {/* بخش دموهای زنده در موبایل */}
          <div className="pt-2 flex flex-col gap-2">
            <span className="text-xs font-bold text-[var(--accent)] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {lang === "fa" ? "دموهای زنده با ۳ تم اختصاصی:" : "Live Demos (3 Switchable Themes):"}
            </span>
            
            <div className="grid grid-cols-1 gap-2 mt-1">
              <Link
                href="/services/corporate"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text-primary)] hover:border-[var(--accent)] transition-all flex flex-col"
              >
                <span className="font-bold">{lang === "fa" ? "سایت شرکتی و کلینیک زیبایی" : "Corporate & Clinic Web"}</span>
                <span className="text-[10px] text-[var(--text-secondary)] mt-0.5">{lang === "fa" ? "۳ تم + سیستم رزرواسیون آنلاین" : "3 Themes + Appointment"}</span>
              </Link>
              
              <Link
                href="/services/ecommerce"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text-primary)] hover:border-[var(--accent)] transition-all flex flex-col"
              >
                <span className="font-bold">{lang === "fa" ? "فروشگاه آنلاین پرسرعت" : "Headless E-Commerce"}</span>
                <span className="text-[10px] text-[var(--text-secondary)] mt-0.5">{lang === "fa" ? "سبد خرید اسلایدی بدون رفرش" : "Slide-over instant cart"}</span>
              </Link>

              <Link
                href="/services/web-app"
                onClick={() => setIsOpen(false)}
                className="p-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs text-[var(--text-primary)] hover:border-[var(--accent)] transition-all flex flex-col"
              >
                <span className="font-bold">{lang === "fa" ? "وب‌اپلیکیشن و اتوماسیون" : "Web App & Dashboard"}</span>
                <span className="text-[10px] text-[var(--text-secondary)] mt-0.5">{lang === "fa" ? "داشبورد بلادرنگ با پاسخ ۴۲ms" : "42ms low latency dashboard"}</span>
              </Link>
            </div>
          </div>

          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 w-full text-center py-3 text-sm font-extrabold rounded-xl shadow-lg transition-all active:scale-95"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-contrast)",
            }}
          >
            {lang === "fa" ? "شروع پروژه و استعلام قیمت" : "Start Project & Get Quote"}
          </Link>
        </div>
      </div>
    </>
  );
}