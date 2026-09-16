import { Metadata } from "next";
import PortfolioContainer from "@/components/PortfolioContainer";
import { PERSONAL_DATA, FEATURED_PROJECTS, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${PERSONAL_DATA.nameFa} | ${PERSONAL_DATA.roleFa}`,
  description: PERSONAL_DATA.bioFa,
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fa-IR": SITE_URL,
      "en-US": SITE_URL,
    },
  },
  openGraph: {
    type: "profile",
    title: `${PERSONAL_DATA.nameFa} | ${PERSONAL_DATA.roleFa}`,
    description: PERSONAL_DATA.bioFa,
    url: SITE_URL,
    siteName: `${PERSONAL_DATA.nameFa} Portfolio`,
    locale: "fa_IR",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${PERSONAL_DATA.nameEn} — Full-Stack Developer & AI Search Specialist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_DATA.nameFa} | Full-Stack & AI Search Specialist`,
    description: PERSONAL_DATA.bioFa,
    images: [`${SITE_URL}/og-image.jpg`],
  },
};


export default function Home() {
  // ساختار گراف غنی Schema.org بهینه برای هوش مصنوعی (GEO & AEO) و گوگل
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
          PERSONAL_DATA.socials.github,
          PERSONAL_DATA.socials.telegram,
          PERSONAL_DATA.socials.instagram,
        ],
        "knowsAbout": [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "MongoDB",
          "Generative Engine Optimization (GEO)",
          "Answer Engine Optimization (AEO)",
          "Technical Search Engine Optimization (SEO)",
          "Performance Optimization & Core Web Vitals"
        ],
        "description": PERSONAL_DATA.bioFa
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
        "mainEntity": [
          {
            "@type": "Question",
            "name": "آراد وفایی کیست و در چه حوزه‌هایی فعالیت تخصصی دارد؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "آراد وفایی توسعه‌دهنده فول‌استک وب‌اپلیکیشن‌ها با Next.js 16، React 19، TypeScript و MongoDB است که به‌طور ویژه در سئوی نوین شامل AEO (بهینه‌سازی برای موتورهای پاسخ‌گو) و GEO (بهینه‌سازی برای هوش مصنوعی‌های ChatGPT، Perplexity و Gemini) تخصص دارد."
            }
          },
          {
            "@type": "Question",
            "name": "تفاوت AEO و GEO با سئوی سنتی چیست؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "سئوی سنتی بر کسب رتبه در لینک‌های آبی گوگل متمرکز است؛ در حالی که AEO و GEO محتوا، اسکیماها و داده‌های وب‌سایت را طوری ساختاربندی می‌کنند که موتورهای مولد و چت‌بات‌های هوش مصنوعی پاسخ کاربران را مستقیماً از وب‌سایت استخراج و منبع را ارجاع دهند."
            }
          },
          {
            "@type": "Question",
            "name": "پروژه‌ها چگونه روی گوشی‌های همراه و میان‌رده روان اجرا می‌شوند؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "کلیه پروژه‌ها با بهره‌گیری از معماری رندر سمت سرور (SSR) در Next.js، انیمیشن‌های شتاب‌یافته با GPU و بهینه‌سازی بارگذاری المان‌ها، بدون کوچک‌ترین افت فریم روی گوشی‌های میان‌رده اجرا می‌شوند."
            }
          },
          {
            "@type": "Question",
            "name": "مراحل شروع پروژه و دریافت مشاوره چگونه است؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "مشخصات اولیه پروژه رو از طریق فرم تماس ارسال کن یا در تلگرام/واتس‌اپ (@v1arad) پیام بده. پس از بررسی نیازمندی‌ها، ساختار فنی، تخمین زمان و پروپوزال رسمی ارائه خواهد شد."
            }
          }
        ]

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