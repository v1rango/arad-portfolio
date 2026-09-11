"use client";

import { PERSONAL_DATA } from "@/lib/constants";
import { FaGithub, FaTelegram, FaInstagram, FaWhatsapp, FaPhone, FaArrowUp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

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
    <footer className="relative bg-[#010a18] border-t border-[var(--border)]/40 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-gray-400 overflow-hidden">
      {/* هاله نور پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[var(--accent)]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--border)]/20">
        {/* ستون اول: معرفی و برند */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent)] to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[var(--accent)]/20">
              AV
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                {isFa ? PERSONAL_DATA.nameFa : PERSONAL_DATA.nameEn}
              </h3>
              <p className="text-xs text-[var(--accent)]">
                {isFa ? PERSONAL_DATA.roleFa : PERSONAL_DATA.roleEn}
              </p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-gray-400 max-w-md">
            {isFa ? PERSONAL_DATA.bioFa : PERSONAL_DATA.bioEn}
          </p>
        </div>

        {/* ستون دوم: دسترسی سریع */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
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
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
            {isFa ? "شبکه‌های اجتماعی" : "Social Links"}
          </h4>
          <div className="flex flex-wrap gap-2">
            <a
              href={PERSONAL_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#031738] border border-[var(--border)]/40 text-gray-300 hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#031738] border border-[var(--border)]/40 text-gray-300 hover:text-[#229ED9] hover:border-[#229ED9] hover:bg-[#229ED9]/10 transition-all"
              aria-label="Telegram"
            >
              <FaTelegram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#031738] border border-[var(--border)]/40 text-gray-300 hover:text-[#E4405F] hover:border-[#E4405F] hover:bg-[#E4405F]/10 transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#031738] border border-[var(--border)]/40 text-gray-300 hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>
          </div>
          <div className="pt-2 text-xs text-gray-400 space-y-1">
            <p className="flex items-center gap-2">
              <FaPhone className="text-[var(--accent)] w-3 h-3" />
              <span dir="ltr">{PERSONAL_DATA.socials.phone}</span>
            </p>
          </div>
        </div>
      </div>

      {/* بخش پایانی حق کپی‌رایت + دکمه بازگشت به بالا */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>
          © {currentYear} {PERSONAL_DATA.nameEn}. All rights reserved. Designed & Built with Next.js.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-[var(--accent)] transition-colors group"
        >
          <span>{isFa ? "بازگشت به بالا" : "Back to top"}</span>
          <div className="p-1.5 rounded-md bg-[#031738] border border-[var(--border)]/40 group-hover:border-[var(--accent)] transition-all">
            <FaArrowUp className="w-3 h-3" />
          </div>
        </button>
      </div>
    </footer>
  );
}