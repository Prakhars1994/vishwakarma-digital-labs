import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { portfolioDemos } from "@/lib/portfolio";
import { CONTACT, CURRENT_PULSE_URL, SITE_URL } from "@/lib/site";

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
          <div className="max-w-4xl">
            <div className="text-sm font-black uppercase tracking-[0.24em] text-orange-300">Selected work</div>
            <h1 className="mt-4 text-5xl font-black sm:text-6xl">Production proof first. Product concepts with real depth second.</h1>
            <p className="mt-6 text-xl leading-9 text-slate-300">CurrentPulse AI is a real production product. The ten interactive concepts below keep their distinct visual systems so prospects can evaluate range instead of seeing ten copies of one agency template.</p>
          </div>

          <div className="mt-14 grid gap-8 overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-slate-900 to-blue-500/10 p-7 lg:grid-cols-[1.1fr_.9fr] lg:p-12">
            <div>
              <div className="text-xs font-black uppercase tracking-[.2em] text-orange-300">Production case study</div>
              <h2 className="mt-4 text-4xl font-black">CurrentPulse AI</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Automated publishing, Current Affairs, ResultPulse exam monitoring, Supabase/PostgreSQL, multi-provider AI routing, Cloudflare delivery and GitHub Actions background workflows.</p>
              <div className="mt-7 flex flex-wrap gap-2">{["Next.js","React","Supabase","PostgreSQL","Cloudflare","GitHub Actions","Multi-provider AI"].map((item)=><span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">{item}</span>)}</div>
              <div className="mt-8 flex flex-wrap gap-4"><Link href="/work/currentpulse-ai" className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950">Read case study →</Link><a href={CURRENT_PULSE_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-6 py-3 font-semibold">Open live product ↗</a><a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-6 py-3 font-semibold">GitHub ↗</a></div>
            </div>
            <div className="relative min-h-[330px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-5">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/15 blur-3xl" />
              <div className="relative border-b border-white/10 pb-4 text-[10px] font-black uppercase tracking-[.2em] text-slate-500">CurrentPulse / Production</div>
              <div className="relative mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">{["Automated content workflows","ResultPulse official-update monitoring","AI provider fallbacks + quality gates","Search, SEO and structured publishing","Cloudflare public delivery","GitHub Actions background automation"].map((item)=><div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-slate-200">✓ {item}</div>)}</div>
            </div>
          </div>

          <div className="mt-20 flex items-end justify-between gap-6"><div><div className="text-sm font-black uppercase tracking-[.2em] text-orange-300">Interactive concepts</div><h2 className="mt-3 text-4xl font-black">10 visibly different product demos</h2><p className="mt-4 max-w-3xl leading-8 text-slate-400">Restaurant, AI, lead generation, ecommerce, healthcare, real estate, edtech, CRM, home services and logistics — each with its own visual character and interaction focus.</p></div><div className="hidden text-sm text-slate-500 sm:block">Concepts, not claimed client engagements</div></div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolioDemos.map((demo)=><Link key={demo.href} href={demo.href} aria-label={`Open ${demo.title} demo`} className={`group relative flex min-h-[370px] flex-col overflow-hidden border p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${demo.card}`}>
              <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition group-hover:scale-125 ${demo.glow}`} />
              <div className="relative flex items-start justify-between"><div className={`text-[10px] font-black tracking-[.18em] ${demo.labelClass}`}>{demo.label}</div><div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-2xl shadow-lg backdrop-blur" aria-hidden="true">{demo.icon}</div></div>
              <div className="relative mt-8 rounded-2xl border border-white/10 bg-black/15 p-4 backdrop-blur-sm" aria-hidden="true"><div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-300/70"/><span className="h-2 w-2 rounded-full bg-yellow-300/70"/><span className="h-2 w-2 rounded-full bg-emerald-300/70"/></div><div className="grid grid-cols-4 gap-2">{[0,1,2,3].map((item)=><div key={item} className={`h-12 rounded-lg ${item === 0 ? "col-span-2 bg-white/15" : "bg-white/[0.07]"}`} />)}</div></div>
              <h3 className="relative mt-6 text-2xl font-black">{demo.title}</h3>
              <p className="relative mt-3 leading-7 text-white/65">{demo.text}</p>
              <div className="relative mt-5 flex flex-wrap gap-2">{demo.tags.map((tag)=><span key={tag} className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[11px] font-bold text-white/65">{tag}</span>)}</div>
              <div className={`relative mt-auto flex items-center justify-between border px-4 py-3 text-sm font-black transition ${demo.button}`}><span>Launch full demo</span><span className="text-lg transition group-hover:translate-x-1">→</span></div>
            </Link>)}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-500">Portfolio policy: CurrentPulse AI is presented as production work. Demo concepts are clearly labelled concepts and are intentionally excluded from search indexing even though they remain publicly accessible from this work hub.</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
