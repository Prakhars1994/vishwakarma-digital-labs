import type { Metadata } from "next";
import Link from "next/link";
import VisaCalculator from "../../VisaCalculator";
import ProCalculator from "../../ProCalculator";
import "../../familyvisa.css";
import "../../calculator.css";
import "../../calculator-flow.css";
import "../../calculator-journey.css";
import "./calculator-page.css";
import "./luxury-residency.css";
import PreviewNav from "../../PreviewNav";

const calculators: Record<string, { title: string; index: number; text: string; label: string; points: string[] }> = {
  family: { title: "Family Visa Cost Calculator", index: 0, text: "Start with your spouse, child or parent route and receive an initial fee estimate.", label: "Family residence", points: ["Choose a family member", "See a starting document list", "Review an indicative fee plan"] },
  golden: { title: "Golden Visa Cost Calculator", index: 1, text: "Explore a starting estimate for a long-term UAE residency route.", label: "Long-term residency", points: ["Choose your qualifying route", "Understand supporting evidence", "See the next steps before you apply"] },
  property: { title: "Property Visa Cost Calculator", index: 2, text: "Review a starting estimate for property-related UAE residency.", label: "Property residency", points: ["Start with your ownership position", "Prepare property evidence", "Review the route with our team"] },
  newborn: { title: "Newborn Visa Cost Calculator", index: 3, text: "Start the visa journey for a baby born in the UAE.", label: "Newborn residence", points: ["Understand the starting timeline", "Prepare parent and newborn records", "Confirm the next authority step"] },
  pro: { title: "PRO Services Estimate", index: 0, text: "Describe your government-facing request and receive a clear starting checklist and quote handoff.", label: "Business support", points: ["Describe the request", "Receive a document starting point", "Confirm authority and support charges"] },
};
export function generateStaticParams() { return Object.keys(calculators).map((type) => ({ type })); }
export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> { const { type } = await params; return { title: { absolute: `${calculators[type]?.title ?? "Visa Cost Calculator"} | FamilyVisaUAE` } }; }
export default async function CalculatorPage({ params }: { params: Promise<{ type: string }> }) { const { type } = await params; const calculator = calculators[type] ?? calculators.family; return <main className={`fv fv-calculator-route fv-calculator-${type}`}><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa calculators</span></div><PreviewNav /><section className="fv-calculator-hero"><div className="fv-calculator-hero-copy"><p className="eyebrow">LIVE ESTIMATE · {calculator.label}</p><h1>{calculator.title}</h1><p className="lead">{calculator.text} <strong>Final eligibility and official charges are confirmed for your individual case.</strong></p><div className="fv-calculator-hero-actions"><a className="primary" href="#calculator">Start my route check <span aria-hidden="true">→</span></a><Link className="secondary" href="/demos/familyvisauae/guides">Read visa guides</Link></div><p className="fv-calculator-hero-note">No account needed · Takes about 2 minutes · Private first review</p></div><aside className="fv-calculator-hero-card" aria-label="What this calculator provides"><div className="fv-calc-card-top"><span>YOUR STARTING PLAN</span><b>01 / 03</b></div><h2>Clear answers before you prepare documents.</h2><ol>{calculator.points.map((point, index) => <li key={point}><b>{String(index + 1).padStart(2, "0")}</b><span>{point}</span><i aria-hidden="true">↗</i></li>)}</ol><div className="fv-calc-card-foot"><span>Need a human answer?</span><a href="https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20need%20help%20with%20a%20visa%20route." target="_blank" rel="noreferrer" aria-label="Chat with FamilyVisaUAE on WhatsApp">◉</a></div></aside></section>{type === "pro" ? <ProCalculator /> : <VisaCalculator initialRoute={calculator.index} />}</main>; }
