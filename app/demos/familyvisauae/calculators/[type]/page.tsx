import type { Metadata } from "next";
import Link from "next/link";
import VisaCalculator from "../../VisaCalculator";
import ProCalculator from "../../ProCalculator";
import "../../familyvisa.css";
import "../../calculator.css";
import "../../calculator-flow.css";
import "../../calculator-journey.css";
import PreviewNav from "../../PreviewNav";

const calculators: Record<string, { title: string; index: number; text: string }> = {
  family: { title: "Family Visa Cost Calculator", index: 0, text: "Start with your spouse, child or parent route and receive an initial fee estimate." },
  golden: { title: "Golden Visa Cost Calculator", index: 1, text: "Explore a starting estimate for a long-term UAE residency route." },
  property: { title: "Property Visa Cost Calculator", index: 2, text: "Review a starting estimate for property-related UAE residency." },
  newborn: { title: "Newborn Visa Cost Calculator", index: 3, text: "Start the visa journey for a baby born in the UAE." },
  pro: { title: "PRO Services Estimate", index: 0, text: "Describe your government-facing request and receive a clear starting checklist and quote handoff." },
};
export function generateStaticParams() { return Object.keys(calculators).map((type) => ({ type })); }
export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> { const { type } = await params; return { title: { absolute: `${calculators[type]?.title ?? "Visa Cost Calculator"} | FamilyVisaUAE` } }; }
export default async function CalculatorPage({ params }: { params: Promise<{ type: string }> }) { const { type } = await params; const calculator = calculators[type] ?? calculators.family; return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa calculators</span></div><PreviewNav /><section className="fv-section" style={{ paddingBottom: 30 }}><p className="eyebrow">LIVE ESTIMATE</p><h1>{calculator.title}</h1><p className="lead">{calculator.text} Final eligibility and official charges are confirmed for your individual case.</p><Link className="secondary" href="/demos/familyvisauae/guides">Read visa guides</Link></section>{type === "pro" ? <ProCalculator /> : <VisaCalculator initialRoute={calculator.index} />}</main>; }
