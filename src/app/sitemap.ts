import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const services = [
    "corporate",
    "ecommerce",
    "web-app",
    "speed-optimization",
    "telegram-bots-ai",
    "mobile-apps",
  ];

  const caseStudies = [
    "arad-gallery",
    "ironfit-gym",
    "dorsa-dental-clinic",
    "aria-jahan-steel",
  ];

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/estimator`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    ...services.map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...caseStudies.map((slug) => ({
      url: `${SITE_URL}/case-studies/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
