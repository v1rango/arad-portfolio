"use client";

import React from "react";
import { FiZap, FiAlertTriangle, FiTrendingUp } from "react-icons/fi";

interface SpeedGaugeProps {
  lang: "fa" | "en";
}

export default function SpeedGauge({ lang }: SpeedGaugeProps) {
  const isFa = lang === "fa";

  return (
    <div
      className="p-6 sm:p-8 rounded-3xl border relative overflow-hidden backdrop-blur-md shadow-2xl transition-all"
      style={{
        backgroundColor: "var(--bg-surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Decorative gradient glow */}
      <div
        className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: "var(--accent)" }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <FiZap className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isFa ? "آزمون واقعی سرعت و نرخ تبدیل" : "Real-World Performance Benchmark"}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black" style={{ color: "var(--text-primary)" }}>
            {isFa ? "چرا سرعت زیر ۱ ثانیه فروش را چند برابر می‌کند؟" : "Why Sub-Second Speed Skyrockets Conversions"}
          </h3>
          <p className="text-xs sm:text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
            {isFa
              ? "طبق آمار رسمی گوگل، با هر ۱ ثانیه تاخیر در لود سایت، بیش از ۲۰٪ از خریداران سایت را می‌بندند."
              : "According to Google, every 1-second delay causes over 20% of potential buyers to abandon the site."}
          </p>
        </div>

        <div className="flex items-center gap-2 p-2 rounded-2xl border self-start sm:self-auto"
          style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border)" }}
        >
          <div className="text-center px-3">
            <span className="block text-2xl font-black text-emerald-400">0.8s</span>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">NEXT.JS 16</span>
          </div>
          <div className="h-8 w-px bg-[var(--border)]" />
          <div className="text-center px-3">
            <span className="block text-2xl font-black text-rose-500">9.2s</span>
            <span className="text-[10px] text-[var(--text-muted)] font-mono">WORDPRESS</span>
          </div>
        </div>
      </div>

      {/* Comparison visual cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Next.js 16 Card */}
        <div
          className="p-5 rounded-2xl border relative overflow-hidden transition-transform hover:scale-[1.01]"
          style={{
            backgroundColor: "var(--bg-elevated)",
            borderColor: "rgba(16, 185, 129, 0.4)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                {isFa ? "سایت اختصاصی با Next.js 16 (آراد وفایی)" : "Custom Next.js 16 Architecture"}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              SCORE: 100/100
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1" style={{ color: "var(--text-secondary)" }}>
                <span>{isFa ? "سرعت باز شدن کامل (LCP):" : "Load Time (LCP):"}</span>
                <span className="font-mono font-bold text-emerald-400">۰.۸ ثانیه</span>
              </div>
              <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[95%]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
              <div className="p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                <span className="block text-[11px] text-[var(--text-muted)]">{isFa ? "نرخ پرش مشتری:" : "Bounce Rate:"}</span>
                <span className="font-bold text-emerald-400 text-sm">کمتر از ۶٪</span>
              </div>
              <div className="p-2.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
                <span className="block text-[11px] text-[var(--text-muted)]">{isFa ? "ایندکس هوش مصنوعی:" : "AI Readiness:"}</span>
                <span className="font-bold text-emerald-400 text-sm">۱۰۰٪ آنی</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heavy WordPress Card */}
        <div
          className="p-5 rounded-2xl border relative overflow-hidden opacity-80 transition-opacity hover:opacity-100"
          style={{
            backgroundColor: "var(--bg-elevated)",
            borderColor: "rgba(244, 63, 94, 0.3)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 ring-4 ring-rose-500/20" />
              <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                {isFa ? "قالب‌های آماده وردپرس / المنتور" : "Bloated WordPress / Elementor"}
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20">
              SCORE: 24/100
            </span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1" style={{ color: "var(--text-secondary)" }}>
                <span>{isFa ? "سرعت باز شدن کامل (LCP):" : "Load Time (LCP):"}</span>
                <span className="font-mono font-bold text-rose-400">۹.۲ ثانیه</span>
              </div>
              <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full w-[24%]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
              <div className="p-2.5 rounded-xl border border-rose-500/20 bg-rose-500/5">
                <span className="block text-[11px] text-[var(--text-muted)]">{isFa ? "نرخ پرش مشتری:" : "Bounce Rate:"}</span>
                <span className="font-bold text-rose-400 text-sm">بیش از ۵۴٪</span>
              </div>
              <div className="p-2.5 rounded-xl border border-rose-500/20 bg-rose-500/5">
                <span className="block text-[11px] text-[var(--text-muted)]">{isFa ? "آسیب‌پذیری افزونه‌ها:" : "Plugin Vulnerabilities:"}</span>
                <span className="font-bold text-rose-400 text-sm">ریسک مداوم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
