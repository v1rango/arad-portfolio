"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  lang: "fa" | "en";
}

interface FAQItem {
  id: string;
  qFa: string;
  aFa: string;
  qEn: string;
  aEn: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    id: "1",
    qFa: "آراد وفایی چه خدمات تخصصی ارائه‌می دهد؟",
    aFa: "آراد وفایی متخصص توسعه فول‌استک وب‌اپلیکیشن‌ها با Next.js، TypeScript و MongoDB است و خدمات تخصصی سئوی نوین شامل SEO، AEO (بهینه‌سازی برای موتورهای پاسخ‌گو) و GEO (بهینه‌سازی برای هوش مصنوعی) ارائه می‌دهد.",
    qEn: "What specialized services does Arad Vafaee offer?",
    aEn: "Arad Vafaee offers Full-Stack Web Development using Next.js, TypeScript, and MongoDB, along with modern search optimization services including SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).",
  },
  {
    id: "2",
    qFa: "تفاوت AEO و GEO با سئوی سنتی چیست؟",
    aFa: "سئوی سنتی روی کسب رتبه در ۱۰ لینک آبی گوگل تمرکز دارد؛ در حالی که AEO و GEO محتوا و ساختار وب‌سایت را طوری آماده می‌کنند که هوش مصنوعی‌هایی مانند ChatGPT، Gemini و Perplexity پاسخ کاربر را مستقیماً از وب‌سایت شما استخراج و ارجاع دهند.",
    qEn: "What is the difference between AEO/GEO and traditional SEO?",
    aEn: "Traditional SEO focuses on ranking in Google's organic links. AEO and GEO structure website content so AI models like ChatGPT, Gemini, and Perplexity directly extract and cite your website as the primary answer source.",
  },
  {
    id: "3",
    qFa: "پروژه‌ها چگونه از نظر عملکرد و سرعت در موبایل بهینه‌سازی می‌شوند؟",
    aFa: "تمام کدهای توسعه داده شده از معماری Server-Side Rendering (SSR) در Next.js استفاده می‌کنند و انیمیشن‌ها به‌طور اختصاصی روی پردازنده گرافیکی (GPU Acceleration) اجرا می‌شوند تا در دستگاه‌های موبایل هیچ‌گونه کندی یا افت فریم ایجاد نشود.",
    qEn: "How are projects optimized for mobile performance and speed?",
    aEn: "All web apps leverage Next.js Server-Side Rendering (SSR) with GPU-accelerated lightweight CSS/Framer Motion animations, ensuring maximum performance and zero frame drops on mobile devices.",
  },
  {
    id: "4",
    qFa: "چگونه می‌توان پروژه‌ای را ثبت کرد یا مشاوره گرفت؟",
    aFa: "شما می‌توانید از طریق فرم تماس وب‌سایت، یا پیام مستقیم در تلگرام و اینستاگرام (v1arad@) یا واتس‌اپ با آراد وفایی در ارتباط باشید تا پس از بررسی نیازها، پروپوزال متناسب ارائه شود.",
    qEn: "How can I start a project or get consultation?",
    aEn: "You can reach out directly via the website contact form, or send a direct message on Telegram/Instagram (@v1arad) or WhatsApp to discuss requirements and receive a proposal.",
  },
];

export default function FAQ({ lang }: FAQProps) {
  const isFa = lang === "fa";
  const [openId, setOpenId] = useState<string | null>("1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-primary)] border-t border-[var(--border)]/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {isFa ? "سؤالات متداول" : "Frequently Asked Questions"}
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            {isFa
              ? "پاسخ‌های شفاف و مستقیم به پرسش‌های کلیدی درباره خدمات، تکنولوژی‌ها و بهینه‌سازی AI."
              : "Direct answers to key questions regarding services, tech stack, and AI optimization."}
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-right p-6 flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg hover:text-[var(--text-secondary)] transition-colors"
                >
                  <span>{isFa ? faq.qFa : faq.qEn}</span>
                  <span className="text-xl text-[var(--accent)] font-mono">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-sm sm:text-base text-gray-300 border-t border-[var(--border)]/30 leading-relaxed">
                        {isFa ? faq.aFa : faq.aEn}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}