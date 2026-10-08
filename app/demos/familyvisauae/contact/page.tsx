import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = { title: { absolute: "Contact FamilyVisaUAE | UAE Visa Support" }, description: "Contact FamilyVisaUAE by WhatsApp, phone or email for route-specific UAE visa and document support.", alternates: { canonical: "/demos/familyvisauae/contact" } };

export default function ContactPage() {
  return <ContactClient />;
}
