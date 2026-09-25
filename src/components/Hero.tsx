"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PERSONAL_DATA } from "@/lib/constants";
import { FiArrowDown, FiCheckCircle, FiShield, FiTrendingUp, FiPlay, FiX } from "react-icons/fi";

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

  return (
    <section id="hero" className="relative pt-10 sm:pt-14 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* هاله نور متمرکز پس‌زمینه */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[var(--accent-subtle)] blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* آواتار رسمی با نشان وضعیت فعال */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative mb-6"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <div className="w-full h-full rounded-full p-1 border-2 border-[var(--accent)] bg-[var(--bg-surface)] shadow-2xl shadow-emerald-500/20 overflow-hidden group">
              <Image
                src="/avatar.png"
                alt={`${PERSONAL_DATA.nameEn} — Full-Stack Developer & Modern SEO Architect`}
                width={112}
                height={112}
                priority
                className="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[var(--bg-primary)] shadow-sm animate-pulse"></span>
          </div>
        </motion.div>

        {/* نشان رتبه ۱ و آماده به همکاری */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs font-semibold text-[var(--text-secondary)] mb-6 shadow-sm"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[var(--accent)] font-bold">
            {isFa ? "رتبه ۱ گوگل در ۱۲ ساعت" : "Rank #1 on Google in 12h"}
          </span>
          <span className="text-[var(--border)]">•</span>
          <span>
            {isFa ? "آماده پذیرش سفارش‌های جدید" : "Accepting High-Impact Projects"}
          </span>
        </motion.div>

        {/* تیتر اصلی با گرادیان پرقدرت و کلمات کلیدی هدف */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 max-w-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          {isFa ? (
            <>
              طراحی وب‌سایت‌های <span className="text-gradient-emerald">فوق‌سریع و اختصاصی</span>
              <br className="hidden sm:inline" /> هم‌تراز برترین شرکت‌های دنیا با{" "}
              <span className="text-[var(--accent)]">Next.js 16</span>
            </>
          ) : (
            <>
              Architecting <span className="text-gradient-emerald">Ultra-Fast Custom Websites</span>
              <br className="hidden sm:inline" /> Engineered with{" "}
              <span className="text-[var(--accent)]">Next.js 16 & AI Search</span>
            </>
          )}
        </motion.h1>

        {/* توضیح شفاف، عامیانه و قانع‌کننده برای کارفرما */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          {isFa ? (
            <>
              سایتی می‌سازم که زیر یک ثانیه باز شود تا هیچ خریداری را از دست ندهید، هویت برندتان را با ظاهری لوکس ارتقا دهد و علاوه بر صفحه اول گوگل، در هوش مصنوعی‌هایی مثل <strong>ChatGPT و Perplexity</strong> گزینه اول معرفی به کاربران باشد.
            </>
          ) : (
            <>
              I craft bespoke web platforms loading in sub-second times with Silicon Valley-grade aesthetics, engineered to dominate Google search and be cited directly by <strong>ChatGPT and Perplexity</strong>.
            </>
          )}
        </motion.p>

        {/* دکمه‌های اقدام سریع CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12 flex-wrap"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-contrast)",
            }}
          >
            <span>{isFa ? "مشاوره و شروع پروژه" : "Book Consultation"}</span>
          </a>

          {/* دکمه تماشای شو‌ریل ۱۵ ثانیه‌ای */}
          <button
            onClick={() => setIsShowreelOpen(true)}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border font-bold text-sm transition-all hover:border-[var(--accent)] hover:shadow-lg hover:shadow-emerald-500/10 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
            <FiPlay className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>{isFa ? "شو‌ریل استودیو (۱۵ ثانیه)" : "Studio Showreel (15s)"}</span>
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl border font-semibold text-sm transition-all hover:border-[var(--accent)] active:scale-95 flex items-center justify-center gap-2"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <span>{isFa ? "مشاهده خدمات و دموها" : "Services & Demos"}</span>
            <FiArrowDown className="w-4 h-4 text-[var(--accent)]" />
          </a>
        </motion.div>

        {/* شاخص‌های عملکردی لایت‌هاوس گوگل */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mb-12"
        >
          {PERSONAL_DATA.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-4 rounded-xl flex flex-col items-center justify-center text-center bento-card hover:border-[var(--accent)] transition-colors"
            >
              <span className="text-xl sm:text-2xl font-black font-mono text-[var(--accent)]">
                {metric.value}
              </span>
              <span className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
                {isFa ? metric.labelFa : metric.labelEn}
              </span>
            </div>
          ))}
        </motion.div>

        {/* گواهی ۳ گانه اعتبار در قالب بج‌های مدرن */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[var(--text-secondary)] font-medium"
        >
          <div className="flex items-center gap-1.5">
            <FiCheckCircle className="w-4 h-4 text-[var(--accent)]" />
            <span>{isFa ? "سرعت تضمینی زیر ۰.۸ ثانیه" : "Sub-0.8s Load Guarantee"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiShield className="w-4 h-4 text-[var(--accent)]" />
            <span>{isFa ? "امنیت کامل بدون افزونه‌های مخرب" : "Zero-Vulnerability Architecture"}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiTrendingUp className="w-4 h-4 text-[var(--accent)]" />
            <span>{isFa ? "بهینه‌سازی ۱۰۰٪ برای هوش مصنوعی" : "Native AEO & GEO Ready"}</span>
          </div>
        </motion.div>

      </div>

      {/* پاپ‌آپ سینمایی پخش شو‌ریل ۱۵ ثانیه‌ای (Lazy-loaded Modal) */}
      {isShowreelOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setIsShowreelOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl border border-emerald-500/30 bg-[#06070a] shadow-2xl overflow-hidden p-3 sm:p-5 space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 px-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono font-bold text-xs sm:text-sm text-white">
                  ARAD VAFAEE — 15s PROGRAMMATIC SHOWREEL
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline">
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

            {/* Video Player Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <video
                src="/showreel.mp4"
                controls
                autoPlay
                playsInline
                preload="none"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer Note */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-[11px] text-gray-400 font-sans">
              <span>
                💡 این شو‌ریل ۱۰۰٪ با کدهای ریاضی، فرمول‌های پرسپکتیو WebGL و سنتز فرکانس صوتی در Node.js رندر شده است.
              </span>
              <span className="font-mono text-emerald-400 font-bold">
                ARADVAFAEE.IR
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}