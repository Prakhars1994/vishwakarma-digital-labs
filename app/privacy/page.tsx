import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for visitors and project enquiries submitted to Vishwakarma Digital Labs.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white"><header className="border-b border-white/10"><div className="mx-auto max-w-5xl px-5 py-5"><Link href="/" className="font-black">{SITE_NAME}</Link></div></header><article className="mx-auto max-w-3xl px-5 py-16 leading-8 text-slate-300"><h1 className="text-4xl font-black text-white">Privacy Policy</h1><p className="mt-3 text-sm text-slate-500">Last updated: 16 August 2026</p><h2 className="mt-10 text-2xl font-black text-white">Information you provide</h2><p className="mt-3">When you send a project enquiry, you may provide your name, phone/WhatsApp number, service requirement, budget range, timeline and project details. This information is used to respond to the enquiry and scope the requested work.</p><h2 className="mt-8 text-2xl font-black text-white">Lead storage and third parties</h2><p className="mt-3">The enquiry form may store lead details in the website database when lead capture is configured. If you choose WhatsApp, your message is also handled by WhatsApp/Meta under its own policies. Hosting, analytics and database providers may process limited technical information needed to operate the site.</p><h2 className="mt-8 text-2xl font-black text-white">Analytics</h2><p className="mt-3">The site may use privacy-conscious web analytics to understand page views, traffic sources and site performance. Analytics data is used to improve the website and marketing.</p><h2 className="mt-8 text-2xl font-black text-white">How information is used</h2><p className="mt-3">Enquiry information is used for project communication, quoting, delivery discussions and legitimate business records. Vishwakarma Digital Labs does not sell enquiry details to advertisers.</p><h2 className="mt-8 text-2xl font-black text-white">Your request</h2><p className="mt-3">You can ask to correct or delete enquiry information that is still under our control by emailing <a className="text-orange-300" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p><h2 className="mt-8 text-2xl font-black text-white">Security</h2><p className="mt-3">Reasonable technical and organizational safeguards are used, but no internet transmission or storage system can be guaranteed absolutely secure.</p></article></main>
  );
}
