"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { image: "/familyvisauae-family-balcony-v2.png", alt: "Family planning their UAE life together in Dubai", label: "THE FAMILY PLAN", title: "Bring everyone closer, with a clear plan.", text: "Start by identifying the person you want to sponsor. We turn that first answer into a practical route and preparation plan." },
  { image: "/familyvisauae-document-review-v2.png", alt: "Visa consultant reviewing a family document checklist in Dubai", label: "DOCUMENT REVIEW", title: "Know what to prepare before you begin.", text: "A focused starting checklist keeps documents, attestation and timing understandable before you commit to the next step." },
  { image: "/familyvisauae-consultation-v1.png", alt: "Family meeting a UAE visa consultant in a Dubai office", label: "PRIVATE GUIDANCE", title: "One conversation makes the route clearer.", text: "Ask the questions that matter to your case and receive a straightforward next-step recommendation on WhatsApp." },
  { image: "/familyvisauae-reception-v1.png", alt: "FamilyVisaUAE consultancy support in Dubai", label: "FOLLOW-THROUGH", title: "Support that stays with the journey.", text: "From route review through documents and follow-up, our team helps keep each stage visible and easy to understand." },
] as const;

export default function FamilyStorySlideshow() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);
  const slide = slides[active];
  return <section className="fv-story-slideshow" aria-labelledby="story-slideshow-title">
    <div className="fv-story-image" aria-live="polite">
      <Image key={slide.image} src={slide.image} alt={slide.alt} width={1792} height={1024} sizes="(max-width: 860px) 100vw, 54vw" priority={false} />
      <span>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
    </div>
    <div className="fv-story-copy">
      <p className="eyebrow">{slide.label}</p>
      <h2 id="story-slideshow-title">{slide.title}</h2>
      <p>{slide.text}</p>
      <div className="fv-story-controls" aria-label="Choose a FamilyVisaUAE story">
        {slides.map((item, index) => <button type="button" key={item.label} className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-pressed={index === active}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}</button>)}
      </div>
      <a className="primary" href="#calculator">Check your route →</a>
    </div>
  </section>;
}
