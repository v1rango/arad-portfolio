"use client";

import { WORK_PROCESS } from "@/lib/constants";
import { FiCheck, FiArrowLeft, FiArrowRight, FiGitPullRequest } from "react-icons/fi";

interface ProcessProps {
  lang: "fa" | "en";
}

export default function Process({ lang }: ProcessProps) {
  const isFa = lang === "fa";

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="telemetry-pill">
            <span className="telemetry-pill-dot" />
            <FiGitPullRequest className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>{isFa ? "مسیر شفاف مهندسی" : "Engineering Delivery Protocol"}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[var(--text-primary)]">
            {isFa ? "مراحل همکاری؛ از کشف معماری تا لانچ و مقیاس" : "Four-Stage Execution Lifecycle"}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {isFa
              ? "فرآیندی استاندارد و مدون با گزارش‌دهی هفتگی و بازبینی‌های مداوم، بدون تاخیر و با بالاترین استانداردهای پرفورمنس."
              : "A predictable, structured development lifecycle with weekly milestones, zero delays, and rigorous QA benchmarks."}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORK_PROCESS.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="architectural-card p-6 flex flex-col justify-between relative group hover:border-[var(--text-primary)] transition-all duration-300 rounded-2xl"
            >
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr">STAGE // 0{idx + 1}</div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[var(--text-primary)]">
                    {step.stepNumber}
                  </span>
                  <div className="w-8 h-8 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:border-[var(--text-primary)] transition-colors">
                    {isFa ? <FiArrowLeft className="w-4 h-4" /> : <FiArrowRight className="w-4 h-4" />}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold mb-2.5 text-[var(--text-primary)]">
                  {isFa ? step.titleFa : step.titleEn}
                </h3>

                <p className="text-xs leading-relaxed mb-6 text-[var(--text-secondary)]">
                  {isFa ? step.descFa : step.descEn}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex items-center gap-2 text-[11px] font-mono text-[var(--text-primary)]">
                <FiCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>{isFa ? step.highlightFa : step.highlightEn}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
