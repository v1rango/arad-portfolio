import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeedGauge from "@/components/demos/SpeedGauge";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";
import Link from "next/link";
import {
  FiZap,
  FiArrowRight,
} from "react-icons/fi";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "افزایش سرعت سایت و رفع کندی لود (PageSpeed 100) | آراد وفایی",
  description:
    "بهینه‌سازی تخصصی سرعت سایت‌های کند (وردپرس و اختصاصی). رفع خطاهای Core Web Vitals (LCP, CLS, INP)، لود زیر ۰.۸ ثانیه، تضمین نمره ۹۵ تا ۱۰۰ لایت‌هاوس و کاهش نرخ پرش کاربران.",
  alternates: {
    canonical: `${SITE_URL}/services/speed-optimization`,
  },
  openGraph: {
    title: "افزایش سرعت سایت و بهینه‌سازی Core Web Vitals | آراد وفایی",
    description:
      "تبدیل وب‌سایت‌های کند و خسته‌کننده به پلتفرم‌های فوق‌سریع با لود زیر ۰.۸ ثانیه و امتیاز ۱۰۰ لایت‌هاوس گوگل.",
    url: `${SITE_URL}/services/speed-optimization`,
    siteName: `${PERSONAL_DATA.nameFa} — Speed Rescue`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function SpeedOptimizationPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/speed-optimization/#service`,
    "name": "خدمات افزایش سرعت سایت و بهینه‌سازی Core Web Vitals",
    "serviceType": "Website Speed Optimization & Performance Tuning",
    "provider": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "description":
      "بهینه‌سازی عمیق کدهای فرانت‌اند و بک‌اند، بهینه‌سازی تصاویر WebP/AVIF، حذف Render-blocking JS و رساندن نمره لایت‌هاوس به ۱۰۰.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "پکیج‌های افزایش سرعت سایت",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "نجات سرعت و سئو تکنیکال سایت‌های وردپرسی و ووکامرس",
          "priceCurrency": "IRR",
        },
        {
          "@type": "Offer",
          "name": "بازنویسی سرورلس با Next.js 16 برای سرعت زیر ۰.۸ ثانیه",
          "priceCurrency": "IRR",
        },
      ],
    },
  };

  const speedSteps = [
    {
      num: "01",
      title: "آنالیز موشکافانه گلوگاه‌ها (Audit)",
      desc: "بررسی کامل نمودار آبشاری شبکه (Waterfall)، شناسایی کوئری‌های سنگین دیتابیس، اسکریپت‌های مسدودکننده رندر و تحلیل خطاهای LCP و CLS.",
    },
    {
      num: "02",
      title: "بهینه‌سازی تصاویر و مدیا (Next-Gen)",
      desc: "تبدیل تمام تصاویر به فرمت‌های فوق‌فشرده WebP و AVIF با سایز ریسپانسیو، بارگذاری تنبل (Lazy Loading) و لود اولویت‌دار تصاویر هیرو.",
    },
    {
      num: "03",
      title: "سبک‌سازی کدهای جاوااسکریپت و CSS",
      desc: "حذف کدهای زائد (Tree-shaking)، استخراج CSS بحرانی، مینیمایز کردن اسکریپت‌های تحلیلی و رفع مسدودی رشته اصلی مرورگر (Main Thread).",
    },
    {
      num: "04",
      title: "کشینگ لبه شبکه و تحویل فوق‌سریع",
      desc: "پیکربندی هوشمند Edge Caching، فشرده‌سازی Brotli، بهینه‌سازی هدرهای Cache-Control و اتصال CDN ابری برای لود زیر ۱ ثانیه در سراسر جهان.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)] hover:underline"
            >
              <FiArrowRight className="w-4 h-4 rtl:rotate-180" />
              <span>بازگشت به صفحه اصلی</span>
            </Link>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              PERFORMANCE RESCUE • 100/100
            </span>
          </div>

          {/* Hero Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <FiZap className="w-4 h-4 animate-pulse" />
              <span>افزایش سرعت سایت و رهایی از کندی لود</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--text-primary)]">
              سایت شما با هر ۱ ثانیه تاخیر،{" "}
              <span className="text-gradient-emerald">۲۰٪ از مشتریان و فروش</span> را از دست می‌دهد!
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              اگر کاربران به شما می‌گویند سایتتان دیر باز می‌شود یا نمره لایت‌هاوس در وضعیت قرمز و نارنجی است، کدهای آن را جراحی می‌کنیم تا بدون تغییر در ظاهر، لود سایت به زیر ۰.۸ ثانیه و نمره گوگل به ۱۰۰ برسد.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-sm bg-[var(--accent)] text-[var(--accent-contrast)] hover:brightness-110 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
              >
                <FaTelegram className="w-4 h-4" />
                <span>درخواست بررسی رایگان سرعت سایت</span>
              </a>
              <a
                href={`https://wa.me/${PERSONAL_DATA.socials.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--accent)] font-semibold text-sm transition-all flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>مشاوره در واتساپ</span>
              </a>
            </div>
          </div>

          {/* Speed Gauge Interactive Component */}
          <div className="w-full">
            <SpeedGauge lang="fa" />
          </div>

          {/* Benchmark Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-2">
              <span className="text-xs font-mono text-[var(--text-muted)]">CORE WEB VITALS</span>
              <h3 className="text-xl font-bold text-emerald-400">LCP &lt; ۰.۸s</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                بزرگ‌ترین المان بصری صفحه (Largest Contentful Paint) در کمتر از ۱ ثانیه رندر می‌شود.
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-2">
              <span className="text-xs font-mono text-[var(--text-muted)]">LAYOUT STABILITY</span>
              <h3 className="text-xl font-bold text-teal-400">CLS = ۰.۰۰</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                صفر شدن کامل پرش و شیفت ناگهانی المان‌ها حین لود شدن سایت برای تجربه کاربری ایده‌آل.
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-2">
              <span className="text-xs font-mono text-[var(--text-muted)]">INTERACTION SPEED</span>
              <h3 className="text-xl font-bold text-cyan-400">INP &lt; ۵۰ms</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                پاسخ فوری به هر کلیک، لمس و اسکرول بدون حتی یک فریم لَگ روی ضعیف‌ترین گوشی‌های بازار.
              </p>
            </div>
          </div>

          {/* 4 Steps Process */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-3xl font-extrabold text-[var(--text-primary)]">
                فرآیند ۴ مرحله‌ای جراحی و بهینه‌سازی سرعت
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                تمام مراحل با ارائه گزارش لایت‌هاوس رسمی گوگل قبل و بعد از تحویل پروژه انجام می‌شود.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {speedSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-6 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-3 hover:border-[var(--accent)] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] font-mono font-bold text-xs flex items-center justify-center border border-[var(--border)]">
                      {step.num}
                    </span>
                    <h3 className="text-base font-bold text-[var(--text-primary)]">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AEO FAQ Section for Speed */}
          <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-6">
            <h2 className="text-lg sm:text-2xl font-black text-[var(--text-primary)] text-center">
              پاسخ به سوالات کلیدی افزایش سرعت سایت (AEO)
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-2">
                <h3 className="font-bold text-sm text-[var(--text-primary)]">
                  چقدر طول می‌کشد تا سرعت سایت به نمره بالای ۹۰ برسد؟
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  بسته به نوع سایت و میزان شلوغی کدهای قبلی، فرآیند بهینه‌سازی عمیق بین ۳ تا ۷ روز کاری زمان می‌برد و تست لایت‌هاوس گوگل به صورت لایو تحویل کارفرما می‌شود.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-2">
                <h3 className="font-bold text-sm text-[var(--text-primary)]">
                  آیا بعد از بهینه‌سازی، ظاهر یا امکانات سایتم تغییر می‌کند؟
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  خیر، ظاهر و عملکرد سایت دقیقاً حفظ می‌شود. تنها کدهای نامرئی پشت صحنه، حجم عکس‌ها و نحوه فراخوانی فایل‌ها بهینه‌سازی شده تا سرعت باز شدن صفحه چند برابر شود.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer lang="fa" />
      </div>
    </>
  );
}
