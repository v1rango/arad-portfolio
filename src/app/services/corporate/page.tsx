import { Metadata } from "next";
import CorporateShowcaseClient from "@/components/demos/CorporateShowcaseClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "طراحی سایت شرکتی و کلینیک‌های زیبایی | لود زیر ۱ ثانیه و سئو نوین — آراد وفایی",
  description:
    "طراحی و توسعه وب‌سایت‌های شرکتی، هلدینگ‌ها، دفاتر حقوقی و کلینیک‌های زیبایی با Next.js 16. لود زیر ۰.۸ ثانیه، طراحی لوکس و اختصاصی، سیستم نوبت‌دهی آنلاین بدون رفرش و رتبه تضمینی در گوگل.",
  alternates: {
    canonical: `${SITE_URL}/services/corporate`,
  },
  openGraph: {
    title: "طراحی سایت شرکتی، هلدینگ و کلینیک زیبایی | آراد وفایی",
    description:
      "مشاهده دموی زنده و تعاملی با ۳ تم اختصاصی، رزرو آنلاین نوبت و سرعت خیره‌کننده با Next.js 16.",
    url: `${SITE_URL}/services/corporate`,
    siteName: `${PERSONAL_DATA.nameFa} — Digital Studio`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function CorporateServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "طراحی وب‌سایت‌های شرکتی و کلینیک‌های تخصصی",
    "serviceType": "Corporate Web Design & Medical Clinic Platforms",
    "provider": {
      "@type": "Person",
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "description":
      "توسعه وب‌سایت‌های فوق‌سریع و لوکس شرکتی با Next.js 16، سیستم نوبت‌دهی بدون رفرش و سئوی ساختاریافته برای جذب مشتریان سطح بالا.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "پکیج‌های وب‌سایت شرکتی",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "طراحی سایت کلینیک زیبایی با رزرواسیون آنلاین",
          "priceCurrency": "IRR",
        },
        {
          "@type": "Offer",
          "name": "طراحی پورتال شرکتی و هلدینگ بین‌المللی",
          "priceCurrency": "IRR",
        },
      ],
    },
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
          <CorporateShowcaseClient />
        </main>

        <Footer lang="fa" />
      </div>
    </>
  );
}
