import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/real-estate",
  "Real Estate Website Demo | Vishwakarma Digital Labs",
  "Explore a premium property portal concept with listing search, lead qualification, viewing requests and mortgage planning tools."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
