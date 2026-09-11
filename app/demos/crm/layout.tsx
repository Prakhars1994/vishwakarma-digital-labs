import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/crm",
  "CRM SaaS Demo | Vishwakarma Digital Labs",
  "Explore a production-style CRM concept with lead capture, scoring, pipeline stages, forecasting, activity history and AI-assisted follow-up."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
