"use client";

import { motion } from "framer-motion";
import { COMPARISON_DATA } from "@/lib/constants";
import { FiCheck, FiX, FiAward, FiShield } from "react-icons/fi";

interface WhyCustomProps {
  lang: "fa" | "en";
}

export default function WhyCustom({ lang }: WhyCustomProps) {
  const isFa = lang === "fa";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-hover)] text-xs font-semibold text-[var(--accent)] mb-3">
            <FiShield className="w-3.5 h-3.5" />
            <span>{isFa ? "مقایسه هوشمندانه قبل از تصمیم‌گیری" : "Informed Decision Making"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
            {isFa ? "چرا وب‌سایت اختصاصی به جای قالب‌های آماده و وردپرس؟" : "Why Custom Next.js Beats Generic WordPress"}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
            {isFa
              ? "اگر برای اعتبار برند، فروش مداوم و عدم قطعی ارزش قائلید، تفاوت کیفیت در کدهای زیرساخت نهفته است."
              : "When brand reputation and sales conversions matter, the technical foundation makes all the difference."}
          </p>
        </div>

        {/* جدول و کارت‌های مقایسه */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bento-card overflow-hidden shadow-xl"
        >
          {/* هدر جدول */}
          <div className="grid grid-cols-12 p-4 sm:p-6 border-b text-xs sm:text-sm font-bold items-center"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderColor: "var(--border)",
            }}
          >
            <div className="col-span-5 sm:col-span-4" style={{ color: "var(--text-secondary)" }}>
              {isFa ? "شاخص‌های حیاتی" : "Core Factor"}
            </div>
            <div className="col-span-7 sm:col-span-4 flex items-center gap-1.5 text-[var(--accent)] font-extrabold">
              <FiAward className="w-4 h-4 flex-shrink-0" />
              <span>{isFa ? "وب‌سایت اختصاصی (Next.js 16)" : "Custom Next.js 16"}</span>
            </div>
            <div className="hidden sm:block sm:col-span-4 text-[var(--text-muted)] font-medium">
              {isFa ? "قالب‌های آماده و وردپرس سنتی" : "Generic WordPress / Templates"}
            </div>
          </div>

          {/* ردیف‌های مقایسه */}
          <div className="divide-y" style={{ borderColor: "var(--border)" }}>
            {COMPARISON_DATA.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-[var(--accent-subtle)]/30 transition-colors"
              >
                <div className="col-span-12 sm:col-span-4 font-semibold mb-2 sm:mb-0" style={{ color: "var(--text-primary)" }}>
                  {isFa ? item.featureFa : item.featureEn}
                </div>

                <div className="col-span-12 sm:col-span-4 flex items-center gap-2 text-[var(--accent)] font-medium mb-1 sm:mb-0">
                  <FiCheck className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                  <span>{isFa ? item.customFa : item.customEn}</span>
                </div>

                <div className="col-span-12 sm:col-span-4 flex items-center gap-2 text-[var(--text-muted)] text-[11px] sm:text-xs">
                  <FiX className="w-4 h-4 flex-shrink-0 text-rose-500/70" />
                  <span>{isFa ? item.standardFa : item.standardEn}</span>
                </div>
              </div>
            ))}
          </div>

          {/* نوار پایین جدول */}
          <div className="p-4 sm:p-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              backgroundColor: "var(--bg-elevated)",
              borderColor: "var(--border)",
            }}
          >
            <div className="text-xs text-center sm:text-right" style={{ color: "var(--text-secondary)" }}>
              {isFa
                ? "💡 یک ثانیه کاهش زمان لود سایت، نرخ تبدیل و فروش شما را تا ۷٪ افزایش می‌دهد."
                : "💡 Every 1-second improvement in load time increases conversion rates by up to 7%."}
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 whitespace-nowrap"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--accent-contrast)",
              }}
            >
              {isFa ? "سفارش سایت اختصاصی پرسرعت" : "Build Your Custom Platform"}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
