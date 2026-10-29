import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import EstimatorPageClient from "@/components/pages/EstimatorPageClient";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "محاسبه آنلاین هزینه و زمان طراحی سایت و پلتفرم اختصاصی | آراد وفایی",
  description:
    "ابزار محاسبه آنلاین و هوشمند هزینه و زمان تحویل پروژه طراحی سایت اختصاصی، فروشگاه اینترنتی پرسرعت، وب‌اپلیکیشن و ربات تلگرام با استاندارد Next.js 16.",
  alternates: {
    canonical: `${SITE_URL}/estimator`,
  },
  openGraph: {
    title: "محاسبه آنلاین هزینه ساخت سایت و وب‌اپلیکیشن | آراد وفایی",
    description:
      "برآورد شفاف قیمت و زمان تحویل پروژه‌های نرم‌افزاری تحت وب، فروشگاه‌های اینترنتی و بهینه‌سازی سرعت.",
    url: `${SITE_URL}/estimator`,
    siteName: `${PERSONAL_DATA.nameFa} — Cost Estimator`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function EstimatorPage() {
  const estimatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${SITE_URL}/estimator/#app`,
    "name": "محاسبه‌گر آنلاین هزینه و زمان پروژه آراد وفایی",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "url": `${SITE_URL}/estimator`,
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "creator": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "url": SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(estimatorSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />
        <main>
          <EstimatorPageClient />
        </main>
        <Footer />
        <FloatingMobileBar />
      </div>
    </>
  );
}
