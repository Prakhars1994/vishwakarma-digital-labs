import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { serviceData } from "./serviceData";

export const metadata: Metadata = {
  title: `Web, Mobile, AI & Automation Services | ${SITE_NAME}`,
  description: "Explore web development, mobile app development, AI applications and business automation services from Vishwakarma Digital Labs.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const services = Object.entries(serviceData);
  const schema = { "@context": "https://schema.org", "@type": "ItemList", name: `${SITE_NAME} services`, itemListElement: services.map(([slug, service], position) => ({ "@type": "ListItem", position: position + 1, name: service.eyebrow, url: `${SITE_URL}/services/${slug}` })) };
  return <main className="min-h-screen bg-slate-950 text-white"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><SiteHeader /><section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><p className="text-sm font-black uppercase tracking-[.2em] text-orange-300">Services</p><h1 className="mt-4 max-w-4xl text-4xl font-black sm:text-6xl">Practical digital products for businesses that need to move faster.</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">We design and build websites, mobile products, AI applications and connected workflows around real customer and operations needs.</p><div className="mt-12 grid gap-6 md:grid-cols-2">{services.map(([slug, service]) => <Link key={slug} href={`/services/${slug}`} className="group rounded-3xl border border-white/10 bg-white/[.03] p-7 transition hover:-translate-y-1 hover:border-orange-400/60"><div className="text-4xl">{service.icon}</div><h2 className="mt-6 text-2xl font-black">{service.eyebrow}</h2><p className="mt-3 leading-7 text-slate-300">{service.description}</p><ul className="mt-5 space-y-2 text-sm text-slate-400">{service.deliverables.slice(0, 3).map(item => <li key={item}>✓ {item}</li>)}</ul><span className="mt-7 inline-block font-black text-orange-300 group-hover:text-orange-200">Explore service →</span></Link>)}</div></section><SiteFooter /></main>;
}
