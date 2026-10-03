import type { Metadata } from "next";
import "./premium-core.css";

export const metadata: Metadata = {
  title: { absolute: "FamilyVisaUAE | UAE Visa & Document Support" },
  description: "UAE visa, Emirates ID and document-support guidance with clear fee separation and WhatsApp-first help.",
  robots: { index: true, follow: true },
  category: "Visa and document consultancy",
  openGraph: {
    type: "website",
    siteName: "FamilyVisaUAE",
    title: "FamilyVisaUAE | UAE Visa & Document Support",
    description: "UAE visa, Emirates ID and document-support guidance with clear fee separation.",
    images: [{ url: "/familyvisauae-hero.png", width: 1536, height: 1024, alt: "FamilyVisaUAE visa and document support" }],
  },
  alternates: { canonical: "/demos/familyvisauae" },
  twitter: {
    card: "summary_large_image",
    title: "FamilyVisaUAE | UAE Visa & Document Support",
    description: "UAE visa, Emirates ID and document-support guidance with clear fee separation.",
    images: ["/familyvisauae-hero.png"],
  },
};

export default function FamilyVisaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
