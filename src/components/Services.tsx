"use client";

import { useState } from "react";
import { SERVICES_DATA } from "@/lib/constants";
import {
  FiLayout,
  FiCpu,
  FiZap,
  FiServer,
  FiCheckCircle,
  FiArrowUpRight,
  FiLayers,
} from "react-icons/fi";
import Link from "next/link";

interface ServicesProps {
  lang: "fa" | "en";
}

const iconMap = {
  web: FiLayout,
  ai: FiCpu,
  speed: FiZap,
  fullstack: FiServer,
};

const demoUrlMap: Record<string, { href: string; labelFa: string; labelEn: string }> = {
  "custom-web": { href: "/services/corporate", labelFa: "دموی شرکتی (۳ تم)", labelEn: "Corporate Demo (3 Themes)" },
  "ai-seo": { href: "/case-studies/arad-gallery", labelFa: "مطالعه موردی رتبه ۱", labelEn: "Case Study #1 Google" },
  "speed-optimization": { href: "/services/speed-optimization", labelFa: "آنالیز و افزایش سرعت", labelEn: "Speed Optimization" },
  "fullstack-platforms": { href: "/services/web-app", labelFa: "دموی وب‌اپلیکیشن", labelEn: "Web App Demo" },
  "telegram-bots-ai": { href: "/services/telegram-bots-ai", labelFa: "ربات تلگرام & AI", labelEn: "Telegram & AI Bot" },
  "mobile-apps": { href: "/services/mobile-apps", labelFa: "اپلیکیشن موبایل", labelEn: "Mobile Apps" },
};

export default function Services({ lang }: ServicesProps) {
  const isFa = lang === "fa";
  const [viewMode, setViewMode] = useState<"client" | "tech">("client");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="telemetry-pill mb-3">
              <FiLayers className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{isFa ? "خدمات تخصصی مهندسی وب با استاندارد جهانی" : "CORE_CAPABILITIES // PRODUCTION"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
              {isFa ? "طراحی سایت اختصاصی، افزایش سرعت و سئو هوش مصنوعی" : "Custom Web Systems, Speed Rescue & AI SEO"}
            </h2>
            <p className="text-xs sm:text-sm mt-2 max-w-xl text-[var(--text-secondary)]">
              {isFa
                ? "از خلق وب‌سایت‌های فوق‌سریع تا فتح رتبه یک در هوش مصنوعی و گوگل؛ هر آنچه برای برتری در بازار رقابتی نیاز دارید."
                : "From ultra-fast custom platforms to ranking #1 in generative AI and search engines."}
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] self-start md:self-auto">
            <button
              onClick={() => setViewMode("client")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "client"
                  ? "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {isFa ? "نمای بیزینسی" : "Business View"}
            </button>
            <button
              onClick={() => setViewMode("tech")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "tech"
                  ? "bg-[var(--accent)] text-[var(--accent-contrast)] shadow-sm"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {isFa ? "مشخصات فنی" : "Technical Specs"}
            </button>
          </div>
        </div>

        {/* 6 Core Services Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={service.id}
                onMouseMove={handleMouseMove}
                className="architectural-card spotlight-card p-6 sm:p-8 flex flex-col justify-between group relative"
              >
                {/* CAD Technical Corner Accents */}
                <span className="cad-corner-tl" aria-hidden="true">+</span>
                <span className="cad-corner-tr font-mono" aria-hidden="true">{`SYS//0${index + 1}`}</span>

                {/* Subtle Watermark Index */}
                <div className="absolute -bottom-6 -right-2 text-8xl font-mono font-black select-none pointer-events-none opacity-[0.03] text-[var(--text-primary)]" aria-hidden="true">
                  0{index + 1}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5 mt-2">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 shadow-sm bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--accent)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                      {isFa ? service.tagFa : service.tagEn}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight group-hover:text-[var(--accent)] transition-colors text-[var(--text-primary)]">
                    {isFa ? service.titleFa : service.titleEn}
                  </h3>

                  {viewMode === "client" ? (
                    <p className="text-xs sm:text-sm leading-relaxed mb-6 text-[var(--text-secondary)]">
                      {isFa ? service.simpleDescFa : service.simpleDescEn}
                    </p>
                  ) : (
                    <div className="mb-6 p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] font-mono text-[11px] leading-relaxed text-[var(--accent)]">
                      <span className="text-gray-400 block mb-1 font-sans">{isFa ? "مشخصات فنی معماری:" : "Architectural Spec:"}</span>
                      {isFa ? service.techDetailFa : service.techDetailEn}
                    </div>
                  )}

                  <ul className="space-y-2.5 mb-8">
                    {(isFa ? service.benefitsFa : service.benefitsEn).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[var(--text-secondary)]">
                        <FiCheckCircle className="w-4 h-4 text-[var(--text-primary)] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 relative z-10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] hover:opacity-80 transition-opacity"
                    aria-label={`${isFa ? "سفارش این خدمت" : "Inquire Scope"} — ${isFa ? service.titleFa : service.titleEn}`}
                  >
                    <span>{isFa ? "سفارش این خدمت" : "Inquire Scope"}</span>
                    <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                  </Link>

                  {demoUrlMap[service.id] && (
                    <Link
                      href={demoUrlMap[service.id].href}
                      prefetch={false}
                      className="tactile-btn px-3 py-1.5 text-[11px] font-bold text-[var(--text-primary)] flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{isFa ? demoUrlMap[service.id].labelFa : demoUrlMap[service.id].labelEn}</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All Services CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="tactile-btn px-7 py-3.5 text-xs font-bold text-[var(--text-primary)] gap-2 shadow-md"
          >
            <span>{isFa ? "مشاهده تمام حوزه‌های خدمات و مقایسه معماری" : "Explore All Services & Architectural Specs"}</span>
            <span className="text-xs rtl:rotate-180">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
