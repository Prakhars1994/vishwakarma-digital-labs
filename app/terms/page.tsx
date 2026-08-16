import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use", description: "Terms of use for Vishwakarma Digital Labs.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white"><SiteHeader /><main id="main-content" className="mx-auto max-w-4xl px-5 py-20 lg:px-8"><div className="text-sm font-black uppercase tracking-[.2em] text-orange-300">Terms</div><h1 className="mt-4 text-5xl font-black">Terms of Use</h1><p className="mt-5 text-slate-400">Last updated: 16 August 2026</p><div className="mt-10 space-y-8 leading-8 text-slate-300">
      <section><h2 className="text-2xl font-black text-white">Website information</h2><p className="mt-3">This website describes development services, portfolio work and indicative project pricing. Content is informational and may be updated as services and technology change.</p></section>
      <section><h2 className="text-2xl font-black text-white">Quotes and estimator</h2><p className="mt-3">Estimator ranges are planning guidance only. A project becomes commercially agreed only after scope, deliverables, timeline, price and payment terms are confirmed in writing.</p></section>
      <section><h2 className="text-2xl font-black text-white">Portfolio representation</h2><p className="mt-3">CurrentPulse AI is presented as production work. Interactive demo concepts are portfolio concepts and are not represented as paid client engagements unless explicitly stated otherwise.</p></section>
      <section><h2 className="text-2xl font-black text-white">External services</h2><p className="mt-3">Links may open GitHub, WhatsApp, CurrentPulse or other third-party services. Vishwakarma Digital Labs does not control the availability or terms of those external services.</p></section>
      <section><h2 className="text-2xl font-black text-white">Project ownership and warranties</h2><p className="mt-3">Intellectual-property transfer, licences, third-party dependencies, warranties and support obligations are defined per project agreement. No website statement guarantees a particular revenue, ranking, traffic level or business result.</p></section>
      <section><h2 className="text-2xl font-black text-white">Contact</h2><p className="mt-3">Questions about these terms can be sent to <a className="text-orange-300 underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p></section>
    </div></main><SiteFooter /></div>
  );
}
