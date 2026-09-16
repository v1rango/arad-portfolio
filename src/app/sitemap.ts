import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2025-09-01"), // تاریخ آخرین تغییر واقعی — هر بار که محتوا آپدیت شد این رو عوض کن
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
