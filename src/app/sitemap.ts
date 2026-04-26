import type { MetadataRoute } from "next";

const BASE_URL = "https://nervure.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["fr", "en"] as const;
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const servicePages = [
    "product-design", "websites", "software", "automation", "ads", "graphics", "seo",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: now,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }

    for (const slug of servicePages) {
      entries.push({
        url: `${BASE_URL}/${locale}/services/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  return entries;
}
