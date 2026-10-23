import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Automation System Demo | Vishwakarma Digital Labs",
  description: "Interactive demo of our AI-powered email marketing automation system with lead discovery, scoring, and personalized campaigns.",
  alternates: { canonical: "/services/email-automation/demo" },
};

const whatsapp = "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20want%20to%20discuss%20email%20automation%20for%20our%20business.";

export default function EmailAutomationDemoPage() {
  const workflows = [
    {
      number: "01",
      title: "Lead Research & Discovery",
      description: "Discover qualified leads from company domains using Hunter.io",
      metrics: ["2,458 leads found", "₹0 per search", "Real-time data"],
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "02",
      title: "Data Validation & Cleaning",
      description: "Clean and validate email/phone with India-specific formatting",
      metrics: ["98% accuracy", "Auto-dedup", "Quality score"],
      color: "from-green-500 to-green-600",
    },
    {
      number: "03",
      title: "CRM Sync & Lead Scoring",
      description: "Auto-score leads and sync to HubSpot/Salesforce",
      metrics: ["0-100 score", "5-factor algo", "Auto-assign"],
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "04",
      title: "Email Personalization",
      description: "AI-powered subject lines and body copy via Claude/ChatGPT",
      metrics: ["45% open rate", "28% CTR", "Real personalization"],
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "05",
      title: "Performance Tracking",
      description: "Real-time webhooks for opens, clicks, and engagement",
      metrics: ["Live tracking", "Auto lead score", "Google Sheets sync"],
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <main className="min-h-screen bg-[#1a1a2e] text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="border-b border-red-400/20 bg-gradient-to-br from-red-900/20 to-green-900/10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-black lg:text-6xl">Email Automation System</h1>
          <p className="mt-4 max-w-3xl text-xl text-slate-300">Complete AI-powered system for lead discovery, validation, CRM sync, and personalized email campaigns. See the full workflow in action.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-block bg-gradient-to-r from-red-600 to-red-700 px-7 py-4 font-black text-white rounded-lg hover:from-red-700 hover:to-red-800 transition">
              Get Live Demo →
            </a>
            <Link href="/services/email-automation" className="inline-block border border-red-400/30 px-7 py-4 font-bold text-red-400 rounded-lg hover:bg-red-400/10 transition">
              View Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* Workflows Section */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black">5 Workflows in Action</h2>
          <p className="mt-3 text-slate-400">Each step is production-ready and fully automated.</p>

          <div className="mt-12 space-y-8">
            {workflows.map((workflow, index) => (
              <div
                key={workflow.number}
                className="group border border-red-400/20 bg-red-900/10 p-8 rounded-xl hover:border-red-400/50 hover:bg-red-900/20 transition"
              >
                <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
                  {/* Left: Number & Title */}
                  <div>
                    <div className={`bg-gradient-to-br ${workflow.color} bg-clip-text text-5xl font-black text-transparent`}>
                      {workflow.number}
                    </div>
                    <h3 className="mt-4 text-2xl font-black">{workflow.title}</h3>
                    <p className="mt-3 text-slate-400">{workflow.description}</p>
                  </div>

                  {/* Middle: Metrics */}
                  <div className="flex flex-wrap gap-3 lg:col-span-2">
                    {workflow.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="border border-slate-400/20 bg-slate-400/5 px-4 py-3 rounded-lg text-sm font-bold text-slate-200"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider for next item */}
                {index < workflows.length - 1 && <div className="mt-6 border-t border-red-400/10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="border-y border-red-400/20 bg-red-900/5 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black">What&apos;s Included</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🔍",
                title: "Lead Discovery",
                desc: "Find 1000+ leads/month from company domains",
              },
              {
                icon: "✅",
                title: "Data Validation",
                desc: "India-optimized email & phone cleaning",
              },
              {
                icon: "📊",
                title: "Lead Scoring",
                desc: "5-factor automatic scoring (0-100)",
              },
              {
                icon: "🔗",
                title: "CRM Integration",
                desc: "HubSpot, Salesforce, or custom CRM",
              },
              {
                icon: "🤖",
                title: "AI Personalization",
                desc: "Claude/GPT-powered email copy",
              },
              {
                icon: "📈",
                title: "Real-time Tracking",
                desc: "Opens, clicks, and engagement webhooks",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="border border-red-400/20 bg-red-900/10 p-6 rounded-xl hover:border-red-400/50 transition"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 text-xl font-black">{feature.title}</h3>
                <p className="mt-2 text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black">Service Pricing</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Setup & Configuration",
                price: "₹2,50,000",
                items: ["Full system setup", "API integration", "Workflow testing", "Team training"],
              },
              {
                title: "Monthly Management",
                price: "₹20,000",
                items: ["Lead generation", "Email campaigns", "Performance tracking", "Optimization"],
                highlight: true,
              },
              {
                title: "Year 1 Investment",
                price: "₹4,90,000",
                items: ["Setup fee", "12 months mgmt", "Expected 10x ROI", "Unlimited leads"],
              },
            ].map((plan, idx) => (
              <div
                key={plan.title}
                className={`rounded-xl p-8 border ${
                  plan.highlight
                    ? "border-red-400/50 bg-gradient-to-br from-red-600/20 to-red-600/5"
                    : "border-red-400/20 bg-red-900/10"
                }`}
              >
                <h3 className="text-xl font-black">{plan.title}</h3>
                <div className="mt-6 text-4xl font-black text-red-400">{plan.price}</div>
                <ul className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-red-400/20 bg-gradient-to-r from-red-900/20 to-green-900/10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black">Ready to Automate Your Email Marketing?</h2>
          <p className="mt-4 text-xl text-slate-400">
            Get setup in 30 days. See results within 90 days. Scale to 10,000+ leads annually.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 font-black text-white rounded-lg hover:from-red-700 hover:to-red-800 transition"
            >
              Start Free Consultation
            </a>
            <a href="tel:+918446000784" className="inline-block border border-red-400/30 px-8 py-4 font-bold text-red-400 rounded-lg hover:bg-red-400/10 transition">
              📞 +91 84460 00784
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
