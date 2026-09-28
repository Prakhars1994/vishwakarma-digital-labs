import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUMACART — Modern Multi-Category Ecommerce Store",
  description: "A modern multi-category ecommerce storefront.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
