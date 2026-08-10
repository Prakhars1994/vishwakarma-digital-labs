import type { Metadata } from "next";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import QuoteForm from "@/components/QuoteForm";
import ProjectEstimator from "@/components/ProjectEstimator";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

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

const whatsapp =
  "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20am%20interested%20in%20your%20website%2C%20mobile%20app%20or%20AI%20development%20services.";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    href: "/services/web-development",
    description:
      "Fast, modern and conversion-focused websites for businesses, startups, restaurants, institutes and professionals.",
    items: ["Business Websites", "E-commerce", "Landing Pages", "Portfolios"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    href: "/services/mobile-app-development",
    description:
      "Modern mobile experiences designed around your customers, workflow and business requirements.",
    items: ["Android Apps", "iOS Apps", "Business Apps", "Custom Solutions"],
  },
  {
    icon: "🤖",
    title: "AI Applications",
    href: "/services/ai-development",
    description:
      "AI-powered applications that automate work, assist customers and transform day-to-day operations.",
    items: ["AI Chatbots", "AI Web Apps", "LLM Integration", "Smart Assistants"],
  },
  {
    icon: "⚡",
    title: "Business Automation",
    href: "/services/business-automation",
    description:
      "Reduce repetitive work by connecting applications, APIs, databases and AI-powered workflows.",
    items: ["Workflow Automation", "API Integration", "Dashboards", "Admin Systems"],
  },
];


const faqItems = [
  [
    "Can you handle design, development and deployment?",
    "Yes. A project can include UI implementation, application development, database/API integration, hosting setup, SSL and production deployment depending on scope.",
  ],
  [
    "Do I need to know the technical stack?",
    "No. Describe the business problem, users and features. The implementation choices can be proposed from there.",
  ],
  [
    "Can you work on an existing website or app?",
    "Yes. Existing Next.js/React applications, responsive issues, integrations, feature additions and selected redesign work can be scoped separately.",
  ],
  [
    "Can we start with a smaller MVP?",
    "Yes. For uncertain ideas, starting with the smallest version that proves the workflow is usually better than building every feature at once.",
  ],
  [
    "How is pricing decided?",
    "Pricing depends on screens, workflows, integrations, backend complexity, design depth and timeline. The estimator provides a planning range; the final quote follows the scope.",
  ],
  [
    "Do you provide post-launch support?",
    "Post-launch fixes, monitoring and ongoing development can be included as a defined support period or a separate ongoing engagement.",
  ],
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
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

const reasons = [
  ["Production-focused", "Solutions are built to be deployed and used — not left as prototypes."],
  ["Mobile-first", "Responsive experiences across phones, tablets and desktop screens."],
  ["Modern stack", "Next.js, React, Supabase, PostgreSQL, APIs, GitHub and modern AI tooling."],
  ["Direct communication", "Discuss requirements directly with the developer working on your product."],
  ["End-to-end delivery", "Development, integrations, database, hosting, SSL and deployment can be handled."],
  ["Business-oriented", "Features are selected around your real customer and operational needs."],
];

const steps = [
  ["01", "Discuss", "Tell us about your business, idea, requirements and goals."],
  ["02", "Plan", "We define features, scope, technology and the delivery path."],
  ["03", "Build", "Your product is developed, tested and refined for real users."],
  ["04", "Launch", "We deploy the product and get it ready for customers."],
];

const demos = [
  { label:"RESTAURANT",icon:"🍽️",title:"Saffron Table",text:"Premium restaurant experience with interactive menu, reservations and tasting-list flow.",tags:["Menu","Reservations","Gallery"],href:"/demos/restaurant",card:"border-amber-300/20 bg-gradient-to-br from-[#5b2018] via-[#2d1512] to-[#153e34] rounded-[3.5rem_3.5rem_1rem_1rem]",glow:"bg-amber-300/20",labelClass:"text-amber-300",button:"border-amber-300/25 bg-amber-300/10 text-amber-200 group-hover:bg-amber-300 group-hover:text-[#2d1512]" },
  { label:"AI AGENT",icon:"✦",title:"NOVA AI Operations Copilot",text:"Agent workspace with live chat simulation, connected tools, RAG indicators and automation safeguards.",tags:["AI Agent","RAG","Automation"],href:"/demos/ai-assistant",card:"border-violet-300/20 bg-gradient-to-br from-[#23135a] via-[#101744] to-[#073448] rounded-[2.6rem] ring-1 ring-cyan-300/10",glow:"bg-cyan-300/20",labelClass:"text-cyan-300",button:"border-cyan-300/25 bg-cyan-300/10 text-cyan-200 group-hover:bg-cyan-400 group-hover:text-slate-950" },
  { label:"LEAD GENERATION",icon:"↗",title:"Northstar Growth Platform",text:"Conversion-first business platform with lead flow, pipeline visuals and interactive ROI calculator.",tags:["Lead Capture","CRM","Analytics"],href:"/demos/service-business",card:"border-sky-300/20 bg-gradient-to-br from-[#0c3d69] via-[#0c3850] to-[#08604f] rounded-none border-2",glow:"bg-emerald-300/20",labelClass:"text-emerald-300",button:"border-emerald-300/25 bg-emerald-300/10 text-emerald-200 group-hover:bg-emerald-300 group-hover:text-[#083c35]" },
  { label:"HIGH-DEMAND ECOMMERCE",icon:"🛍️",title:"LumaCart D2C Store",text:"Production-style D2C store with search, product variants, wishlist, quantity cart, coupons, shipping logic and checkout.",tags:["E-commerce","Cart","D2C"],href:"/demos/ecommerce",card:"border-orange-300/20 bg-gradient-to-br from-[#7c2d12] via-[#9a3412] to-[#365314] rounded-none border-4",glow:"bg-lime-300/20",labelClass:"text-lime-300",button:"border-lime-300/25 bg-lime-300/10 text-lime-200 group-hover:bg-lime-300 group-hover:text-black" },
  { label:"HIGH-DEMAND HEALTHCARE",icon:"🏥",title:"MediNova Clinic Portal",text:"Production-style clinic portal with specialty filters, doctor booking, visit modes, patient intake, fee summary and portal preview.",tags:["Booking","Healthcare","Portal"],href:"/demos/clinic",card:"border-teal-300/20 bg-gradient-to-br from-[#134e4a] via-[#155e75] to-[#164e63] rounded-[3rem]",glow:"bg-cyan-300/20",labelClass:"text-cyan-200",button:"border-cyan-300/25 bg-cyan-300/10 text-cyan-100 group-hover:bg-cyan-300 group-hover:text-teal-950" },
  { label:"HIGH-VALUE REAL ESTATE",icon:"🏡",title:"Aurelia Property Portal",text:"Luxury property discovery with filters, viewing requests and an interactive mortgage estimator.",tags:["Listings","Search","Mortgage"],href:"/demos/real-estate",card:"border-yellow-200/20 bg-gradient-to-br from-[#3f3f46] via-[#18181b] to-[#713f12] rounded-none border-y-2",glow:"bg-yellow-300/20",labelClass:"text-yellow-200",button:"border-yellow-200/25 bg-yellow-200/10 text-yellow-100 group-hover:bg-yellow-200 group-hover:text-black" },
  { label:"EDTECH / COACHING",icon:"🎓",title:"SkillForge LMS",text:"Modern learning portal with course progress, lessons, quiz interaction and live-class touchpoints.",tags:["LMS","Courses","Quiz"],href:"/demos/lms",card:"border-violet-300/20 bg-gradient-to-br from-[#4c1d95] via-[#312e81] to-[#9a3412] rounded-[3rem_0.75rem_3rem_0.75rem]",glow:"bg-yellow-300/20",labelClass:"text-yellow-200",button:"border-yellow-200/25 bg-yellow-200/10 text-yellow-100 group-hover:bg-yellow-300 group-hover:text-violet-950" },
  { label:"B2B SAAS / CRM",icon:"📊",title:"PipelineOS CRM",text:"Production-style CRM with lead capture, forecasting, scoring, activity history, pipeline stages and AI-assisted follow-ups.",tags:["CRM","SaaS","Pipeline"],href:"/demos/crm",card:"border-indigo-300/20 bg-gradient-to-br from-[#312e81] via-[#1e3a8a] to-[#065f46] rounded-lg",glow:"bg-emerald-300/20",labelClass:"text-indigo-200",button:"border-indigo-200/25 bg-indigo-200/10 text-indigo-100 group-hover:bg-indigo-300 group-hover:text-indigo-950" },
  { label:"LOCAL SERVICES MARKETPLACE",icon:"🧰",title:"Fixly Home Services",text:"On-demand home-services booking with instant estimates, schedule selection and provider workflow.",tags:["Marketplace","Booking","Pricing"],href:"/demos/home-services",card:"border-orange-300/20 bg-gradient-to-br from-[#1e3a5f] via-[#172554] to-[#9a3412] rounded-none border-4",glow:"bg-orange-300/20",labelClass:"text-orange-200",button:"border-orange-200/25 bg-orange-200/10 text-orange-100 group-hover:bg-orange-300 group-hover:text-slate-950" },
  { label:"LOGISTICS / OPERATIONS",icon:"🚚",title:"RoutePilot Logistics",text:"Shipment tracking, live route progress, fleet KPIs and operations automation dashboard.",tags:["Tracking","Fleet","Dashboard"],href:"/demos/logistics",card:"border-cyan-300/20 bg-gradient-to-br from-[#083344] via-[#0c4a6e] to-[#064e3b] rounded-sm",glow:"bg-cyan-300/20",labelClass:"text-cyan-200",button:"border-cyan-200/25 bg-cyan-200/10 text-cyan-100 group-hover:bg-cyan-300 group-hover:text-slate-950" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([faqSchema, servicesSchema]) }}
      />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-xl font-black shadow-lg shadow-orange-500/20">
              V
            </div>
            <div>
              <div className="font-bold tracking-tight">Vishwakarma Digital Labs</div>
              <div className="text-xs text-slate-400">Build • Automate • Grow</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Our Work</a>
            <a href="#estimator" className="transition hover:text-white">Estimator</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-orange-400">
              Get Free Quote
            </a>
          </nav>

          <MobileNav />
        </div>
      </header>

      <section className="relative">
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm text-orange-300">
              <span className="text-emerald-400">●</span> Taking new projects
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              We Build Digital Products That{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                Grow Your Business
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Professional websites, mobile apps, AI-powered applications and automation solutions — from idea to production.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-orange-500 px-7 py-4 text-center font-bold shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-400">
                💬 Get a Free Quote
              </a>
              <a href="#work" className="rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-center font-semibold transition hover:bg-white/10">
                View Our Work →
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>✓ Free initial consultation</span>
              <span>✓ Fixed-price options</span>
              <span>✓ Complete deployment</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-orange-500/20 to-blue-500/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-slate-500">digital-product-studio</span>
              </div>

              <div className="rounded-2xl bg-slate-900 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-orange-400">Digital Solutions</div>
                    <div className="mt-2 text-2xl font-bold">From idea to launch.</div>
                  </div>
                  <div className="rounded-xl bg-orange-500/15 p-4 text-2xl">⚡</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[["🌐", "Websites"], ["📱", "Mobile Apps"], ["🤖", "AI Apps"], ["⚙️", "Automation"]].map(([icon, title]) => (
                    <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                      <div className="text-2xl">{icon}</div>
                      <div className="mt-3 font-semibold">{title}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <div className="text-xs uppercase tracking-wider text-emerald-400">Production</div>
                  <div className="mt-1 font-semibold">Built • Tested • Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-12 gap-y-4 px-5 py-6 text-sm font-medium text-slate-400">
          {['Next.js', 'React', 'Supabase', 'PostgreSQL', 'AI APIs', 'Vercel', 'GitHub'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Our Services</div>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Everything you need to build your digital presence.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">Whether you need a business website, mobile application or AI-powered product, we can take it from concept to deployment.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.055]">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-500/10 text-3xl">{service.icon}</div>
              <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{service.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">{item}</span>)}
              </div>
              <div className="mt-7 font-bold text-orange-300">Explore service →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Ways to work together</div>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Choose the engagement that fits the job.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Small fixes do not need a huge contract. Larger products need clear milestones. The scope can match the actual risk and complexity.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Fixed-scope project", "Best when requirements are clear. Agree deliverables, timeline and price before development starts.", "Websites • Landing pages • Defined features"],
              ["02", "MVP sprint", "Best for a new idea that needs a working first version quickly before investing in a larger build.", "Startups • AI concepts • Internal tools"],
              ["03", "Ongoing development", "Best when features evolve continuously and you need regular improvements, integrations or support.", "SaaS • Automation • Product teams"],
            ].map(([number, title, text, fit]) => (
              <article key={number} className="rounded-3xl border border-white/10 bg-slate-950 p-7">
                <div className="text-3xl font-black text-orange-500/40">{number}</div>
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
                <div className="mt-6 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-wider text-slate-500">{fit}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estimator" className="relative overflow-hidden border-y-4 border-blue-950 bg-[#eaf0ff] text-blue-950">
        <div className="absolute -left-20 top-16 h-56 w-56 rounded-full border-[30px] border-cyan-300/35" />
        <div className="absolute -right-20 bottom-10 h-72 w-72 rotate-12 bg-[#d8ff3e]/25" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12 grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div className="font-mono text-sm font-black uppercase tracking-[0.25em] text-blue-600">Project Cost Estimator / Interactive</div>
            <div>
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Build a scope. See a range. <span className="bg-[#d8ff3e] px-2">Then talk.</span></h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-800">This section intentionally uses a different visual language from the agency homepage: bright editorial layout, hard borders and a calculator-first interface.</p>
            </div>
          </div>
          <ProjectEstimator />
        </div>
      </section>

      <section id="work" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Featured Work</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Real production experience, presented clearly.</h2>
            </div>
            <a href="https://github.com/Prakhars1994" target="_blank" rel="noreferrer" className="text-sm font-semibold text-orange-400 hover:text-orange-300">View GitHub →</a>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 sm:p-10 lg:p-14">
                <div className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">FEATURED AI PRODUCT</div>
                <h3 className="mt-6 text-4xl font-black">CurrentPulse AI</h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">An AI-powered current-affairs platform featuring automated content workflows, structured publishing, database integration, admin tools and production deployment.</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Supabase', 'PostgreSQL', 'AI APIs', 'Automation', 'Vercel'].map((tech) => <span key={tech} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300">{tech}</span>)}
                </div>
                <div className="mt-9 flex flex-wrap gap-4">
                  <a href="https://currentpulse-ai.vercel.app" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:bg-orange-400">View Live Project ↗</a>
                  <a href="https://github.com/Prakhars1994" target="_blank" rel="noreferrer" className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:bg-white/10">GitHub</a>
                </div>
              </div>

              <div className="relative min-h-[380px] overflow-hidden border-t border-white/10 bg-gradient-to-br from-orange-500/15 via-slate-900 to-blue-600/15 p-7 lg:border-l lg:border-t-0">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
                <div className="relative h-full rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-2xl">
                  <div className="mb-5 flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><span className="h-2.5 w-2.5 rounded-full bg-green-400" /></div>
                  <div className="rounded-xl bg-white/5 p-5"><div className="text-xs text-orange-400">CURRENT PULSE AI</div><div className="mt-2 text-xl font-bold">AI-Powered Publishing Platform</div></div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {['AI Processing', 'Automation', 'Admin System', 'Database', 'Search', 'SEO'].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slate-300">✓ {item}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {demos.map((demo) => (
              <Link
                key={demo.title}
                href={demo.href}
                aria-label={`Open ${demo.title} demo`}
                className={`group relative flex min-h-[370px] cursor-pointer flex-col overflow-hidden border p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/60 ${demo.card}`}
              >
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition group-hover:scale-125 ${demo.glow}`} />
                <div className="relative flex items-start justify-between gap-4">
                  <div className={`text-[10px] font-black tracking-[0.18em] ${demo.labelClass}`}>{demo.label}</div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-2xl shadow-lg backdrop-blur">{demo.icon}</div>
                </div>
                <div className="relative mt-9 rounded-2xl border border-white/10 bg-black/15 p-4 backdrop-blur-sm">
                  <div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-300/70"/><span className="h-2 w-2 rounded-full bg-yellow-300/70"/><span className="h-2 w-2 rounded-full bg-emerald-300/70"/></div>
                  <div className="grid grid-cols-4 gap-2">
                    {[0,1,2,3].map((item) => <div key={item} className={`h-12 rounded-lg ${item === 0 ? 'col-span-2 bg-white/15' : 'bg-white/[0.07]'}`} />)}
                  </div>
                </div>
                <h3 className="relative mt-6 text-2xl font-black text-white">{demo.title}</h3>
                <p className="relative mt-3 leading-7 text-white/60">{demo.text}</p>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[11px] font-bold text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`relative mt-auto flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-black transition ${demo.button}`}>
                  <span>Launch full demo</span>
                  <span className="text-lg transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-500">Demo concepts are portfolio concepts, not claimed client engagements.</p>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Why Vishwakarma Digital Labs?</div>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Technology should solve business problems.</h2>
            <p className="mt-5 leading-8 text-slate-400">Vishwakarma Digital Labs is an independent digital development studio led by Prakhar Singh, focused on practical web, mobile and AI solutions.</p>
          </div>

          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
            {reasons.map(([title, text]) => (
              <div key={title}>
                <div className="mb-4 h-1 w-10 rounded-full bg-orange-500" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="max-w-3xl"><div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Our Process</div><h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Simple process. Clear communication.</h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-white/10 bg-slate-950 p-6"><div className="text-4xl font-black text-orange-500/40">{number}</div><h3 className="mt-7 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-400">{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Frequently Asked Questions</div>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Clear answers before the project starts.</h2>
              <p className="mt-5 leading-8 text-slate-400">If your requirement is unusual, send it directly. The first discussion is for narrowing the scope and identifying what is actually needed.</p>
            </div>
            <div className="grid gap-3">
              {faqItems.map(([question, answer]) => (
                <details key={question} className="group rounded-2xl border border-white/10 bg-slate-950 p-5 open:border-orange-400/25">
                  <summary className="cursor-pointer list-none pr-6 font-bold text-slate-100">{question}<span className="float-right text-orange-400 transition group-open:rotate-45">+</span></summary>
                  <p className="mt-4 border-t border-white/10 pt-4 leading-7 text-slate-400">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <div className="font-semibold uppercase tracking-[0.25em] text-orange-400">Start a Project</div>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Tell us what you want to build.</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">Share your requirements and the form will open a ready-to-send WhatsApp message. You can also call or email directly.</p>

          <div className="mt-8 grid gap-3 text-sm">
            <a href="tel:+918446000784" className="rounded-xl border border-white/10 p-4 transition hover:bg-white/5"><div className="text-slate-500">Call / WhatsApp</div><div className="mt-1 font-semibold">+91 84460 00784</div></a>
            <a href="mailto:prakhars389@gmail.com" className="rounded-xl border border-white/10 p-4 transition hover:bg-white/5"><div className="text-slate-500">Email</div><div className="mt-1 font-semibold">prakhars389@gmail.com</div></a>
            <a href="https://github.com/Prakhars1994" target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-4 transition hover:bg-white/5"><div className="text-slate-500">GitHub</div><div className="mt-1 font-semibold">github.com/Prakhars1994</div></a>
          </div>
        </div>

        <QuoteForm />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/20 via-slate-900 to-slate-900 px-7 py-16 text-center sm:px-12 lg:py-20">
          <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">Have a project in mind?</div>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">Let&apos;s turn your idea into a working product.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Tell us what you need. We&apos;ll discuss your requirements and recommend a practical solution.</p>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="mt-9 inline-block rounded-xl bg-orange-500 px-8 py-4 font-bold shadow-xl shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-400">💬 Discuss Your Project on WhatsApp</a>
            <div className="mt-6 text-sm text-slate-400">Free initial discussion • No obligation</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 py-9 text-sm text-slate-500 sm:flex-row sm:items-center lg:px-8">
          <div><div className="font-bold text-slate-200">Vishwakarma Digital Labs</div><div className="mt-1">© 2026. All rights reserved.</div></div>
          <div className="flex flex-wrap gap-5"><a href="#services" className="hover:text-white">Services</a><a href="#work" className="hover:text-white">Work</a><a href="#contact" className="hover:text-white">Contact</a><a href="https://github.com/Prakhars1994" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></div>
        </div>
      </footer>

      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-2xl shadow-2xl transition hover:scale-110">💬</a>
    </main>
  );
}
