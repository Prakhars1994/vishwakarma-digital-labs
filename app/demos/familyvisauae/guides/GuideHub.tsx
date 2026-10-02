"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import "../familyvisa.css";
import "./guides.css";
import PreviewNav from "../PreviewNav";

const guides = [
  ["Family", "New family visa process", "Understand the preparation, submission and identity steps that can form part of a new family residence journey.", "family-visa-application"],
  ["Family", "Family visa documents", "A practical starting list for sponsor, passport and relationship documents.", "family-visa-documents"],
  ["Family", "Family visa costs", "Understand the difference between route estimates, government charges and support fees.", "family-visa-cost"],
  ["Family", "Family visa renewal", "Prepare an existing visa and Emirates ID for a smoother renewal review.", "family-visa-renewal"],
  ["Golden", "Golden Visa guide", "Explore long-term residence routes and the evidence to prepare for review.", "golden-visa-guide"],
] as const;

export default function GuideHub() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const visibleGuides = useMemo(() => guides.filter(([category, title, summary]) => (filter === "All" || category === filter) && `${title} ${summary}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Practical UAE visa guidance</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">GUIDES</p><h1>Clear answers for the next step.</h1><p className="lead">Browse practical route guidance before you start, then use the calculator or WhatsApp for a case-specific answer.</p><div className="fv-guide-tools"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides…" aria-label="Search guides" /><div>{["All", "Family", "Golden"].map((item) => <button type="button" key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="fv-guide-grid">{visibleGuides.map(([category, title, summary, slug]) => <article key={slug}><span>{category}</span><h2>{title}</h2><p>{summary}</p><Link href={`/demos/familyvisauae/guides/${slug}`}>Read guide →</Link></article>)}</div>{visibleGuides.length === 0 && <p className="fv-guide-empty">No guide matches that search. Try the calculator for a route-specific starting point.</p>}<div className="fv-cta"><Link className="primary" href="/demos/familyvisauae/calculators/family">Use calculator →</Link><a className="secondary" href="https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20need%20help%20choosing%20a%20visa%20route." target="_blank" rel="noreferrer">Ask on WhatsApp</a></div></section></main>;
}
