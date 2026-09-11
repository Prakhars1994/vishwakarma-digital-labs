import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CURRENT_PULSE_URL, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "CurrentPulse AI Case Study",
  description: "How Vishwakarma Digital Labs built CurrentPulse AI: administrator-controlled publishing, ResultPulse, Supabase/PostgreSQL, Cloudflare delivery, SEO quality gates and GitHub Actions automation.",
  alternates: { canonical: "/work/currentpulse-ai" },
  openGraph: {
    title: "CurrentPulse AI Case Study",
    description: "A live publishing, current-affairs and exam-information platform running on Cloudflare.",
    url: `${SITE_URL}/work/currentpulse-ai`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CurrentPulse AI Case Study",
    description: "A live publishing, current-affairs and exam-information platform running on Cloudflare.",
  },
};

const architecture = [
  ["Reader layer", "Next.js + React pages built around fast public reading, date-wise Current Affairs, search, SEO and student navigation."],
  ["Data layer", "Supabase/PostgreSQL stores published articles, administrator PDF imports, source provenance, exam updates and operational state."],
  ["Publishing", "Current Affairs and News use an administrator-controlled PDF/manual publishing path so editorial input stays explicit and traceable."],
  ["Quality", "Publication safety checks, title cleanup, source-provenance handling, sitemap quality gates and live regression checks protect public output."],
  ["ResultPulse", "Official exam-authority updates are normalized, filtered and ranked separately from editorial Current Affairs and News."],
  ["Infrastructure", "Cloudflare serves the public product while GitHub Actions provides validated deployment, background jobs and release safeguards."],
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
            <p className="mt-7 max-w-4xl text-xl leading-9 text-slate-300">
              A live publishing and exam-information platform for Current Affairs, News, revision tools and official-source exam updates, with administrator-controlled editorial publishing and production-grade Cloudflare delivery.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={CURRENT_PULSE_URL} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-6 py-3 font-bold">View live product ↗</a>
              <Link href="/contact" className="rounded-xl border border-white/15 px-6 py-3 font-semibold">Build something similar →</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <div className="text-sm font-black uppercase tracking-[.2em] text-orange-300">The challenge</div>
              <h2 className="mt-3 text-4xl font-black">Keep a large information product reliable without making every page expensive.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>Current Affairs and News need a controlled publishing workflow that preserves administrator-selected source material, keeps provenance visible and avoids accidental rewriting or duplicate processing.</p>
              <p>ResultPulse is a separate workflow for official exam authorities: results, admit cards, applications, answer keys and notifications need filtering, clean titles, correct dates and durable public URLs.</p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="text-sm font-black uppercase tracking-[.2em] text-orange-300">Architecture</div>
            <h2 className="mt-3 text-4xl font-black">Separate editorial publishing, public reading and operational automation.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {architecture.map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-white/10 bg-slate-950 p-6">
                  <h3 className="text-xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-sm font-black uppercase tracking-[.2em] text-cyan-300">Current Affairs + News publishing</div>
              <ol className="mt-6 space-y-4 text-slate-300">
                <li>1. Administrator selects and uploads the publishing source.</li>
                <li>2. The import path preserves editorially selected text and provenance.</li>
                <li>3. Quality gates clean structural artifacts without inventing new reporting.</li>
                <li>4. Articles are published into date-wise public readers with SEO metadata.</li>
                <li>5. Cloudflare serves the validated production build.</li>
              </ol>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-sm font-black uppercase tracking-[.2em] text-emerald-300">ResultPulse pipeline</div>
              <ol className="mt-6 space-y-4 text-slate-300">
                <li>1. Track official exam/recruitment authority updates.</li>
                <li>2. Normalize results, admit cards, notifications and deadlines.</li>
                <li>3. Filter low-value navigation artifacts and future-listing date errors.</li>
                <li>4. Keep official source links as the action destination.</li>
                <li>5. Publish clean, indexable exam timelines and archive pages.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
            <h2 className="text-4xl font-black">Need a product with automation, AI and real production infrastructure?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">The useful part is not adding AI everywhere. It is deciding which work should be static, deterministic, database-driven, administrator-controlled or model-assisted — then building the failure paths too.</p>
            <Link href="/contact" className="mt-8 inline-block rounded-xl bg-orange-500 px-7 py-4 font-bold">Discuss your project →</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
