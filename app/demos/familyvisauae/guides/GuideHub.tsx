"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import "../familyvisa.css";
import "./guides.css";
import PreviewNav from "../PreviewNav";
import { guideList } from "./guide-data";

const categories = ["All", "Family", "Golden", "Property", "Identity", "Documents", "Work"] as const;

export default function GuideHub() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const visibleGuides = useMemo(() => guideList.filter((guide) => (filter === "All" || guide.category === filter) && `${guide.title} ${guide.intro}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);
  useEffect(() => setVisibleCount(12), [filter, query]);
  const displayedGuides = visibleGuides.slice(0, visibleCount);
  const remainingGuides = visibleGuides.length - displayedGuides.length;

  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Practical UAE visa guidance</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">GUIDES</p><h1>Clear answers for the next step.</h1><p className="lead">Browse practical route guidance before you start, then use the calculator or WhatsApp for a case-specific answer.</p><div className="fv-guide-tools"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guidesâ€¦" aria-label="Search guides" /><div>{categories.map((item) => <button type="button" key={item} className={filter === item ? "is-active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div><p className="fv-guide-count">{visibleGuides.length} practical guides covering family, Golden Visa, property, identity, document and work routes.</p><div className="fv-guide-grid">{displayedGuides.map((guide) => <article key={guide.slug}><span>{guide.category}</span><h2>{guide.title}</h2><p>{guide.intro}</p><Link href={`/demos/familyvisauae/guides/${guide.slug}`}>Read guide →</Link></article>)}</div>{remainingGuides > 0 && <div className="fv-guide-more"><button type="button" onClick={() => setVisibleCount((current) => current + 12)}>Show {Math.min(remainingGuides, 12)} more guides <span aria-hidden="true">â†“</span></button><p>{remainingGuides} more guides available</p></div>}{visibleGuides.length === 0 && <p className="fv-guide-empty">No guide matches that search. Try the calculator for a route-specific starting point.</p>}<div className="fv-cta"><Link className="primary" href="/demos/familyvisauae/calculators/family">Use calculator →</Link><a className="secondary" href="https://wa.me/9718003627?text=Hi%20FamilyVisaUAE%2C%20I%20need%20help%20choosing%20a%20visa%20route." target="_blank" rel="noreferrer">Ask on WhatsApp</a></div></section></main>;
}

