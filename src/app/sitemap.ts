import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  // تاریخ ثابت بازبینی فنی جهت استانداردسازی رفتار کراولرهای گوگل
  const lastUpdate = new Date("2026-03-30T00:00:00.000Z");

  return [
    {
      url: SITE_URL,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services/corporate`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/ecommerce`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/web-app`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/speed-optimization`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/telegram-bots-ai`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services/mobile-apps`,
      lastModified: lastUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/case-studies/arad-gallery`,
      lastModified: lastUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
