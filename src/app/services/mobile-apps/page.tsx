import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";
import Link from "next/link";
import {
  FiSmartphone,
  FiArrowRight,
  FiZap,
  FiDownload,
  FiBell,
  FiWifiOff,
} from "react-icons/fi";
import { FaTelegram, FaWhatsapp, FaApple, FaAndroid } from "react-icons/fa";

export const metadata: Metadata = {
  title: "طراحی اپلیکیشن موبایل اختصاصی (اندروید و iOS) | آراد وفایی",
  description:
    "طراحی و ساخت اپلیکیشن‌های موبایل فوق‌سریع برای اندروید و آیفون (iOS). معماری مدرن PWA و React Native، نصب مستقیم بدون نیاز به استورها، نوتیفیکیشن لحظه‌ای و عملکرد آفلاین.",
  alternates: {
    canonical: `${SITE_URL}/services/mobile-apps`,
  },
  openGraph: {
    title: "طراحی اپلیکیشن موبایل اندروید و آیفون | آراد وفایی",
    description:
      "ساخت اپلیکیشن موبایل اختصاصی با عملکرد نیتیو ۶۰ فریم بر ثانیه، بدون تحریم‌های اپ استور و گوگل پلی با استک مدرن.",
    url: `${SITE_URL}/services/mobile-apps`,
    siteName: `${PERSONAL_DATA.nameFa} — Mobile Apps`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function MobileAppsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/mobile-apps/#service`,
    "name": "طراحی و توسعه اپلیکیشن موبایل (اندروید و آیفون)",
    "serviceType": "Mobile Application & PWA Development",
    "provider": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "description":
      "توسعه اپلیکیشن‌های موبایل برای پلتفرم‌های Android و iOS با استفاده از معماری PWA و React Native همراه با پشتیبانی از وب‌پوش و عملکرد آفلاین.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "پکیج‌های اپلیکیشن موبایل",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "توسعه PWA فوق‌سریع سازگار با آیفون و اندروید",
          "priceCurrency": "IRR",
        },
        {
          "@type": "Offer",
          "name": "اپلیکیشن اختصاصی چندسکویی با React Native",
          "priceCurrency": "IRR",
        },
      ],
    },
  };

  const appFeatures = [
    {
      title: "نصب با یک کلیک بدون تحریم اپ‌استور و بازار",
      desc: "کاربران آیفون و اندروید بدون دردسر تحریم‌های اپل یا نیاز به ساخت اکانت در کافه بازار، مستقیماً آیکون اپلیکیشن شما را به صفحه گوشی خود اضافه می‌کنند.",
      icon: FiDownload,
    },
    {
      title: "ارسال پوش نوتیفیکیشن تبلیغاتی و اطلاع‌رسانی",
      desc: "ارسال آنی پیام‌های تخفیف، وضعیت سفارش و یادآوری‌ها به صفحه قفل گوشی کاربران مشابه بزرگ‌ترین اپلیکیشن‌های جهانی.",
      icon: FiBell,
    },
    {
      title: "عملکرد کامل در وضعیت اینترنت ضعیف و آفلاین",
      desc: "بهره‌گیری از Service Workers برای کش کردن محتوا، کاتالوگ و امکان ثبت درخواست حتی هنگام قطعی اینترنت همراه.",
      icon: FiWifiOff,
    },
    {
      title: "سرعت رندر روان ۶۰ فریم بر ثانیه (GPU)",
      desc: "انیمیشن‌های نرم و ترنزیشن‌های حرکتی بدون لگ با شتاب سخت‌افزاری که حس یک اپلیکیشن میلیاردی نیتیو را به کاربر القا می‌کند.",
      icon: FiZap,
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
              MOBILE ENGINEERING • ANDROID & IOS
            </span>
          </div>

          {/* Hero */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 text-xs font-bold">
              <FiSmartphone className="w-4 h-4" />
              <span>طراحی اپلیکیشن موبایل اندروید و آیفون (iOS)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-[var(--text-primary)]">
              اپلیکیشنی در جیب مشتریان شما؛{" "}
              <span className="text-gradient-emerald">سریع، بدون تحریم و با بازدهی بالا</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              بیش از ۸۰ درصد ترافیک آنلاین ایران از طریق گوشی‌های هوشمند انجام می‌شود. با توسعه اپلیکیشن پیش‌رونده (PWA) یا اپلیکیشن چندسکویی، برند شما همیشه در صفحه اول گوشی مشتریان حضور خواهد داشت.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={PERSONAL_DATA.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-sm bg-[var(--accent)] text-[var(--accent-contrast)] hover:brightness-110 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
              >
                <FaTelegram className="w-4 h-4" />
                <span>مشاوره و برآورد هزینه اپلیکیشن</span>
              </a>
              <a
                href={`https://wa.me/${PERSONAL_DATA.socials.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--accent)] font-semibold text-sm transition-all flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                <span>گفتگو در واتساپ</span>
              </a>
            </div>
          </div>

          {/* Supported Platforms badges */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]">
              <FaApple className="w-5 h-5 text-[var(--text-primary)]" />
              <span className="text-xs font-bold">سازگار کامل با iOS و آیفون</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]">
              <FaAndroid className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold">نصب سریع روی انواع اندروید</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)]">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold">بدون نیاز به پرداخت حق اشتراک دلاری</span>
            </div>
          </div>

          {/* App Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {appFeatures.map((feat, idx) => {
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

          {/* AEO FAQ */}
          <div className="p-8 rounded-3xl border bg-[var(--bg-surface)] border-[var(--border)] space-y-6">
            <h2 className="text-lg sm:text-2xl font-black text-[var(--text-primary)] text-center">
              پرسش‌های متداول طراحی اپلیکیشن موبایل (AEO)
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-2">
                <h3 className="font-bold text-sm text-[var(--text-primary)]">
                  چرا PWA برای کسب‌وکارهای ایرانی بهتر از اپلیکیشن سنتی است؟
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  اپل اپلیکیشن‌های ایرانی را در اپ‌استور مسدود می‌کند و هزینه‌های گواهی‌های ادهاک (Enterprise) نیز بسیار گران است. با PWA، بدون هزینه و ریسک مسدودی، کاربر با کلیک روی افزودن به صفحه اصلی فوراً صاحب اپلیکیشن می‌شود.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] space-y-2">
                <h3 className="font-bold text-sm text-[var(--text-primary)]">
                  آیا اطلاعات و محصولات بین سایت و اپلیکیشن همگام است؟
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  بله؛ اپلیکیشن به صورت بلادرنگ به پایگاه‌داده سایت شما متصل است و هرگونه تغییر قیمت، محصول یا سفارش همزمان در هر دو محیط به‌روزرسانی می‌شود.
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
