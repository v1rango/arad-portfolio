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
  FiSearch,
  FiZap,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiCode,
} from "react-icons/fi";
import { FaTelegram, FaGoogle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "مطالعه موردی: رسیدن به رتبه ۱ گوگل در ۱۲ ساعت و تسخیر هوش مصنوعی | آراد وفایی",
  description:
    "چگونه پورتفولیو آراد وفایی با معماری Next.js 16، سئوی نوین AEO/GEO و سرعت زیر ۰.۸ ثانیه در کمتر از ۱۲ ساعت رتبه ۱ گوگل را فتح کرد و به منبع معتبر هوش مصنوعی تبدیل شد.",
  alternates: {
    canonical: `${SITE_URL}/case-studies/arad-gallery`,
  },
  openGraph: {
    title: "مطالعه موردی: فتح رتبه ۱ گوگل در ۱۲ ساعت با Next.js 16 | آراد وفایی",
    description:
      "تحلیل عمیق معماری فنی، متدهای سئوی AEO/GEO، بهینه‌سازی سرعت و نتایج ملموس در جذب ترافیک و فروش.",
    url: `${SITE_URL}/case-studies/arad-gallery`,
    siteName: `${PERSONAL_DATA.nameFa} — Case Studies`,
    locale: "fa_IR",
    type: "article",
  },
};

export default function CaseStudyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "مطالعه موردی: چگونگی دستیابی به رتبه ۱ گوگل در کمتر از ۱۲ ساعت با معماری Next.js 16",
    "author": {
      "@type": "Person",
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "publisher": {
      "@type": "Organization",
      "name": `${PERSONAL_DATA.nameFa} Studio`,
      "url": SITE_URL,
    },
    "description":
      "بررسی استراتژی‌های سئوی هوش مصنوعی (AEO)، داده‌های ساختاریافته Schema.org و مهندسی پرفورمنس در مقیاس وب مدرن.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header lang="fa" theme="dark" />

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-14">
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[var(--accent)] hover:underline"
            >
              <FiArrowRight className="w-4 h-4 rtl:rotate-180" />
              <span>بازگشت به صفحه اصلی</span>
            </Link>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              CASE STUDY #01 • PRODUCTION
            </span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <FiAward className="w-4 h-4" />
              <span>مطالعه موردی واقعی (Live Production Case Study)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              چگونه سایت آراد وفایی با معماری Next.js 16 در کمتر از ۱۲ ساعت به{" "}
              <span className="text-gradient-emerald">رتبه ۱ گوگل</span> و شناخت رسمی توسط هوش مصنوعی رسید؟
            </h1>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              ثبت یک دامنه جدید ملی (.ir) با صفر دامین آتوریتی و رقابت با سایت‌های چندساله معمولاً ماه‌ها زمان می‌برد. اما با به‌کارگیری دقیق معماری مهندسی مدرن، نمودار اسکیماهای چندبعدی و کش لبه کلودفلر، این فرآیند در کمتر از نصف روز با موفقیت ۱۰۰ درصدی به نتیجه رسید.
            </p>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">12h</span>
              <span className="block text-xs text-[var(--text-secondary)]">زمان رسیدن به رتبه ۱</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">&lt; 0.8s</span>
              <span className="block text-xs text-[var(--text-secondary)]">سرعت لود کامل صفحه</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">100/100</span>
              <span className="block text-xs text-[var(--text-secondary)]">امتیاز گوگل پیج‌اسپید</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">100%</span>
              <span className="block text-xs text-[var(--text-secondary)]">ارجاع در ChatGPT و Qwen</span>
            </div>
          </div>

          {/* Section 1: The Challenge */}
          <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center font-bold">
                ۰۱
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                چالش آغازین: صفر اعتبار دامنه و بازار اشباع
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              دامنه <span className="font-mono text-emerald-400">aradvafaee.ir</span> به عنوان یک دامنه تازه ثبت‌شده، هیچ تاریخچه‌ای در ایندکس گوگل نداشت. از طرف دیگر، در نتایج سرچ افراد همنام و پروفایل‌های شبکه‌های اجتماعی رتبه داشتند. هدف ما شکستن این بن‌بست و تبدیل شدن به اولین و معتبرترین نتیجه سرچ با کمترین اتلاف وقت بود.
            </p>
          </div>

          {/* Section 2: Technical Strategy */}
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
                  <span>معماری Server Components در Next.js 16</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  خالی کردن باندل کلاینت و تحویل ۱۰۰٪ کد HTML آماده به ربات‌های خزشگر گوگل و چت‌بات‌ها بدون نیاز به لود جاوااسکریپت سنگین.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <FiGlobe className="w-4 h-4" />
                  <span>گراف چندبعدی Schema.org JSON-LD</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  تزریق متصل هویت (Person)، بیزینس (ProfessionalService)، کاتالوگ خدمات و سوالات متداول به عنوان یک موجودیت واحد (Knowledge Graph Entity).
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
                  <FiSearch className="w-4 h-4" />
                  <span>استاندارد هوش مصنوعی (llms.txt & AEO)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  ایجاد فایل‌های اختصاصی هوش مصنوعی برای درک آنی توسط وب‌کراولرهای مدرن مانند GPTBot و PerplexityBot بدون کوچک‌ترین ابهام در اطلاعات.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <FiZap className="w-4 h-4" />
                  <span>شبکه توزیع محتوای لبه (Cloudflare Anycast)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  کش کردن دارایی‌های استاتیک در نزدیک‌ترین موقعیت به کاربر ایرانی و بین‌المللی با تاخیر (TTFB) کمتر از ۳۵ میلی‌ثانیه.
                </p>
              </div>
            </div>
          </div>

          {/* Speed Gauge Benchmark Section */}
          <SpeedGauge lang="fa" />

          {/* Section 3: The Proof & Results */}
          <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center font-bold">
                ۰۳
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                نتایج ثبت‌شده و شواهد عینی
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "فتح رتبه ۱ در صفحه نخست گوگل",
                  desc: "در کمتر از ۱۲ ساعت، گوگل سایت aradvafaee.ir را در رتبه اول همراه با فاوآیکون رسمی AD و عنوان کامل قرار داد.",
                },
                {
                  title: "شناخت و استناد رسمی توسط ChatGPT و Qwen",
                  desc: "وقتی در هوش مصنوعی درباره طراحی سایت آراد وفایی سوال می‌شود، مدل‌ها صراحتاً سایت و پورتفولیو را به عنوان استودیوی دیجیتال معرفی می‌کنند.",
                },
                {
                  title: "نمره ۹۶ تا ۱۰۰ در آزمون سخت‌گیرانه Google PageSpeed",
                  desc: "تمام شاخص‌های Core Web Vitals از جمله LCP (زیر ۰.۸ ثانیه)، CLS (صفر مطلق) و FID در وضعیت سبز قرار گرفتند.",
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

          {/* Takeaway for Clients */}
          <div className="p-8 sm:p-12 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-[var(--bg-surface)] text-center space-y-6 shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              این معماری دقیقاً چه نفعی برای کسب‌و‌کار شما دارد؟
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
              ما همان وسواس مهندسی، معماری بدون باگ و تکنیک‌های رتبه‌گیری در هوش مصنوعی را برای سایت یا فروشگاه شما پیاده‌سازی می‌کنیم تا پیش از آنکه رقبایتان متوجه شوند، رهبری بازار را در دست بگیرید.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl font-bold text-sm bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <FaTelegram className="w-5 h-5" />
                <span>درخواست آنالیز و مشاوره اختصاصی</span>
              </a>
              <Link
                href="/services/corporate"
                className="px-6 py-3 rounded-2xl font-bold text-sm border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10"
              >
                بررسی دموهای خدمات
              </Link>
            </div>
          </div>
        </main>

        <Footer lang="fa" />
      </div>
    </>
  );
}
