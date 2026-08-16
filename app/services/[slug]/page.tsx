import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceData, type ServiceSlug } from "../serviceData";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const whatsapp = "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20want%20to%20discuss%20a%20project%20with%20Vishwakarma%20Digital%20Labs.";

const themes = {
  "web-development": {
    page: "bg-[#fffaf0] text-[#10213d]",
    header: "border-[#10213d]/15 bg-[#fffaf0]/95",
    badge: "bg-[#1d4ed8] text-white rounded-none",
    secondary: "text-[#5b6880] hover:text-[#10213d]",
    cta: "bg-[#ff6b35] text-white hover:bg-[#e95120] rounded-none shadow-[5px_5px_0_#10213d]",
    hero: "bg-[#fff3d6] border-b-2 border-[#10213d]",
    eyebrow: "text-[#1d4ed8]",
    body: "text-[#52617b]",
    sectionEyebrow: "text-[#1d4ed8]",
    card: "border-2 border-[#10213d] bg-white rounded-none shadow-[6px_6px_0_#dbeafe]",
    cardText: "text-[#44536b]",
    check: "text-[#ff6b35]",
    chip: "border-2 border-[#10213d] bg-[#dbeafe] text-[#10213d] rounded-none",
    panel: "border-2 border-[#10213d] bg-[#d8ff3e] rounded-none",
    panelTitle: "text-[#10213d]",
    processWrap: "border-y-2 border-[#10213d] bg-[#1d4ed8] text-white",
    processCard: "border-2 border-white/50 bg-transparent rounded-none",
    processNumber: "text-[#d8ff3e]",
    demoCard: "border-2 border-[#10213d] bg-white rounded-none hover:bg-[#fff3d6]",
    demoMeta: "text-[#1d4ed8]",
    demoAction: "text-[#ff6b35]",
    final: "border-2 border-[#10213d] bg-[#10213d] text-white rounded-none shadow-[10px_10px_0_#ff6b35]",
    finalText: "text-blue-100",
    finalButton: "bg-[#d8ff3e] text-[#10213d] rounded-none hover:bg-white",
  },
  "ai-development": {
    page: "bg-[#050816] text-white",
    header: "border-cyan-300/20 bg-[#050816]/90",
    badge: "bg-gradient-to-br from-violet-500 to-cyan-400 text-white rounded-xl",
    secondary: "text-cyan-100/60 hover:text-cyan-200",
    cta: "bg-violet-500 text-white hover:bg-violet-400 rounded-xl shadow-[0_0_30px_rgba(139,92,246,0.25)]",
    hero: "bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,.22),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.15),transparent_30%),#050816] border-b border-cyan-300/15",
    eyebrow: "text-cyan-300",
    body: "text-slate-300",
    sectionEyebrow: "text-cyan-300",
    card: "border border-violet-300/20 bg-violet-500/[0.06] rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.08)]",
    cardText: "text-slate-300",
    check: "text-cyan-300",
    chip: "border border-cyan-300/20 bg-cyan-300/5 text-cyan-100 rounded-full",
    panel: "border border-violet-300/20 bg-gradient-to-br from-violet-500/15 to-cyan-400/5 rounded-3xl",
    panelTitle: "text-violet-100",
    processWrap: "border-y border-cyan-300/15 bg-[#080d20]",
    processCard: "border border-cyan-300/15 bg-[#050816] rounded-xl",
    processNumber: "text-cyan-300/60",
    demoCard: "border border-violet-300/20 bg-violet-500/[0.05] rounded-2xl hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]",
    demoMeta: "text-cyan-300/60",
    demoAction: "text-cyan-300",
    final: "border border-violet-300/25 bg-[linear-gradient(135deg,rgba(124,58,237,.25),rgba(6,182,212,.08))] rounded-3xl shadow-[0_0_70px_rgba(124,58,237,.12)]",
    finalText: "text-slate-300",
    finalButton: "bg-cyan-300 text-slate-950 rounded-xl hover:bg-white",
  },
  "mobile-app-development": {
    page: "bg-[#fff2f8] text-[#3b153f]",
    header: "border-fuchsia-900/10 bg-[#fff2f8]/95",
    badge: "bg-[#f43f8d] text-white rounded-[1.2rem]",
    secondary: "text-[#7c537f] hover:text-[#3b153f]",
    cta: "bg-[#3b153f] text-white hover:bg-[#5a245d] rounded-full",
    hero: "bg-gradient-to-br from-[#ffd6e8] via-[#f4e8ff] to-[#dff8ff] border-b border-fuchsia-900/10",
    eyebrow: "text-[#c026d3]",
    body: "text-[#6f5873]",
    sectionEyebrow: "text-[#c026d3]",
    card: "border border-fuchsia-900/10 bg-white rounded-[2rem] shadow-[0_15px_50px_rgba(134,25,143,.08)]",
    cardText: "text-[#6f5873]",
    check: "text-[#f43f8d]",
    chip: "border border-fuchsia-900/10 bg-[#ffe4f0] text-[#6b214f] rounded-full",
    panel: "border border-fuchsia-900/10 bg-[#e9dcff] rounded-[2.5rem]",
    panelTitle: "text-[#3b153f]",
    processWrap: "border-y border-fuchsia-900/10 bg-[#3b153f] text-white",
    processCard: "border border-white/15 bg-white/5 rounded-[1.5rem]",
    processNumber: "text-pink-300",
    demoCard: "border border-fuchsia-900/10 bg-white rounded-[2rem] hover:-rotate-1 hover:shadow-xl",
    demoMeta: "text-[#c026d3]",
    demoAction: "text-[#f43f8d]",
    final: "border border-fuchsia-900/10 bg-[#3b153f] text-white rounded-[3rem]",
    finalText: "text-pink-100/75",
    finalButton: "bg-[#ffd6e8] text-[#3b153f] rounded-full hover:bg-white",
  },
  "business-automation": {
    page: "bg-[#061b16] text-[#ecfdf5]",
    header: "border-emerald-300/20 bg-[#061b16]/95",
    badge: "bg-[#b7f34a] text-[#0b241d] rounded-none",
    secondary: "text-emerald-100/55 hover:text-emerald-100",
    cta: "border border-[#b7f34a] bg-[#b7f34a] text-[#0b241d] hover:bg-white rounded-none",
    hero: "bg-[#0a2b22] border-b-2 border-[#b7f34a]/70",
    eyebrow: "text-[#b7f34a]",
    body: "text-emerald-100/65",
    sectionEyebrow: "text-[#b7f34a]",
    card: "border border-emerald-300/20 bg-[#0a2b22] rounded-none",
    cardText: "text-emerald-100/65",
    check: "text-[#b7f34a]",
    chip: "border border-[#b7f34a]/40 bg-[#b7f34a]/5 text-[#d9ff95] rounded-none font-mono",
    panel: "border border-[#b7f34a]/40 bg-black/20 rounded-none",
    panelTitle: "text-[#d9ff95]",
    processWrap: "border-y-2 border-[#b7f34a]/60 bg-black/20",
    processCard: "border border-emerald-300/20 bg-[#061b16] rounded-none font-mono",
    processNumber: "text-[#b7f34a]",
    demoCard: "border border-emerald-300/20 bg-[#0a2b22] rounded-none hover:border-[#b7f34a]/70",
    demoMeta: "text-[#b7f34a]/70 font-mono",
    demoAction: "text-[#b7f34a]",
    final: "border-2 border-[#b7f34a] bg-[#0a2b22] rounded-none",
    finalText: "text-emerald-100/65",
    finalButton: "bg-[#b7f34a] text-[#0b241d] rounded-none hover:bg-white",
  },
} as const;

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

const seoBySlug: Record<ServiceSlug, { title: string; description: string }> = {
  "web-development": {
    title: "Web Development Services | Next.js & React Websites",
    description:
      "Fast, responsive business websites, landing pages, e-commerce and web applications built with modern Next.js and React workflows.",
  },
  "mobile-app-development": {
    title: "Mobile App Development Services | Business & Customer Apps",
    description:
      "Mobile app development for booking, marketplace, healthcare, education and business workflows with production-ready backend integration.",
  },
  "ai-development": {
    title: "AI Application Development Services | AI Agents & RAG",
    description:
      "Build AI agents, copilots, RAG knowledge assistants and AI-powered applications connected to your business data, tools and APIs.",
  },
  "business-automation": {
    title: "Business Automation Services | APIs, Workflows & AI",
    description:
      "Automate repetitive business workflows, lead routing, reporting and operations with APIs, databases, webhooks and AI-assisted processing.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const typedSlug = slug as ServiceSlug;
  const service = serviceData[typedSlug];
  if (!service) return {};

  const seo = seoBySlug[typedSlug];
  const url = `${SITE_URL}/services/${slug}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },
  };
}

function HeroVisual({ slug }: { slug: ServiceSlug }) {
  if (slug === "web-development") {
    return (
      <div className="relative border-2 border-[#10213d] bg-white p-4 shadow-[12px_12px_0_#1d4ed8]">
        <div className="flex items-center justify-between border-b-2 border-[#10213d] pb-3 font-mono text-[10px] font-black uppercase tracking-wider"><span>Browser / Production</span><span>● Live</span></div>
        <div className="mt-4 grid grid-cols-[0.8fr_1.2fr] gap-3">
          <div className="min-h-64 bg-[#10213d] p-5 text-white"><div className="text-xs text-[#d8ff3e]">01 / Strategy</div><div className="mt-8 text-3xl font-black">Clear message.<br/>Fast pages.<br/>Real leads.</div></div>
          <div className="grid gap-3"><div className="h-24 bg-[#dbeafe]"/><div className="grid grid-cols-2 gap-3"><div className="h-32 bg-[#ff6b35]"/><div className="h-32 bg-[#d8ff3e]"/></div><div className="h-16 border-2 border-[#10213d] bg-white"/></div>
        </div>
      </div>
    );
  }

  if (slug === "ai-development") {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-black/35 p-5 shadow-[0_0_80px_rgba(34,211,238,.08)]">
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 font-mono text-xs text-cyan-300"><span className="h-2.5 w-2.5 rounded-full bg-violet-400"/><span className="h-2.5 w-2.5 rounded-full bg-cyan-300"/><span>agent.runtime / connected</span></div>
        <div className="mt-5 space-y-3 font-mono text-xs">
          <div className="rounded-xl border border-violet-300/15 bg-violet-500/10 p-4"><span className="text-violet-300">USER</span><div className="mt-2 text-slate-200">Summarize the latest leads and draft follow-ups.</div></div>
          <div className="ml-8 rounded-xl border border-cyan-300/15 bg-cyan-300/5 p-4"><span className="text-cyan-300">AGENT</span><div className="mt-2 text-slate-200">Reading CRM → scoring opportunities → preparing 4 actions.</div></div>
          <div className="grid grid-cols-3 gap-2 pt-2">{["CRM ✓","RAG ✓","Email ✓"].map(x=><div key={x} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center text-cyan-200">{x}</div>)}</div>
        </div>
      </div>
    );
  }

  if (slug === "mobile-app-development") {
    return (
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -left-10 top-16 h-28 w-28 rounded-full bg-yellow-300/70 blur-sm"/>
        <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-cyan-300/60 blur-sm"/>
        <div className="relative mx-auto w-[250px] rounded-[3rem] border-[10px] border-[#3b153f] bg-white p-4 shadow-2xl">
          <div className="mx-auto h-5 w-20 rounded-full bg-[#3b153f]"/>
          <div className="mt-5 rounded-[2rem] bg-gradient-to-br from-[#f43f8d] to-[#8b5cf6] p-5 text-white"><div className="text-xs">Good morning</div><div className="mt-2 text-2xl font-black">Your day,<br/>organized.</div></div>
          <div className="mt-4 grid grid-cols-2 gap-3"><div className="h-24 rounded-3xl bg-[#ffe4f0]"/><div className="h-24 rounded-3xl bg-[#e9dcff]"/></div>
          <div className="mt-3 h-20 rounded-3xl bg-[#dff8ff]"/>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-[#b7f34a]/50 bg-black/20 p-5 font-mono">
      <div className="flex items-center justify-between border-b border-[#b7f34a]/30 pb-3 text-[10px] uppercase tracking-[0.2em] text-[#b7f34a]"><span>workflow.map</span><span>RUNNING</span></div>
      <div className="mt-6 grid gap-3">
        {["01  Lead received", "02  Enrich + validate", "03  Route to CRM", "04  Notify owner", "05  AI follow-up"].map((item,index)=><div key={item} className={`border p-4 ${index===4 ? "border-[#b7f34a] bg-[#b7f34a]/10 text-[#d9ff95]" : "border-emerald-300/20 text-emerald-100/70"}`}>{item}</div>)}
      </div>
    </div>
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as ServiceSlug];
  if (!service) notFound();
  const typedSlug = slug as ServiceSlug;
  const theme = themes[typedSlug];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${typedSlug}#service`,
    name: service.eyebrow,
    description: seoBySlug[typedSlug].description,
    url: `${SITE_URL}/services/${typedSlug}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    serviceType: service.eyebrow,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
      { "@type": "ListItem", position: 3, name: service.eyebrow, item: `${SITE_URL}/services/${typedSlug}` },
    ],
  };

  return (
    <main className={`min-h-screen ${theme.page}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <header className={`sticky top-0 z-40 border-b backdrop-blur-xl ${theme.header}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3 font-black"><span className={`grid h-10 w-10 place-items-center ${theme.badge}`}>V</span><span>Vishwakarma Digital Labs</span></Link>
          <div className="flex items-center gap-3"><Link href="/#services" className={`hidden text-sm sm:block ${theme.secondary}`}>All services</Link><a href={whatsapp} target="_blank" rel="noreferrer" className={`px-4 py-2.5 text-sm font-black transition ${theme.cta}`}>Get quote</a></div>
        </div>
      </header>

      <section className={`relative overflow-hidden ${theme.hero}`}>
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="text-5xl">{service.icon}</div>
            <div className={`mt-7 text-sm font-black uppercase tracking-[0.24em] ${theme.eyebrow}`}>{service.eyebrow}</div>
            <h1 className={`mt-5 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl ${typedSlug === "web-development" ? "font-serif" : typedSlug === "ai-development" || typedSlug === "business-automation" ? "font-mono" : ""}`}>{service.title}</h1>
            <p className={`mt-7 max-w-3xl text-lg leading-8 sm:text-xl ${theme.body}`}>{service.description}</p>
            <div className="mt-9 flex flex-wrap gap-4"><a href={whatsapp} target="_blank" rel="noreferrer" className={`px-7 py-4 font-black transition ${theme.cta}`}>Discuss your project →</a><Link href="/#estimator" className={`border px-7 py-4 font-bold ${typedSlug === "web-development" ? "border-[#10213d] bg-white rounded-none" : typedSlug === "ai-development" ? "border-cyan-300/20 bg-white/5 rounded-xl" : typedSlug === "mobile-app-development" ? "border-fuchsia-900/15 bg-white/60 rounded-full" : "border-[#b7f34a]/30 bg-black/10 rounded-none"}`}>Estimate budget</Link></div>
          </div>
          <HeroVisual slug={typedSlug} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <div className={`text-xs font-black uppercase tracking-[0.22em] ${theme.sectionEyebrow}`}>What is included</div>
          <h2 className="mt-4 text-3xl font-black">Production-ready deliverables</h2>
          <div className="mt-8 grid gap-3">{service.deliverables.map((item) => <div key={item} className={`flex gap-3 p-4 ${theme.card}`}><span className={theme.check}>✓</span><span className={theme.cardText}>{item}</span></div>)}</div>
        </div>
        <div>
          <div className={`text-xs font-black uppercase tracking-[0.22em] ${theme.sectionEyebrow}`}>Best fit</div>
          <h2 className="mt-4 text-3xl font-black">Built for practical use cases</h2>
          <div className="mt-8 flex flex-wrap gap-3">{service.bestFor.map((item) => <span key={item} className={`px-4 py-2 text-sm font-semibold ${theme.chip}`}>{item}</span>)}</div>
          <div className={`mt-10 p-6 ${theme.panel}`}><div className={`font-black ${theme.panelTitle}`}>Not sure what architecture you need?</div><p className={`mt-3 leading-7 ${theme.cardText}`}>Start with the business outcome. We can narrow the scope to the smallest useful version and expand after validation.</p></div>
        </div>
      </section>

      <section className={theme.processWrap}>
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className={`text-xs font-black uppercase tracking-[0.22em] ${theme.sectionEyebrow}`}>Delivery process</div>
          <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">{service.process.map((item, index) => <div key={item} className={`p-5 ${theme.processCard}`}><div className={`text-2xl font-black ${theme.processNumber}`}>0{index + 1}</div><div className="mt-5 font-bold">{item}</div></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className={`text-xs font-black uppercase tracking-[0.22em] ${theme.sectionEyebrow}`}>Relevant demos</div><h2 className="mt-3 text-3xl font-black">See the product thinking in action.</h2></div><Link href="/work" className={`text-sm font-bold ${theme.demoAction}`}>View all portfolio demos →</Link></div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">{service.demos.map((demo) => <Link key={demo.href} href={demo.href} className={`group p-6 transition hover:-translate-y-1 ${theme.demoCard}`}><div className={`text-sm ${theme.demoMeta}`}>Interactive demo</div><div className="mt-2 text-xl font-black">{demo.label}</div><div className={`mt-6 font-bold ${theme.demoAction}`}>Open demo <span className="transition group-hover:translate-x-1">→</span></div></Link>)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className={`p-8 text-center sm:p-12 ${theme.final}`}><h2 className="text-4xl font-black">Ready to scope your project?</h2><p className={`mx-auto mt-4 max-w-2xl leading-7 ${theme.finalText}`}>Send the requirement, reference product or problem you want to solve. You will get a practical scope before development starts.</p><a href={whatsapp} target="_blank" rel="noreferrer" className={`mt-7 inline-block px-7 py-4 font-black transition ${theme.finalButton}`}>Start on WhatsApp →</a></div>
      </section>
    </main>
  );
}
