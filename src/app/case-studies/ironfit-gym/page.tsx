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
  FiActivity,
  FiUsers,
  FiExternalLink,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "مطالعه موردی: پلتفرم ورزشی آیرون فیت (IronFit) با لود زیر ۰.۷ ثانیه | آراد وفایی",
  description:
    "چگونه وب‌اپلیکیشن اختصاصی آیرون فیت با Next.js 16، انیمیشن‌های شتاب‌یافته گرافیکی GPU و سیستم ثبت‌نام سریع، نرخ تبدیل ورزشکاران را ۴۵٪ افزایش داد و سرعت لود را به کمتر از ۰.۷ ثانیه رساند.",
  alternates: {
    canonical: `${SITE_URL}/case-studies/ironfit-gym`,
  },
  openGraph: {
    title: "مطالعه موردی: پلتفرم ورزشی آیرون فیت (IronFit) | آراد وفایی",
    description:
      "تحلیل مهندسی پرفورمنس، انیمیشن‌های ۶۰ فریم بر ثانیه و افزایش ۴۵ درصدی ثبت‌نام آنلاین با معماری اختصاصی Next.js 16.",
    url: `${SITE_URL}/case-studies/ironfit-gym`,
    siteName: `${PERSONAL_DATA.nameFa} — Case Studies`,
    locale: "fa_IR",
    type: "article",
  },
};

export default function IronFitCaseStudyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}/case-studies/ironfit-gym/#article`,
    "headline": "مطالعه موردی: بهینه‌سازی پرفورمنس پلتفرم ورزشی و بدنسازی IronFit با Next.js 16",
    "image": `${SITE_URL}/projects/ironfit-gym.webp`,
    "datePublished": "2026-03-10T09:00:00+03:30",
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
      "بررسی استراتژی‌های رندرهای انیمیشنی با شتاب سخت‌افزاری GPU، حذف پرش صفحه (CLS)، و معماری ماژولار Next.js 16 در پلتفرم‌های ورزشی.",
    "mainEntityOfPage": `${SITE_URL}/case-studies/ironfit-gym`,
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
              CASE STUDY #02 • ATHLETIC PLATFORM
            </span>
          </div>

                    <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <FiAward className="w-4 h-4" />
              <span>پروژه زنده (Live Production Case Study)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              پلتفرم ورزشی و باشگاهی آیرون فیت:{" "}
              <span className="text-gradient-emerald">لود زیر ۰.۷ ثانیه</span> و افزایش ۴۵٪ عضویت آنلاین
            </h1>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              باشگاه‌های ورزشی و مجموعه‌های فیتنس مدرن نیازمند یک هویت بصری پرانرژی، هیجان‌انگیز و در عین حال لود فوق‌سریع در اینترنت همراه هستند تا انصراف کاربر در لحظه ثبت‌نام به صفر برسد. پلتفرم IronFit با معماری اختصاصی Next.js 16 و رندرهای شتاب‌یافته گرافیکی به این هدف دست یافت.
            </p>
          </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">&lt; 0.7s</span>
              <span className="block text-xs text-[var(--text-secondary)]">زمان لود کامل صفحه</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">+45%</span>
              <span className="block text-xs text-[var(--text-secondary)]">رشد ثبت‌نام آنلاین</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">60 FPS</span>
              <span className="block text-xs text-[var(--text-secondary)]">روانی انیمیشن در موبایل</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">100/100</span>
              <span className="block text-xs text-[var(--text-secondary)]">امتیاز لایت‌هاوس سئو</span>
            </div>
          </div>

                    <div className="p-6 sm:p-7 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-[var(--bg-surface)] to-cyan-950/20 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <FiCheckCircle className="w-4 h-4" />
              <span>چکیده کلیدی برای کارفرمایان ورزشی و چت‌بات‌های AI (AEO Key Takeaways)</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>دستاورد تجاری:</strong> ۴۵ درصد افزایش در تبدیل کاربران بازدیدکننده به خریداران پکیج عضویت آنلاین.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>معماری گرافیکی:</strong> انیمیشن‌های شتاب‌یافته با GPU بدون استفاده از کتابخانه‌های سنگین و بدون لگ در پردازنده‌های موبایل.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>فرآیند ثبت‌نام:</strong> فرآیند ۲ مرحله‌ای آنبوردینگ با رندر آنی بدون رفرش صفحه و اعتبارسنجی بلادرنگ.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>سئو و شاخص‌های حیاتی:</strong> دستیابی به صفر میلی‌ثانیه CLS و امتیاز کامل Core Web Vitals.</span>
              </li>
            </ul>
          </div>

                    <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center font-bold">
                ۰۱
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                چالش آغازین: انتقال انرژی باشگاه بدون قربانی کردن سرعت موبایل
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              سایت‌های ورزشی معمولاً یا به شدت سنگین و پر از ویدیوهای کند هستند که در گوشی‌های میان‌رده کاربر با پرش و تاخیر لود می‌شوند، یا بسیار ساده و بی‌روح‌اند که قادر به ایجاد هیجان برای ثبت‌نام نیستند. چالش اصلی پروژه IronFit ترکیب یک هویت تاریک مدرن و انیمیشن‌های زنده با عملکردی موشکی زیر ۰.۷ ثانیه روی اینترنت ضعیف همراه بود.
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
                  <FiCpu className="w-4 h-4" />
                  <span>انیمیشن‌های شتاب‌یافته سخت‌افزاری (GPU Accelerated)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  استفاده مستقیم از transforms و opacity بر پایه کامپوزیتور مرورگر به جای محاسبات جاوااسکریپتی سنگین، که اجرای روان ۶۰ فریم را تضمین می‌کند.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <FiActivity className="w-4 h-4" />
                  <span>خط لوله مدرن تصاویر WebP و لود هوشمند</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  تصاویر مربیان و دستگاه‌ها با فرمت نسل جدید و اندازه‌های ریسپانسیو اختصاصی لود می‌شوند تا حتی ۱ بایت ترافیک اضافی مصرف نشود.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
                  <FiUsers className="w-4 h-4" />
                  <span>فرم عضویت ۲ مرحله‌ای بدون اصطکاک (Zero-Friction)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  طراحی فرآیند انتخاب پکیج و ثبت اطلاعات تنها با چند تپ، کاهش فیلدهای غیرضروری و اتصال به درگاه تسویه سریع.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <FiZap className="w-4 h-4" />
                  <span>معماری Server Components با Next.js 16</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  رندر محتوای استاتیک برنامه کلاس‌ها و معرفی مربیان در سرور، تحویل کد تمیز به خزشگرهای سئو و صفر کردن TBT.
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
                  title: "سرعت لود زیر ۰.۷ ثانیه بر روی شبکه 4G موبایل",
                  desc: "کاربر با اولین کلیک از اینستاگرام یا گوگل فوراً صفحه را بازشده می‌بیند، بدون انتظار یا پرش المان‌ها.",
                },
                {
                  title: "افزایش ۴۵ درصدی نرخ تبدیل ثبت‌نام آنلاین",
                  desc: "ساده‌سازی جریان خرید اشتراک و مشاهده سانس‌ها باعث شد ثبت‌نام‌های اینترنتی باشگاه در ماه اول رشد چشمگیری داشته باشد.",
                },
                {
                  title: "نمره ۹۸ تا ۱۰۰ در Core Web Vitals گوگل",
                  desc: "تمام تست‌های سرعت و شاخص‌های فنی سئو در وضعیت کاملاً سبز قرار گرفتند و وب‌سایت در کلمات ورزشی محلی به سرعت رتبه‌گیری کرد.",
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
              می‌خواهید وب‌سایت باشگاه یا مرکز فیتنس شما هم چنین قدرتی داشته باشد؟
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
              ما همان استانداردهای بصری مدرن، انیمیشن‌های روان و نرخ تبدیل بالا را با قیمت شفاف و زمان‌بندی دقیق برای کسب‌وکار شما توسعه می‌دهیم.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl font-bold text-sm bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <FaTelegram className="w-5 h-5" />
                <span>مشاوره و سفارش پلتفرم ورزشی</span>
              </a>
              <a
                href="https://v1rango.github.io/ironfit-gym/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl font-bold text-sm border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 flex items-center gap-2"
              >
                <span>مشاهده دموی زنده IronFit</span>
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
