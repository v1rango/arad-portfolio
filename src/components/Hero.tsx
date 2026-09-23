"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PERSONAL_DATA } from "@/lib/constants";
import { FiArrowDown, FiCheckCircle, FiShield, FiTrendingUp } from "react-icons/fi";

interface HeroProps {
  lang: "fa" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const isFa = lang === "fa";

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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-contrast)",
            }}
          >
            <span>{isFa ? "مشاوره رایگان و شروع پروژه" : "Book Free Project Consultation"}</span>
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border font-semibold text-sm transition-all hover:border-[var(--accent)] active:scale-95 flex items-center justify-center gap-2"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            <span>{isFa ? "مشاهده خدمات و تعرفه‌ها" : "Explore Services & Solutions"}</span>
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
    </section>
  );
}