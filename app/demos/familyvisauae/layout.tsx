import type { Metadata } from "next";
import "./internal-page-theme.css";
import "./premium-refresh.css";

export const metadata: Metadata = {
  title: { absolute: "FamilyVisaUAE | UAE Visa & Document Support" },
  description: "UAE visa, Emirates ID and document-support guidance with clear fee separation and WhatsApp-first help.",
  openGraph: {
    type: "website",
    siteName: "FamilyVisaUAE",
    title: "FamilyVisaUAE | UAE Visa & Document Support",
    description: "UAE visa, Emirates ID and document-support guidance with clear fee separation.",
    images: [{ url: "/familyvisauae-family-balcony-v2.png", width: 1672, height: 941, alt: "FamilyVisaUAE visa and document support in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FamilyVisaUAE | UAE Visa & Document Support",
    description: "UAE visa, Emirates ID and document-support guidance with clear fee separation.",
    images: ["/familyvisauae-family-balcony-v2.png"],
  },
};

export default function FamilyVisaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
