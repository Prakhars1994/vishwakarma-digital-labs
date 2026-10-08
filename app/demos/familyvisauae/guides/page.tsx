import type { Metadata } from "next";
import GuideHub from "./GuideHub";

export const metadata: Metadata = { title: { absolute: "UAE Visa Guides & Resources | FamilyVisaUAE" }, description: "Browse practical UAE family visa, residency, Emirates ID, document and application guides from FamilyVisaUAE.", alternates: { canonical: "/demos/familyvisauae/guides" } };

export default function GuidesPage() {
  return <GuideHub />;
}
