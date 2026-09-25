"use client";

import { useState } from "react";
import { FiInfo, FiZap, FiChevronDown, FiChevronUp, FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { PERSONAL_DATA } from "@/lib/constants";

interface ShowcaseGuideProps {
  nicheTitleFa: string;
  nicheTitleEn: string;
  lang: "fa" | "en";
  keyFeaturesFa: string[];
  keyFeaturesEn: string[];
}

export default function ShowcaseGuide({
  nicheTitleFa,
  nicheTitleEn,
  lang,
  keyFeaturesFa,
  keyFeaturesEn,
}: ShowcaseGuideProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const isFa = lang === "fa";

  return (
    <div
      className="rounded-2xl border transition-all duration-300 shadow-xl overflow-hidden backdrop-blur-md"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Header bar of the guide */}
      <div
        className="px-4 py-3 sm:px-6 flex items-center justify-between cursor-pointer select-none border-b transition-colors hover:bg-[var(--bg-elevated)]"
        style={{ borderColor: "var(--border)" }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 animate-pulse">
            <FiZap className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                LIVE DEMO • NEXT.JS 16
              </span>
              <span className="text-[11px] text-[var(--text-muted)] hidden sm:inline">
                {isFa ? "دموی مهندسی‌شده و فوق‌سریع" : "Engineered Interactive Showcase"}
              </span>
            </div>
            <h2 className="text-sm font-bold mt-0.5" style={{ color: "var(--text-primary)" }}>
              {isFa ? `راهنمای بررسی دموی زنده: ${nicheTitleFa}` : `Interactive Showcase: ${nicheTitleEn}`}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-medium text-[var(--accent)] hidden sm:inline">
            {isExpanded ? (isFa ? "بستن راهنما" : "Collapse") : (isFa ? "مشاهده راهنما" : "Expand")}
          </span>
          <button
            className="p-1.5 rounded-lg border text-[var(--text-secondary)]"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-elevated)" }}
            aria-label="Toggle Guide"
          >
            {isExpanded ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded body content */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm leading-relaxed max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              {isFa
                ? "این صفحه یک دموی زنده و آماده به کار است. شما می‌توانید با استفاده از کنترلر بالای صفحه، بین ۳ تم گرافیکی مختلف سوییچ کنید و سرعت واکنش‌گرایی، لود زیر ۰.۸ ثانیه و معماری مدرن آن را بدون هیچ افزونه کندی تست نمایید."
                : "This is a fully functional live demo. You can switch between 3 visual themes using the top control bar and experience sub-second load times and zero-bloat architecture."}
            </p>

            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 active:scale-95"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--accent-contrast)",
                }}
              >
                <span>{isFa ? "سفارش سایت مشابه" : "Order This Style"}</span>
                <FiArrowUpRight className="w-4 h-4 rtl:rotate-90" />
              </a>
              <a
                href="#demo-section"
                className="px-3 py-2 text-xs font-semibold rounded-xl border transition-all hover:border-[var(--accent)]"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-elevated)",
                  color: "var(--text-primary)",
                }}
              >
                {isFa ? "تست امکانات" : "Explore Features"}
              </a>
            </div>
          </div>

          {/* Quick bullet points */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
            {(isFa ? keyFeaturesFa : keyFeaturesEn).map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs p-2 rounded-xl"
                style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-secondary)" }}
              >
                <FiCheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
