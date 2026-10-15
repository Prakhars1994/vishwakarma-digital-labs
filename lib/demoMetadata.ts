import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export function demoMetadata(path: string, title: string, description: string): Metadata {
  const canonical = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: false,
      follow: true,
      googleBot: { index: false, follow: true },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      siteName: "Vishwakarma Digital Labs",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vishwakarma Digital Labs — interactive portfolio concept" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
