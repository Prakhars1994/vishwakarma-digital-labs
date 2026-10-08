import type { Metadata } from "next";
import { CalculatorPage } from "../[type]/page";

export const metadata: Metadata = {
  title: { absolute: "Family Visa Cost Calculator | FamilyVisaUAE" },
  description: "Start with your spouse, child or parent route and receive an initial fee estimate.",
  alternates: { canonical: "/demos/familyvisauae/calculators/family" },
};

export default function FamilyCalculatorPage() {
  return <CalculatorPage params={Promise.resolve({ type: "family" })} />;
}
