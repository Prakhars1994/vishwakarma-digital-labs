import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { CONTACT, OWNER, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Web Development, AI & Mobile App Company | Vishwakarma Digital Labs",
    template: "%s | Vishwakarma Digital Labs",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  category: "technology",
  creator: OWNER.name,
  publisher: SITE_NAME,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: "Vishwakarma Digital Labs — Web, Mobile, AI & Automation",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vishwakarma Digital Labs — Websites, mobile apps, AI applications and automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwakarma Digital Labs — Web, Mobile, AI & Automation",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
  colorScheme: "dark light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#founder`,
  name: OWNER.name,
  jobTitle: OWNER.role,
  url: `${SITE_URL}/about`,
  sameAs: [CONTACT.github],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description: SITE_DESCRIPTION,
  founder: { "@id": `${SITE_URL}/#founder` },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.phone,
    email: CONTACT.email,
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
    areaServed: "Worldwide",
  },
  sameAs: [CONTACT.github],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

const cloudflareAnalyticsToken = process.env.NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN || "";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, organizationSchema, websiteSchema]) }}
        />
        {cloudflareAnalyticsToken ? (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={JSON.stringify({ token: cloudflareAnalyticsToken })}
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  );
}
