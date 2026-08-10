import type { Metadata } from "next";
import ServiceBusinessDemoClient from "./ServiceBusinessDemoClient";

export const metadata: Metadata = {
  title: "Advanced Service Business Lead Website Demo",
  description: "Interactive conversion-focused business website portfolio demo by Vishwakarma Digital Labs.",
};

export default function ServiceBusinessDemo() {
  return <ServiceBusinessDemoClient />;
}
