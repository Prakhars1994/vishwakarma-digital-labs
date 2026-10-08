"use client";

import Link from "next/link";
import Image from "next/image";

const whatsapp = "https://wa.me/9718003627?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20help%20with%20a%20family%20visa.";

const routes = [
  ["Family / Dependent Visa", "Spouse, children or parents", "From AED 1,103", "01", "Spouse", "#calculator"],
  ["Golden Visa", "10-Year long-term UAE residency", "From AED 3,864", "02", "Golden", "/calculators/golden"],
  ["Property Visa", "Residency through property investment", "From AED 6,311", "03", "Property", "/calculators/property"],
  ["Newborn Visa", "For a baby just born in the UAE", "From AED 1,029", "04", "Newborn", "#calculator"],
] as const;

export default function WelcomeHero() {
  const openRoute = (person: "Spouse" | "Child" | "Parent" | "Newborn") => {
    window.dispatchEvent(new CustomEvent("familyvisa:select-dependent", { detail: person }));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("calculator")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };
  return <section className="fv-welcome" id="top" aria-labelledby="welcome-title">
    <Image className="fv-welcome-image" src="/familyvisauae-family-balcony-v2.png" alt="" fill priority sizes="100vw" aria-hidden="true" />
    <div className="fv-welcome-glow" aria-hidden="true" />
    <div className="fv-welcome-main">
      <p className="eyebrow">FAMILY VISA UAE · PRIVATE CONSULTANCY</p>
      <h1 id="welcome-title">A clearer way to bring your <em>family to the UAE.</em></h1>
      <p className="fv-welcome-lead">Start with your family member, understand your likely route and get a practical document and fee plan before you move forward.</p>
      <div className="fv-welcome-actions">
        <a className="fv-welcome-calc" href="#calculator"><span>â–¦</span> Visa calculator <b>→</b></a>
        <Link className="fv-welcome-services" href="/demos/familyvisauae/services"><span>Explore services</span><b>â†—</b></Link>
        <a className="fv-welcome-call" href="tel:+9718003627"><span>â˜Ž</span><small>Call our team</small><b>800 DOCS (3627)</b></a>
        <a className="fv-welcome-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with FamilyVisaUAE on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.2 22l5.5-1.4A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.7-1 .1-.2.1-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.6-.3Z" /></svg></a>
      </div>
      <div className="fv-welcome-trust" aria-label="Reference service claims"><span><b>20,000+</b> visas processed <small>reference claim*</small></span><span><b>5–10 days</b> typical family file <small>reference claim*</small></span><span><b>4.9 ★</b> Google rating <small>reference claim*</small></span></div>
    </div>
    <aside className="fv-welcome-deck" aria-label="Choose a family visa route">
      <div className="fv-welcome-deck-head"><div><span>WELCOME</span><strong>Choose your starting point</strong></div><p>Four family routes. One practical next step.</p></div>
      <div className="fv-welcome-routes">{routes.map(([title, detail, price, number, person, target]) => <button type="button" onClick={() => target.startsWith("/") ? (window.location.href = `/demos/familyvisauae${target}`) : openRoute(person === "Golden" || person === "Property" ? "Spouse" : person)} key={title}><i>{number}</i><div><b>{title}</b><span>{detail}</span><small>{price}</small></div><em>→</em></button>)}</div>
      <div className="fv-welcome-deck-foot"><span>Need a different service?</span><Link href="/demos/familyvisauae/services">See all services →</Link></div>
    </aside>
  </section>;
}


