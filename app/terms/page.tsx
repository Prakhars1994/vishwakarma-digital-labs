import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Website terms and project enquiry information for Vishwakarma Digital Labs.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white"><header className="border-b border-white/10"><div className="mx-auto max-w-5xl px-5 py-5"><Link href="/" className="font-black">{SITE_NAME}</Link></div></header><article className="mx-auto max-w-3xl px-5 py-16 leading-8 text-slate-300"><h1 className="text-4xl font-black text-white">Terms of Use</h1><p className="mt-3 text-sm text-slate-500">Last updated: 16 August 2026</p><h2 className="mt-10 text-2xl font-black text-white">Website information</h2><p className="mt-3">The website describes development capabilities, portfolio work, demos and indicative starting budgets. Demo concepts are examples of what can be built and are not presented as client engagements unless specifically identified as such.</p><h2 className="mt-8 text-2xl font-black text-white">Quotes and project scope</h2><p className="mt-3">Prices shown on the website are starting budgets for planning. A project begins only after the scope, deliverables, price, timeline, payment terms and other applicable conditions are agreed separately.</p><h2 className="mt-8 text-2xl font-black text-white">Third-party services</h2><p className="mt-3">Projects may use third-party hosting, APIs, databases, payment providers, AI services or other platforms. Their availability, pricing and terms are controlled by those providers unless otherwise agreed.</p><h2 className="mt-8 text-2xl font-black text-white">Portfolio and demos</h2><p className="mt-3">Interactive demos may use sample data and simulated workflows. They are intended to demonstrate design and engineering capability rather than represent a complete production system for a specific client.</p><h2 className="mt-8 text-2xl font-black text-white">Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="text-orange-300" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p></article></main>
  );
}
