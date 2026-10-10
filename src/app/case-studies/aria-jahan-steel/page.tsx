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
  FiTrendingUp,
  FiFileText,
  FiExternalLink,
} from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "مطالعه موردی: پورتال B2B استعلام قیمت و وزن آهن‌آلات (جهان فولاد آریا) | آراد وفایی",
  description:
    "چگونه طراحی پورتال جهان فولاد آریا با موتور محاسباتی وزن مقاطع استاندارد DIN (زیر ۱۰ میلی‌ثانیه)، تابلوی زنده قیمت و کشینگ لبه، زمان صدور پیش‌فاکتور را ۷۰٪ کاهش داد.",
  alternates: {
    canonical: `${SITE_URL}/case-studies/aria-jahan-steel`,
  },
  openGraph: {
    title: "مطالعه موردی: پورتال B2B و صنعتی جهان فولاد آریا | آراد وفایی",
    description:
      "موتور بلادرنگ متالورژی زیر ۱۰ms، استعلام قیمت لحظه‌ای آهن‌آلات و کاهش ۷۰ درصدی زمان صدور پیش‌فاکتور سازمانی.",
    url: `${SITE_URL}/case-studies/aria-jahan-steel`,
    siteName: `${PERSONAL_DATA.nameFa} — Case Studies`,
    locale: "fa_IR",
    type: "article",
  },
};

export default function AriaJahanSteelCaseStudyPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${SITE_URL}/case-studies/aria-jahan-steel/#article`,
    "headline": "مطالعه موردی: معماری پورتال سازمانی B2B و موتور استعلام متالورژی جهان فولاد آریا",
    "image": `${SITE_URL}/projects/aria-jahan-steel.webp`,
    "datePublished": "2026-03-20T11:00:00+03:30",
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
      "بررسی مهندسی موتور محاسبات فوق‌سریع وزن میلگرد، تیرآهن و ورق بر پایه استانداردهای مهندسی DIN، فید زنده قیمت‌ها و کش لبه شبکه در مقیاس B2B.",
    "mainEntityOfPage": `${SITE_URL}/case-studies/aria-jahan-steel`,
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
              CASE STUDY #04 • INDUSTRIAL B2B PLATFORM
            </span>
          </div>

                    <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold">
              <FiAward className="w-4 h-4" />
              <span>پروژه زنده (Live Production Case Study)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              پورتال صنعتی جهان فولاد آریا:{" "}
              <span className="text-gradient-emerald">محاسبات متالورژی زیر ۱۰ms</span> و کاهش ۷۰٪ زمان صدور پیش‌فاکتور
            </h1>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              در بازار صنایع فولادی، نوسانات ثانیه‌ای قیمت‌ها و محاسبات پیچیده وزن مقاطع میلگرد، تیرآهن و ورق چالش روزمره مهندسان عمران پای پروژه است. پورتال جهان فولاد آریا با موتور محاسباتی برخط بر پایه استانداردهای DIN و فرم‌های هوشمند استعلام، تجربه سفارش عمده آهن‌آلات را مدرن و فوق‌سریع کرد.
            </p>
          </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">&lt; 10ms</span>
              <span className="block text-xs text-[var(--text-secondary)]">سرعت محاسبه وزن مقاطع</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">-70%</span>
              <span className="block text-xs text-[var(--text-secondary)]">کاهش زمان صدور فاکتور</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">100%</span>
              <span className="block text-xs text-[var(--text-secondary)]">پایداری در نوسان ترافیک</span>
            </div>
            <div className="p-5 rounded-2xl border bg-[var(--bg-surface)] border-[var(--border)] text-center space-y-1">
              <span className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">DIN STD</span>
              <span className="block text-xs text-[var(--text-secondary)]">فرمولاسیون استاندارد مهندسی</span>
            </div>
          </div>

                    <div className="p-6 sm:p-7 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/20 via-[var(--bg-surface)] to-cyan-950/20 shadow-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <FiCheckCircle className="w-4 h-4" />
              <span>چکیده کلیدی برای مدیران صنعتی و موتورهای هوش مصنوعی (AEO Key Takeaways)</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[var(--text-secondary)] leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>دستاورد عملیاتی:</strong> ۷۰ درصد صرفه‌جویی در زمان تیم فروش برای محاسبه وزن و تهیه پیش‌فاکتورهای حجیم.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>موتور محاسباتی متالورژی:</strong> کدنویسی الگوریتم‌های چگالی آهن و استانداردهای DIN با پاسخ زیر ۱۰ میلی‌ثانیه.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>تابلوی زنده قیمت:</strong> کشینگ لبه شبکه برای تحویل آنی نوسانات لحظه‌ای آهن بدون بارگذاری سنگین روی سرور.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>طراحی موبایل‌محور B2B:</strong> استفاده راحت مهندسان ناظر در شرایط کاری کارگاه‌های ساختمانی.</span>
              </li>
            </ul>
          </div>

                    <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center font-bold">
                ۰۱
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">
                چالش آغازین: محاسبات دستی خطاپذیر و معطلی در اعلام قیمت
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              در معاملات فولادی، هر بندیل یا شاخه آهن بر اساس استاندارد کارخانه، سایز و طول، تناژ متفاوتی دارد. خریداران عمده و پیمانکاران پیش از خرید نیاز دارند تناژ دقیق پروژه و هزینه پیش‌فاکتور را بلافاصله بدانند. در روش‌های سنتی، این فرآیند با تماس تلفنی و محاسبه دستی اکسل ساعت‌ها زمان می‌برد که به از دست رفتن مشتریان در لحظات تغییر قیمت منجر می‌شد.
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
                  <span>موتور محاسباتی استاندارد DIN زیر ۱۰ میلی‌ثانیه</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  پیاده‌سازی فرمول‌های دقیق متالورژی برای محاسبه لحظه‌ای وزن هر متر شاخه یا ورق با دقت ۲ رقم اعشار بدون وابستگی به سرور خارجی.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                  <FiTrendingUp className="w-4 h-4" />
                  <span>تابلوی استعلام قیمت زنده با Edge Caching</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  به‌روزرسانی سریع نرخ‌های کارخانه‌ها و بورس کالا با کشینگ لبه شبکه، که هزاران استعلام هم‌زمان را با تاخیر نزدیک به صفر پاسخ می‌دهد.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-400">
                  <FiFileText className="w-4 h-4" />
                  <span>سیستم صدور پیش‌فاکتور خودکار (Frictionless RFQ)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  امکان افزودن مقاطع مختلف به سبد استعلام و دریافت خروجی شفاف و رسمی تنها با یک کلیک جهت ارسال فوری در واتساپ یا تلگرام.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-[var(--bg-elevated)] border-[var(--border)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <FiZap className="w-4 h-4" />
                  <span>رابط کاربری تمیز مهندسی و کامپوننت‌های Next.js 16</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  طراحی تم تیره مدرن با اعداد و فونت‌های استاندارد فارسی، خوانایی حداکثری زیر نور آفتاب در محیط کارگاه‌های ساختمانی.
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
                  title: "کاهش ۷۰ درصدی زمان فرآیند صدور پیش‌فاکتور",
                  desc: "مشتریان صنعتی به جای انتظار پشت تلفن، وزن و قیمت تقریبی تناژ مورد نیاز را مستقیماً در چند ثانیه دریافت می‌کنند.",
                },
                {
                  title: "جذب خریداران سازمانی و پیمانکاران پروژه‌های ملی",
                  desc: "ابزار دقیق محاسبه وزن، پورتال جهان فولاد را به ابزار کار روزمره مهندسان کارگاه‌ها تبدیل کرد و ترافیک ارگانیک ماندگاری ایجاد نمود.",
                },
                {
                  title: "صفر ثانیه قطعی در پیک نوسانات ارزی و بورسی",
                  desc: "معماری سرورلس Next.js 16 پایداری ۱۰۰ درصدی سیستم را حتی در ساعات پرترافیک اعلام قیمت‌های ظهر تضمین کرد.",
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
              می‌خواهید پورتال B2B یا سامانه صنعتی شما به سریع‌ترین ابزار بازار تبدیل شود؟
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
              ما پلتفرم‌های پیچیده محاسباتی، داشبوردهای استعلام قیمت و ابزارهای صنعتی را با آخرین استانداردهای مهندسی مدرن وب می‌سازیم.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl font-bold text-sm bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 flex items-center gap-2"
              >
                <FaTelegram className="w-5 h-5" />
                <span>مشاوره و ساخت پورتال سازمانی B2B</span>
              </a>
              <a
                href="https://v1rango.github.io/aria-jahan-steel/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl font-bold text-sm border border-white/20 bg-white/5 text-white transition-all hover:bg-white/10 flex items-center gap-2"
              >
                <span>مشاهده دموی زنده جهان فولاد</span>
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
