"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    __vdlGaMeasurementId?: string;
  }
}

type GoogleAnalyticsProps = {
  measurementId: string;
};

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.__vdlGaMeasurementId === measurementId) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { send_page_view: false });
    window.__vdlGaMeasurementId = measurementId;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src^="https://www.googletagmanager.com/gtag/js?id=${measurementId}"]`,
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }
  }, [measurementId]);

  useEffect(() => {
    if (!window.gtag) return;

    window.gtag("event", "page_view", {
      page_path: `${pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
