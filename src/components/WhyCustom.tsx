"use client";

import { useState } from "react";
import { COMPARISON_DATA } from "@/lib/constants";
import { FiCheck, FiX, FiAward, FiShield, FiZap, FiPlay, FiRotateCw } from "react-icons/fi";

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]/20 relative">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
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

        {/* ویجت تعاملی دوئل زنده سرعت (Speed Duel Simulator) */}
        <div className="mb-14 p-5 sm:p-7 rounded-2xl border bg-[var(--bg-surface)] shadow-2xl relative overflow-hidden"
          style={{ borderColor: "var(--border)" }}
        >
          {/* هاله نور پس‌زمینه ویجت */}
          <div className="absolute top-0 right-1/4 w-72 h-36 bg-emerald-500/10 blur-[80px] pointer-events-none rounded-full" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <FiZap className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  {isFa ? "شبیه‌ساز زنده سرعت: Next.js اختصاصی در برابر وردپرس" : "Live Speed Duel: Custom Next.js vs Generic WP"}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                  {isFa ? "تست شبیه‌سازی لود واقعی بر روی شبکه موبایل 4G" : "Real-world mobile 4G network simulation benchmark"}
                </p>
              </div>
            </div>

            <button
              onClick={startSimulation}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-emerald-950 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              {isSimulating ? (
                <>
                  <FiRotateCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{isFa ? "تکرار مجدد بنچ‌مارک" : "Re-run Benchmark"}</span>
                </>
              ) : (
                <>
                  <FiPlay className="w-3.5 h-3.5 fill-emerald-950" />
                  <span>{isFa ? "شروع مسابقه سرعت ⚡" : "Start Speed Race ⚡"}</span>
                </>
              )}
            </button>
          </div>

          <div key={simulationKey} className="space-y-5">
            {/* لاین اول: Next.js 16 اختصاصی آراد */}
            <div className="space-y-2 p-3.5 sm:p-4 rounded-xl bg-[var(--bg-elevated)] border border-emerald-500/30">
              <div className="flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400">{isFa ? "سایت اختصاصی آراد (Next.js 16)" : "Arad Custom Platform (Next.js 16)"}</span>
                </div>
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    Lighthouse: 100/100
                  </span>
                  <span className="text-sm font-black text-emerald-400">۰.۵ ثانیه</span>
                </div>
              </div>
              <div className="w-full h-3 rounded-full bg-black/40 overflow-hidden p-0.5 border border-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-300 shadow-[0_0_12px_rgba(16,185,129,0.8)] transition-all duration-500 ease-out"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] text-[var(--text-muted)] pt-0.5">
                <span>Core Web Vitals: تمام شاخص‌ها سبز (Good)</span>
                <span className="text-emerald-400 font-semibold">لود لحظه‌ای بدون معطلی</span>
              </div>
            </div>

            {/* لاین دوم: قالب‌های آماده و وردپرس سنگین */}
            <div className="space-y-2 p-3.5 sm:p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <div className="flex items-center justify-between text-xs font-bold">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <span className="text-[var(--text-secondary)]">{isFa ? "قالب‌های آماده وردپرس + المنتور" : "Generic WordPress + Heavy Plugins"}</span>
                </div>
                <div className="flex items-center gap-3 font-mono">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-rose-500/15 text-rose-400 border border-rose-500/30">
                    Lighthouse: 42/100
                  </span>
                  <span className="text-sm font-black text-rose-400">۴.۲ ثانیه</span>
                </div>
              </div>
              <div className="w-full h-3 rounded-full bg-black/40 overflow-hidden p-0.5 border border-white/5">
                <div
                  className={`h-full rounded-full bg-gradient-to-r from-rose-500 to-amber-500 transition-all ${
                    isSimulating ? "duration-[3500ms] ease-linear" : "duration-700 ease-out"
                  }`}
                  style={{ width: isSimulating ? "100%" : "25%" }}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] text-[var(--text-muted)] pt-0.5">
                <span className="text-rose-400/90">۳.۷ ثانیه اتلاف وقت کاربر = از دست رفتن ۵۳٪ مشتریان</span>
                <span className="text-rose-400 font-mono">۷.۸× کندتر</span>
              </div>
            </div>
          </div>
        </div>

        {/* جدول و کارت‌های مقایسه */}
        <div className="bento-card overflow-hidden shadow-xl">
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

                <div className="col-span-12 sm:col-span-4 flex items-center gap-2 text-[var(--accent)] font-medium mb-1.5 sm:mb-0">
                  <span className="sm:hidden text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30 whitespace-nowrap">
                    {isFa ? "اختصاصی" : "Next.js"}
                  </span>
                  <FiCheck className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                  <span>{isFa ? item.customFa : item.customEn}</span>
                </div>

                <div className="col-span-12 sm:col-span-4 flex items-center gap-2 text-[var(--text-muted)] text-[11px] sm:text-xs">
                  <span className="sm:hidden text-[10px] px-2 py-0.5 rounded-md bg-rose-500/15 text-rose-400 font-bold border border-rose-500/30 whitespace-nowrap">
                    {isFa ? "وردپرس" : "WP"}
                  </span>
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
        </div>

      </div>
    </section>
  );
}
