import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

const solutions = {
  "restaurant-website-development": {
    title: "Restaurant Website Development",
    description: "Fast restaurant websites with menus, reservations, WhatsApp, maps, galleries and local-search foundations.",
    headline: "Turn restaurant searches into reservations, calls and walk-ins.",
    bestFor: "Restaurants, cafés, cloud kitchens and hospitality brands",
    outcomes: ["Mobile menu that is easy to browse", "Reservation / enquiry flow", "Google Maps and contact actions", "Gallery and signature-dish presentation", "Local SEO foundations", "Fast mobile performance"],
    demo: "/demos/restaurant",
    demoLabel: "Open restaurant demo",
  },
  "real-estate-website-development": {
    title: "Real Estate Website Development",
    description: "Property websites and portals with listings, filters, lead capture, viewing requests, calculators and CRM-ready workflows.",
    headline: "Make property discovery easier and capture serious buyer enquiries.",
    bestFor: "Agents, brokers, developers and property businesses",
    outcomes: ["Searchable property listings", "Location and property filters", "Viewing / callback requests", "Mortgage or affordability tools", "Lead-routing integrations", "Admin-ready listing workflows"],
    demo: "/demos/real-estate",
    demoLabel: "Open real-estate demo",
  },
  "clinic-website-development": {
    title: "Clinic & Healthcare Website Development",
    description: "Healthcare websites and portals with doctor profiles, appointment requests, service discovery and patient-friendly workflows.",
    headline: "Help patients find the right service and request an appointment quickly.",
    bestFor: "Clinics, doctors, diagnostic centres and healthcare businesses",
    outcomes: ["Doctor and specialty pages", "Appointment / enquiry flow", "Visit mode and service information", "Mobile-first patient experience", "Admin and intake workflows where needed", "Local SEO foundations"],
    demo: "/demos/clinic",
    demoLabel: "Open clinic demo",
  },
  "coaching-institute-website-development": {
    title: "Coaching Institute & EdTech Website Development",
    description: "Websites and learning products for coaching institutes with courses, quizzes, student workflows, content and lead generation.",
    headline: "Create a serious digital product around courses, content and student acquisition.",
    bestFor: "Coaching institutes, tutors, training companies and EdTech teams",
    outcomes: ["Course and programme landing pages", "Lead capture and counselling requests", "Student portal / LMS workflows", "Quiz and test experiences", "Content / current-affairs publishing", "Admin and analytics integrations"],
    demo: "/demos/lms",
    demoLabel: "Open LMS demo",
  },
  "startup-mvp-development": {
    title: "Startup MVP Development",
    description: "Production-focused SaaS and startup MVP development with authentication, databases, dashboards, APIs and deployment.",
    headline: "Build the smallest real product that can validate the workflow.",
    bestFor: "Founders, early-stage startups and internal product teams",
    outcomes: ["Product flow and scope reduction", "Authentication and user roles", "Database-backed workflows", "Dashboards and admin tools", "API / payment / tool integrations", "Production deployment and iteration path"],
    demo: "/demos/crm",
    demoLabel: "Open SaaS / CRM demo",
  },
  "ai-automation-small-business": {
    title: "AI Automation for Small Business",
    description: "AI-assisted business automation for leads, customer support, content, operations, reporting and internal knowledge workflows.",
    headline: "Automate repetitive work without turning your business into an AI experiment.",
    bestFor: "Service businesses, agencies, sales teams and operations teams",
    outcomes: ["Workflow audit before AI is added", "Lead routing and notifications", "Knowledge / RAG assistants where useful", "API and business-tool integrations", "Structured outputs and validation", "Fallbacks, monitoring and cost controls"],
    demo: "/demos/ai-assistant",
    demoLabel: "Open AI assistant demo",
  },
} as const;

type SolutionSlug = keyof typeof solutions;

export function generateStaticParams() {
  return Object.keys(solutions).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = solutions[slug as SolutionSlug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: { title: `${data.title} | ${SITE_NAME}`, description: data.description, url: `${SITE_URL}/solutions/${slug}`, type: "website" },
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = solutions[slug as SolutionSlug];
  if (!data) notFound();
  const whatsapp = `${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi Prakhar, I am interested in ${data.title}. Please help me scope the project.`)}`;
  const schema = { "@context": "https://schema.org", "@type": "Service", name: data.title, description: data.description, provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL }, areaServed: "Worldwide", url: `${SITE_URL}/solutions/${slug}` };
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="border-b border-white/10"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8"><Link href="/" className="font-black">{SITE_NAME}</Link><a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold">Get quote</a></div></header>
      <section className="relative overflow-hidden border-b border-white/10"><div className="absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]"/><div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28"><div className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">{data.title}</div><h1 className="mt-5 max-w-5xl text-5xl font-black tracking-tight sm:text-7xl">{data.headline}</h1><p className="mt-6 max-w-3xl text-xl leading-9 text-slate-300">{data.description}</p><div className="mt-7 text-sm text-slate-500">Best for: {data.bestFor}</div><div className="mt-9 flex flex-wrap gap-3"><a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-6 py-4 font-black hover:bg-orange-400">Discuss this project</a><Link href={data.demo} className="rounded-xl border border-white/15 px-6 py-4 font-bold">{data.demoLabel} →</Link><Link href="/pricing" className="rounded-xl border border-white/15 px-6 py-4 font-bold">See starting prices</Link></div></div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><div className="text-sm font-black uppercase tracking-[0.2em] text-orange-400">What we can build</div><h2 className="mt-4 text-4xl font-black tracking-tight">Focus on the customer journey, not just the homepage.</h2><p className="mt-5 leading-8 text-slate-400">The exact stack and number of features depend on your workflow. These are common high-value outcomes for this kind of project.</p></div><div className="grid gap-4 sm:grid-cols-2">{data.outcomes.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-slate-200"><span className="mr-2 text-emerald-400">✓</span>{item}</div>)}</div></div>
        <div className="mt-16 grid gap-5 md:grid-cols-3">{[["01", "Scope", "Identify the business goal, users, must-have features and what can wait."], ["02", "Build", "Implement the customer-facing experience, data and integrations around the agreed scope."], ["03", "Launch", "Test the important flows, deploy to production and hand over a working product."]].map(([n,t,x]) => <article key={n} className="rounded-3xl border border-white/10 bg-white/[0.025] p-6"><div className="text-3xl font-black text-orange-500/40">{n}</div><h3 className="mt-5 text-xl font-black">{t}</h3><p className="mt-3 leading-7 text-slate-400">{x}</p></article>)}</div>
      </section>
      <section className="border-t border-white/10 bg-white/[0.025]"><div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8"><h2 className="text-4xl font-black">Have this kind of requirement?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">Send the essential features and a reference if you have one. You will get a practical scope rather than an oversized feature list.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-4 font-black hover:bg-orange-400">Request project scope</a></div></section>
    </main>
  );
}
