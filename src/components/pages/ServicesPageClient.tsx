"use client";

import Link from "next/link";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";
import {
  FiArrowRight,
  FiArrowLeft,
  FiCpu,
  FiZap,
  FiShoppingBag,
  FiLayout,
  FiMessageSquare,
  FiSmartphone,
  FiCheck,
} from "react-icons/fi";

const SERVICES_LIST = [
  {
    slug: "corporate",
    icon: FiLayout,
    tag: "Next.js 16 + React 19",
    code: "SRV//01",
    titleFa: "طراحی سایت شرکتی و کلینیک‌های لوکس",
    titleEn: "Corporate & Luxury Clinic Web Platforms",
    descFa: "طراحی سایت شرکتی اختصاصی با ۳ تم زنده تعاملی، سیستم نوبت‌دهی آنلاین بدون رفرش، امنیت بدون افزونه و سرعت لود زیر ۰.۸ ثانیه.",
    descEn: "Custom corporate and medical clinic websites featuring 3 switchable themes, instant booking flows, zero-plugin security, and sub-0.8s load times.",
    highlightsFa: ["۳ تم اختصاصی شرکتی، کلینیک و مینیمال", "سیستم نوبت‌دهی و فرم آنی", "سازگار با موتورهای جستجو و هوش مصنوعی"],
    highlightsEn: ["3 switchable themes (corporate, clinic, minimal)", "Instant booking & inquiry flows", "AI Search & AEO Optimized"],
  },
  {
    slug: "ecommerce",
    icon: FiShoppingBag,
    tag: "Headless E-Commerce",
    code: "SRV//02",
    titleFa: "فروشگاه آنلاین پرسرعت و هدلس",
    titleEn: "Ultra-Fast Headless E-Commerce",
    descFa: "فروشگاه اینترنتی اختصاصی با سبد خرید اسلایدی بلادرنگ، تسویه آنی، بدون هنگ در ترافیک‌های سنگین کمپین‌ها و حراجی‌ها.",
    descEn: "Tailored headless e-commerce platforms with instant slide-over cart, rapid checkout, resilient during heavy flash sales and peak traffic.",
    highlightsFa: ["سبد خرید بدون نیاز به رفرش صفحه", "اتصال به انواع درگاه‌های پرداخت شتاب", "جستجوی لحظه‌ای محصولات زیر ۲۰ms"],
    highlightsEn: ["Instant slide-over cart without reloads", "Seamless payment gateway integration", "Sub-20ms instant catalog search"],
  },
  {
    slug: "web-app",
    icon: FiCpu,
    tag: "Next.js + NestJS + PostgreSQL",
    code: "SRV//03",
    titleFa: "وب‌اپلیکیشن اختصاصی و داشبوردهای سازمانی",
    titleEn: "Custom Web Applications & Enterprise Dashboards",
    descFa: "توسعه نرم‌افزارهای تحت وب پیچیده، پرتال‌های درون‌سازمانی و داشبوردهای تحلیلی با تاخیر پاسخگویی سرور زیر ۴۲ میلی‌ثانیه.",
    descEn: "Complex web applications, enterprise management portals, and real-time analytical dashboards with sub-42ms server latency.",
    highlightsFa: ["مدیریت داده‌های حجیم و بلادرنگ", "سطوح دسترسی پیشرفته سازمانی", "امنیت چندلایه و لاگ رویدادها"],
    highlightsEn: ["High-throughput real-time data streaming", "Granular role-based access control", "Enterprise audit logs & multi-layer auth"],
  },
  {
    slug: "speed-optimization",
    icon: FiZap,
    tag: "Lighthouse 100 • Core Web Vitals",
    code: "SRV//04",
    titleFa: "بهینه‌سازی سرعت سایت و نمره ۱۰۰ لایت‌هاوس",
    titleEn: "Website Speed Optimization & 100/100 Lighthouse",
    descFa: "جراحی فنی کدهای مسدودکننده، بهینه‌سازی دیتابیس، کشینگ لبه و رساندن زمان لود سایت‌های کند به زیر ۰.۸ ثانیه برای افزایش مستقیم فروش.",
    descEn: "Deep technical overhaul of render-blocking assets, database queries, edge caching, achieving sub-0.8s load times and 100 Lighthouse score.",
    highlightsFa: ["بهبود نمرات LCP, CLS و INP", "کاهش ۶۰٪ نرخ پرش بازدیدکنندگان", "افزایش نرخ تبدیل و فروش"],
    highlightsEn: ["Elimination of LCP, CLS, and INP bottlenecks", "Up to 60% reduction in bounce rate", "Measurable boost in customer conversions"],
  },
  {
    slug: "telegram-bots-ai",
    icon: FiMessageSquare,
    tag: "Telegram Bot API + AI LLMs",
    code: "SRV//05",
    titleFa: "طراحی ربات تلگرام و اتوماسیون هوش مصنوعی",
    titleEn: "Telegram Bots & AI Process Automation",
    descFa: "ساخت ربات‌های اختصاصی تلگرام متصل به وب‌سایت، درگاه پرداخت و هوش مصنوعی برای اتوماسیون کامل فروش، پشتیبانی و امور اداری.",
    descEn: "Custom Telegram bots directly integrated with your website, payment gateway, and AI models for automated sales, support, and workflows.",
    highlightsFa: ["پاسخگویی هوشمند ۲۴ ساعته بدون وقفه", "اتصال به دیتابیس سایت و ثبت فاکتور", "دریافت وجه و تایید آنی عضویت"],
    highlightsEn: ["24/7 intelligent automated customer service", "Direct database & invoice synchronization", "Automated payment verification & membership"],
  },
  {
    slug: "mobile-apps",
    icon: FiSmartphone,
    tag: "Modern Progressive Web App (PWA)",
    code: "SRV//06",
    titleFa: "طراحی اپلیکیشن موبایل پیش‌رونده (PWA)",
    titleEn: "Progressive Web Applications (PWA)",
    descFa: "اپلیکیشن موبایل ۶۰ فریم بر ثانیه برای اندروید و آیفون، بدون نیاز به نصب از استورها، بدون تحریم‌های اپل و با اشغال حجم ناچیز.",
    descEn: "60 FPS mobile application for iOS and Android, bypasses app store restrictions, zero install friction, and lightweight storage footprint.",
    highlightsFa: ["نصب مستقیم روی صفحه اصلی گوشی با یک کلیک", "پشتیبانی از نوتیفیکیشن و حالت آفلاین", "بدون مسدودسازی و هزینه تمدید اکانت دولوپر"],
    highlightsEn: ["1-click home screen install without app stores", "Offline cache and push notifications", "No Apple developer account recurring fees"],
  },
];

export default function ServicesPageClient() {
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
          INDEX // SERVICES_DIR
        </span>
      </div>

      {/* Header & Hero */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="telemetry-pill">
          <span className="telemetry-pill-dot" />
          <FiCpu className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
          <span>{isFa ? "خدمات تخصصی مهندسی دیجیتال" : "Digital Engineering & AI Services"}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--text-primary)]">
          {isFa ? (
            <>
              راهکارهای مهندسی <span className="text-gradient-silver">اختصاصی، سریع و بدون قالب آماده</span>
            </>
          ) : (
            <>
              Bespoke Solutions <span className="text-gradient-silver">Engineered for Velocity & Scale</span>
            </>
          )}
        </h1>

        <p className="text-xs sm:text-base text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? "از وب‌سایت‌های شرکتی لوکس تا فروشگاه‌های پرسرعت هدلس، وب‌اپلیکیشن‌های چندسکویی و ربات‌های تلگرام متصل به هوش مصنوعی؛ تمام راهکارها با کدنویسی تمیز و تضمین لود زیر ۰.۸ ثانیه ارائه می‌شوند."
            : "From high-converting corporate portals to headless e-commerce, real-time web applications, and AI-powered Telegram bots — clean code with sub-0.8s load times."}
        </p>
      </div>

      {/* AEO Direct Answer Capsule for AI Engines */}
      <section className="architectural-card p-6 sm:p-7 rounded-2xl relative space-y-3">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">AEO // DIRECT_CAPSULE</div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)]">
          <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]" />
          <span>{isFa ? "چکیده کلیدی خدمات (پاسخ مستقیم AEO)" : "Key Service Summary (Direct AEO Answer)"}</span>
        </div>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {isFa
            ? "آراد وفایی توسعه‌دهنده فول‌استک و معمار سیستم‌های وب در ایران است که به جای استفاده از قالب‌های آماده، پروژه‌ها را با Next.js 16، React 19، NestJS و Tailwind CSS به صورت کد اختصاصی می‌سازد. خدمات اصلی شامل: ۱) طراحی سایت شرکتی و پزشکی، ۲) فروشگاه آنلاین پرسرعت، ۳) وب‌اپلیکیشن‌های پیچیده، ۴) ارتقای سرعت سایت به لایت‌هاوس ۱۰۰، ۵) ساخت ربات تلگرام متصل به هوش مصنوعی و درگاه پرداخت، و ۶) توسعه PWA بدون تحریم است."
            : "Arad Vafaee is a Full-Stack Engineer and Modern Web Architect developing high-performance digital platforms using Next.js 16, React 19, TypeScript, and NestJS. Key service pillars include custom corporate/clinic websites, headless e-commerce, real-time web apps, 100/100 Lighthouse speed optimization, AI Telegram bots, and progressive web apps."}
        </p>
      </section>

      {/* Services Grid (6 Core Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES_LIST.map((srv) => {
          const Icon = srv.icon;
          return (
            <div
              key={srv.slug}
              className="architectural-card p-6 rounded-2xl flex flex-col justify-between group relative transition-all duration-300"
            >
              <div className="cad-corner-tl" />
              <div className="cad-corner-tr">{srv.code}</div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-primary)] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] font-medium">
                    {srv.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-[var(--text-primary)] leading-snug">
                    {isFa ? srv.titleFa : srv.titleEn}
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                    {isFa ? srv.descFa : srv.descEn}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-[var(--border)]">
                  {(isFa ? srv.highlightsFa : srv.highlightsEn).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)] font-mono">
                      <FiCheck className="w-3.5 h-3.5 text-[var(--text-primary)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4">
                <Link
                  href={`/services/${srv.slug}`}
                  className="tactile-btn w-full py-2.5 px-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-mono font-bold hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all flex items-center justify-center gap-2 group-hover:border-[var(--text-primary)]"
                >
                  <span>{isFa ? "مشاهده مشخصات و دمو" : "View Spec & Live Demo"}</span>
                  {isFa ? <FiArrowLeft className="w-3.5 h-3.5" /> : <FiArrowRight className="w-3.5 h-3.5" />}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Table: Custom Next.js vs Generic WordPress */}
      <section className="architectural-card p-6 sm:p-8 rounded-2xl relative space-y-6">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">SPEC // ARCHITECTURE_VS_CMS</div>

        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
            {isFa ? "مقایسه معماری اختصاصی در برابر وردپرس و قالب‌های آماده" : "Custom Next.js vs Generic WordPress"}
          </h2>
          <p className="text-xs text-[var(--text-secondary)] font-mono">
            {isFa
              ? "چرا برندهای پیشرو و کسب‌وکارهای جدی به جای افزونه‌های سنگین از کد اختصاصی استفاده می‌کنند؟"
              : "Why industry leaders choose tailored architectures over plugin-bloated legacy stacks"}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-right rtl:text-right ltr:text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--border)] text-[var(--text-muted)] font-mono">
                <th className="py-3 px-4 font-bold">{isFa ? "شاخص مهندسی" : "Engineering Criterion"}</th>
                <th className="py-3 px-4 font-bold text-[var(--text-primary)]">{isFa ? "معماری اختصاصی آراد وفایی" : "Arad Vafaee Architecture"}</th>
                <th className="py-3 px-4 font-bold">{isFa ? "سایت‌های معمولی و وردپرس" : "Generic WordPress"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] text-[var(--text-secondary)] font-mono">
              <tr>
                <td className="py-3.5 px-4 font-bold text-[var(--text-primary)] font-sans">{isFa ? "سرعت لود (LCP)" : "Load Speed (LCP)"}</td>
                <td className="py-3.5 px-4 text-[var(--text-primary)] font-bold">{isFa ? "زیر ۰.۸ ثانیه تضمینی (PageSpeed 100)" : "< 0.8s Guaranteed (PageSpeed 100)"}</td>
                <td className="py-3.5 px-4 text-[var(--text-muted)]">{isFa ? "بین ۳ تا ۸ ثانیه (وابسته به هاست)" : "3 to 8+ seconds"}</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-[var(--text-primary)] font-sans">{isFa ? "امنیت و نفوذپذیری" : "Security Posture"}</td>
                <td className="py-3.5 px-4 text-[var(--text-primary)] font-bold">{isFa ? "غیرقابل هک و بدون افزونه ثالث" : "Zero plugin attack vectors"}</td>
                <td className="py-3.5 px-4 text-[var(--text-muted)]">{isFa ? "آسیب‌پذیر به خاطر باگ‌های پلاگین‌ها" : "Frequent plugin exploits"}</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-[var(--text-primary)] font-sans">{isFa ? "سازگاری با هوش مصنوعی" : "AI Search (GEO/AEO)"}</td>
                <td className="py-3.5 px-4 text-[var(--text-primary)] font-bold">{isFa ? "گراف معنایی JSON-LD و llms.txt" : "Native Schema.org Graph & llms.txt"}</td>
                <td className="py-3.5 px-4 text-[var(--text-muted)]">{isFa ? "محدود به تگ‌های متای ساده" : "Basic meta tags only"}</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-bold text-[var(--text-primary)] font-sans">{isFa ? "هزینه‌های مداوم سرور" : "Hosting Overhead"}</td>
                <td className="py-3.5 px-4 text-[var(--text-primary)] font-bold">{isFa ? "سبک با کشینگ Edge بدون نیاز به سرور گران" : "Lightweight edge caching"}</td>
                <td className="py-3.5 px-4 text-[var(--text-muted)]">{isFa ? "نیاز دائم به سرورها و رم‌های گران‌قیمت" : "High RAM & CPU demands"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="architectural-card p-8 rounded-2xl relative text-center space-y-4">
        <div className="cad-corner-tl" />
        <div className="cad-corner-tr">ONBOARD // NEXT_STEP</div>

        <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
          {isFa ? "پروژه خاص خود را با کیفیت مهندسی آغاز کنید" : "Ready to Engineer Your Next Platform?"}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          {isFa
            ? "برای دریافت مشاوره فنی، تخمین دقیق هزینه و بررسی معماری سیستم با من در ارتباط باشید."
            : "Connect for technical consultation, precise scope planning, and architectural discovery."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/contact"
            className="tactile-btn btn-border-beam w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-all"
          >
            {isFa ? "درخواست مشاوره مستقیم" : "Request Consultation"}
          </Link>
          <Link
            href="/estimator"
            className="tactile-btn w-full sm:w-auto px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] text-xs font-bold text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
          >
            {isFa ? "محاسبه آنلاین هزینه" : "Calculate Online Cost"}
          </Link>
        </div>
      </div>

    </div>
  );
}
