import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const highIntent = [
    "/services/web-development",
    "/services/mobile-app-development",
    "/services/ai-development",
    "/services/business-automation",
    "/pricing",
    "/contact",
    "/about",
    "/case-studies/currentpulse-ai",
    "/solutions/restaurant-website-development",
    "/solutions/real-estate-website-development",
    "/solutions/clinic-website-development",
    "/solutions/coaching-institute-website-development",
    "/solutions/startup-mvp-development",
    "/solutions/ai-automation-small-business",
  ];

  const utility = ["/privacy", "/terms"];

  return [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    ...highIntent.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path.startsWith("/services/") || path === "/pricing" || path === "/contact" ? 0.9 : 0.8,
    })),
    ...utility.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
