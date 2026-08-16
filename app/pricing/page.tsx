import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website, App & AI Development Pricing",
  description:
    "Transparent starting budgets for websites, web apps, AI applications and business automation from Vishwakarma Digital Labs.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Website, App & AI Development Pricing | Vishwakarma Digital Labs",
    description: "See practical starting budgets, then request a fixed-scope quote for your project.",
    url: `${SITE_URL}/pricing`,
    type: "website",
  },
};

const whatsapp = `${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hi Prakhar, I saw the pricing page and want a quote for my project.",
)}`;

const packages = [
  {
    name: "Launch Website",
    price: "₹19,999+",
    note: "Best for a professional business presence",
    features: [
      "Up to 5 focused pages",
      "Mobile-first responsive design",
      "Lead form + WhatsApp integration",
      "Basic technical SEO setup",
      "Analytics-ready production deployment",
      "SSL and launch support",
    ],
    href: "/services/web-development",
  },
  {
    name: "Business Website",
    price: "₹39,999+",
    note: "Best for lead generation and richer workflows",
    features: [
      "5–12 custom pages / sections",
      "Conversion-focused landing flows",
      "Forms, maps and business integrations",
      "CMS/admin workflow where required",
      "SEO metadata, sitemap and performance work",
      "Production deployment and handoff",
    ],
    href: "/services/web-development",
    featured: true,
  },
  {
    name: "Web App / MVP",
    price: "₹69,999+",
    note: "Best for startups and internal products",
    features: [
      "Authentication and user flows",
      "Database-backed application",
      "Dashboards and admin workflows",
      "API / third-party integrations",
      "Responsive product UI",
      "Production deployment",
    ],
    href: "/solutions/startup-mvp-development",
  },
  {
    name: "AI / Automation MVP",
    price: "₹79,999+",
    note: "Best for useful AI and repetitive-work automation",
    features: [
      "AI API / LLM integration",
      "RAG or business-data workflows where suitable",
      "API and tool connections",
      "Structured outputs and validation",
      "Fallback and error handling",
      "Usage and cost-conscious deployment",
    ],
    href: "/services/ai-development",
  },
] as const;

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${SITE_NAME} development services`,
  provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Development starting budgets",
    itemListElement: packages.map((item) => ({
      "@type": "Offer",
      name: item.name,
      description: `${item.price} starting budget. Final quote depends on scope.`,
      url: `${SITE_URL}/pricing`,
    })),
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link href="/" className="font-black tracking-tight">Vishwakarma Digital Labs</Link>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold hover:bg-orange-400">Get Fixed Quote</a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:px-8 lg:py-28">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Transparent starting budgets</div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Know the likely budget before you spend days in sales calls.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            These are practical starting points, not bait prices. Your final quote is based on screens, workflows,
            integrations, design depth and timeline. International clients can request a USD quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 px-4 py-2">Free scope discussion</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Fixed-scope options</span>
            <span className="rounded-full border border-white/10 px-4 py-2">Production deployment</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((item) => (
            <article key={item.name} className={`flex h-full flex-col rounded-3xl border p-6 ${"featured" in item && item.featured ? "border-orange-400/50 bg-orange-500/[0.08] shadow-2xl shadow-orange-500/10" : "border-white/10 bg-white/[0.035]"}`}>
              <div className="text-sm font-bold text-orange-300">{item.name}</div>
              <div className="mt-4 text-4xl font-black">{item.price}</div>
              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">{item.note}</p>
              <ul className="mt-7 space-y-3 text-sm leading-6 text-slate-300">
                {item.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-emerald-400">✓</span><span>{feature}</span></li>)}
              </ul>
              <Link href={item.href} className="mt-7 text-sm font-bold text-orange-300 hover:text-orange-200">See service details →</Link>
              <a href={`${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi Prakhar, I am interested in the ${item.name} package. Please help me scope it.`)}`} target="_blank" rel="noreferrer" className="mt-5 rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-slate-950 hover:bg-orange-300">Request exact quote</a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
          <h2 className="text-2xl font-black">What can change the final price?</h2>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-300 md:grid-cols-2 lg:grid-cols-3">
            {["Number and complexity of screens", "Custom UI / animation depth", "Authentication and roles", "Database and admin requirements", "Payments or third-party integrations", "AI usage, data and automation complexity"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-950 p-4">{item}</div>)}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400">A small project should not be forced into an enterprise-sized contract. If the first version can be smaller, the scope can be reduced before development instead of padding the quote with unnecessary features.</p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8">
          <h2 className="text-4xl font-black tracking-tight">Send the requirement. Get a practical scope.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">Share your business, must-have features and target timeline. The first discussion is free and does not lock you into a project.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-4 font-black hover:bg-orange-400">Discuss project on WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
