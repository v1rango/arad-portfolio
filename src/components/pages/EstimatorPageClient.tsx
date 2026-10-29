"use client";

import Link from "next/link";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import ProjectEstimator from "@/components/ProjectEstimator";
import { FiArrowRight, FiArrowLeft, FiSliders, FiHelpCircle, FiCheck } from "react-icons/fi";

export default function EstimatorPageClient() {
  const { lang } = useThemeLanguage();
  const isFa = lang === "fa";

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          {isFa ? <FiArrowRight className="w-4 h-4" /> : <FiArrowLeft className="w-4 h-4" />}
          <span>{isFa ? "بازگشت به صفحه اصلی" : "Back to Home"}</span>
        </Link>
        <span className="text-xs font-mono text-[var(--text-muted)] tracking-wider">
          CALC // SCOPE_ESTIMATOR
        </span>
      </div>

      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="telemetry-pill">
          <span className="telemetry-pill-dot" />
          <FiSliders className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          <span>{isFa ? "محاسبه‌گر شفاف و هوشمند هزینه" : "Interactive Cost & Scope Estimator"}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--text-primary)]">
          {isFa ? (
            <>
              برآورد آنلاین <span className="text-gradient-silver">هزینه و زمان تحویل پروژه</span>
            </>
          ) : (
            <>
              Interactive Project <span className="text-gradient-silver">Investment & Timeline Calculator</span>
            </>
          )}
        </h1>

        <p className="text-xs sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? "نوع پروژه و امکانات مدنظرتان را انتخاب کنید تا محدوده سرمایه‌گذاری مورد نیاز و زمان تقریبی تحویل را به صورت بلادرنگ مشاهده نمایید."
            : "Select your project type and desired capabilities to view real-time estimates for investment range and delivery timeline."}
        </p>
      </div>

      {/* AEO Direct Answer Capsule */}
      <section className="architectural-card p-6 sm:p-7 rounded-2xl relative space-y-3">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">AEO // PRICING_STANDARD</div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)]">
          <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]" />
          <span>{isFa ? "پاسخ مستقیم AEO: هزینه ساخت سایت اختصاصی چقدر است؟" : "Direct AEO Answer: Custom Web Development Cost"}</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? "هزینه طراحی و پیاده‌سازی وب‌سایت‌های اختصاصی با استاندارد Next.js 16 به وسعت پروژه و امکانات وابسته است: سایت‌های شرکتی و لندینگ‌های لوکس معمولاً بین ۲۰ تا ۴۵ میلیون تومان، فروشگاه‌های آنلاین هدلس پرسرعت بین ۴۰ تا ۸۵ میلیون تومان، و وب‌اپلیکیشن‌ها و اتوماسیون‌های سفارشی بر اساس ماژول‌های فنی قیمت‌گذاری می‌شوند. تمامی پروژه‌ها شامل تضمین سرعت لود زیر ۰.۸ ثانیه و قرارداد رسمی هستند."
            : "Investment for custom web platforms built with Next.js 16 and zero third-party plugin bloat varies by scope: Corporate & luxury clinic platforms range from $1,200 to $2,500, headless e-commerce platforms from $2,500 to $5,000, and complex web apps based on modular specifications. Every project includes sub-0.8s load guarantees and technical documentation."}
        </p>
      </section>

      {/* Interactive Project Estimator Component */}
      <div>
        <ProjectEstimator lang={lang} />
      </div>

      {/* Pricing FAQs */}
      <section className="architectural-card p-6 sm:p-8 rounded-2xl relative space-y-6">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">FAQ // CONTRACT_TERMS</div>

        <div className="flex items-center gap-2 text-sm font-mono font-bold text-[var(--text-primary)]">
          <FiHelpCircle className="w-4 h-4 text-[var(--text-primary)]" />
          <span>{isFa ? "سوالات متداول برآورد هزینه و پرداخت" : "Pricing & Payment Frequently Asked Questions"}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[var(--text-secondary)] leading-relaxed">
          <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-2">
            <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 font-mono">
              <FiCheck className="w-4 h-4 text-[var(--text-primary)]" />
              <span>{isFa ? "نحوه پرداخت به چه صورت است؟" : "What is the payment milestone structure?"}</span>
            </h3>
            <p>
              {isFa
                ? "پرداخت در ۳ یا ۴ مرحله متناسب با پیشرفت پروژه (پیش‌پرداخت اولیه، تایید طراحی UI/UX، تحویل نسخه تست و تسویه نهایی هنگام لانچ رسمی) انجام می‌شود."
                : "Payments are split across milestone deliverables (initial deposit, UI/UX sign-off, staging deploy, and final production launch)."}
            </p>
          </div>

          <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-2">
            <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-1.5 font-mono">
              <FiCheck className="w-4 h-4 text-[var(--text-primary)]" />
              <span>{isFa ? "آیا هزینه پنهان یا تمدید سالانه اجباری وجود دارد؟" : "Are there hidden fees or forced renewals?"}</span>
            </h3>
            <p>
              {isFa
                ? "خیر. کدهای تحویل‌شده ۱۰۰٪ متعلق به کارفرما بوده و هیچ وابستگی به لایسنس پلاگین‌های دلاری وجود ندارد."
                : "No. 100% of the code ownership belongs to you with zero recurring dollar-denominated plugin license dependencies."}
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="architectural-card p-8 rounded-2xl relative text-center space-y-4">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">INQUIRY // FORMAL_QUOTE</div>

        <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
          {isFa ? "نیاز به پیش‌فاکتور دقیق سازمانی دارید؟" : "Need an Exact Scope Specification?"}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          {isFa
            ? "برای بررسی اختصاصی نیازمندی‌های پروژه‌تان می‌توانید مستقیماً از طریق تلگرام یا فرم تماس ارتباط برقرار کنید."
            : "Connect directly via Telegram or the inquiry form to discuss detailed feature roadmaps."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="tactile-btn btn-border-beam w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-all"
          >
            {isFa ? "ارسال جزئیات و درخواست قرارداد" : "Submit Scope Details"}
          </Link>
          <Link
            href="/case-studies"
            className="tactile-btn w-full sm:w-auto px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-bold text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
          >
            {isFa ? "مشاهده نتایج پروژه‌های قبلی" : "View Previous Work"}
          </Link>
        </div>
      </div>

    </div>
  );
}
