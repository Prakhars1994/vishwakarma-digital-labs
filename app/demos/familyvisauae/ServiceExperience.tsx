"use client";

import Image from "next/image";

const eligibility = [
  ["Spouse", "Marriage certificate and sponsor income details", "Typically AED 4,000 monthly income, or AED 3,000 with employer accommodation."],
  ["Children", "Birth certificate and age-specific requirements", "Sons may be eligible up to age 25; unmarried daughters may have different requirements."],
  ["Parents", "Annual route with accommodation considerations", "Usually requires sponsoring both parents and suitable housing evidence."],
  ["Newborn", "For children born in the UAE", "Passport, birth certificate and a timely visa application are typically required."],
];

const steps = ["Check your route and eligibility", "Share your documents securely", "Application filing and follow-up", "Medical and Emirates ID appointments", "Visa completion and delivery guidance"];

export default function ServiceExperience() {
  const chooseDependent = (person: string) => {
    window.dispatchEvent(new CustomEvent("familyvisa:select-dependent", { detail: person }));
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return <>
    <section className="fv-eligibility" aria-labelledby="eligibility-title"><div className="fv-eligibility-intro"><p className="eyebrow">WHO CAN YOU SPONSOR?</p><h2 id="eligibility-title">Start with your family member.</h2><p>Select the right route first. Our team then confirms your documents, salary and accommodation requirements for your circumstances.</p><div className="fv-eligibility-visual"><Image src="/familyvisauae-documents.png" alt="Family preparing UAE visa documents together" width={1536} height={1024}/><span>Family-first visa guidance</span></div></div><div className="fv-eligibility-grid">{eligibility.map(([title, description, requirement], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><strong>{requirement}</strong><button type="button" onClick={() => chooseDependent(title === "Children" ? "Child" : title === "Parents" ? "Parent" : title)}>Check my route →</button></article>)}</div></section>
    <section className="fv-document-guide"><div><p className="eyebrow">DOCUMENTS, MADE SIMPLE</p><h2>Know what to prepare before you apply.</h2><p>We check the documents for your specific route first—such as passports, Emirates ID, proof of relationship, income evidence, tenancy and attestation requirements.</p><div className="fv-document-points"><span>01 · Relationship evidence</span><span>02 · Sponsor and identity records</span><span>03 · Route-specific supporting documents</span></div><a className="primary" href="#calculator">Check my document route →</a></div><div className="fv-document-image"><Image src="/familyvisauae-document-review-v1.png" alt="Consultant reviewing a UAE family visa document checklist" width={1536} height={1024} /><div><b>Document review</b><span>Prepare the right records before submission.</span></div></div></section>
    <section className="fv-process"><div><p className="eyebrow">100% GUIDED ONLINE</p><h2>A clear path from question to visa.</h2><p>We keep the journey simple and explain each government-required step before it happens.</p></div><ol>{steps.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b><span>{step}</span></li>)}</ol></section>
    <section className="fv-fees"><div><p className="eyebrow">NO HIDDEN CHARGES</p><h2>See what you pay for.</h2><p>Your estimate separates official charges from professional support, so you understand the total before making a decision.</p></div><div className="fv-fee-card"><div><span>Government charges</span><strong>Official fees</strong><small>Paid to the relevant authority. The final amount depends on the confirmed route.</small></div><div><span>Professional support</span><strong>Service fee</strong><small>Document preparation, submission and follow-up support, quoted separately.</small></div><p>Official charges + clearly disclosed support = your total estimate.</p></div></section>
    <section className="fv-faq" aria-labelledby="faq-title"><p className="eyebrow">COMMON QUESTIONS</p><h2 id="faq-title">Helpful answers before you start.</h2><details><summary>Are you a government authority?</summary><p>No. FamilyVisaUAE is a private consultancy. You may also apply directly through the relevant official government channels.</p></details><details><summary>Can you tell me the documents I need?</summary><p>Yes. Once we understand who you are sponsoring and their current location, we can share a practical document checklist for review.</p></details><details><summary>How long does a family visa take?</summary><p>Timelines depend on the route, document readiness and government processing. We give a realistic estimate after reviewing your case.</p></details><details><summary>What happens after I request an estimate?</summary><p>Our team confirms eligibility and explains the government charges and optional professional support before you commit to anything.</p></details></section>
  </>;
}
