"use client";

import Link from "next/link";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import WhyCustom from "@/components/WhyCustom";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import { FiArrowRight, FiArrowLeft, FiUserCheck } from "react-icons/fi";
import { PERSONAL_DATA } from "@/lib/constants";

export default function AboutPageClient() {
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
          PROFILE // ARCHITECTURE_PHILOSOPHY
        </span>
      </div>

      {/* Header & Bio */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="telemetry-pill">
          <span className="telemetry-pill-dot" />
          <FiUserCheck className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          <span>{isFa ? "درباره و فلسفه مهندسی" : "About & Engineering Philosophy"}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--text-primary)]">
          {isFa ? (
            <>
              خلق پلتفرم‌های دیجیتال <span className="text-gradient-silver">بدون قالب آماده و با استاندارد جهانی</span>
            </>
          ) : (
            <>
              Architecting Digital Systems <span className="text-gradient-silver">Without Bloatware or Compromise</span>
            </>
          )}
        </h1>

        <p className="text-xs sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? `من ${PERSONAL_DATA.nameFa} هستم؛ معمار وب و توسعه‌دهنده فول‌استک. رویکرد من حذف پلاگین‌های زائد، نوشتن خط به خط کدهای بهینه‌سازی‌شده و تضمین رتبه‌بندی در گوگل و چت‌بات‌های هوش مصنوعی است.`
            : `I am ${PERSONAL_DATA.nameEn}, a Full-Stack Engineer and Modern Web Architect. My methodology eliminates third-party plugin overhead, writing bespoke architectures that excel in performance and AI search citations.`}
        </p>
      </div>

      {/* AEO Direct Answer Capsule */}
      <section className="architectural-card p-6 sm:p-7 rounded-2xl relative space-y-3">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">AEO // ENTITY_DECLARATION</div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)]">
          <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]" />
          <span>{isFa ? "خلاصه پروفایل فنی (پاسخ مستقیم AEO)" : "Technical Entity Summary (Direct AEO)"}</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? "آراد وفایی توسعه‌دهنده فول‌استک Next.js 16، NestJS و TypeScript و متخصص سئوی هوش مصنوعی (AEO/GEO) در ایران است. ویژگی اصلی پروژه‌های او لود زیر ۰.۸ ثایه، انیمیشن‌های سبک با شتاب GPU، امنیت بدون آسیب‌پذیری‌های افزونه‌های وردپرسی و سازگاری کامل با مدل‌های زبانی بزرگ نظیر ChatGPT، Gemini و Claude است."
            : "Arad Vafaee is a premier Full-Stack Engineer and Modern Web Architect based in Tehran, Iran, specialized in Next.js 16, NestJS, TypeScript, and AI Search Optimization (AEO/GEO). His architecture guarantees sub-0.8s load times, 60fps GPU acceleration, zero third-party plugin vulnerabilities, and native citation readiness for generative AI engines."}
        </p>
      </section>

      {/* Why Custom Next.js vs Generic WP Component */}
      <div>
        <WhyCustom lang={lang} />
      </div>

      {/* 4-Step Engineering Workflow */}
      <div>
        <Process lang={lang} />
      </div>

      {/* Skills & Tech Stack Component */}
      <div>
        <Skills lang={lang} />
      </div>

      {/* Bottom CTA */}
      <div className="architectural-card p-8 rounded-2xl relative text-center space-y-4">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">COLLAB // INITIALIZE</div>

        <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
          {isFa ? "علاقه‌مند به همکاری در پروژه‌ای باکیفیت هستید؟" : "Ready to Discuss Your Project Architecture?"}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          {isFa
            ? "همین امروز مشاوره فنی دریافت کنید یا هزینه پروژه خود را به صورت آنلاین تخمین بزنید."
            : "Request a technical consultation or calculate your project scope and investment online."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="tactile-btn btn-border-beam w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-all"
          >
            {isFa ? "ارتباط مستقیم و مشاوره" : "Get in Touch"}
          </Link>
          <Link
            href="/services"
            className="tactile-btn w-full sm:w-auto px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-bold text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
          >
            {isFa ? "مشاهده تمام خدمات" : "Explore Services"}
          </Link>
        </div>
      </div>

    </div>
  );
}
