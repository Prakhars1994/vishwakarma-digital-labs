"use client";

import { FormEvent, useRef, useState } from "react";

function leadSource() {
  if (typeof window === "undefined") return "website-quote-form";

  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source")?.trim();
  const utmMedium = params.get("utm_medium")?.trim();
  const utmCampaign = params.get("utm_campaign")?.trim();

  let referrer = "";
  try {
    referrer = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : "";
  } catch {
    referrer = "";
  }

  const parts = [
    utmSource || referrer || "direct",
    utmMedium,
    utmCampaign,
    window.location.pathname === "/" ? "home" : window.location.pathname,
  ].filter(Boolean);

  return parts.join(" | ").slice(0, 120) || "website-quote-form";
}

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [service, setService] = useState("Website Development");
  const [budget, setBudget] = useState("Not sure yet");
  const [timeline, setTimeline] = useState("As soon as possible");
  const [details, setDetails] = useState("");
  const [website, setWebsite] = useState("");
  const startedAt = useRef(Date.now());

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedContact = contact.trim();
    const digitCount = normalizedContact.replace(/\D/g, "").length;
    if (digitCount < 6 || digitCount > 20 || details.trim().length < 10) return;

    const source = leadSource();
    const message = [
      "NEW PROJECT ENQUIRY — Vishwakarma Digital Labs",
      "",
      `Name: ${name}`,
      `Contact: ${countryCode} ${normalizedContact}`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      `Project details: ${details}`,
      `Source: ${source}`,
    ].join("\n");

    // Save in the background before WhatsApp opens. `keepalive` lets the
    // request finish even when the new WhatsApp tab becomes active.
    void fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        name,
        contact: `${countryCode} ${normalizedContact}`,
        service,
        budget,
        timeline,
        details,
        source,
        website, // honeypot: real users never see/fill this field
        startedAt: startedAt.current,
      }),
    }).catch(() => undefined);

    window.open(`https://wa.me/918446000784?text=${encodeURIComponent(message)}`, "_blank");
  }

  return (
    <form onSubmit={submit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      {/* Honeypot field for basic bot filtering. */}
      <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
            name="website"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
          <input required maxLength={120} value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-orange-400/60" />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Phone / WhatsApp</span>
          <div className="grid grid-cols-[92px_1fr] gap-2">
            <input required maxLength={8} value={countryCode} onChange={(event) => setCountryCode(event.target.value)} aria-label="Country code" className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-white outline-none focus:border-orange-400/60" />
            <input required minLength={6} maxLength={24} inputMode="tel" value={contact} onChange={(event) => setContact(event.target.value)} placeholder="Your number" className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-orange-400/60" />
          </div>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-slate-300">What do you need?</span>
        <select value={service} onChange={(event) => setService(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-400/60">
          <option>Website Development</option>
          <option>Mobile App Development</option>
          <option>AI Application</option>
          <option>Business Automation</option>
          <option>Website / App Redesign</option>
          <option>Other</option>
        </select>
      </label>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Approx. budget</span>
          <select value={budget} onChange={(event) => setBudget(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-400/60">
            <option>Not sure yet</option>
            <option>Under ₹25,000</option>
            <option>₹25,000 – ₹50,000</option>
            <option>₹50,000 – ₹1,00,000</option>
            <option>₹1,00,000+</option>
            <option>Need hourly pricing</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Target timeline</span>
          <select value={timeline} onChange={(event) => setTimeline(event.target.value)} className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-orange-400/60">
            <option>As soon as possible</option>
            <option>1–2 weeks</option>
            <option>2–4 weeks</option>
            <option>1–3 months</option>
            <option>Just exploring</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-slate-300">Project details</span>
        <textarea required minLength={10} maxLength={3000} rows={5} value={details} onChange={(event) => setDetails(event.target.value)} placeholder="Tell us what you want to build, important features, and any reference websites/apps..." className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-orange-400/60" />
      </label>

      <button type="submit" className="mt-6 w-full rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-400">
        Send Requirements on WhatsApp →
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-slate-500">
        Your details are placed into a WhatsApp message addressed to Vishwakarma Digital Labs. The phone number you enter remains your contact number.
      </p>
    </form>
  );
}
