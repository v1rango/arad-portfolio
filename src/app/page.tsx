"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PERSONAL_DATA, TESTIMONIALS_DATA } from "@/lib/constants";

export default function Home() {
  const [lang, setLang] = useState<"fa" | "en">("fa");

  // ساخت Schema.org بر اساس استاندارد Person و ProfessionalService
  const schemaPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PERSONAL_DATA.nameEn,
    "alternateName": PERSONAL_DATA.nameFa,
    "jobTitle": "Full-Stack Web Developer & SEO Specialist",
    "url": "https://v1arad.ir", // آدرس دامین اصلی شما
    "sameAs": [
      PERSONAL_DATA.socials.github,
      PERSONAL_DATA.socials.telegram,
      PERSONAL_DATA.socials.instagram,
    ],
    "knowsAbout": [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Prisma ORM",
      "Search Engine Optimization (SEO)",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)"
    ],
    "description": PERSONAL_DATA.bioFa
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "آراد وفایی چه خدمات تخصصی ارائه‌می دهد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "آراد وفایی متخصص توسعه فول‌استک وب‌اپلیکیشن‌ها با Next.js، TypeScript و MongoDB است و خدمات تخصصی سئوی نوین شامل SEO، AEO و GEO ارائه می‌دهد."
        }
      },
      {
        "@type": "Question",
        "name": "تفاوت AEO و GEO با سئوی سنتی چیست؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "سئوی سنتی روی کسب رتبه در لینک‌های گوگل تمرکز دارد؛ اما AEO و GEO محتوا را طوری ساختاردهی می‌کنند که هوش مصنوعی‌هایی مانند ChatGPT، Gemini و Perplexity پاسخ کاربر را مستقیماً از وب‌سایت شما استخراج کنند."
        }
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-[var(--bg-primary)] text-white font-sans ${lang === "fa" ? "rtl" : "ltr"}`} dir={lang === "fa" ? "rtl" : "ltr"}>
      {/* Structural Schema for AI/AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />

      <Header lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Testimonials lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}