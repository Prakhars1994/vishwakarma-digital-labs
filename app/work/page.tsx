import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { portfolioDemos } from "@/lib/portfolio";
import { CURRENT_PULSE_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work & Interactive Product Demos",
  description: "Explore CurrentPulse AI production work and interactive web, AI, ecommerce, healthcare, CRM, real-estate, education and operations demos.",
  alternates: { canonical: "/work" },
  openGraph: { title: "Work | Vishwakarma Digital Labs", description: "Production work and interactive product demos.", url: `${SITE_URL}/work`, type: "website" },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <main id="main-content">
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl"><div className="text-sm font-black uppercase tracking-[0.24em] text-orange-300">Selected work</div><h1 className="mt-4 text-5xl font-black sm:text-6xl">Production proof first. Product concepts second.</h1><p className="mt-6 text-xl leading-9 text-slate-300">CurrentPulse AI is a real production product. The demo gallery below is intentionally labelled as concept work designed to demonstrate product depth, interactions and visual range.</p></div>

          <div className="mt-14 grid gap-8 rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-slate-900 to-blue-500/10 p-7 lg:grid-cols-[1.15fr_.85fr] lg:p-12">
            <div><div className="text-xs font-black uppercase tracking-[.2em] text-orange-300">Production case study</div><h2 className="mt-4 text-4xl font-black">CurrentPulse AI</h2><p className="mt-5 text-lg leading-8 text-slate-300">Automated publishing, Current Affairs, ResultPulse exam monitoring, Supabase/PostgreSQL, AI routing, Cloudflare delivery and background workflows.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/work/currentpulse-ai" className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950">Read case study →</Link><a href={CURRENT_PULSE_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-6 py-3 font-semibold">Open live product ↗</a></div></div>
            <div className="grid gap-3">{["Next.js + React","Supabase + PostgreSQL","Cloudflare Workers","GitHub Actions","Multi-provider AI","Automated source workflows"].map((item)=><div key={item} className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">✓ {item}</div>)}</div>
          </div>

          <div className="mt-20 flex items-end justify-between gap-6"><div><div className="text-sm font-black uppercase tracking-[.2em] text-orange-300">Interactive concepts</div><h2 className="mt-3 text-4xl font-black">10 product demos</h2></div><div className="hidden text-sm text-slate-500 sm:block">Concepts, not claimed client engagements</div></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolioDemos.map((demo)=><Link key={demo.href} href={demo.href} className="group flex min-h-[310px] flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-orange-400/30"><div className="flex items-start justify-between"><div className="text-[11px] font-black uppercase tracking-[.18em] text-orange-300">{demo.label}</div><div className="text-3xl" aria-hidden="true">{demo.icon}</div></div><h3 className="mt-7 text-2xl font-black">{demo.title}</h3><p className="mt-3 leading-7 text-slate-400">{demo.text}</p><div className="mt-5 flex flex-wrap gap-2">{demo.tags.map((tag)=><span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">{tag}</span>)}</div><div className="mt-auto pt-7 font-bold text-orange-300">Launch demo →</div></Link>)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
