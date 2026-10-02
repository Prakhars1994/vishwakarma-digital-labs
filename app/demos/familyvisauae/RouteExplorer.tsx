"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import "./route-explorer.css";

const routes = [
  { title: "Family Visa", copy: "For a spouse, child or parent who needs a UAE residence route.", href: "/demos/familyvisauae/calculators/family", tag: "Family" },
  { title: "Golden Visa", copy: "For qualifying long-term residence pathways and supporting evidence.", href: "/demos/familyvisauae/calculators/golden", tag: "Residency" },
  { title: "Property Visa", copy: "For property owners exploring a UAE residency route.", href: "/demos/familyvisauae/calculators/property", tag: "Property" },
  { title: "Newborn Visa", copy: "For a baby born in the UAE and the next residence steps.", href: "/demos/familyvisauae/calculators/newborn", tag: "Family" },
  { title: "PRO Services", copy: "For business and government-facing support requests.", href: "/demos/familyvisauae/calculators/pro", tag: "Business" },
];

export default function RouteExplorer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", dragFree: true });
  return <section className="fv-route-explorer" aria-labelledby="route-explorer-title"><div className="fv-route-explorer__head"><div><p className="eyebrow">EXPLORE SERVICES</p><h2 id="route-explorer-title">Find the route that fits your next step.</h2></div><div><button type="button" onClick={() => emblaApi?.scrollPrev()} aria-label="Previous service">←</button><button type="button" onClick={() => emblaApi?.scrollNext()} aria-label="Next service">→</button></div></div><div className="fv-route-explorer__viewport" ref={emblaRef}><div className="fv-route-explorer__container">{routes.map((route) => <article className="fv-route-explorer__slide" key={route.href}><span>{route.tag}</span><h3>{route.title}</h3><p>{route.copy}</p><Link href={route.href}>Explore route <b>→</b></Link></article>)}</div></div></section>;
}
