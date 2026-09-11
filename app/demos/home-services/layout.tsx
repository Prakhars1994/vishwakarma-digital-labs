import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/home-services",
  "Home Services Marketplace Demo | Vishwakarma Digital Labs",
  "Explore an on-demand home-services marketplace concept with instant estimates, scheduling and provider workflow design."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
