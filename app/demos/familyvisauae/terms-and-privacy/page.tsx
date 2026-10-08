import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: { absolute: "Terms, Privacy & Consultancy Disclosure | FamilyVisaUAE" }, description: "Read FamilyVisaUAE terms, privacy information, fee disclosures and independent private-consultancy role.", alternates: { canonical: "/demos/familyvisauae/terms-and-privacy" } };
import "../familyvisa.css";
import PreviewNav from "../PreviewNav";
import WhatsAppIconLink from "../WhatsAppIconLink";
import "../legal.css";

const sections = [
  ["Our role", "FamilyVisaUAE is operated by 800 DOCS LLC SOC, an independent private consultancy licensed by Dubai DET (Commercial Licence No. 1237998). We are not a government authority and are not affiliated with or endorsed by UAE government departments."],
  ["What we support", "With customer authorisation, we can assist with business setup, visa typing, documentation preparation, application completion and submission through relevant official channels, including GDRFA Dubai, ICP, DET, MOFA and MOHRE where applicable."],
  ["Fees and estimates", "Government fees are determined by the relevant authority and paid to that authority. Our professional support fee is separate and disclosed before any customer commitment. Calculator figures are planning estimates, not official quotations or a guarantee of eligibility or approval."],
  ["Direct application option", "Customers may choose to use official government portals directly. Our role is to provide optional private professional support for customers who choose to authorise it."],
  ["Your documents and privacy", "Share only documents relevant to your route. We use the information you provide to review your request, prepare requested support and communicate with you. Do not send passwords, payment-card information or unnecessary personal documents over WhatsApp."],
] as const;

export default function TermsPrivacyPage() {
  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Terms & privacy</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">TERMS & PRIVACY</p><h1>Clear information before you proceed.</h1><p className="lead">We believe customers should understand our private-consultancy role, what is paid to official authorities, and what happens to the details they choose to share.</p><div className="fv-legal-sections">{sections.map(([title, text], index) => <article key={title}><b>{String(index + 1).padStart(2, "0")}</b><h2>{title}</h2><p>{text}</p></article>)}</div><div className="fv-cta" style={{ marginTop: 40 }}><Link className="secondary" href="/demos/familyvisauae/contact">Contact the team</Link><WhatsAppIconLink href="https://wa.me/9718003627?text=Hi%20FamilyVisaUAE%2C%20I%20have%20a%20question%20about%20your%20terms%20or%20privacy%20information." label="Ask about terms or privacy on WhatsApp"/></div><p className="fv-calculator-privacy">Content last reviewed: 01 September 2026. This page provides general information and is not legal advice.</p></section></main>;
}

