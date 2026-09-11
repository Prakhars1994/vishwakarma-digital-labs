import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/service-business",
  "Lead Generation Website Demo | Vishwakarma Digital Labs",
  "Explore a service-business growth platform concept with lead capture, CRM pipeline visuals, analytics and an interactive ROI calculator."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
