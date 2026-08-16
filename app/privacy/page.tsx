import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy policy for Vishwakarma Digital Labs.", alternates: { canonical: "/privacy" } };

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white"><SiteHeader /><main id="main-content" className="mx-auto max-w-4xl px-5 py-20 lg:px-8"><div className="text-sm font-black uppercase tracking-[.2em] text-orange-300">Privacy</div><h1 className="mt-4 text-5xl font-black">Privacy Policy</h1><p className="mt-5 text-slate-400">Last updated: 16 August 2026</p><div className="mt-10 space-y-8 leading-8 text-slate-300">
      <section><h2 className="text-2xl font-black text-white">Information we receive</h2><p className="mt-3">When you request a quote, you may provide your name, phone/WhatsApp number, project type, budget range, timeline and project details. Technical request information such as IP address may also be processed for security and abuse prevention.</p></section>
      <section><h2 className="text-2xl font-black text-white">How it is used</h2><p className="mt-3">Project enquiry data is used to respond, scope work, prevent spam and maintain a record of genuine business enquiries. If lead storage is configured, information may be stored in a secured Supabase database. WhatsApp is opened only as a user-initiated external service.</p></section>
      <section><h2 className="text-2xl font-black text-white">Security and service providers</h2><p className="mt-3">Cloudflare may process network/security data while delivering the site. Cloudflare Turnstile may be used to detect automated abuse. Supabase may store lead data when enabled. These providers process data under their own applicable policies.</p></section>
      <section><h2 className="text-2xl font-black text-white">Retention and deletion</h2><p className="mt-3">Business enquiries are retained only as long as reasonably useful for responding, follow-up, record keeping or legal obligations. You can request access, correction or deletion by emailing <a className="text-orange-300 underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p></section>
      <section><h2 className="text-2xl font-black text-white">No sale of enquiry data</h2><p className="mt-3">Vishwakarma Digital Labs does not sell project-enquiry contact details to advertisers or data brokers.</p></section>
    </div></main><SiteFooter /></div>
  );
}
