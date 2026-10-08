"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import "../familyvisa.css";
import "./faq.css";
import PreviewNav from "../PreviewNav";
import WhatsAppIconLink from "../WhatsAppIconLink";

const faqs = [
  ["About us", "Are you a government authority?", "No. FamilyVisaUAE is an independent private consultancy. You may also apply directly through relevant official government channels."],
  ["Eligibility", "How do I know which family route applies?", "Use the calculator as a starting point, then share the relationship, current location and income range with our team for a route-specific review."],
  ["Documents", "What documents should I prepare?", "Passport copies, identity documents and relationship evidence are common starting documents. The exact list depends on the selected route."],
  ["Documents", "Do documents need attestation or legal translation?", "Documents issued outside the UAE can need attestation, translation or both. Share the issuing country and document type before arranging originals so the correct route can be checked."],
  ["Eligibility", "Can I apply if my family member is outside the UAE?", "The current location changes the sequence and may affect the applicable process. Tell us this early so the right route can be reviewed."],
  ["Eligibility", "Can I sponsor parents or a newborn?", "These routes have their own relationship, status and timing considerations. Start a parent or newborn route early so the correct documents and sequence can be reviewed."],
  ["Eligibility", "Can a property owner explore a Golden Visa route?", "Property-related long-term residence depends on the current authority pathway and supporting ownership evidence. Use the property calculator or ask for a route review before treating eligibility as confirmed."],
  ["Fees", "Are government fees and service support separate?", "Yes. Official charges are set by the relevant authority. Any private professional support is explained separately before you proceed."],
  ["Fees", "Can I see an estimate before I start?", "Yes. The calculator gives a useful starting estimate. A final breakdown depends on the selected route, current status and the official steps required for your case."],
  ["Process", "Will medical fitness or Emirates ID steps apply?", "They may apply depending on the applicant and visa route. The route guide and your individual review clarify the relevant steps."],
  ["Process", "How long does the process take?", "Timing varies by route, document readiness and official processing. We give a practical estimate after reviewing your information."],
  ["Process", "Can I renew an existing family visa?", "Yes. Use the Family Visa Renewal route to start with the relevant current visa and Emirates ID information."],
  ["Process", "What if a visa is cancelled or close to expiry?", "Do not wait until the final day. Current status affects the available sequence, so share the visa or ID expiry date and location for a timely route review."],
  ["Process", "Is health insurance part of the process?", "Insurance requirements can depend on the applicant, emirate and route. It is best reviewed alongside the residence and identity steps rather than as a separate afterthought."],
] as const;
const categories = ["All", "Eligibility", "Documents", "Fees", "Process", "About us"];

export default function FaqClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => faqs.filter(([itemCategory, question, answer]) => (category === "All" || itemCategory === category) && `${question} ${answer}`.toLowerCase().includes(query.trim().toLowerCase())), [category, query]);
  const message = encodeURIComponent(`Hi FamilyVisaUAE, I have a question about my UAE visa route.${query ? ` I was looking for: ${query}` : ""}`);
  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Helpful answers</span></div><PreviewNav /><section className="fv-faq"><p className="eyebrow">COMMON QUESTIONS</p><h1>Answers before you start.</h1><p className="lead">Clear information helps you make the right next move. Filter the topics below, or ask the team about your individual route.</p><div className="fv-faq-tools"><label><span className="sr-only">Search frequently asked questions</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions, documents, feesâ€¦" /></label><div role="group" aria-label="Filter questions by topic">{categories.map((item) => <button type="button" key={item} className={category === item ? "is-active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div></div><p className="fv-faq-count">{filtered.length} {filtered.length === 1 ? "answer" : "answers"} found</p>{filtered.map(([itemCategory, question, answer]) => <details key={question}><summary><span>{question}</span><small>{itemCategory}</small></summary><p>{answer}</p></details>)}{filtered.length === 0 && <div className="fv-faq-empty"><strong>No matching answer yet.</strong><span>Ask the team and include your route or document question.</span></div>}<div className="fv-cta"><WhatsAppIconLink href={`https://wa.me/9718003627?text=${message}`} label="Ask FamilyVisaUAE a visa question on WhatsApp"/><Link className="secondary" href="/demos/familyvisauae/calculators/family">Use calculator</Link></div></section></main>;
}

