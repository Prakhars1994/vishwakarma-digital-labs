import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/clinic",
  "Clinic Website Demo | Vishwakarma Digital Labs",
  "Explore a healthcare portal concept with doctor discovery, appointment booking, patient intake, consultation modes and portal workflows."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
