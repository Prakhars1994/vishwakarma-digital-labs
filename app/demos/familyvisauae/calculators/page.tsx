import Link from "next/link";
import "../familyvisa.css";
import "../calculator.css";
import "./hub.css";
import PreviewNav from "../PreviewNav";

const calculators = [
  { title: "Family Visa", text: "Start with spouse, child or parent sponsorship and a planning estimate.", href: "/demos/familyvisauae/calculators/family", label: "Family Visa Calculator" },
  { title: "Golden Visa", text: "Review a long-term residency pathway and the evidence to prepare.", href: "/demos/familyvisauae/calculators/golden", label: "Golden Visa Calculator" },
  { title: "Property Visa", text: "Start with property ownership details and a residency route review.", href: "/demos/familyvisauae/calculators/property", label: "Property Visa Calculator" },
  { title: "Newborn Visa", text: "Prepare a clear starting route for a baby born in the UAE.", href: "/demos/familyvisauae/calculators/newborn", label: "Newborn Visa Calculator" },
  { title: "PRO Services", text: "Describe a business or government-facing request and receive a clear quote handoff.", href: "/demos/familyvisauae/calculators/pro", label: "PRO Services Estimate" },
];

export default function CalculatorHubPage() {
  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document tools</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">CALCULATORS & ESTIMATES</p><h1>Start with the tool that fits your route.</h1><p className="lead">Choose a route to see practical preparation guidance and a planning estimate. Final eligibility, authority fees and professional support are confirmed for your individual case.</p><div className="fv-calculator-options fv-calculator-hub">{calculators.map((calculator) => <article key={calculator.href}><strong>{calculator.title}</strong><span>{calculator.text}</span><Link className="primary" href={calculator.href}>{calculator.label} →</Link></article>)}</div><div className="fv-cta"><Link className="secondary" href="/demos/familyvisauae/checklist">Open document checker</Link><a className="primary" href="https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20need%20help%20choosing%20the%20right%20calculator." target="_blank" rel="noreferrer">Ask on WhatsApp</a></div></section></main>;
}
