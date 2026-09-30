import { Metadata } from "next";
import PortfolioContainer from "@/components/PortfolioContainer";
import {
  PERSONAL_DATA,
  FEATURED_PROJECTS,
  SERVICES_DATA,
  FAQ_LIST,
  WORK_PROCESS,
  TESTIMONIALS_DATA,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${PERSONAL_DATA.nameFa} | طراحی و ساخت سایت، افزایش سرعت سایت و سئو هوش مصنوعی (Next.js 16)`,
  description: `${PERSONAL_DATA.nameFa} — معمار وب‌سایت‌های فوق‌سریع اختصاصی با Next.js 16، افزایش سرعت سایت (PageSpeed 100)، ساخت ربات تلگرام و اتوماسیون هوش مصنوعی، و سئوی نوین AEO/GEO برای حضور در صدر نتایج گوگل و ChatGPT.`,
  keywords: [
    "آراد وفایی",
    "Arad Vafaee",
    "طراحی سایت اختصاصی",
    "ساخت و توسعه سایت",
    "افزایش سرعت سایت",
    "بهینه سازی سرعت سایت",
    "سئو هوش مصنوعی",
    "AEO",
    "GEO",
    "ساخت ربات تلگرام",
    "اتوماسیون هوش مصنوعی",
    "طراحی اپلیکیشن موبایل",
    "PWA",
    "توسعه دهنده Next.js",
    "Core Web Vitals 100",
    "طراحی سایت فروشگاهی پرسرعت",
    "Full-Stack Developer Iran",
  ],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fa-IR": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "profile",
    title: `${PERSONAL_DATA.nameFa} | طراحی سایت اختصاصی و متخصص سئو هوش مصنوعی`,
    description: PERSONAL_DATA.bioFa,
    url: SITE_URL,
    siteName: `${PERSONAL_DATA.nameFa} — Portfolio & Digital Studio`,
    locale: "fa_IR",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${PERSONAL_DATA.nameEn} — Full-Stack Developer & Modern AI Search Specialist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_DATA.nameFa} | Custom Web Architecture & Modern AI SEO`,
    description: PERSONAL_DATA.bioFa,
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

export default function Home() {
  // ساختار گراف غنی Schema.org چندلایه برای درک فوق‌سریع توسط چت‌بات‌های AI و گوگل
  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": `${PERSONAL_DATA.nameFa} Portfolio`,
        "description": PERSONAL_DATA.bioFa,
        "inLanguage": ["fa-IR", "en-US"],
        "publisher": {
          "@id": `${SITE_URL}/#person`
        }
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        "url": SITE_URL,
        "name": `${PERSONAL_DATA.nameFa} - رزومه و پورتفولیو آنلاین`,
        "isPartOf": {
          "@id": `${SITE_URL}/#website`
        },
        "about": {
          "@id": `${SITE_URL}/#person`
        },
        "mainEntity": {
          "@id": `${SITE_URL}/#person`
        }
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        "name": PERSONAL_DATA.nameFa,
        "alternateName": [PERSONAL_DATA.nameEn, "v1arad", "v1rango"],
        "jobTitle": "Full-Stack Web Developer & AI Search Optimization Specialist",
        "url": SITE_URL,
        "sameAs": [
          PERSONAL_DATA.socials.linkedin,
          PERSONAL_DATA.socials.github,
          PERSONAL_DATA.socials.telegram,
          PERSONAL_DATA.socials.instagram,
          PERSONAL_DATA.socials.whatsapp,
        ],
        "knowsAbout": [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "NestJS",
          "Tailwind CSS",
          "PostgreSQL",
          "Generative Engine Optimization (GEO)",
          "Answer Engine Optimization (AEO)",
          "Technical Search Engine Optimization (SEO)",
          "Core Web Vitals & Performance Optimization",
          "Custom E-Commerce Architecture"
        ],
        "description": PERSONAL_DATA.bioFa,
        "award": "رتبه ۱ گوگل در ۱۲ ساعت برای پلتفرم اختصاصی Next.js 16",
        "nationality": {
          "@type": "Country",
          "name": "Iran"
        }
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/#how-we-work`,
        "name": "مراحل طراحی و پیاده‌سازی وب‌سایت با Next.js و سئوی هوش مصنوعی",
        "description": "فرآیند ۴ مرحله‌ای ساخت وب‌سایت اختصاصی فوق‌سریع و کسب رتبه ۱ گوگل و هوش مصنوعی",
        "step": WORK_PROCESS.map((step, idx) => ({
          "@type": "HowToStep",
          "position": idx + 1,
          "name": step.titleFa,
          "itemListElement": {
            "@type": "HowToDirection",
            "text": step.descFa,
          },
        })),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        "name": `خدمات طراحی سایت و سئو هوش مصنوعی ${PERSONAL_DATA.nameFa}`,
        "alternateName": "Arad Vafaee Custom Web Studio",
        "url": SITE_URL,
        "founder": {
          "@id": `${SITE_URL}/#person`
        },
        "priceRange": "$$",
        "telephone": PERSONAL_DATA.socials.phone,
        "areaServed": "Global",
        "serviceType": [
          "Custom Web Development",
          "Next.js 16 Engineering",
          "Website Speed Optimization & Core Web Vitals",
          "Telegram Bot Development & AI Automation",
          "Mobile Application & PWA Development",
          "AI Search Engine Optimization (AEO/GEO)",
          "Full-Stack Web Platforms"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "خدمات تخصصی طراحی وب و سئو",
          "itemListElement": [
            ...SERVICES_DATA.map((srv, idx) => ({
              "@type": "Offer",
              "position": idx + 1,
              "name": srv.titleFa,
              "description": srv.simpleDescFa,
            })),
            {
              "@type": "Offer",
              "position": SERVICES_DATA.length + 1,
              "name": "طراحی ربات تلگرام و اتوماسیون هوش مصنوعی",
              "description": "ساخت ربات‌های اختصاصی تلگرام متصل به سایت و هوش مصنوعی",
              "url": `${SITE_URL}/services/telegram-bots-ai`,
            },
            {
              "@type": "Offer",
              "position": SERVICES_DATA.length + 2,
              "name": "طراحی اپلیکیشن موبایل (اندروید و iOS)",
              "description": "توسعه PWA فوق‌سریع و اپلیکیشن چندسکویی بدون تحریم استورها",
              "url": `${SITE_URL}/services/mobile-apps`,
            },
          ]
        },
        "review": TESTIMONIALS_DATA.map((t) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": t.name,
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": t.rating.toString(),
            "bestRating": "5",
          },
          "reviewBody": t.commentFa,
        })),
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": TESTIMONIALS_DATA.length.toString(),
          "bestRating": "5",
          "worstRating": "1",
        }
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_URL}/#projects`,
        "name": "Featured Projects by Arad Vafaee",
        "itemListElement": FEATURED_PROJECTS.map((proj, index) => ({
          "@type": "SoftwareApplication",
          "position": index + 1,
          "name": proj.titleFa,
          "alternateName": proj.titleEn,
          "description": proj.descriptionFa,
          "applicationCategory": "WebApplication",
          "operatingSystem": "All",
          "url": proj.demoUrl || proj.githubUrl || SITE_URL,
        }))
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        "mainEntity": FAQ_LIST.map((faq) => ({
          "@type": "Question",
          "name": faq.qFa,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.aFa
          }
        }))
      }
    ]
  };

  return (
    <>
      {/* تزریق سروری اسکیماها جهت درک آنی توسط ربات‌های سبک و مدل‌های هوش مصنوعی */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
      />
      <PortfolioContainer />
    </>
  );
}