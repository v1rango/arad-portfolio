"use client";

import { useState } from "react";
import { FAQ_LIST } from "@/lib/constants";
import { FiHelpCircle } from "react-icons/fi";

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
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="telemetry-pill mb-3">
            <FiHelpCircle className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>{isFa ? "پاسخ مستقیم AEO به پرسش‌های کلیدی" : "DIRECT_KNOWLEDGE // AEO_CAPSULES"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
            {isFa ? "پرسش‌های پرتکرار فنی و پروژه‌ای" : "Frequently Asked Questions & Technical FAQ"}
          </h2>
          <p className="text-xs sm:text-sm max-w-2xl mx-auto mt-2 text-[var(--text-secondary)]">
            {isFa
              ? "پاسخ‌های شفاف و مستقیم به پرسش‌های کلیدی درباره خدمات، تکنولوژی‌ها و بهینه‌سازی AI."
              : "Clear answers to essential architecture, pricing, delivery timelines, and AI optimization inquiries."}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="architectural-card transition-all relative overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                  className="w-full text-right rtl:text-right ltr:text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base hover:text-[var(--accent)] transition-colors cursor-pointer text-[var(--text-primary)]"
                >
                  <span className="font-mono text-xs text-[var(--text-secondary)] shrink-0" aria-hidden="true">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-inherit m-0 p-0 flex-1">
                    {isFa ? faq.qFa : faq.qEn}
                  </h3>
                  <span className="text-base text-[var(--accent)] font-mono w-7 h-7 flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] transition-transform duration-200 shrink-0">
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
                    <div className="px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t border-[var(--border)] pt-4 text-[var(--text-secondary)]">
                      {isFa ? faq.aFa : faq.aEn}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {hiddenCount > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="tactile-btn px-6 py-3 text-xs sm:text-sm font-semibold gap-2 cursor-pointer shadow-sm"
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