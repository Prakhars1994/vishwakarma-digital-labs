import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { serviceData } from "@/app/services/serviceData";
import { solutionCollections } from "@/lib/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    ...Object.keys(serviceData).map((slug) => ({ url: `${SITE_URL}/services/${slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    { url: `${SITE_URL}/solutions`, changeFrequency: "monthly", priority: 0.9 },
    ...solutionCollections.map((item) => ({ url: `${SITE_URL}/solutions/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.85 })),
    { url: `${SITE_URL}/services/email-automation/demo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/services/email-automation/videos`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/work`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/work/currentpulse-ai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
