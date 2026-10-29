"use client";

import { useState } from "react";
import { COMPARISON_DATA } from "@/lib/constants";
import { FiCheck, FiX, FiAward, FiShield, FiZap, FiPlay, FiRotateCw, FiActivity } from "react-icons/fi";

interface WhyCustomProps {
  lang: "fa" | "en";
}

export default function WhyCustom({ lang }: WhyCustomProps) {
  const isFa = lang === "fa";
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationKey, setSimulationKey] = useState(0);

  const startSimulation = () => {
    setIsSimulating(true);
    setSimulationKey((prev) => prev + 1);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)] relative">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="telemetry-pill">
            <span className="telemetry-pill-dot" />
            <FiShield className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
            <span>{isFa ? "مقایسه هوشمندانه قبل از تصمیم‌گیری" : "Informed Decision Matrix"}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[var(--text-primary)]">
            {isFa ? "چرا وب‌سایت اختصاصی به جای قالب‌های آماده و وردپرس؟" : "Why Custom Next.js Beats Generic WordPress"}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {isFa
              ? "اگر برای اعتبار برند، فروش مداوم و رتبه موتورهای هوش مصنوعی ارزش قائلید، تفاوت اصلی در کدهای زیرساخت نهفته است."
              : "When brand authority, conversions, and generative AI indexing matter, the architectural foundation makes all the difference."}
          </p>
        </div>

        {/* Live Speed Duel Benchmark Card */}
        <div className="architectural-card p-6 sm:p-8 rounded-2xl relative overflow-hidden space-y-6">
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr">BENCHMARK // 4G_SIM</div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)]">
                <FiActivity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  {isFa ? "شبیه‌ساز زنده سرعت: Next.js اختصاصی در برابر وردپرس" : "Live Speed Duel: Custom Next.js vs Generic WP"}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-mono">
                  {isFa ? "تست شبیه‌سازی لود واقعی بر روی شبکه موبایل 4G" : "Real-world mobile 4G latency benchmark"}
                </p>
              </div>
            </div>

            <button
              onClick={startSimulation}
              className="tactile-btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-[var(--text-primary)] text-[var(--bg-primary)] transition-all cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              {isSimulating ? (
                <>
                  <FiRotateCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{isFa ? "تکرار مجدد بنچ‌مارک" : "Re-run Benchmark"}</span>
                </>
              ) : (
                <>
                  <FiPlay className="w-3.5 h-3.5 fill-current" />
                  <span>{isFa ? "شروع بنچ‌مارک سرعت" : "Run Speed Test"}</span>
                </>
              )}
            </button>
          </div>

          <div key={simulationKey} className="space-y-4 pt-2">
            {/* Custom Next.js Platform */}
            <div className="space-y-2 p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <div className="flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--text-primary)] animate-pulse" />
                  <span className="text-[var(--text-primary)]">
                    {isFa ? "سایت اختصاصی آراد وفایی (Next.js 16)" : "Arad Custom Platform (Next.js 16)"}
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-[11px] px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-bold">
                    LIGHTHOUSE: 100/100
                  </span>
                  <span className="text-sm font-black text-[var(--text-primary)]">0.48s</span>
                </div>
              </div>

              <div className="w-full h-2.5 rounded-full bg-[var(--bg-surface)] overflow-hidden p-0.5 border border-[var(--border)]">
                <div
                  className="h-full rounded-full bg-[var(--text-primary)] transition-all duration-500 ease-out shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-[var(--text-muted)] pt-0.5">
                <span className="font-mono">CORE WEB VITALS: 100% GREEN METRICS</span>
                <span className="text-[var(--text-primary)] font-semibold font-mono">SUB-0.5s INSTANT</span>
              </div>
            </div>

            {/* Generic WordPress */}
            <div className="space-y-2 p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] opacity-85">
              <div className="flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-[var(--text-secondary)]">
                    {isFa ? "قالب‌های آماده وردپرس + المنتور و افزونه‌ها" : "Generic WordPress + Heavy Plugins"}
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-[11px] px-2 py-0.5 rounded border border-red-500/20 bg-red-500/10 text-red-400 font-bold">
                    LIGHTHOUSE: 42/100
                  </span>
                  <span className="text-sm font-black text-red-400">4.20s</span>
                </div>
              </div>

              <div className="w-full h-2.5 rounded-full bg-[var(--bg-surface)] overflow-hidden p-0.5 border border-[var(--border)]">
                <div
                  className={`h-full rounded-full bg-red-500/70 transition-all ${
                    isSimulating ? "duration-[3500ms] ease-linear" : "duration-700 ease-out"
                  }`}
                  style={{ width: isSimulating ? "100%" : "25%" }}
                />
              </div>

              <div className="flex justify-between items-center text-[11px] text-[var(--text-muted)] pt-0.5">
                <span className="text-red-400/80">3.7s delay = ~53% mobile visitor drop-off</span>
                <span className="text-red-400 font-mono font-bold">8.7× SLOWER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Matrix Card */}
        <div className="architectural-card rounded-2xl overflow-hidden relative">
          <div className="cad-corner-tl" />
          <div className="cad-corner-tr">SPEC // COMPARISON</div>

          <div className="grid grid-cols-12 p-4 sm:p-5 border-b border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-mono font-bold items-center">
            <div className="col-span-5 sm:col-span-4 text-[var(--text-muted)]">
              {isFa ? "شاخص مهندسی" : "ENGINEERING CRITERION"}
            </div>
            <div className="col-span-7 sm:col-span-4 flex items-center gap-1.5 text-[var(--text-primary)] font-black">
              <FiAward className="w-4 h-4 flex-shrink-0" />
              <span>{isFa ? "معماری اختصاصی (NEXT.JS 16)" : "CUSTOM ARCHITECTURE"}</span>
            </div>
            <div className="hidden sm:block sm:col-span-4 text-[var(--text-muted)]">
              {isFa ? "سایت‌های معمولی و وردپرس" : "GENERIC WORDPRESS"}
            </div>
          </div>

          <div className="divide-y divide-[var(--border)]">
            {COMPARISON_DATA.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs items-center hover:bg-[var(--bg-elevated)] transition-colors"
              >
                <div className="col-span-12 sm:col-span-4 font-bold mb-2 sm:mb-0 text-[var(--text-primary)]">
                  {isFa ? item.featureFa : item.featureEn}
                </div>

                <div className="col-span-12 sm:col-span-4 flex items-center gap-2 text-[var(--text-primary)] font-semibold mb-1.5 sm:mb-0">
                  <FiCheck className="w-4 h-4 flex-shrink-0 text-[var(--text-primary)]" />
                  <span>{isFa ? item.customFa : item.customEn}</span>
                </div>

                <div className="col-span-12 sm:col-span-4 flex items-center gap-2 text-[var(--text-muted)] text-[11px] sm:text-xs">
                  <FiX className="w-4 h-4 flex-shrink-0 text-red-400/80" />
                  <span>{isFa ? item.standardFa : item.standardEn}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 sm:p-6 border-t border-[var(--border)] bg-[var(--bg-elevated)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-center sm:text-right rtl:sm:text-right ltr:sm:text-left text-[var(--text-secondary)]">
              {isFa
                ? "کاهش ۱ ثانیه زمان لود، نرخ تبدیل و رضایت مشتریان را به صورت مستقیم تا ۷٪ افزایش می‌دهد."
                : "Every 1-second improvement in response time drives direct conversion increases by up to 7%."}
            </div>

            <a
              href="/contact"
              className="tactile-btn px-6 py-2.5 rounded-xl text-xs font-bold bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-all whitespace-nowrap"
            >
              {isFa ? "درخواست پیاده‌سازی اختصاصی" : "Engineer Your Custom Platform"}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
