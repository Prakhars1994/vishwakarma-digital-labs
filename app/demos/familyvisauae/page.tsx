import type { Metadata } from "next";
import "./familyvisa.css";
import PreviewNav from "./PreviewNav";

export const metadata: Metadata = {
  title: "FamilyVisaUAE — Structure Preview",
  description: "Client approval preview for the FamilyVisaUAE website architecture and design direction.",
};

const services = [
  ["Family Residence Visa","Spouse, children, parents, renewal and related residence services."],
  ["Golden Visa","Eligibility-led pathways with dedicated requirements, fees and process pages."],
  ["Emirates ID","New ID, renewal, replacement, typing and related medical-fitness guidance."],
  ["PRO Services","Government processing, immigration and approved business support services."],
  ["Document Services","Attestation, legal translation, POA, wills and approved document services."],
  ["Property Services","Property visa and other approved property-related services."],
];

const languages=["English","العربية","Русский","Deutsch","Español","Français","Türkçe","中文","हिन्दी","اردو"];

export default function FamilyVisaUaePreview(){
 return <main id="main-content" className="fv">
  <div className="fv-top"><span>FamilyVisaUAE • Client structure preview</span><span>UAE visa & document services</span></div>
  <PreviewNav />\n\n  <section className="fv-hero" id="top">
   <div><p className="eyebrow">A clearer way through UAE residency</p><h1>Visa services built around <em>clarity, speed & confidence.</em></h1>
   <p className="lead">A premium multilingual structure for FamilyVisaUAE—designed to make complex services easy to discover, understand and enquire about.</p>
   <div className="fv-cta"><a className="primary" href="#services">Explore services →</a><a className="secondary" href="#calculators">Check calculators</a></div>
   <div className="trust"><span>✓ Mobile-first</span><span>✓ Multilingual</span><span>✓ CMS-ready</span><span>✓ SEO-ready</span></div></div>
   <aside className="fv-panel"><span className="panel-label">Find your route</span><h2>What do you need help with?</h2>
    <div className="quick"><button>Family Visa <b>→</b></button><button>Golden Visa <b>→</b></button><button>Emirates ID <b>→</b></button><button>PRO Services <b>→</b></button></div>
    <p>Final eligibility, fees and calculator logic will use client-approved information.</p>
   </aside>
  </section>

  <section className="fv-section" id="services"><div className="section-head"><div><p className="eyebrow">Proposed information architecture</p><h2>One simple menu. Every major service.</h2></div><p>Reusable service templates let the final platform scale to the approved route count without creating inconsistent layouts.</p></div>
   <div className="service-grid">{services.map(([t,d],i)=><article key={t}><span>0{i+1}</span><h3>{t}</h3><p>{d}</p><a href="#structure">View structure →</a></article>)}</div>
  </section>

  <section className="fv-dark" id="calculators"><div><p className="eyebrow">Interactive tools</p><h2>Four focused calculators.</h2><p>Each calculator will be implemented and tested separately after the client confirms current rules, eligibility conditions and fees.</p></div>
   <div className="calc-grid">{["Family Visa","Golden Visa","PRO Services","Property Visa"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><small>Calculator</small></div>)}</div>
  </section>

  <section className="fv-section" id="structure"><div className="section-head"><div><p className="eyebrow">Reusable service page</p><h2>A consistent journey on every route.</h2></div></div>
   <div className="journey">{["Service hero","Key benefits","Eligibility","Required documents","Process","Fees","Important notes","FAQs","Related services","WhatsApp CTA"].map((x,i)=><div key={x}><b>{String(i+1).padStart(2,"0")}</b><span>{x}</span></div>)}</div>
  </section>

  <section className="fv-languages"><div><p className="eyebrow">Multilingual architecture</p><h2>Designed for an international UAE audience.</h2><p>Arabic and Urdu will support right-to-left layouts. Final translations remain subject to client supply or approval.</p></div><div className="lang-grid">{languages.map(x=><span key={x}>{x}</span>)}</div></section>

  <section className="fv-admin"><div><p className="eyebrow">CMS-ready foundation</p><h2>The client stays in control.</h2><p>Planned admin areas: Services • Categories • Pages • Fees • Calculator values • FAQs • Guides • Contact details • Languages • SEO • Site settings.</p></div><div className="admin-card"><span>Content Manager</span><div><b>Family Residence Visa</b><small>Heading · content · fees · FAQs · SEO</small></div><div><b>Golden Visa</b><small>Heading · content · fees · FAQs · SEO</small></div><button>Edit content →</button></div></section>

  <section className="fv-approval" id="contact"><p className="eyebrow">Part 1 • Client approval milestone</p><h2>Structure & design direction ready for review.</h2><p>This preview establishes the navigation, page hierarchy, multilingual approach, reusable service system and visual direction. Detailed content, live fees and calculator rules will be added only after approval.</p><div><span>Next: full development</span><strong>30% milestone • $90</strong></div></section>
  <footer><div className="fv-brand"><span className="fv-mark">FV</span><span>FamilyVisa<span>UAE</span></span></div><p>Structure preview • Developed by Vishwakarma Digital Labs</p></footer>
 </main>
}