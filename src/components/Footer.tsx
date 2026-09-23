"use client";

import { PERSONAL_DATA } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaWhatsapp, FaPhone, FaArrowUp } from "react-icons/fa";

interface FooterProps {
  lang: "fa" | "en";
}

export default function Footer({ lang }: FooterProps) {
  const isFa = lang === "fa";
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
      {/* هاله نور پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 blur-3xl pointer-events-none rounded-full"
        style={{ backgroundColor: "var(--accent-subtle)" }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b" style={{ borderColor: "var(--border)" }}>
        {/* ستون اول: معرفی و برند */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20">
              AV
            </div>
            <div>
              <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                {isFa ? PERSONAL_DATA.nameFa : PERSONAL_DATA.nameEn}
              </h3>
              <p className="text-xs font-medium text-[var(--accent)]">
                {isFa ? PERSONAL_DATA.roleFa : PERSONAL_DATA.roleEn}
              </p>
            </div>
          </div>
          <p className="text-xs leading-relaxed max-w-md" style={{ color: "var(--text-secondary)" }}>
            {isFa ? PERSONAL_DATA.bioFa : PERSONAL_DATA.bioEn}
          </p>
        </div>

        {/* ستون دوم: دسترسی سریع */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
            {isFa ? "دسترسی سریع" : "Quick Links"}
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#hero" className="hover:text-[var(--accent)] transition-colors">
                {isFa ? "خانه" : "Home"}
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[var(--accent)] transition-colors">
                {isFa ? "مهارت‌ها" : "Skills"}
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[var(--accent)] transition-colors">
                {isFa ? "پروژه‌ها" : "Projects"}
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[var(--accent)] transition-colors">
                {isFa ? "سوالات متداول" : "FAQ"}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--accent)] transition-colors">
                {isFa ? "ارتباط با من" : "Contact"}
              </a>
            </li>
          </ul>
        </div>

        {/* ستون سوم: شبکه‌های اجتماعی و ارتباط */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-primary)" }}>
            {isFa ? "شبکه‌های اجتماعی" : "Social Links"}
          </h4>
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

      {/* بخش پایانی حق کپی‌رایت + دکمه بازگشت به بالا */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
        <p>
          © {currentYear} {PERSONAL_DATA.nameEn}. All rights reserved. Designed & Built with Next.js 16.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs hover:text-[var(--accent)] transition-colors group"
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