import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead response builder",
  description: "Internal VDL lead preparation and message review tool.",
  robots: { index: false, follow: false },
};

export default function LeadsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
