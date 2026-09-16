"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PERSONAL_DATA } from "@/lib/constants";

interface HeroProps {
  lang: "fa" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const isFa = lang === "fa";

  return (
    <section id="hero" className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* آواتار رسمی آراد با افکت پالس زمردی */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
            <div className="w-full h-full rounded-full p-1 border-2 border-[var(--accent)]/50 bg-transparent shadow-xl shadow-emerald-500/10 overflow-hidden group">
              <Image
                src="/avatar.png"
                alt={`${PERSONAL_DATA.nameEn} — Full-Stack Developer & AI Search Specialist`}
                width={112}
                height={112}
                priority
                className="w-full h-full object-contain rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[var(--bg-primary)] shadow-sm"></span>
          </div>
        </motion.div>

        {/* نشان وضعیت آماده به همکاری */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)]/80 border border-[var(--border)]/60 text-xs font-medium text-[var(--text-secondary)] mb-6 shadow-sm gpu-accelerated"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 absolute"></span>
          {isFa ? "آماده پذیرش پروژه‌های جدید وب و بهینه‌سازی" : "Available for New Projects & AI SEO"}
        </motion.div>

        {/* تیتر اصلی با گرادیان زیبا و تایپوگرافی چشم‌نواز */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-snug sm:leading-tight mb-6 max-w-4xl"
          style={{ color: "var(--text-primary)" }}
        >
          {isFa ? (
            <>
              <span className="text-[var(--accent)]">{PERSONAL_DATA.nameFa}</span> — سایت‌های مدرن با{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Next.js 16</span>
              <br className="hidden sm:inline" /> بهینه‌سازی‌شده برای{" "}
              <span className="text-[var(--accent)] border-b-2 border-[var(--border)]">موتورهای هوش مصنوعی</span>
            </>
          ) : (
            <>
              <span className="text-[var(--accent)]">{PERSONAL_DATA.nameEn}</span> — High-Performance{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Next.js 16</span> Apps
              <br className="hidden sm:inline" /> Engineered for{" "}
              <span className="text-[var(--accent)] border-b-2 border-[var(--border)]">AI Engines & AEO</span>
            </>
          )}
        </motion.h1>

        {/* بیوگرافی متمرکز بر AEO */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          {isFa ? (
            <>
              من <strong>{PERSONAL_DATA.nameFa}</strong> هستم؛ توسعه‌دهنده فول‌استک. با تلفیق کدنویسی تمیز، معماری سرور کامپوننت‌ها و استانداردهای GEO/AEO، بستری می‌سازم که علاوه بر رتبه گوگل، هوش مصنوعی‌ها (ChatGPT، Gemini و Perplexity) برند شما را رفرنس دهند.
            </>
          ) : (
            <>
              I&apos;m <strong>{PERSONAL_DATA.nameEn}</strong>, Full-Stack Developer & Search Architect. I build lightning-fast web apps optimized for direct citations across ChatGPT, Google Gemini, and Perplexity.
            </>
          )}
        </motion.p>

        {/* دکمه‌های اکشن CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-emerald-500/20"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-contrast)",
            }}
          >
            {isFa ? "شروع همکاری و سفارش پروژه" : "Start Collaboration"}
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border font-medium text-sm transition-all hover:border-[var(--accent)] active:scale-95"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border)",
              color: "var(--text-primary)",
            }}
          >
            {isFa ? "مشاهده نمونه‌کارها و Case Studies" : "View Projects & Case Studies"}
          </a>
        </motion.div>

        {/* بنچ‌مارک‌های کلیدی عملکردی */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mb-12"
        >
          {PERSONAL_DATA.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-4 rounded-xl flex flex-col items-center justify-center text-center bento-card"
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

        {/* پنجره کد پیش‌نمایش ترمینال مدرن و سبک */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-2xl text-left font-mono rounded-xl bg-[#0b0d14] border border-[var(--border)] shadow-2xl overflow-hidden text-xs"
          dir="ltr"
        >
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#121522] border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="text-[11px] text-gray-400 ml-2">arad-vafaee.config.ts</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">Next.js 16 + GEO Ready</span>
          </div>
          <div className="p-4 space-y-1.5 text-gray-300 overflow-x-auto leading-relaxed">
            <p><span className="text-purple-400">const</span> <span className="text-blue-300">architect</span> = &#123;</p>
            <p className="pl-4"><span className="text-teal-300">name:</span> <span className="text-emerald-300">&quot;Arad Vafaee&quot;</span>,</p>
            <p className="pl-4"><span className="text-teal-300">coreStack:</span> [<span className="text-amber-300">&quot;Next.js&quot;</span>, <span className="text-amber-300">&quot;React 19&quot;</span>, <span className="text-amber-300">&quot;TypeScript&quot;</span>],</p>
            <p className="pl-4"><span className="text-teal-300">aiOptimization:</span> &#123; <span className="text-gray-400">AEO:</span> <span className="text-emerald-400">true</span>, <span className="text-gray-400">GEO:</span> <span className="text-emerald-400">true</span>, <span className="text-gray-400">llmsTxt:</span> <span className="text-emerald-400">true</span> &#125;,</p>
            <p className="pl-4"><span className="text-teal-300">mobileFrameRate:</span> <span className="text-emerald-400">&quot;60 FPS Flat&quot;</span></p>
            <p>&#125;;</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}