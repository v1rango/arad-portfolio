import { Metadata } from "next";
import EcommerceShowcaseClient from "@/components/demos/EcommerceShowcaseClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "طراحی فروشگاه آنلاین پرسرعت و مدرن (Headless Commerce) | آراد وفایی",
  description:
    "طراحی فروشگاه‌های آنلاین مدرن و فوق‌سریع با Next.js 16. لود زیر ۰.۸ ثانیه، سبد خرید اسلایدی بدون رفرش، اتصال آنی به درگاه بانکی و مقاوم در برابر کمپین‌های سنگین فروش و بلک فرایدی.",
  alternates: {
    canonical: `${SITE_URL}/services/ecommerce`,
  },
  openGraph: {
    title: "طراحی فروشگاه آنلاین پرسرعت (Headless Commerce) | آراد وفایی",
    description:
      "دموی زنده فروشگاه فوق‌سریع با ۳ تم اختصاصی استریت‌ویر، مدرن و مینیمال + تست سبد خرید آنی بدون رفرش.",
    url: `${SITE_URL}/services/ecommerce`,
    siteName: `${PERSONAL_DATA.nameFa} — Digital Studio`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function EcommerceServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "طراحی فروشگاه‌های آنلاین مدرن و پرسرعت",
    "serviceType": "Headless E-Commerce Development",
    "provider": {
      "@type": "Person",
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "description":
      "توسعه فروشگاه‌های آنلاین اختصاصی با Next.js 16، سبد خرید اسلایدی و سیستم Fast Checkout مقاوم در برابر ترافیک سنگین کمپین‌ها.",
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
          <EcommerceShowcaseClient />
        </main>

        <Footer lang="fa" />
      </div>
    </>
  );
}
