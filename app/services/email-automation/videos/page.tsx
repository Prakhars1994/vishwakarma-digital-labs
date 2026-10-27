import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Automation Video Demo | Vishwakarma Digital Labs",
  description: "Watch how our AI-powered email automation system works - from lead discovery to personalized campaigns and real-time tracking.",
  alternates: { canonical: "/services/email-automation/videos" },
};

const whatsapp = "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20want%20to%20see%20the%20email%20automation%20system%20in%20action.";

export default function EmailAutomationVideosPage() {
  const videos = [
    {
      number: 1,
      title: "Service Overview",
      emoji: "🎯",
      description: "VDL Services: Web Development → E-commerce → AI Automation → Mobile Apps",
      duration: "30 seconds",
      size: "204 KB",
      bestFor: ["Instagram Reels", "Facebook", "YouTube Shorts"],
    },
    {
      number: 2,
      title: "Lead Magnet",
      emoji: "⚠️",
      description: "5 Website Mistakes Costing You Leads - With WhatsApp CTA",
      duration: "20 seconds",
      size: "165 KB",
      bestFor: ["Instagram Stories", "TikTok", "Facebook Ads"],
    },
    {
      number: 3,
      title: "Success Story",
      emoji: "📈",
      description: "Fashion Brand: 500→5000 Visitors, ₹15L→₹1.2Cr Revenue (10x growth)",
      duration: "25 seconds",
      size: "253 KB",
      bestFor: ["LinkedIn", "YouTube", "Case Studies"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#1a1a2e] text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="border-b border-red-400/20 bg-gradient-to-br from-red-900/20 to-green-900/10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-black lg:text-6xl">🎬 Video Showcase</h1>
          <p className="mt-4 max-w-3xl text-xl text-slate-300">
            3 ready-to-post promotional videos. Download and share on social media to attract clients.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video.number}
                className="group border border-red-400/20 bg-red-900/10 rounded-xl overflow-hidden hover:border-red-400/50 hover:bg-red-900/20 transition"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-center">
                  <div className="text-5xl font-black">{video.emoji}</div>
                  <h3 className="mt-3 text-2xl font-black">{video.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-300">{video.description}</p>

                  {/* Specs */}
                  <div className="mt-6 space-y-2 border-y border-red-400/20 py-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">⏱️ Duration</span>
                      <span className="font-bold text-red-200">{video.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">📊 File Size</span>
                      <span className="font-bold text-red-200">{video.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">🎬 Format</span>
                      <span className="font-bold text-red-200">MP4 (1080x1920)</span>
                    </div>
                  </div>

                  {/* Best For */}
                  <div className="mt-4">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Best For</div>
                    <div className="flex flex-wrap gap-2">
                      {video.bestFor.map((platform) => (
                        <span
                          key={platform}
                          className="border border-red-400/30 bg-red-400/5 px-3 py-1 rounded-lg text-xs font-bold text-red-200"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={whatsapp}
                    className="mt-6 block w-full bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 text-center font-bold text-white rounded-lg hover:from-red-700 hover:to-red-800 transition"
                  >
                    ⬇️ Get Video {video.number}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Box */}
      <section className="border-y border-red-400/20 bg-red-900/10 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black mb-8 text-center">📋 Service Pricing</h2>
          <div className="grid gap-6 md:grid-cols-4 text-center">
            {[
              { label: "Setup Fee", value: "₹2,50,000" },
              { label: "Monthly", value: "₹20,000" },
              { label: "Year 1 Total", value: "₹4,90,000" },
              { label: "Expected ROI", value: "10x" },
            ].map((item) => (
              <div key={item.label} className="border border-red-400/20 bg-red-900/5 p-6 rounded-lg">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{item.label}</div>
                <div className="mt-3 text-3xl font-black text-red-400">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black mb-12">✅ What&apos;s Included</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Lead discovery from company domains (Hunter.io)",
              "Email & phone validation (India-optimized)",
              "Automatic 5-factor lead scoring (0-100)",
              "CRM sync (HubSpot, Salesforce, custom)",
              "AI-powered email personalization",
              "Real-time open & click tracking",
              "Google Sheets analytics dashboard",
              "Complete setup & training",
              "Ongoing optimization & support",
              "Unlimited lead generation",
              "Multi-platform posting strategy",
              "Client-ready sales materials",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 border border-red-400/20 bg-red-900/10 p-4 rounded-lg">
                <span className="text-green-400 font-bold mt-0.5">✓</span>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="border-t border-red-400/20 bg-gradient-to-r from-red-900/20 to-green-900/10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-black">📞 Ready to Get Started?</h2>
          <p className="mt-4 text-xl text-slate-400">
            Download the videos, see the system in action, and book your free consultation.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-block w-full md:w-auto bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 font-black text-white rounded-lg hover:from-red-700 hover:to-red-800 transition"
            >
              💬 Chat on WhatsApp
            </a>
            <br />
            <a
              href="tel:+918446000784"
              className="inline-block w-full md:w-auto border border-red-400/30 px-8 py-4 font-bold text-red-400 rounded-lg hover:bg-red-400/10 transition"
            >
              📞 Call: +91 84460 00784
            </a>
            <br />
            <a
              href="https://vdldigital.com"
              className="inline-block w-full md:w-auto border border-red-400/30 px-8 py-4 font-bold text-red-400 rounded-lg hover:bg-red-400/10 transition"
            >
              🌐 Visit: vdldigital.com
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Available: 9 AM - 6 PM IST (Mon-Sat) | Location: New Delhi, India
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-red-400/20 px-5 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/services/email-automation" className="font-bold text-red-400 hover:text-red-300 transition">
            ← Back to Service Details
          </Link>
          <Link href="/services/email-automation/demo" className="font-bold text-red-400 hover:text-red-300 transition">
            View Interactive Demo →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
