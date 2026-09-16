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
    aFa: "آراد وفایی متخصص توسعه فول‌استک وب‌اپلیکیشن‌ها با Next.js 16، React 19، TypeScript و MongoDB است. وی علاوه بر توسعه وب، خدمات تخصصی سئوی نوین شامل SEO تکنیکال، AEO (بهینه‌سازی پاسخ مستقیم موتورها) و GEO (بهینه‌سازی برای هوش مصنوعی‌های ChatGPT، Perplexity و Gemini) ارائه می‌دهد.",
    qEn: "What specialized services does Arad Vafaee offer?",
    aEn: "Arad Vafaee specializes in Full-Stack Web Development with Next.js 16, React 19, TypeScript, and MongoDB. In addition to development, he offers modern search optimizations including Technical SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).",
  },
  {
    id: "2",
    qFa: "تفاوت AEO و GEO با سئوی سنتی چیست؟",
    aFa: "سئوی سنتی بر رتبه‌گیری در ۱۰ لینک آبی موتورهای جستجو تمرکز دارد؛ در حالی که AEO و GEO ساختار محتوا و اسکیماها را به شکلی کدنویسی می‌کنند که مدل‌های هوش مصنوعی (ChatGPT, Gemini, Perplexity) پاسخ مستقیم کاربر را از وب‌سایت شما استخراج کرده و به عنوان مرجع معتبر نقل کنند.",
    qEn: "What is the difference between AEO/GEO and traditional SEO?",
    aEn: "Traditional SEO focuses on organic SERP ranking. AEO and GEO format website schema graphs so that LLMs and AI search engines cite your website directly as the primary authoritative answer.",
  },
  {
    id: "3",
    qFa: "پروژه‌ها چگونه روی گوشی‌های همراه و میان‌رده بدون لگ اجرا می‌شوند؟",
    aFa: "تمامی پروژه‌ها با معماری سرور کامپوننت‌های Next.js، حداقل‌سازی بار جاوااسکریپت و انیمیشن‌های سبک با شتاب‌دهنده GPU اجرا می‌شوند. این امر باعث لود سریع زیر ۱ ثانیه و عملکرد یکنواخت ۶۰ فریم در ثانیه حتی روی گوشی‌های معمولی می‌شود.",
    qEn: "How are projects optimized for smooth 60 FPS performance on budget phones?",
    aEn: "All apps utilize Next.js Server Components, minimal JS runtime payload, and GPU-composited CSS transforms, guaranteeing fast sub-second load times and smooth 60 FPS performance on mid-tier mobile devices.",
  },
  {
    id: "4",
    qFa: "مراحل شروع پروژه و دریافت مشاوره چگونه است؟",
    aFa: "شما می‌توانید مشخصات اولیه پروژه خود را از طریق فرم تماس زیر ارسال کرده یا در تلگرام/واتس‌اپ (v1arad@) پیام دهید. پس از بررسی نیازمندی‌ها، ساختار فنی، تخمین زمان و پروپوزال رسمی ارائه خواهد شد.",
    qEn: "How can I initiate a project or request consultation?",
    aEn: "You can submit project details through the contact form below or reach out via Telegram/WhatsApp (@v1arad). A comprehensive architectural proposal and timeline will be provided promptly.",
  },
];

export default function FAQ({ lang }: FAQProps) {
  const isFa = lang === "fa";
  const [openId, setOpenId] = useState<string | null>("1");

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--text-primary)" }}>
            {isFa ? "پرسش‌های پرتکرار (AEO Direct Answers)" : "Frequently Asked Questions"}
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
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
                className="bento-card overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-right rtl:text-right ltr:text-left p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span>{isFa ? faq.qFa : faq.qEn}</span>
                  <span className="text-lg text-[var(--accent)] font-mono w-6 h-6 flex items-center justify-center rounded-md border"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-xs sm:text-sm border-t leading-relaxed"
                        style={{
                          borderColor: "var(--border)",
                          color: "var(--text-secondary)",
                        }}
                      >
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