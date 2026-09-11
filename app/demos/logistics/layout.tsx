import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/logistics",
  "Logistics Dashboard Demo | Vishwakarma Digital Labs",
  "Explore a logistics operations concept with shipment tracking, route progress, fleet KPIs and automation dashboards."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
