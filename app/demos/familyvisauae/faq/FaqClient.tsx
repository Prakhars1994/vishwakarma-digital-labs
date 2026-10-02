"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import "../familyvisa.css";
import "./faq.css";
import PreviewNav from "../PreviewNav";

const faqs = [
  ["About us", "Are you a government authority?", "No. FamilyVisaUAE is an independent private consultancy. You may also apply directly through relevant official government channels."],
  ["Eligibility", "How do I know which family route applies?", "Use the calculator as a starting point, then share the relationship, current location and income range with our team for a route-specific review."],
  ["Documents", "What documents should I prepare?", "Passport copies, identity documents and relationship evidence are common starting documents. The exact list depends on the selected route."],
  ["Eligibility", "Can I apply if my family member is outside the UAE?", "The current location changes the sequence and may affect the applicable process. Tell us this early so the right route can be reviewed."],
  ["Fees", "Are government fees and service support separate?", "Yes. Official charges are set by the relevant authority. Any private professional support is explained separately before you proceed."],
  ["Process", "Will medical fitness or Emirates ID steps apply?", "They may apply depending on the applicant and visa route. The route guide and your individual review clarify the relevant steps."],
  ["Process", "How long does the process take?", "Timing varies by route, document readiness and official processing. We give a practical estimate after reviewing your information."],
  ["Process", "Can I renew an existing family visa?", "Yes. Use the Family Visa Renewal route to start with the relevant current visa and Emirates ID information."],
] as const;
const categories = ["All", "Eligibility", "Documents", "Fees", "Process", "About us"];

export default function FaqClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => faqs.filter(([itemCategory, question, answer]) => (category === "All" || itemCategory === category) && `${question} ${answer}`.toLowerCase().includes(query.trim().toLowerCase())), [category, query]);
  const message = encodeURIComponent(`Hi FamilyVisaUAE, I have a question about my UAE visa route.${query ? ` I was looking for: ${query}` : ""}`);
  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Helpful answers</span></div><PreviewNav /><section className="fv-faq"><p className="eyebrow">COMMON QUESTIONS</p><h1>Answers before you start.</h1><p className="lead">Clear information helps you make the right next move. Filter the topics below, or ask the team about your individual route.</p><div className="fv-faq-tools"><label><span className="sr-only">Search frequently asked questions</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search questions, documents, fees…" /></label><div role="group" aria-label="Filter questions by topic">{categories.map((item) => <button type="button" key={item} className={category === item ? "is-active" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div></div><p className="fv-faq-count">{filtered.length} {filtered.length === 1 ? "answer" : "answers"} found</p>{filtered.map(([itemCategory, question, answer]) => <details key={question}><summary><span>{question}</span><small>{itemCategory}</small></summary><p>{answer}</p></details>)}{filtered.length === 0 && <div className="fv-faq-empty"><strong>No matching answer yet.</strong><span>Ask the team and include your route or document question.</span></div>}<div className="fv-cta"><a className="primary" href={`https://wa.me/971566556645?text=${message}`} target="_blank" rel="noreferrer">Ask on WhatsApp →</a><Link className="secondary" href="/demos/familyvisauae/calculators/family">Use calculator</Link></div></section></main>;
}
