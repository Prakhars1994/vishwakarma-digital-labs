import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Vishwakarma Digital Labs",
  description: "Vishwakarma Digital Labs is a founder-led digital development studio building production websites, web apps, AI applications and business automation.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href="/" className="font-black">{SITE_NAME}</Link><Link href="/contact" className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold">Start a project</Link></div></header>
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Founder-led development studio</div>
          <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-6xl">Direct communication. Production-focused delivery.</h1>
          <p className="mt-7 text-xl leading-9 text-slate-300">Vishwakarma Digital Labs builds websites, web applications, AI-assisted products and automation for businesses that need a practical working product rather than a presentation-only prototype.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Founder-led", "Discuss requirements directly with Prakhar Singh instead of moving through layers of account managers."],
            ["End to end", "UI, application logic, database integration, APIs, deployment and production setup can be handled in one engagement."],
            ["Business first", "Technology choices follow the workflow, budget and customer goal instead of forcing unnecessary complexity."],
            ["Modern stack", "Next.js, React, Supabase, PostgreSQL, APIs, GitHub workflows and modern AI integrations."],
            ["Real product proof", "CurrentPulse AI demonstrates production experience across automation, content systems, database workflows and AI integration."],
            ["Worldwide projects", "Remote projects can be scoped for clients in India and international markets."],
          ].map(([title, text]) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6"><h2 className="text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-400">{text}</p></article>)}
        </div>
        <div className="mt-14 rounded-3xl border border-orange-400/20 bg-orange-500/[0.07] p-8 sm:p-10">
          <h2 className="text-3xl font-black">See the work, then decide.</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-300">Review the live CurrentPulse case study, open the interactive demos, inspect GitHub, and then discuss only the scope you actually need.</p>
          <div className="mt-7 flex flex-wrap gap-3"><Link href="/case-studies/currentpulse-ai" className="rounded-xl bg-white px-5 py-3 font-bold text-slate-950">CurrentPulse case study</Link><a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-5 py-3 font-bold">GitHub</a><a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-5 py-3 font-bold">Discuss a project</a></div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "AboutPage", url: `${SITE_URL}/about`, mainEntity: { "@type": "Organization", name: SITE_NAME, url: SITE_URL } }) }} />
    </main>
  );
}
