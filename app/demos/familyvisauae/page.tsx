import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./familyvisa.css";
import "./calculator.css";
import "./calculator-premium.css";
import "./family-quiz.css";
import "./calculator-flow.css";
import "./calculator-journey.css";
import "./calculator-reference.css";
import "./fee-breakdown.css";
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
import "./family-visual-story.css";
import "./clarity-grid.css";
import "./story-slideshow.css";
import "./welcome-hero.css";
import "./luxury-home.css";
import PreviewNav from "./PreviewNav";
import VisaCalculator from "./VisaCalculator";
import ServiceExperience from "./ServiceExperience";
import JourneyPlanner from "./JourneyPlanner";
import RouteExplorer from "./RouteExplorer";
import FamilyStorySlideshow from "./FamilyStorySlideshow";
import WelcomeHero from "./WelcomeHero";

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

const whatsapp = "https://wa.me/9718003627?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20help%20with%20a%20family%20visa.";

export default function FamilyVisaUaePreview() {
  return <main id="main-content" className="fv" data-theme="family">
    <div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div>
    <PreviewNav />
    <WelcomeHero />

    <VisaCalculator />
    <section className="fv-fee-breakdown" aria-labelledby="fee-breakdown-title">
      <div><p className="eyebrow">LIVE FEE CLARITY</p><h2 id="fee-breakdown-title">You always see the full breakup.</h2><p>No lump sums or hidden bundles. Your estimate separates official authority charges from our professional support.</p></div>
      <div className="fv-fee-breakdown-grid"><article><span>01</span><h3>Government fees</h3><p>Entry permit, status change, medical, Emirates ID and stamping charges paid to the relevant authorities.</p></article><article><span>02</span><h3>Our service charge</h3><p>Eligibility review, document preparation, filing and follow-up are shown separately before you commit.</p></article><article><span>03</span><h3>Your total</h3><p>Government fees + our service charge, with a clear next step through WhatsApp.</p></article></div>
    </section>
    <section className="fv-clarity-grid" aria-labelledby="clarity-grid-title">
      <div className="fv-clarity-intro"><p className="eyebrow">A CLEARER START</p><h2 id="clarity-grid-title">What your first route check gives you.</h2><p>A useful first answer should help you decide what to do next—not add more uncertainty.</p></div>
      <article><span>01</span><h3>Route signal</h3><p>Start with the dependent, current UAE status and the key route factors that matter.</p><b>Practical, not generic</b></article>
      <article><span>02</span><h3>Document focus</h3><p>See the starting documents to prepare before you spend time gathering everything.</p><b>Prepared before contact</b></article>
      <article><span>03</span><h3>Fee clarity</h3><p>Understand the planning estimate and the difference between authority charges and support.</p><b>No hidden bundle</b></article>
      <article className="fv-clarity-action"><span>READY WHEN YOU ARE</span><h3>Get the exact case review.</h3><p>Our team confirms the final route, documentation and current fee position for your circumstances.</p><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp our team <i>→</i></a></article>
    </section>
    <JourneyPlanner />
    <RouteExplorer />
    <section className="fv-quick-tools"><div><p className="eyebrow">USEFUL TOOLS</p><h2>Get the right answer faster.</h2><p>Start with the tool that matches your situation, then ask our team to confirm your next step.</p></div><div><Link href="/demos/familyvisauae/checklist"><b>Document Checker</b><span>Build a practical starting checklist →</span></Link><Link href="/demos/familyvisauae/fees"><b>Fee Transparency</b><span>Understand official charges and support →</span></Link><Link href="/demos/familyvisauae/visa-status"><b>Visa Status</b><span>Understand your application’s next step →</span></Link></div></section>
    <ServiceExperience />
    <section className="fv-visual-story" aria-labelledby="visual-story-title">
      <div className="fv-visual-story-media">
        <Image src="/familyvisauae-family-balcony-v2.png" alt="Family planning their UAE life together in Dubai" width={1792} height={1024} sizes="(max-width: 820px) 100vw, 56vw" />
        <div className="fv-visual-story-badge"><b>One clear route</b><span>From first check to the next step</span></div>
      </div>
      <div className="fv-visual-story-copy">
        <p className="eyebrow">DESIGNED AROUND REAL FAMILY DECISIONS</p>
        <h2 id="visual-story-title">Start with the question that matters: <em>who are you bringing to the UAE?</em></h2>
        <p>Our route check turns a complex process into a clear conversation. Start with your family member, answer a few practical questions and see what to prepare before you speak to our team.</p>
        <div className="fv-visual-story-steps">
          <article><b>01</b><div><strong>Choose the family route</strong><span>Spouse, child, parent or newborn.</span></div></article>
          <article><b>02</b><div><strong>See your preparation list</strong><span>Documents, status and supporting information.</span></div></article>
          <article><b>03</b><div><strong>Confirm the exact case</strong><span>Continue with a private WhatsApp consultation.</span></div></article>
        </div>
        <a className="primary" href="#calculator">Start the family visa check →</a>
      </div>
    </section>
    <section className="fv-online"><div><p className="eyebrow">100% ONLINE SUPPORT</p><h2>Everything handled <em>100% online.</em></h2><p>You do not need to navigate the process alone. We guide the document preparation, application steps and required appointments through a clear online journey.</p><div className="fv-online-points"><span>✓ Route and document review</span><span>✓ WhatsApp updates</span><span>✓ Medical and Emirates ID guidance</span></div><a className="primary" href="https://wa.me/9718003627?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20help%20with%20my%20family%20visa." target="_blank" rel="noreferrer">Talk to our team →</a></div><Image src="/familyvisauae-document-review-v2.png" alt="Visa consultant reviewing a family document checklist in Dubai" width={1792} height={1024} sizes="(max-width: 800px) 100vw, 50vw"/></section>
    <FamilyStorySlideshow />
    <section className="fv-consultation">
      <div className="fv-consultation-copy"><p className="eyebrow">PERSONAL ROUTE REVIEW</p><h2>One conversation can make the process <em>feel much clearer.</em></h2><p>Share your family’s situation privately with our team. We will help you understand the likely route, the documents to prepare and what should happen next.</p><div className="fv-consultation-points"><span><b>01</b> Private first review</span><span><b>02</b> Simple document guidance</span><span><b>03</b> WhatsApp follow-up</span></div><a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Start a WhatsApp consultation →</a></div>
      <div className="fv-consultation-image"><Image src="/familyvisauae-consultation-v1.png" alt="Family meeting a UAE visa consultant in a Dubai office" width={1792} height={1024} priority={false}/><span>Clear guidance, before you begin.</span></div>
    </section>
    <section className="fv-golden"><div><p className="eyebrow">LONG-TERM RESIDENCY</p><h2>Investor or high earner? Explore the <em>Golden Visa.</em></h2><p>Property, professional, investor and specialist pathways can have different requirements. Start with the route that fits your circumstances.</p></div><div><Link className="secondary" href="/demos/familyvisauae/golden-visa">Explore Golden Visa</Link><Link className="primary" href="/demos/familyvisauae/calculators/golden">Golden Visa Calculator →</Link></div></section>
    <section className="fv-team"><div><p className="eyebrow">ON YOUR SIDE</p><h2>Guidance from a team that follows through.</h2><p>FamilyVisaUAE is operated by 800 DOCS LLC SOC, an independent private consultancy. We help customers understand requirements, prepare documents and follow their applications through the relevant official channels.</p><div className="fv-team-points"><span>Private consultancy</span><span>Clear document guidance</span><span>WhatsApp-first support</span></div><a className="primary" href="https://wa.me/9718003627?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20to%20speak%20with%20your%20team." target="_blank" rel="noreferrer">Speak with the team →</a></div><Image src="/familyvisauae-team.png" alt="FamilyVisaUAE consultancy support team in Dubai" width={1536} height={1024}/></section>

    <section className="fv-trust-section"><p className="eyebrow">CLEAR, PRIVATE SUPPORT</p><h2>Guidance that keeps your next step simple.</h2><div><article><b>01</b><h3>Private consultancy</h3><p>We explain the role of our team and the official authority process clearly.</p></article><article><b>02</b><h3>Document-first review</h3><p>Understand what to prepare before you begin an application.</p></article><article><b>03</b><h3>WhatsApp updates</h3><p>Use a familiar channel to ask questions and receive next-step guidance.</p></article></div></section>

    <section className="fv-cta-band" aria-label="Family visa consultation">
      <Image className="fv-cta-image" src="/familyvisauae-reception-v1.png" alt="FamilyVisaUAE consultation support in Dubai" width={1792} height={1024}/>
      <div><p className="eyebrow">FREE INITIAL GUIDANCE</p><h2>Not sure which route applies to your family?</h2><p>Send your situation to our team for a straightforward next-step recommendation.</p></div>
      <a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Talk to a visa consultant →</a>
    </section>

    <section className="fv-approval" id="contact"><p className="eyebrow">Speak with our team</p><h2>Ready to start your UAE visa journey?</h2><p>Call 800 DOCS (3627) or email info@familyvisa.ae.</p><div><span>709 Business Village B Block, Next to Clock Tower, Port Saeed, Deira, Dubai, UAE</span><a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div></section>
    <footer className="fv-site-footer"><div className="fv-brand"><span className="fv-mark">FV</span><span>FamilyVisa<span>UAE</span></span></div><p>FamilyVisaUAE is operated by 800 DOCS LLC SOC, an independent private consultancy and DET-licensed third-party professional-services provider (Commercial Licence No. 1237998). We are not a government authority. With customer authorisation, we assist with documentation and submissions through relevant official channels; government fees are paid to the relevant authorities and professional fees are disclosed separately. Content last reviewed: 01 September 2026.</p><nav className="fv-footer-links" aria-label="Footer navigation"><Link href="/demos/familyvisauae/calculators">Calculators</Link><Link href="/demos/familyvisauae/guides">Guides</Link><Link href="/demos/familyvisauae/contact">Contact</Link><Link href="/demos/familyvisauae/about">About</Link><Link href="/demos/familyvisauae/terms-and-privacy">Terms & privacy</Link></nav></footer>
  </main>;
}


