"use client";

import Script from "next/script";
import { FormEvent, useState } from "react";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [service, setService] = useState("Website Development");
  const [budget, setBudget] = useState("Not sure yet");
  const [timeline, setTimeline] = useState("As soon as possible");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const turnstileToken = String(formData.get("cf-turnstile-response") || "");
    const website = String(formData.get("website") || "");

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("Please complete the security verification before sending.");
      return;
    }

    const message = [
      "NEW PROJECT ENQUIRY — Vishwakarma Digital Labs",
      "",
      `Name: ${name}`,
      `Contact: ${countryCode} ${contact}`,
      `Service: ${service}`,
      `Budget: ${budget}`,
      `Timeline: ${timeline}`,
      `Project details: ${details}`,
    ].join("\n");

    void fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        name,
        contact: `${countryCode} ${contact}`,
        service,
        budget,
        timeline,
        details,
        source: "website-quote-form",
        website,
        turnstileToken,
      }),
    }).catch(() => undefined);

    window.open(`https://wa.me/918446000784?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setStatus("WhatsApp opened. If it was blocked, use the contact button below.");
  }

  return (
    <>
      {turnstileSiteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />
      ) : null}

      <form onSubmit={submit} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label>
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
            <input
              required
              minLength={2}
              maxLength={120}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              autoComplete="name"
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-orange-400/60"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-300">Phone / WhatsApp</span>
            <div className="grid grid-cols-[92px_1fr] gap-2">
              <input
                required
                value={countryCode}
                onChange={(event) => setCountryCode(event.target.value)}
                aria-label="Country code"
                inputMode="tel"
                pattern="[+0-9 -]{1,8}"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-white outline-none focus:border-orange-400/60"
              />
              <input
                required
                inputMode="tel"
                autoComplete="tel"
                minLength={7}
                maxLength={30}
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                placeholder="Your number"
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-orange-400/60"
              />
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
          <textarea
            required
            minLength={20}
            maxLength={3000}
            rows={5}
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            placeholder="Tell us what you want to build, important features, and any reference websites/apps..."
            className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-600 focus:border-orange-400/60"
          />
        </label>

        {turnstileSiteKey ? (
          <div className="mt-5">
            <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="dark" />
          </div>
        ) : null}

        <button type="submit" className="mt-6 w-full rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-400">
          Send Requirements on WhatsApp →
        </button>

        {status ? <p className="mt-3 text-center text-xs text-orange-200" role="status">{status}</p> : null}

        <p className="mt-3 text-center text-xs leading-5 text-slate-500">
          Your enquiry may be securely stored so we can respond and follow up. WhatsApp opens with a ready-to-send message; submitting this form does not send a message automatically.
        </p>
      </form>
    </>
  );
}
