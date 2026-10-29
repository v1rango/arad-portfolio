"use client";

import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import { PERSONAL_DATA } from "@/lib/constants";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaWhatsapp, FaPhone, FaArrowUp } from "react-icons/fa";

interface FooterProps {
  lang?: "fa" | "en";
}

export default function Footer({ lang }: FooterProps) {
  const { lang: ctxLang } = useThemeLanguage();
  const activeLang = lang || ctxLang || "en";
  const isFa = activeLang === "fa";
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
      }}
    >
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 blur-3xl pointer-events-none rounded-full"
        style={{ backgroundColor: "var(--accent-subtle)" }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b" style={{ borderColor: "var(--border)" }}>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center font-bold text-base shadow-lg">
              AV
            </div>
            <div>
              <span className="text-lg font-bold block" style={{ color: "var(--text-primary)" }}>
                {isFa ? PERSONAL_DATA.nameFa : PERSONAL_DATA.nameEn}
              </span>
              <p className="text-xs font-medium text-[var(--text-secondary)]">
                {isFa ? PERSONAL_DATA.roleFa : PERSONAL_DATA.roleEn}
              </p>
            </div>
          </div>
          <p className="text-xs leading-relaxed max-w-md" style={{ color: "var(--text-secondary)" }}>
            {isFa ? PERSONAL_DATA.bioFa : PERSONAL_DATA.bioEn}
          </p>
        </div>

        
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
            {isFa ? "صفحات اصلی" : "Main Navigation"}
          </p>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
                {isFa ? "صفحه اصلی" : "Home"}
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[var(--text-primary)] transition-colors">
                {isFa ? "خدمات تخصصی مهندسی" : "Specialized Services"}
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-[var(--text-primary)] transition-colors">
                {isFa ? "مطالعات موردی و پروژه‌ها" : "Case Studies & Work"}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[var(--text-primary)] transition-colors">
                {isFa ? "درباره و روش کار" : "About & Methodology"}
              </Link>
            </li>
            <li>
              <Link href="/estimator" className="hover:text-[var(--text-primary)] transition-colors">
                {isFa ? "محاسبه‌گر آنلاین هزینه" : "Online Cost Estimator"}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[var(--text-primary)] transition-colors">
                {isFa ? "پایگاه دانش مهندسی وبلاگ" : "Engineering Blog"}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--text-primary)] transition-colors">
                {isFa ? "ارتباط مستقیم و سفارش" : "Contact & Inquiry"}
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
            {isFa ? "دموهای زنده (۳ تم)" : "Live Showcases"}
          </p>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/services/corporate" className="hover:text-[var(--accent)] transition-colors">
                {isFa ? "طراحی سایت شرکتی و کلینیک" : "Corporate & Clinic Web"}
              </Link>
            </li>
            <li>
              <Link href="/services/ecommerce" className="hover:text-[var(--accent)] transition-colors">
                {isFa ? "طراحی فروشگاه آنلاین پرسرعت" : "Headless E-Commerce"}
              </Link>
            </li>
            <li>
              <Link href="/services/web-app" className="hover:text-[var(--accent)] transition-colors">
                {isFa ? "طراحی وب‌اپلیکیشن و اتوماسیون" : "Web Apps & Automation"}
              </Link>
            </li>
          </ul>
        </div>

        
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
            {isFa ? "شبکه‌های اجتماعی" : "Social Links"}
          </p>
          <div className="flex flex-wrap gap-2">
            {PERSONAL_DATA.socials.linkedin && (
              <a
                href={PERSONAL_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border transition-all hover:border-[#0A66C2] hover:text-[#0A66C2]"
                style={{
                  backgroundColor: "var(--bg-elevated)",
                  borderColor: "var(--border)",
                }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            )}
            <a
              href={PERSONAL_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{
                backgroundColor: "var(--bg-elevated)",
                borderColor: "var(--border)",
              }}
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-all hover:border-[#229ED9] hover:text-[#229ED9]"
              style={{
                backgroundColor: "var(--bg-elevated)",
                borderColor: "var(--border)",
              }}
              aria-label="Telegram"
            >
              <FaTelegram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-all hover:border-[#E4405F] hover:text-[#E4405F]"
              style={{
                backgroundColor: "var(--bg-elevated)",
                borderColor: "var(--border)",
              }}
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border transition-all hover:border-[#25D366] hover:text-[#25D366]"
              style={{
                backgroundColor: "var(--bg-elevated)",
                borderColor: "var(--border)",
              }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
          <div className="pt-2 text-xs space-y-1">
            <p className="flex items-center gap-2">
              <FaPhone className="text-[var(--accent)] w-3 h-3" />
              <span dir="ltr">{PERSONAL_DATA.socials.phone}</span>
            </p>
          </div>
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
        <p>
          © {currentYear} {PERSONAL_DATA.nameEn}. All rights reserved. Designed & Built with Next.js 16.
        </p>

        <button
          onClick={scrollToTop}
          aria-label={isFa ? "بازگشت به بالای صفحه" : "Back to top of page"}
          className="flex items-center gap-2 text-xs hover:text-[var(--accent)] transition-colors group cursor-pointer"
          style={{ color: "var(--text-secondary)" }}
        >
          <span>{isFa ? "بازگشت به بالا" : "Back to top"}</span>
          <div className="p-1.5 rounded-md border group-hover:border-[var(--accent)] transition-all"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderColor: "var(--border)",
            }}
          >
            <FaArrowUp className="w-3 h-3" />
          </div>
        </button>
      </div>
    </footer>
  );
}