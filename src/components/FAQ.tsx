"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_LIST } from "@/lib/constants";

interface FAQProps {
  lang: "fa" | "en";
}

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
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
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
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t pt-4"
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