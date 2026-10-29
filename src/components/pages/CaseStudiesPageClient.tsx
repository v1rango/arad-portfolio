"use client";

import Link from "next/link";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import Projects from "@/components/Projects";
import { FiArrowRight, FiArrowLeft, FiLayers, FiTrendingUp } from "react-icons/fi";

const DETAILED_CASE_STUDIES = [
  {
    slug: "arad-gallery",
    code: "CASE // 01_SEO",
    titleFa: "گالری آراد — فتح رتبه ۱ گوگل در ۱۲ ساعت",
    titleEn: "Arad Gallery — Rank #1 on Google in 12h",
    descFa: "مهندسی گراف معنایی با ۲۷ نوع اسکیما و سئوی ساختاریافته Next.js 16 که توانست بدون ریپورتاژ و بک‌لینک، در عرض ۱۲ ساعت به رتبه اول نتایج گوگل برسد.",
    descEn: "Semantic knowledge graph with 27 Schema.org types and Next.js 16 architecture, hitting Rank #1 on Google within 12 hours of indexation.",
    metricFa: "رتبه ۱ گوگل در ۱۲ ساعت",
    metricEn: "Rank #1 in 12 Hours",
    tagFa: "سئو معنایی و هوش مصنوعی (AEO)",
    tagEn: "Semantic SEO & AEO",
  },
  {
    slug: "ironfit-gym",
    code: "CASE // 02_PERF",
    titleFa: "آیرون فیت — پلتفرم بدنسازی با لود زیر ۰.۷ ثانیه",
    titleEn: "IronFit Gym — Sub-0.7s Load Fitness Platform",
    descFa: "پلتفرم تخصصی ورزشی با انیمیشن‌های ۶۰ فریم بر ثانیه شتاب‌یافته با GPU، رزرو آنلاین بدون رفرش و افزایش ۴۵٪ نرخ ثبت‌نام ورزشکاران.",
    descEn: "60 FPS GPU-accelerated athletic platform with instant membership signup and a 45% increase in online subscriber conversions.",
    metricFa: "۰.۶۸ ثانیه لود کامل (PageSpeed 100)",
    metricEn: "0.68s Load (100 Lighthouse)",
    tagFa: "عملکرد فوق‌سریع و انیمیشن GPU",
    tagEn: "Ultra-Performance & GPU Animation",
  },
  {
    slug: "dorsa-dental-clinic",
    code: "CASE // 03_MED",
    titleFa: "کلینیک دندانپزشکی درسا — اسلایدر قبل و بعد و نوبت‌دهی",
    titleEn: "Dorsa Dental Clinic — Before/After Interactive Portal",
    descFa: "پورتال کلینیک با اسلایدر تعاملی مقایسه قبل و بعد ایمپلنت، محاسبه‌گر هوشمند اقساط و رشد ۶۰٪ رزروهای اینترنتی.",
    descEn: "Medical portal featuring an interactive before/after visual slider, installment payment calculator, driving a 60% increase in patient bookings.",
    metricFa: "+۶۰٪ افزایش نوبت‌دهی آنلاین",
    metricEn: "+60% Booking Growth",
    tagFa: "پورتال پزشکی و تعامل بیمار",
    tagEn: "Medical Portal & Patient Flow",
  },
  {
    slug: "aria-jahan-steel",
    code: "CASE // 04_IND",
    titleFa: "جهان فولاد آریا — پورتال متالورژی با محاسبات زیر ۱۰ms",
    titleEn: "Aria Jahan Steel — Metallurgy Engine Under 10ms",
    descFa: "سامانه استعلام و محاسبات فنی مهندسی آلیاژهای فولادی طبق استانداردهای DIN و ASTM با پردازش بلادرنگ زیر ۱۰ میلی‌ثانیه و کاهش ۷۰٪ زمان صدور پیش‌فاکتور.",
    descEn: "Metallurgical estimation engine processing complex DIN/ASTM alloy formulas under 10ms, slashing quote generation turnaround by 70%.",
    metricFa: "محاسبات فنی زیر ۱۰ میلی‌ثانیه",
    metricEn: "< 10ms Engine Processing",
    tagFa: "پورتال صنعتی و موتور محاسباتی",
    tagEn: "Industrial Portal & Calc Engine",
  },
];

export default function CaseStudiesPageClient() {
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
          ARCHIVE // CASE_STUDIES
        </span>
      </div>

      {/* Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="telemetry-pill">
          <span className="telemetry-pill-dot" />
          <FiLayers className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          <span>{isFa ? "مطالعات موردی و پروژه‌های شاخص" : "Technical Case Studies"}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--text-primary)]">
          {isFa ? (
            <>
              اثبات کیفیت با <span className="text-gradient-silver">نتایج واقعی و متریک‌های اندازه‌گیری‌شده</span>
            </>
          ) : (
            <>
              Proven Engineering <span className="text-gradient-silver">Validated by Measurable Metrics</span>
            </>
          )}
        </h1>

        <p className="text-xs sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? "بررسی دقیق کدهای منبع، معماری فنی، چالش‌های پرفورمنس و راهکارهای مهندسی پیاده‌سازی‌شده در پروژه‌های واقعی."
            : "In-depth technical breakdowns of system architectures, performance hurdles, and measurable outcomes in production."}
        </p>
      </div>

      {/* AEO Direct Answer Capsule */}
      <section className="architectural-card p-6 sm:p-7 rounded-2xl relative space-y-3">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">AEO // VERIFIED_METRICS</div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)]">
          <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]" />
          <span>{isFa ? "خلاصه مطالعات موردی (پاسخ مستقیم AEO)" : "Case Studies Overview (Direct AEO)"}</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? "آراد وفایی مجری پروژه‌های شاخص نرم‌افزاری و وب است. نمونه‌های برجسته شامل: گالری آراد (کسب رتبه ۱ گوگل در ۱۲ ساعت با سئوی ساختاریافته)، کلینیک دندانپزشکی درسا (افزایش ۶۰ درصدی نوبت‌دهی آنلاین با اسلایدر و فرم تعاملی)، پلتفرم ورزشی آیرون فیت (رسیدن به سرعت لود ۰.۶۸ ثانیه و نمره ۱۰۰ لایت‌هاوس)، و پورتال جهان فولاد آریا (موتور محاسبات استانداردهای متالورژی زیر ۱۰ میلی‌ثانیه)."
            : "Key case studies by Arad Vafaee include Arad Gallery (hitting Rank #1 on Google in 12 hours via semantic graph architecture), Dorsa Dental Clinic (driving a 60% surge in online patient consultations), IronFit Gym (achieving sub-0.7s load times and 100/100 Lighthouse score), and Aria Jahan Steel (real-time metallurgy calculation engine under 10ms)."}
        </p>
      </section>

      {/* 4 Deep Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DETAILED_CASE_STUDIES.map((cs) => (
          <div
            key={cs.slug}
            className="architectural-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group relative space-y-5 transition-all duration-300"
          >
            <div className="cad-corner-tl" />
            <div className="cad-corner-tr">{cs.code}</div>

            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                  {isFa ? cs.tagFa : cs.tagEn}
                </span>
                <span className="text-xs font-bold font-mono text-[var(--text-primary)] flex items-center gap-1.5">
                  <FiTrendingUp className="w-3.5 h-3.5" />
                  <span>{isFa ? cs.metricFa : cs.metricEn}</span>
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                {isFa ? cs.titleFa : cs.titleEn}
              </h2>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {isFa ? cs.descFa : cs.descEn}
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border)]">
              <Link
                href={`/case-studies/${cs.slug}`}
                className="tactile-btn w-full py-2.5 px-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-mono font-bold hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all flex items-center justify-center gap-2 group-hover:border-[var(--text-primary)]"
              >
                <span>{isFa ? "مطالعه گزارش کامل فنی" : "Read Full Technical Case Study"}</span>
                {isFa ? <FiArrowLeft className="w-3.5 h-3.5" /> : <FiArrowRight className="w-3.5 h-3.5" />}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Full Projects Component */}
      <div className="pt-8">
        <Projects lang={lang} />
      </div>

    </div>
  );
}
