import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "BarRaid | Barware, Beer Towers & Liquor Dispensers",
    template: "%s | BarRaid",
  },
  description:
    "Shop BarRaid beer towers, liquor dispensers and novelty barware, with retail ordering and bulk WhatsApp enquiries.",
  robots: { index: false, follow: true },
};

export default function BarRaidLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
