import type { Metadata } from "next";
import Link from "next/link";
import "./familyvisa.css";
import "./calculator.css";
import "./calculator-premium.css";
import "./family-quiz.css";
import "./welcome-hero.css";
import "./luxury-home.css";
import "./customer-first.css";
import "./footer-links.css";
import PreviewNav from "./PreviewNav";
import VisaCalculator from "./VisaCalculator";
import WelcomeHero from "./WelcomeHero";
import CustomerFirstSections from "./CustomerFirstSections";

export const metadata: Metadata = { title: { absolute: "FamilyVisaUAE | UAE Visa & Document Support" }, description: "Find UAE visa, Emirates ID and document support, check a likely route and understand fee transparency before you proceed.", alternates: { canonical: "/demos/familyvisauae" } };
const whatsapp = "https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20help%20with%20a%20UAE%20visa.";

export default function FamilyVisaUaePreview(){return <main id="main-content" className="fv" data-theme="family"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div><PreviewNav /><WelcomeHero /><VisaCalculator /><CustomerFirstSections /><section className="fv-approval" id="contact"><p className="eyebrow">PRIVATE CASE SUPPORT</p><h2>Still unsure which service applies?</h2><p>Send the team a short description of your situation. We will help you identify the practical next step, documents to prepare and the relevant official channel.</p><div><span>Private consultancy · Clear document guidance · WhatsApp-first support</span><a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Ask the team on WhatsApp →</a></div></section><footer className="fv-site-footer"><div className="fv-brand"><span className="fv-mark">FV</span><span>FamilyVisa<span>UAE</span></span></div><p>FamilyVisaUAE is operated by Brightlink Management Consultancy LLC, an independent private consultancy and DET-licensed third-party professional-services provider. We are not a government authority. Government fees are set by the relevant authorities; professional support is explained separately.</p><nav className="fv-footer-links" aria-label="Footer navigation"><Link href="/demos/familyvisauae/services">All services</Link><Link href="/demos/familyvisauae/calculators">Calculators</Link><Link href="/demos/familyvisauae/fees">Fee transparency</Link><Link href="/demos/familyvisauae/guides">Guides</Link><Link href="/demos/familyvisauae/contact">Contact</Link></nav></footer></main>}
