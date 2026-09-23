"use client";

import { motion } from "framer-motion";
import { WORK_PROCESS } from "@/lib/constants";
import { FiCheck, FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface ProcessProps {
  lang: "fa" | "en";
}

export default function Process({ lang }: ProcessProps) {
  const isFa = lang === "fa";

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--border-hover)] text-xs font-semibold text-[var(--accent)] mb-3">
            <span>{isFa ? "مسیر شفاف و مطمئن" : "Transparent Delivery"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
            {isFa ? "مراحل همکاری؛ از ایده تا فروش و رتبه ۱" : "How We Collaborate: From Idea to #1"}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
            {isFa
              ? "فرآیندی استاندارد و گام‌به‌گام با گزارش‌دهی منظم، تا پروژه شما بدون کوچک‌ترین اتلاف وقت و با بالاترین کیفیت تحویل داده شود."
              : "A structured, reliable development roadmap with weekly checkpoints and zero delays."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS.map((step, index) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bento-card p-6 flex flex-col justify-between relative group hover:border-[var(--accent)]"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[var(--accent)]">
                    {step.stepNumber}
                  </span>
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition-colors"
                    style={{
                      backgroundColor: "var(--bg-elevated)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {isFa ? <FiArrowLeft className="w-4 h-4" /> : <FiArrowRight className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2.5" style={{ color: "var(--text-primary)" }}>
                  {isFa ? step.titleFa : step.titleEn}
                </h3>

                <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  {isFa ? step.descFa : step.descEn}
                </p>
              </div>

              <div className="pt-4 border-t flex items-center gap-2 text-[11px] font-medium"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--accent)",
                }}
              >
                <FiCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isFa ? step.highlightFa : step.highlightEn}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
