import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import AboutPageClient from "@/components/pages/AboutPageClient";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "درباره آراد وفایی | معمار وب، متدولوژی مهندسی و ارزش‌آفرینی",
  description:
    "آشنایی با آراد وفایی؛ توسعه‌دهنده فول‌استک و متخصص سئوی هوش مصنوعی. بررسی فرآیند ۴ مرحله‌ای کار، چرایی انتخاب کد اختصاصی در برابر وردپرس و ابزارهای مهندسی.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "درباره آراد وفایی | معمار وب‌سایت‌های مدرن و سئو هوش مصنوعی",
    description:
      "توسعه وب‌سایت‌ها و پلتفرم‌های اختصاصی فوق‌سریع با Next.js 16، بدون قالب آماده و با تضمین لود زیر ۰.۸ ثانیه و رتبه ۱ گوگل.",
    url: `${SITE_URL}/about`,
    siteName: `${PERSONAL_DATA.nameFa} — About & Methodology`,
    locale: "fa_IR",
    type: "profile",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about/#aboutpage`,
    "name": `درباره و متدولوژی مهندسی ${PERSONAL_DATA.nameFa}`,
    "url": `${SITE_URL}/about`,
    "mainEntity": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "jobTitle": "Full-Stack Web Developer & Modern AI Search Architect",
      "url": SITE_URL,
      "knowsAbout": [
        "Next.js 16",
        "React 19",
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)",
        "Core Web Vitals Optimization",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />
        <main>
          <AboutPageClient />
        </main>
        <Footer />
        <FloatingMobileBar />
      </div>
    </>
  );
}
