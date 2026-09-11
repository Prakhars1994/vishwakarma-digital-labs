import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/restaurant",
  "Restaurant Website Demo | Vishwakarma Digital Labs",
  "Explore a premium restaurant website concept with menu discovery, reservations, gallery and conversion-focused dining experience design."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
