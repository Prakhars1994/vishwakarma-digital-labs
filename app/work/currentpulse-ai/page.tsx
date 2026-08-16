import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CURRENT_PULSE_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "CurrentPulse AI Case Study",
  description: "How Vishwakarma Digital Labs built CurrentPulse AI: automated publishing, trusted Current Affairs ingestion, ResultPulse, Supabase, multi-provider AI, Cloudflare and GitHub Actions.",
  alternates: { canonical: "/work/currentpulse-ai" },
  openGraph: { title: "CurrentPulse AI Case Study", description: "A production AI publishing and exam-information platform.", url: `${SITE_URL}/work/currentpulse-ai`, type: "article" },
};

const architecture = [
  ["Reader layer", "Next.js + React pages designed around fast public reads, search, SEO and student navigation."],
  ["Data layer", "Supabase/PostgreSQL stores articles, queues, sources, exam updates and operational state."],
  ["Collection", "Automated News, trusted coaching Current Affairs and official exam/result source monitoring."],
  ["Quality", "Source sanitation, event/topic deduplication, merging, taxonomy correction and publication safety gates."],
  ["AI routing", "Multiple model providers with fallbacks and retry/cooldown behavior so one exhausted quota does not stop the system."],
  ["Infrastructure", "Cloudflare serves the public product while GitHub Actions handles heavier background automation."],
];

export default function CurrentPulseCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <main id="main-content">
        <section className="border-b border-white/10 bg-gradient-to-br from-orange-500/10 via-slate-950 to-blue-500/10">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="text-sm font-black uppercase tracking-[.24em] text-orange-300">Production case study</div>
            <h1 className="mt-5 max-w-5xl text-5xl font-black sm:text-7xl">CurrentPulse AI</h1>
            <p className="mt-7 max-w-4xl text-xl leading-9 text-slate-300">A production publishing and exam-information platform built to automate source monitoring, structure large content flows, reduce duplicate work and serve useful Current Affairs, News and exam updates.</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href={CURRENT_PULSE_URL} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-6 py-3 font-bold">View live product ↗</a><Link href="/contact" className="rounded-xl border border-white/15 px-6 py-3 font-semibold">Build something similar →</Link></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><div className="text-sm font-black uppercase tracking-[.2em] text-orange-300">The challenge</div><h2 className="mt-3 text-4xl font-black">Turn many changing sources into one maintainable product.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-300"><p>The platform needs to ingest frequently changing information without turning every user request into expensive server-side work. It must distinguish general News from trusted coaching Current Affairs, merge duplicate topics, preserve source provenance and keep content quality consistent.</p><p>ResultPulse adds a second type of workflow: monitor official exam authorities for results, admit cards, applications, answer keys, deadlines and other actionable updates without relying on AI for every detection.</p></div></div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="text-sm font-black uppercase tracking-[.2em] text-orange-300">Architecture</div><h2 className="mt-3 text-4xl font-black">Separated reader traffic from heavy automation.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{architecture.map(([title,text])=><article key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-6"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></article>)}</div></div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"><div className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">Current Affairs pipeline</div><ol className="mt-6 space-y-4 text-slate-300"><li>1. Collect every genuine item from approved CA sources.</li><li>2. Remove structural/promotional junk, not editorially useful topics.</li><li>3. Split bundles, deduplicate and merge overlapping coverage.</li><li>4. Generate/verify with multi-provider AI fallbacks.</li><li>5. Publish structured reader-friendly content.</li></ol></div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"><div className="text-sm font-black uppercase tracking-[.2em] text-emerald-300">ResultPulse pipeline</div><ol className="mt-6 space-y-4 text-slate-300"><li>1. Monitor official exam/recruitment authorities.</li><li>2. Detect results, admit cards, notifications and deadlines.</li><li>3. Deduplicate and update permanent exam timelines.</li><li>4. Keep official source links as the action destination.</li><li>5. Trigger subscriber alerts when configured.</li></ol></div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-white/[0.025]"><div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8"><h2 className="text-4xl font-black">Need a product with automation, AI and real production infrastructure?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">The useful part is not adding AI everywhere. It is deciding which work should be static, deterministic, database-driven or model-assisted — then building the failure paths too.</p><Link href="/contact" className="mt-8 inline-block rounded-xl bg-orange-500 px-7 py-4 font-bold">Discuss your project →</Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
