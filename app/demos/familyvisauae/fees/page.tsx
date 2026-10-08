import type { Metadata } from "next";
import Link from "next/link";
import "../familyvisa.css";
import PreviewNav from "../PreviewNav";
import WhatsAppIconLink from "../WhatsAppIconLink";

export const metadata: Metadata = { title: { absolute: "UAE Visa Pricing & Fee Guide | FamilyVisaUAE" }, description: "Transparent FamilyVisaUAE service fees, family-visa planning examples and Golden Visa package estimates.", alternates: { canonical: "/demos/familyvisauae/fees" } };

const serviceFees=[
 ["Family visa · new applicant outside UAE","Professional fee quoted separately","Published government-fee example: AED 1,376 per adult"],
 ["Family visa · new applicant inside UAE","Professional fee quoted separately","Published government-fee example: AED 2,656 per adult"],
 ["Family visa renewal","Professional fee quoted separately","Published government-fee example: AED 1,037 per adult"],
 ["Golden Visa · property-owner main applicant","Professional fee quoted separately","Published government fees: AED 9,421"],
 ["Golden Visa · most non-property routes","Professional fee quoted separately","Published government fees: AED 4,137"],
 ["Golden Visa · adult dependent","Professional fee quoted separately","Published government fees: AED 4,137"],
 ["Golden Visa · child dependent under 18","Professional fee quoted separately","Published government fees: AED 3,864"]
] as const;
const goldenPackages=[
 ["Property-owner main applicant","AED 9,421","Government fees","Includes the published DLD/admin, immigration/visa, 10-year Emirates ID and standard medical components."],
 ["Most non-property Golden routes","AED 4,137","Government fees","Published total for nomination, fixed-deposit, manager and skilled-talent main-applicant routes."],
 ["Child dependent under 18","AED 3,864","Government fees","Published immigration/visa and 10-year Emirates ID total; no paid medical fitness test."]
] as const;
const familyExamples=[["New adult · outside UAE","AED 1,376"],["New adult · inside UAE","AED 2,656"],["Adult renewal","AED 1,037"],["Child renewal","AED 764"]] as const;
const questions=[
 ["Are government charges marked up?","The reference pricing policy states that authority charges are passed through at the amount shown on the relevant receipt."],
 ["Is the support fee refundable?","The reference policy states that eligibility is checked before submission; refund treatment depends on the agreed scope and whether work or submission has begun."],
 ["Are family packages available?","The reference site states that families with three or more applicants can request a reduced per-applicant support quote."],
 ["How can I pay?","Payment methods and timing should be confirmed with the team before work begins; authority and professional charges remain separately identified."]
] as const;

export default function FeesPage(){
 const message=encodeURIComponent("Hi FamilyVisaUAE, I would like an itemised estimate for my visa route.");
 return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Transparent pricing</span></div><PreviewNav/>
  <section className="fv-section"><p className="eyebrow">FIXED SUPPORT, AUTHORITY FEES IDENTIFIED</p><h1>Know what you are paying for before you proceed.</h1><p className="lead">The migrated pricing model separates professional support from authority transactions and uses the reference site's public figures as planning information. Current charges and final scope must be confirmed for the individual case.</p><div className="fv-cta"><Link className="primary" href="/demos/familyvisauae/calculators/family">Build my route estimate →</Link><WhatsAppIconLink href={"https://wa.me/9718003627?text="+message} label="Request an itemised estimate on WhatsApp"/></div></section>
  <section className="fv-section" style={{background:"#f7f3ef"}}><p className="eyebrow">SERVICE-FEE TABLE</p><h2>Reference pricing migrated into the new site.</h2><div className="service-grid">{serviceFees.map(([service,fee,authority],i)=><article key={service}><span>0{i+1}</span><h3>{service}</h3><p><strong>{fee}</strong><br/><br/>{authority}</p></article>)}</div></section>
  <section className="fv-section"><p className="eyebrow">FAMILY VISA PLANNING EXAMPLES</p><h2>Inside, outside and renewal routes have different totals.</h2><p className="lead">Examples are before any one-time family-file opening fee and are not a substitute for a current authority quote.</p><div className="service-grid">{familyExamples.map(([name,price],i)=><article key={name}><span>EXAMPLE 0{i+1}</span><h3>{name}</h3><p><strong>{price}</strong></p></article>)}</div></section>
  <section className="fv-section"><p className="eyebrow">GOLDEN VISA GOVERNMENT FEES</p><h2>Current published authority-fee examples.</h2><p className="lead">These figures are government fees published by the current reference. Professional service charges, insurance, premium medical and case-specific extras are separate and must be quoted before commitment.</p><div className="service-grid">{goldenPackages.map(([name,price,timing,detail],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p><strong>{price}</strong><br/>{timing}<br/><br/>{detail}</p><WhatsAppIconLink href={"https://wa.me/9718003627?text="+encodeURIComponent("Hi FamilyVisaUAE, I would like an itemised Golden Visa fee breakdown for "+name+".")} label={"Ask about "+name}/></article>)}</div></section>
  <section className="fv-section" style={{background:"#f7f3ef"}}><p className="eyebrow">PRICING FAQ</p><h2>Important commercial questions before payment.</h2><div className="service-grid">{questions.map(([q,a],i)=><article key={q}><span>0{i+1}</span><h3>{q}</h3><p>{a}</p></article>)}</div></section>
  <section className="fv-approval"><p className="eyebrow">CURRENT QUOTE</p><h2>Get a route-specific fee breakdown.</h2><p>Share the applicant type, current UAE status and service required. The team can confirm the current authority position and optional professional support before you proceed.</p><div className="fv-cta"><WhatsAppIconLink href={"https://wa.me/9718003627?text="+message} label="Ask for a clear FamilyVisaUAE fee breakdown"/><Link className="secondary" href="/demos/familyvisauae/services">Browse services</Link></div></section>
 </main>;
}
