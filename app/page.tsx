import type { Metadata } from "next";
import Link from "next/link";
import ProjectEstimator from "@/components/ProjectEstimator";
import QuoteForm from "@/components/QuoteForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { portfolioDemos } from "@/lib/portfolio";
import { CONTACT, CURRENT_PULSE_URL, OWNER, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Web Development, AI & Mobile App Company",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vishwakarma Digital Labs — Web, Mobile, AI & Automation",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwakarma Digital Labs — Web, Mobile, AI & Automation",
    description: SITE_DESCRIPTION,
  },
};

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    href: "/services/web-development",
    description: "Fast, modern and conversion-focused websites, portals and e-commerce experiences.",
    items: ["Business Websites", "E-commerce", "Landing Pages", "Portals"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Customer-facing and internal mobile products built around clear business workflows.",
    items: ["Android / iOS", "Booking", "Marketplaces", "Business Apps"],
  },
  {
    icon: "🤖",
    title: "AI Applications",
    href: "/services/ai-development",
    description: "AI agents, copilots and knowledge applications connected to useful business data and tools.",
    items: ["AI Agents", "RAG", "LLM Integration", "Smart Assistants"],
  },
  {
    icon: "⚡",
    title: "Business Automation",
    href: "/services/business-automation",
    description: "Connect APIs, databases and applications to remove repetitive work and manual handoffs.",
    items: ["Workflow Automation", "APIs", "Dashboards", "Notifications"],
  },
];

const faqItems = [
  ["Can you handle design, development and deployment?", "Yes. A project can include UI implementation, application development, database/API integration, Cloudflare deployment, SSL and production setup depending on scope."],
  ["Do I need to know the technical stack?", "No. Describe the business problem, users and features. The technical architecture can be proposed from there."],
  ["Can you work on an existing website or app?", "Yes. Existing Next.js/React applications, responsive issues, integrations, feature additions and selected redesign work can be scoped separately."],
  ["Can we start with a smaller MVP?", "Yes. When an idea is still being validated, starting with the smallest useful production version is usually the better path."],
  ["How is pricing decided?", "Pricing depends on screens, workflows, integrations, backend complexity, design depth and timeline. The estimator provides a planning range; the final quote follows the scope."],
  ["Do you provide post-launch support?", "Post-launch fixes, monitoring and ongoing development can be included as a defined support period or a separate engagement."],
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE_NAME} services`,
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}${service.href}`,
    name: service.title,
  })),
};

const featuredDemos = portfolioDemos.filter((demo) => demo.featured);
const quoteUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent("Hi Prakhar, I want to discuss a digital product with Vishwakarma Digital Labs.")}`;

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, servicesSchema]) }} />
      <SiteHeader />

      <main id="main-content">
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[680px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />
          <div className="absolute right-0 top-48 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm text-orange-300">
                <span className="text-emerald-400" aria-hidden="true">●</span> Taking new projects
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                We Build Digital Products That <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">Grow Your Business</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Production-ready websites, mobile apps, AI applications and automation — designed around real customers, operations and measurable business goals.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href={quoteUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-7 py-4 text-center font-bold shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-400">Get a Free Quote</a>
                <Link href="/work" className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center font-semibold transition hover:bg-white/10">See Production Work →</Link>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                <span>✓ Free initial consultation</span><span>✓ Fixed-scope options</span><span>✓ Production deployment</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-orange-500/20 to-blue-500/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-2" aria-hidden="true"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-yellow-400"/><span className="h-3 w-3 rounded-full bg-green-400"/></div>
                <div className="rounded-2xl bg-slate-900 p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-orange-400">Production Studio</div>
                  <div className="mt-2 text-3xl font-black">Build. Integrate. Automate. Ship.</div>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {[["🌐","Web"],["📱","Mobile"],["🤖","AI"],["⚙️","Automation"]].map(([icon,title]) => <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5"><div className="text-2xl" aria-hidden="true">{icon}</div><div className="mt-3 font-semibold">{title}</div></div>)}
                  </div>
                  <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4"><div className="text-xs uppercase tracking-wider text-emerald-400">Deployment</div><div className="mt-1 font-semibold">Cloudflare • GitHub • Supabase</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]" aria-label="Technology stack">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-4 px-5 py-6 text-sm font-medium text-slate-400">
            {["Next.js","React","Supabase","PostgreSQL","Cloudflare Workers","GitHub Actions","AI APIs"].map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-10 rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-slate-900 to-blue-500/10 p-7 lg:grid-cols-[1.15fr_.85fr] lg:p-12">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">Featured Production Case Study</div>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">CurrentPulse AI</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">A live publishing and exam-information platform combining automated source collection, Supabase/PostgreSQL, multi-provider AI routing, quality gates, search/SEO, Cloudflare delivery and GitHub Actions background automation.</p>
              <div className="mt-7 flex flex-wrap gap-2">{["Next.js","Supabase","Multi-provider AI","Cloudflare","GitHub Actions","Automation"].map((item)=><span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">{item}</span>)}</div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/work/currentpulse-ai" className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-orange-300">Read case study →</Link>
                <a href={CURRENT_PULSE_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/10">View live project ↗</a>
              </div>
            </div>
            <div className="grid content-center gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {["Automated News & Current Affairs workflows","ResultPulse exam / result monitoring","Multi-provider AI fallbacks","Cloudflare + GitHub Actions architecture"].map((item)=><div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 font-semibold text-slate-200">✓ {item}</div>)}
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl"><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Services</div><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Everything needed to move from idea to a working digital product.</h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service)=><Link key={service.title} href={service.href} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.055]"><div className="text-3xl" aria-hidden="true">{service.icon}</div><h3 className="mt-5 text-2xl font-bold">{service.title}</h3><p className="mt-3 leading-7 text-slate-400">{service.description}</p><div className="mt-5 flex flex-wrap gap-2">{service.items.map((item)=><span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">{item}</span>)}</div><div className="mt-7 font-bold text-orange-300">Explore service →</div></Link>)}
          </div>
        </section>

        <section id="work" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-3xl"><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Product Concepts</div><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Four focused demos. Ten total in the portfolio.</h2><p className="mt-5 leading-8 text-slate-400">These are clearly labelled concept builds used to demonstrate product thinking, interaction depth and visual range — not claimed client engagements.</p></div><Link href="/work" className="font-bold text-orange-300">View all work →</Link></div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {featuredDemos.map((demo)=><Link key={demo.href} href={demo.href} className="group rounded-3xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-1 hover:border-orange-400/30"><div className="flex items-start justify-between"><div className="text-xs font-black uppercase tracking-[0.18em] text-orange-300">{demo.label}</div><div className="text-3xl" aria-hidden="true">{demo.icon}</div></div><h3 className="mt-7 text-2xl font-black">{demo.title}</h3><p className="mt-3 leading-7 text-slate-400">{demo.text}</p><div className="mt-5 flex flex-wrap gap-2">{demo.tags.map((tag)=><span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-400">{tag}</span>)}</div><div className="mt-7 font-bold text-orange-300">Open interactive demo →</div></Link>)}
            </div>
          </div>
        </section>

        <section id="estimator" className="relative overflow-hidden border-y-4 border-blue-950 bg-[#eaf0ff] text-blue-950">
          <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="mb-12 max-w-4xl"><div className="font-mono text-sm font-black uppercase tracking-[0.25em] text-blue-600">Interactive Project Estimator</div><h2 className="mt-4 text-4xl font-black sm:text-6xl">Build a scope. See a planning range. Then talk.</h2><p className="mt-5 text-lg leading-8 text-blue-800">Choose India or international pricing explicitly. The two bands reflect different commercial markets rather than pretending to be a currency conversion.</p></div><ProjectEstimator /></div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl"><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Process</div><h2 className="mt-4 text-4xl font-black sm:text-5xl">Clear scope, direct communication, production delivery.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["01","Discuss","Business goal, users, features and constraints."],["02","Plan","Scope, architecture, milestones and delivery path."],["03","Build","Implementation, integrations, testing and refinement."],["04","Launch","Cloudflare/hosting setup, SSL, checks and handoff."]].map(([n,t,x])=><article key={n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><div className="text-4xl font-black text-orange-500/35">{n}</div><h3 className="mt-6 text-xl font-bold">{t}</h3><p className="mt-3 leading-7 text-slate-400">{x}</p></article>)}</div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
            <div><div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 text-3xl font-black">PS</div><div className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-orange-300">Founder-led studio</div><h2 className="mt-3 text-4xl font-black">{OWNER.name}</h2><div className="mt-2 font-semibold text-slate-300">{OWNER.role}</div></div>
            <div><p className="text-xl leading-9 text-slate-300">{OWNER.summary}</p><p className="mt-5 leading-8 text-slate-400">The studio is intentionally transparent: CurrentPulse is presented as real production work, while portfolio demos are labelled as concepts. Direct communication means the person discussing the architecture is also close to the implementation.</p><div className="mt-7 flex flex-wrap gap-4"><Link href="/about" className="rounded-xl bg-white px-5 py-3 font-bold text-slate-950">About the studio →</Link><a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-5 py-3 font-semibold">GitHub ↗</a></div></div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">FAQ</div><h2 className="mt-4 text-4xl font-black sm:text-5xl">Clear answers before development starts.</h2></div><div className="grid gap-3">{faqItems.map(([q,a])=><details key={q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-orange-400/25"><summary className="cursor-pointer list-none pr-6 font-bold">{q}<span className="float-right text-orange-400 transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 border-t border-white/10 pt-4 leading-7 text-slate-400">{a}</p></details>)}</div></div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Start a Project</div><h2 className="mt-4 text-4xl font-black sm:text-5xl">Tell us what you want to build.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">Share the requirement, timeline and rough budget. The form can securely save the enquiry and opens a ready-to-send WhatsApp message.</p><div className="mt-8 grid gap-3 text-sm"><a href={`tel:${CONTACT.phone}`} className="rounded-xl border border-white/10 p-4 hover:bg-white/5"><div className="text-slate-500">Call / WhatsApp</div><div className="mt-1 font-semibold">{CONTACT.displayPhone}</div></a><a href={`mailto:${CONTACT.email}`} className="rounded-xl border border-white/10 p-4 hover:bg-white/5"><div className="text-slate-500">Email</div><div className="mt-1 font-semibold">{CONTACT.email}</div></a></div></div>
            <QuoteForm />
          </div>
        </section>
      </main>

      <SiteFooter />
      <a href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Chat with Vishwakarma Digital Labs on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl shadow-2xl transition hover:scale-110">💬</a>
    </div>
  );
}
