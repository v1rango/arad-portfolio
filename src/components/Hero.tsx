"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSONAL_DATA } from "@/lib/constants";
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp, FiPlay, FiX, FiSliders } from "react-icons/fi";
import CountUpNumber from "@/components/CountUpNumber";

interface HeroProps {
  lang: "fa" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const isFa = lang === "fa";
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsShowreelOpen(false);
    };
    if (isShowreelOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isShowreelOpen]);

  const marqueeItems = [
    "NEXT.JS 16",
    "REACT 19",
    "TURBOPACK ENGINE",
    "SUB-0.8S FCP GUARANTEE",
    "AI TELEGRAM BOTS",
    "POSTGRESQL & EDGE DB",
    "100/100 LIGHTHOUSE",
    "AEO & GEO DIRECT CITATIONS",
    "ENTERPRISE SECURITY",
    "ZERO VULNERABILITIES",
  ];

  return (
    <section id="hero" className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Ambient Glow Behind Hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)] blur-[120px] rounded-full pointer-events-none animate-ambient-glow -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Avatar with Minimal Status Ring */}
        <div className="relative mb-6 animate-fade-in-up [animation-duration:500ms]">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <div className="w-full h-full rounded-full p-1 border border-[var(--border)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden group">
              <Image
                src="/avatar.webp"
                alt={`${PERSONAL_DATA.nameEn} — Full-Stack Developer & Modern SEO Architect`}
                width={112}
                height={112}
                sizes="(max-width: 640px) 96px, 112px"
                priority
                className="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span 
              className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[var(--bg-primary)] shadow-sm animate-pulse" 
              title={isFa ? "در دسترس برای پروژه" : "Available for projects"}
            />
          </div>
        </div>

        {/* Status Pill Badge */}
        <div className="telemetry-pill mb-6 animate-fade-in-up [animation-duration:600ms]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-[var(--text-primary)] font-bold tracking-tight">
            {isFa ? "معمار وب مدرن & اتوماسیون هوش مصنوعی" : "MODERN WEB ARCHITECT & AI SPECIALIST"}
          </span>
          <span className="text-[var(--border)] opacity-60">•</span>
          <span className="text-[11px] text-[var(--text-secondary)]">
            {isFa ? "آماده پذیرش پروژه‌های شاخص" : "STATUS: AVAILABLE"}
          </span>
        </div>

        {/* Formal Typographic Headline */}
        <div className="w-full flex justify-center mb-6 animate-fade-in-up [animation-duration:700ms]">
          {isFa ? (
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.3] sm:leading-[1.22] max-w-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              معماری وب‌سایت‌های فوق‌سریع،
              <br className="hidden sm:inline" />
              وب‌اپلیکیشن‌ها و <span className="text-gradient-silver">اتوماسیون هوش مصنوعی</span>
            </h1>
          ) : (
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.25] sm:leading-[1.18] max-w-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              Architecting Ultra-Fast Websites,
              <br className="hidden sm:inline" />
              Web Applications & <span className="text-gradient-silver">AI Automation</span>
            </h1>
          )}
        </div>

        {/* Subtitle covering ALL fields (Web, Apps, Bots, AI, Speed, SEO/AEO/GEO) */}
        <p
          className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up [animation-duration:800ms]"
          style={{ color: "var(--text-secondary)" }}
        >
          {isFa ? (
            <>
              مهندس فول‌استک و معمار سیستم‌های دیجیتال با <strong className="text-[var(--text-primary)]">Next.js 16</strong>. توسعه پلتفرم‌های اختصاصی سازمانی، پیاده‌سازی ربات‌های تلگرام و اتوماسیون هوش مصنوعی، بهینه‌سازی سرعت زیر ۰.۸ ثانیه (PageSpeed 100) و سئوی نوین <strong className="text-[var(--text-primary)]">AEO و GEO</strong> برای استناد و حضور در صدر نتایج گوگل، ChatGPT و Perplexity.
            </>
          ) : (
            <>
              Full-Stack Engineer specialized in custom web systems with <strong className="text-[var(--text-primary)]">Next.js 16</strong>. Engineering enterprise web applications, Telegram bots & AI automation, guaranteed sub-0.8s load times, and next-generation <strong className="text-[var(--text-primary)]">AEO & GEO</strong> for direct citations in Google, ChatGPT, and Perplexity.
            </>
          )}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-12 flex-wrap animate-fade-in-up [animation-duration:900ms]">
          <Link
            href="/contact"
            className="btn-border-beam tactile-btn w-full sm:w-auto px-7 py-3.5 font-bold text-sm flex items-center justify-center gap-2.5 active:scale-95 text-[var(--text-primary)]"
          >
            <span>{isFa ? "مشاوره و شروع پروژه" : "Book Consultation"}</span>
            {isFa ? <FiArrowLeft className="w-4 h-4" /> : <FiArrowRight className="w-4 h-4" />}
          </Link>

          <Link
            href="/case-studies"
            className="tactile-btn w-full sm:w-auto px-6 py-3.5 font-bold text-sm flex items-center justify-center gap-2"
          >
            <span>{isFa ? "مطالعات موردی و پروژه‌ها" : "Case Studies"}</span>
          </Link>

          <Link
            href="/estimator"
            className="tactile-btn w-full sm:w-auto px-5 py-3.5 font-semibold text-sm flex items-center justify-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <FiSliders className="w-4 h-4" />
            <span>{isFa ? "محاسبه آنلاین هزینه" : "Cost Estimator"}</span>
          </Link>

          <button
            onClick={() => setIsShowreelOpen(true)}
            className="tactile-btn w-full sm:w-auto px-4 py-3.5 text-xs font-medium flex items-center justify-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
          >
            <FiPlay className="w-3.5 h-3.5" />
            <span>{isFa ? "شو‌ریل کد (۱۵ ثانیه)" : "15s Showreel"}</span>
          </button>
        </div>

        {/* 4 Quantitative Metrics with CAD Precision Styling */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mb-12 animate-fade-in-up [animation-duration:1000ms]">
          {PERSONAL_DATA.metrics.map((metric, i) => (
            <div
              key={i}
              className="architectural-card p-4 sm:p-5 flex flex-col items-center justify-center text-center group"
            >
              <span className="cad-corner-tl" aria-hidden="true">+</span>
              <span className="cad-corner-tr" aria-hidden="true">{`0${i + 1}`}</span>
              <CountUpNumber
                value={metric.value}
                className="text-xl sm:text-2xl font-black font-mono text-[var(--text-primary)]"
              />
              <span className="text-xs mt-1.5 font-medium" style={{ color: "var(--text-secondary)" }}>
                {isFa ? metric.labelFa : metric.labelEn}
              </span>
            </div>
          ))}
        </div>

        {/* 3 Engineering Trust Indicators with Hardware Pill Styling */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[var(--text-secondary)] font-mono mb-12 animate-fade-in-up [animation-duration:1100ms]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <FiCheckCircle className="w-3.5 h-3.5 text-[var(--text-primary)]" />
            <span>{isFa ? "سرعت لود زیر ۰.۸ ثانیه تضمینی" : "SUB-0.8S FCP GUARANTEE"}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <FiShield className="w-3.5 h-3.5 text-[var(--text-primary)]" />
            <span>{isFa ? "معماری اختصاصی بدون باگ افزونه‌ها" : "ZERO-VULNERABILITY CORE"}</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] shadow-sm">
            <FiTrendingUp className="w-3.5 h-3.5 text-[var(--text-primary)]" />
            <span>{isFa ? "آماده‌سازی گراف معنایی AEO/GEO" : "AEO & GEO KNOWLEDGE GRAPH"}</span>
          </div>
        </div>

      </div>

      {/* High-End Engineering Tech Marquee Ticker */}
      <div className="w-full mt-8 pt-4 pb-4 border-y border-[var(--border)] overflow-hidden bg-[var(--bg-surface)]/50 backdrop-blur-md relative">
        <div className="animate-marquee flex items-center gap-8 text-[11px] font-mono tracking-wider text-[var(--text-secondary)] whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] opacity-70" />
              <span className="hover:text-[var(--text-primary)] transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Showreel Modal */}
      {isShowreelOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setIsShowreelOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl border border-[var(--border)] bg-[#09090b] shadow-2xl overflow-hidden p-3 sm:p-5 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-white/10 px-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span className="font-mono font-bold text-xs sm:text-sm text-white">
                  ARAD VAFAEE — PROGRAMMATIC SHOWREEL
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-zinc-300 border border-white/20 hidden sm:inline">
                  60 FPS • 720p HD
                </span>
              </div>
              <button
                onClick={() => setIsShowreelOpen(false)}
                className="p-1.5 sm:p-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Showreel"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <video
                src="/videos/showreel.mp4"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}