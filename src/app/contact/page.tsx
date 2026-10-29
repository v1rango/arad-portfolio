import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import ContactPageClient from "@/components/pages/ContactPageClient";
import { SITE_URL, PERSONAL_DATA } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "تماس با آراد وفایی | مشاوره فنی و شروع پروژه طراحی وب و هوش مصنوعی",
  description:
    "راه‌های ارتباط مستقیم، ثبت سفارش پروژه طراحی سایت، توسعه وب‌اپلیکیشن اختصاصی و ربات تلگرام. مشاوره مستقیم با آراد وفایی از طریق تلگرام، واتساپ و تماس تلفنی.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "تماس و شروع پروژه با آراد وفایی | معمار وب‌سایت‌های مدرن",
    description:
      "مشاوره فنی رایگان برای توسعه سیستم‌های پرسرعت، فروشگاه‌های اینترنتی و بهینه‌سازی سئو هوش مصنوعی.",
    url: `${SITE_URL}/contact`,
    siteName: `${PERSONAL_DATA.nameFa} — Contact & Inquiries`,
    locale: "fa_IR",
    type: "website",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact/#contactpage`,
    "name": `ارتباط و سفارش پروژه با ${PERSONAL_DATA.nameFa}`,
    "url": `${SITE_URL}/contact`,
    "mainEntity": {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": PERSONAL_DATA.nameFa,
      "telephone": PERSONAL_DATA.socials.phone,
      "email": "contact@aradvafaee.ir",
      "url": SITE_URL,
      "sameAs": [
        PERSONAL_DATA.socials.linkedin,
        PERSONAL_DATA.socials.github,
        PERSONAL_DATA.socials.telegram,
        PERSONAL_DATA.socials.whatsapp,
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Header />
        <main>
          <ContactPageClient />
        </main>
        <Footer />
        <FloatingMobileBar />
      </div>
    </>
  );
}
