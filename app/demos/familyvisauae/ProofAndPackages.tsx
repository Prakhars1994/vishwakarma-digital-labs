import Link from "next/link";

const fees = [
  { name: "Property-owner main applicant", price: "AED 9,421", details: ["DLD & admin: AED 5,284", "Immigration & visa: AED 2,710", "10-year Emirates ID: AED 1,154", "Standard medical: AED 273"] },
  { name: "Most non-property Golden routes", price: "AED 4,137", details: ["Immigration & visa: AED 2,710", "10-year Emirates ID: AED 1,154", "Standard medical: AED 273", "Property investment is not part of this fee"] },
  { name: "Child dependent under 18", price: "AED 3,864", details: ["Immigration & visa: AED 2,710", "10-year Emirates ID: AED 1,154", "No paid medical fitness test", "Same dependent fee across Golden categories"] },
] as const;

const scenarios = [
  ["Spouse visa · Dubai", "Route review → document check → itemised estimate → application support."],
  ["Parents visa · Dubai", "Eligibility review → relationship evidence → insurance and file planning → next-step support."],
  ["Golden Visa · Property investor", "Eligibility review → property evidence → government-fee breakdown → medical and Emirates ID coordination."],
] as const;

export default function ProofAndPackages() {
  return <>
    <section className="fv-proof-strip" aria-label="FamilyVisaUAE reference service claims"><div><b>20,000+</b><span>visas processed · reference claim*</span></div><div><b>5–10</b><span>working days · typical new-family-visa reference*</span></div><div><b>100%</b><span>online service positioning*</span></div><div><b>4.9 ★</b><span>Google rating · reference claim*</span></div></section>
    <section className="fv-packages" aria-labelledby="package-title"><div className="fv-package-heading"><p className="eyebrow">GOLDEN VISA GOVERNMENT FEES</p><h2 id="package-title">See the authority-fee breakdown clearly.</h2><p>These are the government-fee figures published by the current FamilyVisa.ae reference for 2026. Third-party professional service charges, insurance, premium medical and case-specific extras are separate.</p></div><div className="fv-package-grid">{fees.map((pkg, index) => <article key={pkg.name} className={index === 0 ? "is-featured" : ""}><span>{index === 0 ? "PROPERTY ROUTE" : "GOLDEN VISA"}</span><h3>{pkg.name}</h3><b>{pkg.price}</b><em>government fees</em><ul>{pkg.details.map((detail) => <li key={detail}>✓ {detail}</li>)}</ul><Link href="/demos/familyvisauae/calculators/golden">Check my Golden Visa route →</Link></article>)}</div><p className="fv-package-note">Government requirements and charges can change. Confirm the applicable route and current authority charges before submitting an application.</p></section>
    <section className="fv-customer-proof" aria-labelledby="customer-proof-title"><div><p className="eyebrow">HOW SUPPORT CAN WORK</p><h2 id="customer-proof-title">Clear process. One team from review to completion.</h2><p>Illustrative service journeys show how a case can move from eligibility review to documents, official steps and practical follow-up.</p></div><div className="fv-review-grid">{scenarios.map(([label, journey]) => <article key={label}><div aria-hidden="true">01 → 02 → 03</div><p>{journey}</p><b>{label}</b></article>)}</div><p className="fv-package-note">*Public performance figures reproduce claims from the current FamilyVisa.ae reference. Timelines and approvals vary by case and authority.</p></section>
  </>;
}
