import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services/web-development`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/mobile-app-development`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/ai-development`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services/business-automation`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/work/currentpulse-ai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
