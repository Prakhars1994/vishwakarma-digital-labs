import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT, OWNER, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Vishwakarma Digital Labs and founder Prakhar Singh — production-focused web, AI and automation development.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Vishwakarma Digital Labs", description: OWNER.summary, url: `${SITE_URL}/about`, type: "website" },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
            <div><div className="grid h-28 w-28 place-items-center rounded-[2rem] bg-gradient-to-br from-orange-400 to-orange-600 text-4xl font-black">PS</div><div className="mt-7 text-sm font-black uppercase tracking-[.22em] text-orange-300">Founder-led studio</div><h1 className="mt-3 text-5xl font-black">{OWNER.name}</h1><div className="mt-3 text-lg font-semibold text-slate-300">{OWNER.role}</div><a href={CONTACT.github} target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-xl border border-white/15 px-5 py-3 font-semibold">GitHub ↗</a></div>
            <div><p className="text-2xl leading-10 text-slate-200">{OWNER.summary}</p><p className="mt-7 text-lg leading-8 text-slate-400">Vishwakarma Digital Labs is an independent development studio focused on practical digital products rather than generic technology presentations. Work is scoped around the business outcome, the data and integrations involved, and the simplest reliable production architecture.</p><p className="mt-5 text-lg leading-8 text-slate-400">The portfolio is deliberately transparent: CurrentPulse AI is shown as production work, while interactive demo products are labelled as portfolio concepts. That distinction matters because credibility is more valuable than inflated claims.</p></div>
          </div>

          <div className="mt-20 grid gap-5 md:grid-cols-3">{[["Production-first","Builds include deployment, failure paths and operational considerations — not only screens."],["AI where useful","Model calls are used where they add value; deterministic logic, caching and databases are preferred where they are better."],["Direct communication","Requirements and trade-offs are discussed close to the implementation rather than passed through layers of account management."]].map(([title,text])=><article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><h2 className="text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-400">{text}</p></article>)}</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
