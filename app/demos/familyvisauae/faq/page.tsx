import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = { title: { absolute: "UAE Family Visa FAQ | FamilyVisaUAE" }, description: "Clear answers about UAE family visa eligibility, documents, fees, timelines, Emirates ID and application support.", alternates: { canonical: "/demos/familyvisauae/faq" } };

export default function FaqPage() {
  return <FaqClient />;
}
