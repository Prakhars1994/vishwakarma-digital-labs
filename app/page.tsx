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
] as const;

const engagementModes = [
  ["01", "Fixed-scope project", "Best when requirements are clear. Agree deliverables, timeline and price before development starts.", "Websites • Landing pages • Defined features"],
  ["02", "MVP sprint", "Best for a new idea that needs a working first version quickly before investing in a larger build.", "Startups • AI concepts • Internal tools"],
  ["03", "Ongoing development", "Best when features evolve continuously and you need regular improvements, integrations or support.", "SaaS • Automation • Product teams"],
] as const;

const reasons = [
  ["Production-focused", "Solutions are built to be deployed and used — not left as prototypes."],
  ["Mobile-first", "Responsive experiences across phones, tablets and desktop screens."],
  ["Modern stack", "Next.js, React, Supabase, PostgreSQL, APIs, GitHub, Cloudflare and modern AI tooling."],
  ["Direct communication", "Discuss requirements directly with the developer working on your product."],
  ["End-to-end delivery", "Development, integrations, database, hosting, SSL and deployment can be handled."],
  ["Business-oriented", "Features are selected around your real customer and operational needs."],
] as const;

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
                <a href="#work" className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center font-semibold transition hover:bg-white/10">View All Samples →</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                <span>✓ Free initial consultation</span><span>✓ Fixed-scope options</span><span>✓ Production deployment</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-orange-500/20 to-blue-500/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-2" aria-hidden="true"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-yellow-400"/><span className="h-3 w-3 rounded-full bg-green-400"/><span className="ml-3 text-xs text-slate-500">digital-product-studio</span></div>
                <div className="rounded-2xl bg-slate-900 p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-orange-400">Production Studio</div>
                  <div className="mt-2 text-3xl font-black">Build. Integrate. Automate. Ship.</div>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {[["🌐","Websites"],["📱","Mobile Apps"],["🤖","AI Apps"],["⚙️","Automation"]].map(([icon,title]) => <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5"><div className="text-2xl" aria-hidden="true">{icon}</div><div className="mt-3 font-semibold">{title}</div></div>)}
                  </div>
                  <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4"><div className="text-xs uppercase tracking-wider text-emerald-400">Production</div><div className="mt-1 font-semibold">Built • Tested • Deployed</div></div>
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
          <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-slate-900 to-blue-500/10 p-7 lg:grid-cols-[1.1fr_.9fr] lg:p-12">
            <div>
              <div className="text-sm font-black uppercase tracking-[0.22em] text-orange-300">Featured Production Case Study</div>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">CurrentPulse AI</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">A live publishing and exam-information platform combining automated source collection, Supabase/PostgreSQL, multi-provider AI routing, quality gates, search/SEO, Cloudflare delivery and GitHub Actions background automation.</p>
              <div className="mt-7 flex flex-wrap gap-2">{["Next.js","React","Supabase","PostgreSQL","Multi-provider AI","Cloudflare","GitHub Actions","Automation"].map((item)=><span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">{item}</span>)}</div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/work/currentpulse-ai" className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-orange-300">Read full case study →</Link>
                <a href={CURRENT_PULSE_URL} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/10">View live project ↗</a>
                <a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-6 py-3 font-semibold hover:bg-white/10">GitHub ↗</a>
              </div>
            </div>
            <div className="relative min-h-[390px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/15 blur-3xl" />
              <div className="relative flex items-center gap-2 border-b border-white/10 pb-4" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-red-400"/><span className="h-2.5 w-2.5 rounded-full bg-yellow-400"/><span className="h-2.5 w-2.5 rounded-full bg-green-400"/><span className="ml-2 text-[10px] font-bold uppercase tracking-[.18em] text-slate-500">CurrentPulse / Production</span></div>
              <div className="relative mt-5 rounded-xl border border-orange-400/20 bg-orange-400/10 p-5"><div className="text-xs font-black uppercase tracking-[.2em] text-orange-300">AI Publishing + ResultPulse</div><div className="mt-2 text-xl font-black">Automated information platform</div></div>
              <div className="relative mt-4 grid grid-cols-2 gap-3">
                {["News + CA workflows","ResultPulse monitoring","Multi-provider AI","Supabase database","Search + SEO","Quality gates"].map((item)=><div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-slate-300">✓ {item}</div>)}
              </div>
              <div className="relative mt-4 flex items-center justify-between rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4"><div><div className="text-[10px] uppercase tracking-widest text-emerald-300">Delivery</div><div className="mt-1 font-bold">Cloudflare + GitHub Actions</div></div><div className="text-2xl" aria-hidden="true">⚡</div></div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl"><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Our Services</div><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Everything you need to build and grow a digital product.</h2><p className="mt-5 text-lg leading-8 text-slate-400">From a focused business website to an AI-enabled operations system, scope can start small and expand only where the business needs it.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service)=><Link key={service.title} href={service.href} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.055]"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-500/10 text-3xl" aria-hidden="true">{service.icon}</div><h3 className="mt-6 text-2xl font-bold">{service.title}</h3><p className="mt-3 leading-7 text-slate-400">{service.description}</p><div className="mt-6 flex flex-wrap gap-2">{service.items.map((item)=><span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">{item}</span>)}</div><div className="mt-7 font-bold text-orange-300">Explore service →</div></Link>)}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="max-w-3xl"><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Ways to Work Together</div><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Choose the engagement that fits the job.</h2><p className="mt-5 text-lg leading-8 text-slate-400">Small fixes do not need a huge contract. Larger products need clear milestones. The scope can match the actual risk and complexity.</p></div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {engagementModes.map(([number,title,text,fit])=><article key={number} className="rounded-3xl border border-white/10 bg-slate-950 p-7"><div className="text-3xl font-black text-orange-500/40">{number}</div><h3 className="mt-6 text-2xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p><div className="mt-6 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-wider text-slate-500">{fit}</div></article>)}
            </div>
          </div>
        </section>

        <section id="work" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div className="max-w-3xl"><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Interactive Samples</div><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">All 10 product demos, visible in one place.</h2><p className="mt-5 text-lg leading-8 text-slate-400">Each concept intentionally uses a different visual language and interaction model. They demonstrate product thinking and execution range; they are not claimed client engagements.</p></div>
              <Link href="/work" className="font-bold text-orange-300">Open complete work hub →</Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {portfolioDemos.map((demo)=><Link key={demo.href} href={demo.href} aria-label={`Open ${demo.title} demo`} className={`group relative flex min-h-[370px] flex-col overflow-hidden border p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ${demo.card}`}>
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition group-hover:scale-125 ${demo.glow}`} />
                <div className="relative flex items-start justify-between gap-4"><div className={`text-[10px] font-black tracking-[0.18em] ${demo.labelClass}`}>{demo.label}</div><div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-2xl shadow-lg backdrop-blur" aria-hidden="true">{demo.icon}</div></div>
                <div className="relative mt-8 rounded-2xl border border-white/10 bg-black/15 p-4 backdrop-blur-sm" aria-hidden="true"><div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-300/70"/><span className="h-2 w-2 rounded-full bg-yellow-300/70"/><span className="h-2 w-2 rounded-full bg-emerald-300/70"/></div><div className="grid grid-cols-4 gap-2">{[0,1,2,3].map((item)=><div key={item} className={`h-12 rounded-lg ${item === 0 ? "col-span-2 bg-white/15" : "bg-white/[0.07]"}`} />)}</div></div>
                <h3 className="relative mt-6 text-2xl font-black text-white">{demo.title}</h3><p className="relative mt-3 leading-7 text-white/65">{demo.text}</p>
                <div className="relative mt-5 flex flex-wrap gap-2">{demo.tags.map((tag)=><span key={tag} className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[11px] font-bold text-white/65">{tag}</span>)}</div>
                <div className={`relative mt-auto flex items-center justify-between border px-4 py-3 text-sm font-black transition ${demo.button}`}><span>Launch full demo</span><span className="text-lg transition group-hover:translate-x-1">→</span></div>
              </Link>)}
            </div>
            <p className="mt-5 text-xs text-slate-500">Demo concepts are portfolio concepts, not claimed client engagements.</p>
          </div>
        </section>

        <section id="estimator" className="relative overflow-hidden border-y-4 border-blue-950 bg-[#eaf0ff] text-blue-950">
          <div className="absolute -left-20 top-16 h-56 w-56 rounded-full border-[30px] border-cyan-300/35" aria-hidden="true" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rotate-12 bg-[#d8ff3e]/25" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="mb-12 max-w-4xl"><div className="font-mono text-sm font-black uppercase tracking-[0.25em] text-blue-600">Interactive Project Estimator</div><h2 className="mt-4 text-4xl font-black sm:text-6xl">Build a scope. See a planning range. Then talk.</h2><p className="mt-5 text-lg leading-8 text-blue-800">Choose India or international pricing explicitly. The two bands reflect different commercial markets rather than pretending to be a currency conversion.</p></div><ProjectEstimator /></div>
        </section>

        <section id="process" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl"><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Our Process</div><h2 className="mt-4 text-4xl font-black sm:text-5xl">Simple process. Clear communication.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["01","Discuss","Tell us about your business, idea, requirements and goals."],["02","Plan","Define features, scope, technology, milestones and delivery path."],["03","Build","Implementation, integrations, testing and refinement for real users."],["04","Launch","Cloudflare/hosting setup, SSL, production checks and handoff."]].map(([n,t,x])=><article key={n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"><div className="text-4xl font-black text-orange-500/35">{n}</div><h3 className="mt-6 text-xl font-bold">{t}</h3><p className="mt-3 leading-7 text-slate-400">{x}</p></article>)}</div>
        </section>

        <section id="about" className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
              <div><div className="grid h-24 w-24 place-items-center rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 text-3xl font-black">PS</div><div className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-orange-300">Founder-led studio</div><h2 className="mt-3 text-4xl font-black">{OWNER.name}</h2><div className="mt-2 font-semibold text-slate-300">{OWNER.role}</div><p className="mt-5 leading-8 text-slate-400">{OWNER.summary}</p><div className="mt-7 flex flex-wrap gap-4"><Link href="/about" className="rounded-xl bg-white px-5 py-3 font-bold text-slate-950">About the studio →</Link><a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-5 py-3 font-semibold">GitHub ↗</a></div></div>
              <div><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Why Vishwakarma Digital Labs?</div><h2 className="mt-4 text-4xl font-black sm:text-5xl">Technology should solve business problems.</h2><p className="mt-5 max-w-3xl leading-8 text-slate-400">The studio is intentionally transparent: CurrentPulse is presented as real production work, while portfolio demos are labelled as concepts. Direct communication keeps product decisions close to implementation.</p><div className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">{reasons.map(([title,text])=><div key={title}><div className="mb-4 h-1 w-10 rounded-full bg-orange-500"/><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></div>)}</div></div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Frequently Asked Questions</div><h2 className="mt-4 text-4xl font-black sm:text-5xl">Clear answers before development starts.</h2><p className="mt-5 leading-8 text-slate-400">If the requirement is unusual, send it directly. The first discussion is for narrowing scope and identifying what is actually needed.</p></div><div className="grid gap-3">{faqItems.map(([q,a])=><details key={q} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:border-orange-400/25"><summary className="cursor-pointer list-none pr-6 font-bold">{q}<span className="float-right text-orange-400 transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-4 border-t border-white/10 pt-4 leading-7 text-slate-400">{a}</p></details>)}</div></div>
        </section>

        <section id="contact" className="border-t border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Start a Project</div><h2 className="mt-4 text-4xl font-black sm:text-5xl">Tell us what you want to build.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">Share the requirement, timeline and rough budget. The form can securely save the enquiry and opens a ready-to-send WhatsApp message.</p><div className="mt-8 grid gap-3 text-sm"><a href={`tel:${CONTACT.phone}`} className="rounded-xl border border-white/10 p-4 transition hover:bg-white/5"><div className="text-slate-500">Call / WhatsApp</div><div className="mt-1 font-semibold">{CONTACT.displayPhone}</div></a><a href={`mailto:${CONTACT.email}`} className="rounded-xl border border-white/10 p-4 transition hover:bg-white/5"><div className="text-slate-500">Email</div><div className="mt-1 font-semibold">{CONTACT.email}</div></a><a href={CONTACT.github} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-4 transition hover:bg-white/5"><div className="text-slate-500">GitHub</div><div className="mt-1 font-semibold">github.com/Prakhars1994</div></a></div></div>
            <QuoteForm />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/20 via-slate-900 to-blue-600/10 px-7 py-16 text-center sm:px-12 lg:py-20">
            <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl"><div className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Have a project in mind?</div><h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Let&apos;s turn your idea into a working product.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Tell us what you need. We&apos;ll discuss your requirements and recommend a practical solution with the smallest useful production scope.</p><a href={quoteUrl} target="_blank" rel="noreferrer" className="mt-9 inline-block rounded-xl bg-orange-500 px-8 py-4 font-bold shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-400">Discuss Your Project on WhatsApp →</a><div className="mt-6 text-sm text-slate-400">Free initial discussion • No obligation</div></div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <a href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Chat with Vishwakarma Digital Labs on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl shadow-2xl transition hover:scale-110">💬</a>
    </div>
  );
}
