"use client";

import { motion } from "framer-motion";
import { PERSONAL_DATA } from "@/lib/constants";

interface HeroProps {
  lang: "fa" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const isFa = lang === "fa";

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs font-medium text-[var(--text-secondary)] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {isFa ? "آماده پذیرش پروژه‌های جدید" : "Available for New Projects"}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6"
        >
          {isFa ? (
            <>
              خلق وب‌سایت‌های هوشمند با <span className="text-[var(--accent)]">Next.js</span>
              <br /> و بهینه‌سازی پیشرفته برای <span className="text-[var(--text-secondary)]">AEO & GEO</span>
            </>
          ) : (
            <>
              Building Next.js Apps Optimized for{" "}
              <span className="text-[var(--accent)]">AI Search & AEO</span>
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          {isFa ? (
            <>
              من <strong>{PERSONAL_DATA.nameFa}</strong> هستم؛ توسعه‌دهنده فول‌استک و متخصص الگوریتم‌های نوین جستجو. پروژه‌ها را با بالاترین سرعت، ساختار استاندارد و آمادگی کامل برای پاسخ‌دهی در هوش مصنوعی (Gemini، ChatGPT و گوگل) توسعه می‌دهم.
            </>
          ) : (
            <>
              I'm <strong>{PERSONAL_DATA.nameEn}</strong>, Full-Stack Web Developer & Search Optimization Specialist. I craft high-performance web applications ready for generative engine responses.
            </>
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[var(--accent)] text-[#021024] font-bold text-base hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            {isFa ? "مشاوره و شروع همکاری" : "Start a Project"}
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] text-white font-medium text-base hover:bg-opacity-80 transition-all"
          >
            {isFa ? "مشاهده نمونه‌کارها" : "View Work"}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[var(--border)]/30 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400"
        >
          <span className="font-semibold text-[var(--text-secondary)]">
            {isFa ? "مهارت‌های کلیدی:" : "Core Stack:"}
          </span>
          {PERSONAL_DATA.mainSkills.map((skill) => (
            <span key={skill.name} className="bg-[var(--bg-surface)]/60 px-3 py-1 rounded-md text-xs border border-[var(--border)]/40 text-gray-200">
              {skill.name}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}