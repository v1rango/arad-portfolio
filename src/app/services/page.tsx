import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import ServicesPageClient from "@/components/pages/ServicesPageClient";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "خدمات تخصصی طراحی سایت، وب‌اپلیکیشن و اتوماسیون هوش مصنوعی | آراد وفایی",
  description:
    "مجموعه خدمات مهندسی وب اختصاصی: طراحی سایت شرکتی و کلینیک‌های لوکس، فروشگاه آنلاین هدلس، وب‌اپلیکیشن سازمانی، بهینه‌سازی سرعت (PageSpeed 100)، ساخت ربات تلگرام و PWA.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "خدمات تخصصی طراحی وب، افزایش سرعت و هوش مصنوعی | آراد وفایی",
    description:
      "توسعه وب‌سایت‌ها و پلتفرم‌های اختصاصی فوق‌سریع با Next.js 16، بدون قالب آماده و با تضمین لود زیر ۰.۸ ثانیه و رتبه ۱ گوگل.",
    url: `${SITE_URL}/services`,
    siteName: `${PERSONAL_DATA.nameFa} — Engineering Services`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/#service`,
    "name": "خدمات تخصصی مهندسی وب و هوش مصنوعی آراد وفایی",
    "serviceType": [
      "Custom Web Development",
      "Headless E-Commerce Architecture",
      "Web Application & Internal Dashboards",
      "Lighthouse 100 Speed Optimization",
      "Telegram Bot & AI Process Automation",
      "Progressive Web Apps (PWA)"
    ],
    "provider": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "کاتالوگ خدمات اختصاصی",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "طراحی سایت شرکتی و کلینیک لوکس",
          "url": `${SITE_URL}/services/corporate`,
        },
        {
          "@type": "Offer",
          "name": "فروشگاه آنلاین هدلس پرسرعت",
          "url": `${SITE_URL}/services/ecommerce`,
        },
        {
          "@type": "Offer",
          "name": "وب‌اپلیکیشن اختصاصی و داشبورد",
          "url": `${SITE_URL}/services/web-app`,
        },
        {
          "@type": "Offer",
          "name": "بهینه‌سازی سرعت لایت‌هاوس ۱۰۰",
          "url": `${SITE_URL}/services/speed-optimization`,
        },
        {
          "@type": "Offer",
          "name": "طراحی ربات تلگرام و اتوماسیون AI",
          "url": `${SITE_URL}/services/telegram-bots-ai`,
        },
        {
          "@type": "Offer",
          "name": "طراحی اپلیکیشن موبایل پیش‌رونده (PWA)",
          "url": `${SITE_URL}/services/mobile-apps`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />
        <main>
          <ServicesPageClient />
        </main>
        <Footer />
        <FloatingMobileBar />
      </div>
    </>
  );
}
