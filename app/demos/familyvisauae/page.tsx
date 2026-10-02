import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./familyvisa.css";
import "./calculator.css";
import "./calculator-flow.css";
import "./calculator-journey.css";
import "./journey-planner.css";
import "./footer-links.css";
import "./service-experience.css";
import "./themes.css";
import "./family-landing.css";
import "./experience-images.css";
import "./trust.css";
import "./ten-palettes.css";
import "./language.css";
import "./palette-visibility.css";
import "./reference-red.css";
import "./palette-control.css";
import "./quick-tools.css";
import "./online.css";
import "./team.css";
import "./consultation.css";
import "./golden.css";
import "./eligibility-actions.css";
import PreviewNav from "./PreviewNav";
import ThemePicker from "./ThemePicker";
import VisaCalculator from "./VisaCalculator";
import ServiceExperience from "./ServiceExperience";
import JourneyPlanner from "./JourneyPlanner";
import RouteExplorer from "./RouteExplorer";
import SponsorQuickLinks from "./SponsorQuickLinks";

export const metadata: Metadata = {
  title: { absolute: "FamilyVisaUAE | UAE Family Visa Calculator" },
  description: "Check your UAE family visa route, understand estimated government fees, and speak with a visa consultant.",
  alternates: { canonical: "/demos/familyvisauae" },
  openGraph: {
    title: "FamilyVisaUAE | UAE Family Visa Calculator",
    description: "Check your UAE family visa route, understand estimated government fees, and speak with a visa consultant.",
    images: [{ url: "/familyvisauae-hero.png", width: 1536, height: 1024, alt: "FamilyVisaUAE family visa guidance" }],
  },
  twitter: { card: "summary_large_image", title: "FamilyVisaUAE | UAE Family Visa Calculator", description: "Check your UAE family visa route and estimated government fees.", images: ["/familyvisauae-hero.png"] },
};

const whatsapp = "https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20help%20with%20a%20family%20visa.";

export default function FamilyVisaUaePreview() {
  return <main id="main-content" className="fv" data-theme="family">
    <div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div>
    <PreviewNav />
    <ThemePicker />

    <section className="fv-hero fv-family-hero" id="top" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,.98) 0%, rgba(255,255,255,.93) 44%, rgba(255,255,255,.12) 100%), url('/familyvisauae-hero.png')" }}>
      <div>
        <p className="eyebrow">UAE FAMILY VISA SUPPORT</p>
        <h1>Bring your family to the UAE, <em>with confidence.</em></h1>
        <p className="lead">Check the right visa route, understand estimated government fees, and let our team guide your application from documents to Emirates ID.</p>
        <div className="fv-cta"><a className="primary" href="#calculator">Calculate visa cost →</a><a className="secondary" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div>
        <div className="trust"><span>✓ Online guidance</span><span>✓ Clear fee separation</span><span>✓ Private consultancy</span></div>
      </div>
      <aside className="fv-panel">
        <span className="panel-label">Start here</span><h2>Who are you sponsoring?</h2>
        <SponsorQuickLinks />
        <p>Answer a few questions and request an exact route review on WhatsApp.</p>
      </aside>
    </section>

    <VisaCalculator />
    <JourneyPlanner />
    <RouteExplorer />
    <section className="fv-quick-tools"><div><p className="eyebrow">USEFUL TOOLS</p><h2>Get the right answer faster.</h2><p>Start with the tool that matches your situation, then ask our team to confirm your next step.</p></div><div><Link href="/demos/familyvisauae/checklist"><b>Document Checker</b><span>Build a practical starting checklist →</span></Link><Link href="/demos/familyvisauae/fees"><b>Fee Transparency</b><span>Understand official charges and support →</span></Link><Link href="/demos/familyvisauae/visa-status"><b>Visa Status</b><span>Understand your application’s next step →</span></Link></div></section>
    <ServiceExperience />
    <section className="fv-online"><div><p className="eyebrow">100% ONLINE SUPPORT</p><h2>Everything handled <em>100% online.</em></h2><p>You do not need to navigate the process alone. We guide the document preparation, application steps and required appointments through a clear online journey.</p><div className="fv-online-points"><span>✓ Route and document review</span><span>✓ WhatsApp updates</span><span>✓ Medical and Emirates ID guidance</span></div><a className="primary" href="https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20help%20with%20my%20family%20visa." target="_blank" rel="noreferrer">Talk to our team →</a></div><Image src="/familyvisauae-documents.png" alt="Family reviewing UAE visa documents in Dubai" width={1536} height={1024}/></section>
    <section className="fv-consultation">
      <div className="fv-consultation-copy"><p className="eyebrow">PERSONAL ROUTE REVIEW</p><h2>One conversation can make the process <em>feel much clearer.</em></h2><p>Share your family’s situation privately with our team. We will help you understand the likely route, the documents to prepare and what should happen next.</p><div className="fv-consultation-points"><span><b>01</b> Private first review</span><span><b>02</b> Simple document guidance</span><span><b>03</b> WhatsApp follow-up</span></div><a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Start a WhatsApp consultation →</a></div>
      <div className="fv-consultation-image"><Image src="/familyvisauae-consultation-v1.png" alt="Family meeting a UAE visa consultant in a Dubai office" width={1792} height={1024} priority={false}/><span>Clear guidance, before you begin.</span></div>
    </section>
    <section className="fv-golden"><div><p className="eyebrow">LONG-TERM RESIDENCY</p><h2>Investor or high earner? Explore the <em>Golden Visa.</em></h2><p>Property, professional, investor and specialist pathways can have different requirements. Start with the route that fits your circumstances.</p></div><div><Link className="secondary" href="/demos/familyvisauae/golden-visa">Explore Golden Visa</Link><Link className="primary" href="/demos/familyvisauae/calculators/golden">Golden Visa Calculator →</Link></div></section>
    <section className="fv-team"><div><p className="eyebrow">ON YOUR SIDE</p><h2>Guidance from a team that follows through.</h2><p>FamilyVisaUAE is operated by Brightlink Management Consultancy LLC, an independent private consultancy. We help customers understand requirements, prepare documents and follow their applications through the relevant official channels.</p><div className="fv-team-points"><span>Private consultancy</span><span>Clear document guidance</span><span>WhatsApp-first support</span></div><a className="primary" href="https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noreferrer">Speak with the team →</a></div><Image src="/familyvisauae-team.png" alt="FamilyVisaUAE consultancy support team in Dubai" width={1536} height={1024}/></section>

    <section className="fv-trust-section"><p className="eyebrow">CLEAR, PRIVATE SUPPORT</p><h2>Guidance that keeps your next step simple.</h2><div><article><b>01</b><h3>Private consultancy</h3><p>We explain the role of our team and the official authority process clearly.</p></article><article><b>02</b><h3>Document-first review</h3><p>Understand what to prepare before you begin an application.</p></article><article><b>03</b><h3>WhatsApp updates</h3><p>Use a familiar channel to ask questions and receive next-step guidance.</p></article></div></section>

    <section className="fv-cta-band" aria-label="Family visa consultation">
      <Image className="fv-cta-image" src="/familyvisauae-reception-v1.png" alt="FamilyVisaUAE consultation support in Dubai" width={1792} height={1024}/>
      <div><p className="eyebrow">FREE INITIAL GUIDANCE</p><h2>Not sure which route applies to your family?</h2><p>Send your situation to our team for a straightforward next-step recommendation.</p></div>
      <a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Talk to a visa consultant →</a>
    </section>

    <section className="fv-approval" id="contact"><p className="eyebrow">Speak with our team</p><h2>Ready to start your UAE visa journey?</h2><p>Call or WhatsApp +971 56 655 6645, or email info@familyvisauae.com. Monday–Saturday, 9 AM–6 PM; Sunday closed.</p><div><span>Office M08-27, M1 Floor, Crystal Tower, Millennium Central, Al Asayel St, Business Bay, Dubai, U.A.E. · PO Box 554552</span><a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></section>
    <footer className="fv-site-footer"><div className="fv-brand"><span className="fv-mark">FV</span><span>FamilyVisa<span>UAE</span></span></div><p>FamilyVisaUAE is operated by Brightlink Management Consultancy LLC, an independent private consultancy and DET-licensed third-party professional-services provider (Licence No. 1053387). We are not a government authority. With customer authorisation, we assist with documentation and submissions through relevant official channels; government fees are paid to the relevant authorities and professional fees are disclosed separately. Content last reviewed: 01 September 2026.</p><nav className="fv-footer-links" aria-label="Footer navigation"><Link href="/demos/familyvisauae/calculators">Calculators</Link><Link href="/demos/familyvisauae/guides">Guides</Link><Link href="/demos/familyvisauae/contact">Contact</Link><Link href="/demos/familyvisauae/about">About</Link><Link href="/demos/familyvisauae/terms-and-privacy">Terms & privacy</Link></nav></footer>
  </main>;
}
