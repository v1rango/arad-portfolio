import { Metadata } from "next";
import WebAppShowcaseClient from "@/components/demos/WebAppShowcaseClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "طراحی وب‌اپلیکیشن اختصاصی، پنل مدیریت و سیستم اتوماسیون | آراد وفایی",
  description:
    "طراحی و مهندسی وب‌اپلیکیشن‌های پیشرفته، داشبوردهای مدیریتی و اتوماسیون‌های سازمانی با Next.js 16، NestJS و PostgreSQL. تاخیر پاسخگویی زیر ۵۰ میلی‌ثانیه، جداول داده بلادرنگ و امنیت بالا.",
  alternates: {
    canonical: `${SITE_URL}/services/web-app`,
  },
  openGraph: {
    title: "طراحی وب‌اپلیکیشن، پنل مدیریت و اتوماسیون سازمانی | آراد وفایی",
    description:
      "دموی زنده پنل داشبورد، خط لوله اتوماسیون تسک‌ها با ۳ تم اختصاصی و زمان پاسخ‌دهی سرور ۴۲ میلی‌ثانیه.",
    url: `${SITE_URL}/services/web-app`,
    siteName: `${PERSONAL_DATA.nameFa} — Digital Studio`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function WebAppServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "طراحی وب‌اپلیکیشن‌های اختصاصی و سیستم‌های اتوماسیون",
    "serviceType": "Full-Stack Web Application & SaaS Development",
    "provider": {
      "@type": "Person",
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "description":
      "مهندسی سامانه‌های تحت وب اختصاصی، نرم‌افزارهای ابری SaaS و داشبوردهای مانیتورینگ عملکرد بالا با Next.js و NestJS.",
    "areaServed": "Global",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header lang="fa" theme="dark" />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <WebAppShowcaseClient />
        </main>

        <Footer lang="fa" />
      </div>
    </>
  );
}
