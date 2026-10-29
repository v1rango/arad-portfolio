import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import CaseStudiesPageClient from "@/components/pages/CaseStudiesPageClient";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "مطالعات موردی و پروژه‌های شاخص | آراد وفایی",
  description:
    "مجموعه مطالعات موردی و گزارش‌های فنی پروژه‌های واقعی: رتبه ۱ گوگل در ۱۲ ساعت، سرعت لود زیر ۰.۷ ثانیه، افزایش ۶۰٪ نرخ تبدیل و موتورهای محاسباتی بدون باگ.",
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
  openGraph: {
    title: "مطالعات موردی فنی و پروژه‌های واقعی | آراد وفایی",
    description:
      "تحلیل عمیق چالش‌های معماری نرم‌افزار، سئو معنایی AEO/GEO و نتایج اندازه‌گیری‌شده در پروداکشن.",
    url: `${SITE_URL}/case-studies`,
    siteName: `${PERSONAL_DATA.nameFa} — Case Studies`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/case-studies/#collection`,
    "name": "مطالعات موردی و پروژه‌های شاخص آراد وفایی",
    "description":
      "تحلیل‌های فنی معماری وب، سئو تکنیکال و پروژه‌های اجرا شده با Next.js 16.",
    "url": `${SITE_URL}/case-studies`,
    "publisher": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "مطالعه موردی فتح رتبه ۱ گوگل در ۱۲ ساعت (گالری آراد)",
          "url": `${SITE_URL}/case-studies/arad-gallery`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "مطالعه موردی پلتفرم ورزشی آیرون فیت (IronFit)",
          "url": `${SITE_URL}/case-studies/ironfit-gym`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "مطالعه موردی کلینیک دندانپزشکی درسا",
          "url": `${SITE_URL}/case-studies/dorsa-dental-clinic`,
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "مطالعه موردی پورتال صنعتی جهان فولاد آریا",
          "url": `${SITE_URL}/case-studies/aria-jahan-steel`,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudiesSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />
        <main>
          <CaseStudiesPageClient />
        </main>
        <Footer />
        <FloatingMobileBar />
      </div>
    </>
  );
}
