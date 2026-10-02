"use client";

import { useState } from "react";

const journeys = {
  new: {
    label: "New family visa",
    timing: "Timing depends on the route, document readiness and authority processing.",
    documents: ["Sponsor passport and Emirates ID copies", "Dependent passport and recent photo", "Attested relationship document where required", "Income, accommodation or status evidence where applicable"],
    steps: ["Confirm the right family route", "Prepare and review documents", "Submit through the relevant official channel", "Complete medical or identity steps where required", "Receive guidance through final residence completion"],
  },
  renewal: {
    label: "Family visa renewal",
    timing: "Start early enough to review expiry dates, documents and any required appointment steps.",
    documents: ["Sponsor Emirates ID and current residence copy", "Dependent passport and current residence details", "Relationship document if requested for the route", "Recent photo and any current medical or ID information"],
    steps: ["Check expiry and current residence details", "Review the renewal document list", "Complete medical fitness where applicable", "Submit residence and identity renewal steps", "Track completion and delivery guidance"],
  },
} as const;

export default function JourneyPlanner() {
  const [journeyKey, setJourneyKey] = useState<keyof typeof journeys>("new");
  const journey = journeys[journeyKey];
  return <section className="fv-journey-planner" aria-labelledby="journey-planner-title"><div className="fv-journey-planner__intro"><p className="eyebrow">PREPARE WITH CONFIDENCE</p><h2 id="journey-planner-title">Choose your family visa journey.</h2><p>Use this as a practical starting point. Your exact requirements, fees and sequence are confirmed for your individual route.</p><div role="group" aria-label="Choose journey type"><button type="button" className={journeyKey === "new" ? "is-active" : ""} onClick={() => setJourneyKey("new")}>New visa</button><button type="button" className={journeyKey === "renewal" ? "is-active" : ""} onClick={() => setJourneyKey("renewal")}>Renewal</button></div></div><div className="fv-journey-planner__card"><div><span>{journey.label}</span><strong>{journey.timing}</strong></div><section><h3>Start with these documents</h3><ul>{journey.documents.map((document) => <li key={document}>✓ {document}</li>)}</ul></section><section><h3>Your next steps</h3><ol>{journey.steps.map((step, index) => <li key={step}><b>{String(index + 1).padStart(2, "0")}</b>{step}</li>)}</ol></section><a className="primary" href="#calculator">Check my route and estimate →</a></div></section>;
}
