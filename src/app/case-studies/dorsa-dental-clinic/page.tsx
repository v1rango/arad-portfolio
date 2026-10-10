import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpeedGauge from "@/components/demos/SpeedGauge";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiCpu,
  FiZap,
  FiHeart,
  FiSliders,
  FiExternalLink,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "مطالعه موردی: کلینیک دندانپزشکی و زیبایی دُرسا | آراد وفایی",
  description:
    "چگونه طراحی پلتفرم تخصصی دندانپزشکی دُرسا با اسلایدر زنده مقایسه لبخند، محاسبه‌گر هوشمند اقساط و استراکچر دیتای کامل پزشکی Schema.org، لیدهای ویزیت آنلاین را ۶۰٪ ارتقا داد.",
  alternates: {
    canonical: `${SITE_URL}/case-studies/dorsa-dental-clinic`,
  },
  openGraph: {
    title: "مطالعه موردی: کلینیک دندانپزشکی دُرسا — تجربه کاربری و سئوی پزشکی | آراد وفایی",
    description:
      "اسلایدر تعاملی قبل و بعد درمان، محاسبه‌گر اقساط و امتیاز ۹۹ لایت‌هاوس در یک پلتفرم تخصصی پزشکی با Next.js 16.",
    url: `${SITE_URL}/case-studies/dorsa-dental-clinic`,
    siteName: `${PERSONAL_DATA.nameFa} — Case Studies`,
    locale: "fa_IR",
    type: "article",
  },
};

export default function DorsaDentalCaseStudyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}/case-studies/dorsa-dental-clinic/#article`,
    "headline": "مطالعه موردی: معماری وب و بهینه‌سازی نرخ تبدیل کلینیک دندانپزشکی دُرسا",
    "image": `${SITE_URL}/projects/dorsa-dental-clinic.webp`,
    "datePublished": "2026-03-15T10:00:00+03:30",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": `${PERSONAL_DATA.nameFa} Studio`,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/icon.png`,
      },
    },
    "description":
      "تحلیل طراحی کامپوننت‌های تعاملی مقایسه درمان، موتور کلاینتی محاسبه اقساط دندانپزشکی، و بهینه‌سازی سئوی محلی (Local SEO) با اسکیماهای استاندارد پزشکی.",
    "mainEntityOfPage": `${SITE_URL}/case-studies/dorsa-dental-clinic`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
                    <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)] hover:underline"
            >
              <FiArrowRight className="w-4 h-4 rtl:rotate-180" />
              <span>بازگشت به پروژه‌ها</span>
            </Link>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              CASE STUDY #03 • MEDICAL & DENTAL AESTHETICS
            </span>
          </div>

                    <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <FiAward className="w-4 h-4" />
              <span>پروژه زنده (Live Production Case Study)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              کلینیک دندانپزشکی و زیبایی دُرسا:{" "}
              <span className="text-gradient-emerald">افزایش ۶۰٪ نوبت‌دهی</span> با اسلایدر زنده لبخند و محاسبه‌گر اقساط
            </h1>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              در حوزه خدمات دندانپزشکی و زیبایی، اعتمادسازی بیمار قبل از مراجعه حضوری مهم‌ترین فاکتور تصمیم‌گیری است. با طراحی اسلایدر تعاملی مقایسه زنده قبل و بعد درمان بدون وابستگی‌های سنگین و محاسبه‌گر شفاف اقساط درمان، نرخ رزرو ویزیت آنلاین ۶۰ درصد افزایش یافت.
            </p>
          </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">+60%</span>
              <span className="block text-xs text-[var(--text-secondary)]">رشد مراجعات و نوبت آنلاین</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">&lt; 0.8s</span>
              <span className="block text-xs text-[var(--text-secondary)]">سرعت لود کامل صفحه</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">99/100</span>
              <span className="block text-xs text-[var(--text-secondary)]">نمره گوگل پیج‌اسپید</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">Top 3</span>
              <span className="block text-xs text-[var(--text-secondary)]">رتبه گوگل در سئوی محلی</span>
            </div>
          </div>

                    <div className="p-6 sm:p-7 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-[var(--bg-surface)] to-cyan-950/20 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <FiCheckCircle className="w-4 h-4" />
              <span>چکیده کلیدی برای پزشکان و موتورهای هوش مصنوعی (AEO Key Takeaways)</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>دستاورد در جذب بیمار:</strong> رشد ۶۰ درصدی لیدهای معتبر و درخواست‌های مشاوره ایمپلنت و زیبایی.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>اسلایدر اختصاصی قبل/بعد:</strong> پیاده‌سازی بدون هیچ پکیج آماده خارجی با حرکت نرم و شتاب GPU.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>ماشین‌حساب شفاف مالی:</strong> برآورد آنی پیش‌پرداخت و اقساط ماهانه بدون نیاز به رفرش یا تماس اولیه.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>داده‌های ساختاریافته پزشکی:</strong> ثبت اسکیماهای Dentist و MedicalBusiness در گراف Schema.org.</span>
              </li>
            </ul>
          </div>

                    <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center font-bold">
                ۰۱
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                چالش آغازین: تردید بیماران، شفافیت قیمت‌ها و سنگینی تصاویر درمان
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              اکثر وب‌سایت‌های کلینیک دندانپزشکی دچار دو مشکل اساسی هستند: تصاویر کیفیت‌بالای گالری دندان‌ها به شدت سایت را کند می‌کنند و از طرف دیگر هیچ راهکار شفافی برای اطلاع از هزینه‌ها و اقساط به بیمار ارائه نمی‌دهند. بیماران قبل از رزرو نوبت مایلند تغییرات عینی طرح لبخند را به صورت تعاملی ببینند و محاسبه کنند هزینه درمان چقدر برایشان اقساطی تمام می‌شود.
            </p>
          </div>

                    <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center font-bold">
                ۰۲
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                استراتژی مهندسی و راه‌حل‌های پیاده‌سازی شده
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-400">
                  <FiSliders className="w-4 h-4" />
                  <span>اسلایدر قبل و بعد کاملاً سبک و بدون وابستگی (Zero-Dependency)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  برنامه‌نویسی اسلایدر با کدهای خالص تاچ و موس که اجازه مقایسه پیکسل‌به‌پیکسل عکس‌های درمان را بدون حتی ۱ میلی‌ثانیه لگ به کاربر می‌دهد.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <FiZap className="w-4 h-4" />
                  <span>محاسبه‌گر اقساط کلاینتی آنی (Instant Installments)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  موتور محاسبه فوری پیش‌پرداخت، سود اقساط و تعداد ماه‌ها با اسلایدرهای روان، که شفافیت مالی را به اوج رسانده و اعتماد ایجاد می‌کند.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
                  <FiHeart className="w-4 h-4" />
                  <span>استراکچر دیتای معتبر Schema.org پزشکی و دندانپزشکی</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  تزریق دقیق اسکیماهای تخصص‌های درمانی، محدوده جغرافیایی مطب و ساعات کاری جهت تسخیر باکس نتایج محلی (Google Local Pack).
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <FiCpu className="w-4 h-4" />
                  <span>بهینه‌سازی تصاویر با لود تطبیقی (Adaptive Loading)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  گالری صدها تصویر جراحی و کامپوزیت با پایپ‌لاین AVIF/WebP و اولویت‌بندی هوشمند، سرعت لود زیر ۰.۸ ثانیه را تضمین کرد.
                </p>
              </div>
            </div>
          </div>

                    <SpeedGauge lang="fa" />

                    <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold">
                ۰۳
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                نتایج ثبت‌شده و شواهد عینی عملکرد
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "افزایش ۶۰ درصدی لیدهای رزرو ویزیت آنلاین",
                  desc: "بیماران با مشاهده شفاف اقساط و امکان مقایسه طرح لبخند، با اطمینان بسیار بالاتر شماره تماس خود را ثبت کردند.",
                },
                {
                  title: "کاهش ۶۵ درصدی تماس‌های تکراری استعلام قیمت",
                  desc: "محاسبه‌گر آنلاین بخش بزرگی از سوالات متداول بیماران را پیش از تماس حل کرد و بار پاسخگویی منشی کلینیک را کاهش داد.",
                },
                {
                  title: "کسب رتبه برتر در کلمات کلیدی خدمات زیبایی و دندانپزشکی",
                  desc: "لود زیر یک ثانیه و نشانه‌گذاری اسکیما باعث شد سایت کلینیک در نتایج جستجوی بیماران محلی به صفحه اول گوگل صعود کند.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)]"
                >
                  <FiCheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

                    <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-[var(--bg-surface)] text-center space-y-6 shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              می‌خواهید وب‌سایت کلینیک یا مرکز درمانی شما بالاترین نرخ جذب بیمار را داشته باشد؟
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
              ما همان وسواس در طراحی ابزارهای تعاملی، اسلایدرهای اختصاصی و سئوی ساختاریافته پزشکی را برای مطب یا کلینیک شما پیاده‌سازی می‌کنیم.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl font-bold text-sm bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <FaTelegram className="w-5 h-5" />
                <span>مشاوره و طراحی پلتفرم کلینیک</span>
              </a>
              <a
                href="https://v1rango.github.io/dorsa-dental-clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl font-bold text-sm border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 flex items-center gap-2"
              >
                <span>مشاهده دموی زنده کلینیک دُرسا</span>
                <FiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </main>

        <Footer lang="fa" />
      </div>
    </>
  );
}
