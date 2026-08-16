import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_URL } from "@/lib/site";

const LIVE_URL = "https://cp.vliab.workers.dev/";

export const metadata: Metadata = {
  title: "CurrentPulse AI Case Study | Full-Stack AI Platform",
  description: "See how Vishwakarma Digital Labs built CurrentPulse AI: a production Next.js, Supabase, PostgreSQL and AI-powered publishing platform with automation and exam tools.",
  alternates: { canonical: "/case-studies/currentpulse-ai" },
  openGraph: {
    title: "CurrentPulse AI â€” Full-Stack AI Product Case Study",
    description: "Production architecture, AI workflows, automation, database-backed publishing and deployment in one live product.",
    url: `${SITE_URL}/case-studies/currentpulse-ai`,
    type: "article",
  },
};

const capabilities = [
  ["Full-stack product", "Next.js and React application with public experiences, admin workflows and server-side APIs."],
  ["Database-backed publishing", "Supabase/PostgreSQL stores structured content, workflow state and product data."],
  ["AI integration", "AI-assisted generation and transformation workflows with structured outputs and fallback handling."],
  ["Automation", "Scheduled ingestion and publishing pipelines reduce repetitive editorial and operational work."],
  ["Search & SEO", "Dynamic article routes, metadata, structured content, sitemap support and search-oriented publishing."],
  ["Exam products", "Current affairs, news, results/notifications, quizzes, papers, mock tests and AI-assisted discovery."],
] as const;

export default function CurrentPulseCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href="/" className="font-black">Vishwakarma Digital Labs</Link><Link href="/contact" className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold">Build something similar</Link></div></header>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-orange-300">Live production product</div>
          <h1 className="mt-6 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">CurrentPulse AI: building an automated content and exam platform end to end.</h1>
          <p className="mt-7 max-w-4xl text-xl leading-9 text-slate-300">CurrentPulse AI is a live full-stack product built around automated publishing, structured current-affairs content, exam utilities and AI-assisted workflows. It demonstrates product architecture beyond a static agency demo.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href={LIVE_URL} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-6 py-3 font-black text-slate-950">Open live product â†—</a><a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-6 py-3 font-bold">View GitHub profile</a></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([title, text]) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"><h2 className="text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-400">{text}</p></article>)}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8"><div className="text-sm font-black uppercase tracking-wider text-orange-400">Stack</div><h2 className="mt-4 text-3xl font-black">Modern web + data + AI.</h2><div className="mt-6 flex flex-wrap gap-2">{["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "AI APIs", "Automation", "GitHub", "Cloudflare / edge delivery"].map((item) => <span key={item} className="rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-sm text-slate-300">{item}</span>)}</div></div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8"><div className="text-sm font-black uppercase tracking-wider text-orange-400">Engineering focus</div><h2 className="mt-4 text-3xl font-black">The hard part is the workflow.</h2><ul className="mt-6 space-y-3 leading-7 text-slate-300"><li>âœ“ separate user-facing reads from heavier background work</li><li>âœ“ structure content before it reaches public pages</li><li>âœ“ handle external API failures and quotas</li><li>âœ“ deduplicate and track processing state</li><li>âœ“ deploy and iterate on a real production system</li></ul></div>
        </div>

        <div className="mt-16 rounded-[2.5rem] border border-orange-400/25 bg-gradient-to-br from-orange-500/15 to-white/[0.025] p-8 text-center sm:p-12"><div className="text-sm font-black uppercase tracking-wider text-orange-300">Need an MVP, portal or automated workflow?</div><h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight">Use the case study as proof, then scope your own product.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">You do not need the same architecture. The first step is identifying the smallest production version that solves your business problem.</p><a href={`${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Prakhar, I saw the CurrentPulse AI case study and want to discuss a project.")}`} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-xl bg-orange-500 px-7 py-4 font-black hover:bg-orange-400">Discuss your project</a></div>
      </section>
    </main>
  );
}
