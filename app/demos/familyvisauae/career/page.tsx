import type { Metadata } from "next";
import InfoPage from "../InfoPage";
export const metadata: Metadata = { title: { absolute: "Careers | FamilyVisaUAE" }, description: "Career enquiries for UAE documentation, customer support and professional service operations with FamilyVisaUAE.", alternates: { canonical: "/demos/familyvisauae/career" } };
export default function CareerPage(){return <InfoPage eyebrow="CAREERS" title="Build clearer customer journeys." text="FamilyVisaUAE welcomes enquiries from people experienced in UAE documentation, customer support and service operations." points={["Customer-first communication", "Attention to document detail", "Professional UAE service knowledge", "Send an introduction through WhatsApp"]}/>}
