import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vishwakarma Digital Labs | Websites, Apps & AI Automation",
    template: "%s | Vishwakarma Digital Labs",
  },
  description:
    "Vishwakarma Digital Labs builds professional websites, mobile apps, AI-powered applications and business automation solutions.",
  keywords: [
    "web development",
    "mobile app development",
    "AI development",
    "AI automation",
    "Next.js developer",
    "React developer",
    "Vishwakarma Digital Labs",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vishwakarma Digital Labs",
    description:
      "Websites, mobile apps, AI applications and automation — built from idea to production.",
    type: "website",
    url: siteUrl,
    siteName: "Vishwakarma Digital Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwakarma Digital Labs",
    description: "Websites, mobile apps, AI applications and business automation.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Vishwakarma Digital Labs",
  url: siteUrl,
  description: "Website, mobile app, AI application and business automation development services.",
  founder: { "@type": "Person", name: "Prakhar Singh" },
  email: "prakhars389@gmail.com",
  telephone: "+918446000784",
  sameAs: ["https://github.com/Prakhars1994"],
  areaServed: "Worldwide",
  serviceType: ["Website Development", "Mobile App Development", "AI Application Development", "Business Automation"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
