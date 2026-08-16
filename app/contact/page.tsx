import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Project Quote",
  description: "Discuss a website, mobile app, AI application or business automation project with Vishwakarma Digital Labs.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Vishwakarma Digital Labs", description: "Discuss your next digital product.", url: `${SITE_URL}/contact`, type: "website" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <main id="main-content" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
        <div><div className="text-sm font-black uppercase tracking-[.22em] text-orange-300">Start a project</div><h1 className="mt-4 text-5xl font-black sm:text-6xl">Tell us what you need to build.</h1><p className="mt-6 text-lg leading-8 text-slate-400">Send a rough requirement even if the architecture is not decided. The first step is to narrow the useful scope and identify the main technical risks.</p><div className="mt-9 grid gap-3"><a href={`tel:${CONTACT.phone}`} className="rounded-xl border border-white/10 p-5 hover:bg-white/5"><div className="text-sm text-slate-500">Call / WhatsApp</div><div className="mt-1 font-bold">{CONTACT.displayPhone}</div></a><a href={`mailto:${CONTACT.email}`} className="rounded-xl border border-white/10 p-5 hover:bg-white/5"><div className="text-sm text-slate-500">Email</div><div className="mt-1 font-bold">{CONTACT.email}</div></a><a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-5 hover:bg-white/5"><div className="text-sm text-slate-500">GitHub</div><div className="mt-1 font-bold">Prakhars1994</div></a></div></div>
        <QuoteForm />
      </main>
      <SiteFooter />
    </div>
  );
}
