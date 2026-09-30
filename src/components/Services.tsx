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
        
        {/* هدر بخش همراه با سوئیچ هوشمند دیدگاه کاربر */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-hover)] text-xs font-semibold text-[var(--accent)] mb-3">
              <FiLayers className="w-3.5 h-3.5" />
              <span>{isFa ? "خدمات تخصصی مهندسی وب با استاندارد بین‌المللی" : "World-Class Engineering Services"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
              {isFa ? "طراحی سایت اختصاصی، افزایش سرعت و سئو هوش مصنوعی" : "Custom Web Engineering, Speed Rescue & AI SEO"}
            </h2>
            <p className="text-xs sm:text-sm mt-2 max-w-xl" style={{ color: "var(--text-secondary)" }}>
              {isFa
                ? "از خلق وب‌سایت‌های فوق‌سریع تا فتح رتبه یک در هوش مصنوعی و گوگل؛ هر آنچه برای برتری در بازار رقابتی نیاز دارید."
                : "From ultra-fast custom platforms to ranking #1 in generative AI and search engines."}
            </p>
          </div>

          {/* سوئیچ دیدگاه ساده (بیزینسی) / دیدگاه فنی (CTO) */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl border self-start md:self-auto"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderColor: "var(--border)",
            }}
          >
            <button
              onClick={() => setViewMode("client")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "client"
                  ? "shadow-sm text-[var(--accent-contrast)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              style={{
                backgroundColor: viewMode === "client" ? "var(--accent)" : "transparent",
              }}
            >
              {isFa ? "نمای کاربردی (بیزینسی)" : "Business View"}
            </button>
            <button
              onClick={() => setViewMode("tech")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === "tech"
                  ? "shadow-sm text-[var(--accent-contrast)]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
              style={{
                backgroundColor: viewMode === "tech" ? "var(--accent)" : "transparent",
              }}
            >
              {isFa ? "نمای فنی (برای مهندسان)" : "Tech / Architecture"}
            </button>
          </div>
        </div>

        {/* کارت‌های Bento با افکت موس نورانی (Spotlight) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.icon];

            return (
              <div
                key={service.id}
                onMouseMove={handleMouseMove}
                className="spotlight-card p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        backgroundColor: "var(--bg-elevated)",
                        borderColor: "var(--border)",
                        color: "var(--accent)",
                      }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full border"
                      style={{
                        backgroundColor: "var(--accent-subtle)",
                        color: "var(--accent)",
                        borderColor: "var(--border-hover)",
                      }}
                    >
                      {isFa ? service.tagFa : service.tagEn}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight group-hover:text-[var(--accent)] transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {isFa ? service.titleFa : service.titleEn}
                  </h3>

                  {/* نمایش بر اساس حالت انتخابی کاربر */}
                  {viewMode === "client" ? (
                    <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      {isFa ? service.simpleDescFa : service.simpleDescEn}
                    </p>
                  ) : (
                    <div className="mb-6 p-3 rounded-lg border font-mono text-[11px] leading-relaxed"
                      style={{
                        backgroundColor: "var(--bg-elevated)",
                        borderColor: "var(--border)",
                        color: "var(--accent)",
                      }}
                    >
                      <span className="text-gray-400 block mb-1 font-sans">{isFa ? "مشخصات فنی معماری:" : "Architectural Spec:"}</span>
                      {isFa ? service.techDetailFa : service.techDetailEn}
                    </div>
                  )}

                  {/* چک‌لیست مزایای ملموس */}
                  <ul className="space-y-2.5 mb-8">
                    {(isFa ? service.benefitsFa : service.benefitsEn).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px]" style={{ color: "var(--text-secondary)" }}>
                        <FiCheckCircle className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-2" style={{ borderColor: "var(--border)" }}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent)] group-hover:underline"
                  >
                    <span>{isFa ? "سفارش این خدمت" : "Inquire"}</span>
                    <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
                  </a>

                  {demoUrlMap[service.id] && (
                    <Link
                      href={demoUrlMap[service.id].href}
                      prefetch={false}
                      className="px-2.5 py-1 rounded-xl text-[11px] font-bold border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
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

      </div>
    </section>
  );
}
