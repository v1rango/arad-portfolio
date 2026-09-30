import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";
import Link from "next/link";
import {
  FiArrowRight,
  FiZap,
  FiLayers,
  FiCode,
} from "react-icons/fi";
import { FaTelegram, FaWhatsapp, FaRobot } from "react-icons/fa";

export const metadata: Metadata = {
  title: "طراحی ربات تلگرام اختصاصی و اتوماسیون هوش مصنوعی | آراد وفایی",
  description:
    "طراحی و برنامه‌نویسی انواع ربات تلگرام اختصاصی (فروشگاهی، پشتیبانی، استعلام و شرکتی) متصل به دیتابیس سایت، درگاه بانکی شتاب و مدل‌های هوش مصنوعی (OpenAI, Gemini).",
  alternates: {
    canonical: `${SITE_URL}/services/telegram-bots-ai`,
  },
  openGraph: {
    title: "ساخت ربات تلگرام و اتوماسیون هوش مصنوعی | آراد وفایی",
    description:
      "توسعه ربات‌های تلگرام پیشرفته با پردازش زبان طبیعی هوش مصنوعی، اتصال به درگاه پرداخت و پنل مدیریت متمرکز.",
    url: `${SITE_URL}/services/telegram-bots-ai`,
    siteName: `${PERSONAL_DATA.nameFa} — Telegram & AI`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function TelegramBotsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/telegram-bots-ai/#service`,
    "name": "طراحی ربات تلگرام اختصاصی و اتوماسیون هوش مصنوعی",
    "serviceType": "Custom Telegram Bot Development & AI Automation",
    "provider": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "description":
      "توسعه ربات‌های تلگرام هوشمند متصل به هوش مصنوعی و دیتابیس وب با پشتیبانی از پرداخت آنلاین و وب‌هوک‌های امنیتی.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "پکیج‌های ربات تلگرام و هوش مصنوعی",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "ربات تلگرام فروشگاهی با کاتالوگ و درگاه پرداخت آنلاین",
          "priceCurrency": "IRR",
        },
        {
          "@type": "Offer",
          "name": "اتوماسیون اداری و دستیار هوشمند تلگرام بر پایه ChatGPT",
          "priceCurrency": "IRR",
        },
      ],
    },
  };

  const botFeatures = [
    {
      title: "ربات فروشگاهی و ثبت سفارش تلگرام",
      desc: "نمایش کاتالوگ محصولات با عکس، قیمت لحظه‌ای، سبد خرید، محاسبه هزینه پست و اتصال مستقیم به درگاه پرداخت زرین‌پال یا بانکی.",
      icon: FiZap,
    },
    {
      title: "دستیار هوش مصنوعی و پاسخ‌گویی ۲۴ ساعته",
      desc: "آموزش هوش مصنوعی با فایل‌ها و اطلاعات کسب‌وکار شما جهت پاسخ صوتی و متنی دقیق و لحن محترمانه به مشتریان بدون نیاز به اپراتور.",
      icon: FaRobot,
    },
    {
      title: "همگام‌سازی لحظه‌ای با سایت و انبار",
      desc: "اتصال به پایگاه‌داده سایت شما؛ تغییر موجودی و قیمت در سایت بلافاصله در ربات تلگرام اعمال می‌شود و برعکس.",
      icon: FiLayers,
    },
    {
      title: "صدور فاکتور رسمی PDF و پیامک تأیید",
      desc: "تولید آنی پیش‌فاکتور با امضای دیجیتال و کیو‌آرکد، ارسال پیامک کد رهگیری و انتقال سریع سفارش به بخش ارسال بار.",
      icon: FiCode,
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
              TELEGRAM & AI AGENTS • 2026
            </span>
          </div>

          {/* Hero */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">
              <FaRobot className="w-4 h-4" />
              <span>ساخت ربات تلگرام اختصاصی و ایجنت‌های هوش مصنوعی</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--text-primary)]">
              مشتریان شما در تلگرام هستند؛{" "}
              <span className="text-gradient-emerald">فروش و خدماتتان را ۲۴ ساعته خودکار کنید!</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              توسعه ربات‌های تلگرام اختصاصی با سرعت پاسخگویی صدم ثانیه‌ای، متصل به مدل‌های زبانی هوش مصنوعی، دیتابیس وب‌سایت، درگاه‌های پرداخت شتاب و وب‌هوک‌های امنیتی اختصاصی.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-sm bg-[var(--accent)] text-[var(--accent-contrast)] hover:brightness-110 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
              >
                <FaTelegram className="w-4 h-4" />
                <span>سفارش ربات تلگرام و دریافت مشاوره</span>
              </a>
              <a
                href={`https://wa.me/${PERSONAL_DATA.socials.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--accent)] font-semibold text-sm transition-all flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>ارتباط تلفنی و پیام‌رسان</span>
              </a>
            </div>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {botFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-4 hover:border-[var(--accent)] transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Architecture Tech Stack */}
          <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
                تکنولوژی‌های استاندارد ساخت ربات
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                اجرا روی سرورهای ابری قدرتمند، بدون قطعی و با پایداری ۹۹.۹٪ در شرایط اینترنت ایران.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="font-mono font-bold text-sm text-[var(--accent)]">Node.js & Grammy</span>
                <span className="block text-[11px] text-[var(--text-muted)] mt-1">هسته پرسرعت تایپ‌اسکریپت</span>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="font-mono font-bold text-sm text-cyan-400">Gemini & OpenAI</span>
                <span className="block text-[11px] text-[var(--text-muted)] mt-1">موتور تحلیل زبان طبیعی</span>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="font-mono font-bold text-sm text-emerald-400">PostgreSQL / Redis</span>
                <span className="block text-[11px] text-[var(--text-muted)] mt-1">حافظه جلسات و داده‌ها</span>
              </div>
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)]">
                <span className="font-mono font-bold text-sm text-amber-400">RESTful & Webhook</span>
                <span className="block text-[11px] text-[var(--text-muted)] mt-1">پاسخ‌دهی آنی بدون پولینگ</span>
              </div>
            </div>
          </div>

          {/* AEO FAQ */}
          <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-6">
            <h2 className="text-lg sm:text-2xl font-black text-[var(--text-primary)] text-center">
              پرسش‌های متداول ربات تلگرام و اتوماسیون (AEO)
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-2">
                <h3 className="font-bold text-sm text-[var(--text-primary)]">
                  آیا ربات تلگرام در صورت فیلترینگ بدون مشکل کار می‌کند؟
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  بله؛ سورس‌کد ربات بر روی سرورهای ابری خارج از کشور با وب‌هوک مستقیم تلگرام مستقر می‌شود و کاربر از داخل تلگرام بدون نیاز به سرور اضافه به آن دسترسی دارد.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-2">
                <h3 className="font-bold text-sm text-[var(--text-primary)]">
                  هزینه و زمان ساخت یک ربات تلگرام چقدر است؟
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  ربات‌های ساده و خدماتی بین ۷ تا ۱۴ روز کاری، و ربات‌های پیشرفته متصل به فروشگاه یا هوش مصنوعی بین ۱۵ تا ۲۵ روز کاری با ارائه پنل مدیریت و مستندات کامل تحویل داده می‌شوند.
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
