"use client";

import { useState } from "react";
import { FAQ_LIST } from "@/lib/constants";

interface FAQProps {
  lang: "fa" | "en";
}

export default function FAQ({ lang }: FAQProps) {
  const isFa = lang === "fa";
  const [openId, setOpenId] = useState<string | null>("1");
  const [showAll, setShowAll] = useState(false);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const INITIAL_VISIBLE_COUNT = 5;
  const visibleFaqs = showAll ? FAQ_LIST : FAQ_LIST.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenCount = FAQ_LIST.length - INITIAL_VISIBLE_COUNT;

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
          {visibleFaqs.map((faq) => {
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
                  className="w-full text-right rtl:text-right ltr:text-left p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base hover:text-[var(--accent)] transition-colors cursor-pointer"
                  style={{ color: "var(--text-primary)" }}
                >
                  <h3 className="font-bold text-sm sm:text-base text-inherit m-0 p-0 flex-1">
                    {isFa ? faq.qFa : faq.qEn}
                  </h3>
                  <span className="text-lg text-[var(--accent)] font-mono w-6 h-6 flex items-center justify-center rounded-md border transition-transform duration-200"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t pt-4"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {isFa ? faq.aFa : faq.aEn}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {hiddenCount > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] cursor-pointer inline-flex items-center gap-2"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-elevated)",
                color: "var(--text-primary)",
              }}
            >
              {showAll ? (
                <span>{isFa ? "بستن پرسش‌های اضافه ↑" : "Show Less ↑"}</span>
              ) : (
                <span>
                  {isFa
                    ? `مشاهده سایر پرسش‌های تخصصی (${hiddenCount}+ مورد دیگر) ↓`
                    : `View More Questions (+${hiddenCount} more) ↓`}
                </span>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}