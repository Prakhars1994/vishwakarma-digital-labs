import type { NextConfig } from "next";
import { legacyRouteMap, referenceLanguages } from "./app/demos/familyvisauae/migration-map";

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://static.cloudflareinsights.com",
  "connect-src 'self' https://challenges.cloudflare.com https://cloudflareinsights.com https://*.supabase.co wss://*.supabase.co",
  "frame-src https://challenges.cloudflare.com",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    const base = "/demos/familyvisauae";
    const directLegacyFixes: { source: string; destination: string; permanent: boolean }[] = [];
    const english = Object.entries(legacyRouteMap)
      .filter(([oldPath, newPath]) => oldPath && oldPath !== newPath)
      .map(([oldPath, newPath]) => ({ source: `${base}/${oldPath}`, destination: `${base}/${newPath}`, permanent: true }));
    const localized = referenceLanguages.flatMap((lang) => Object.entries(legacyRouteMap)
      .filter(([oldPath]) => oldPath)
      .map(([oldPath, newPath]) => ({ source: `${base}/${lang}/${oldPath}`, destination: `${base}/${newPath}`, permanent: true })));
    return [...directLegacyFixes, ...english, ...localized];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
    ];
  },
};

export default nextConfig;

