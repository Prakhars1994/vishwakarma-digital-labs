import { demoMetadata } from "@/lib/demoMetadata";
import RealEstateDemoClient from "./RealEstateDemoClient";

export const metadata = demoMetadata(
  "/demos/real-estate",
  "Aurelia — Interactive Real Estate Portal Demo",
  "Explore a luxury real-estate portal concept with property discovery, viewing requests and mortgage tools by Vishwakarma Digital Labs."
);

export default function Page() { return <RealEstateDemoClient />; }
