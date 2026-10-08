import type { Metadata } from "next";
import VisaStatusTracker from "./VisaStatusTracker";

export const metadata: Metadata = { title: { absolute: "UAE Visa Status Support | FamilyVisaUAE" }, description: "Get private support understanding the next step in a UAE visa application and the relevant official confirmation channel.", alternates: { canonical: "/demos/familyvisauae/visa-status" } };

export default function VisaStatusPage() {
  return <VisaStatusTracker />;
}
