import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { CONTACT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact a Web, App & AI Developer",
  description: "Discuss a website, mobile app, AI application, SaaS MVP or business automation project with Vishwakarma Digital Labs.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Project | Vishwakarma Digital Labs",
    description: "Share your project requirements and get a practical scope and quote.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="font-black">Vishwakarma Digital Labs</Link>
          <Link href="/pricing" className="text-sm font-bold text-orange-300 hover:text-orange-200">View pricing</Link>
        </div>
      </header>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-24">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Start a project</div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Tell me what you need to build.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">You communicate directly with the developer responsible for the implementation. Share the business goal, must-have features and any reference products.</p>
          <div className="mt-8 grid gap-3">
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5"><div className="text-xs font-bold uppercase tracking-wider text-emerald-300">WhatsApp</div><div className="mt-2 font-bold">+91 84460 00784</div></a>
            <a href={`mailto:${CONTACT.email}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><div className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</div><div className="mt-2 font-bold">{CONTACT.email}</div></a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"><div className="text-xs font-bold uppercase tracking-wider text-slate-500">GitHub</div><div className="mt-2 font-bold">Prakhars1994</div></a>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 p-6">
            <div className="font-black">Useful details to send</div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
              <li>• What the product should help your business achieve</li>
              <li>• Must-have pages, screens or workflows</li>
              <li>• Any website/app you like as a reference</li>
              <li>• Target launch window and rough budget</li>
            </ul>
          </div>
        </div>
        <QuoteForm />
      </section>
    </main>
  );
}
