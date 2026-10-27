"use client";

import { useMemo, useState } from "react";

export default function MarketingPlanner() {
  const [industry, setIndustry] = useState("Local business");
  const [platform, setPlatform] = useState("Meta + Google");
  const [budget, setBudget] = useState("₹25,000");
  const plan = useMemo(() => ({
    "Local business": "Start with a focused offer, location-led creative and WhatsApp enquiry tracking.",
    "E-commerce": "Pair product-led creative with retargeting, feed hygiene and checkout measurement.",
    Healthcare: "Lead with trust, compliant messaging and a clear appointment journey.",
    Startup: "Validate one audience and message before expanding channel spend.",
  }[industry] || "Start with one audience, one offer and a measurable next action."), [industry]);
  return <div className="rounded-3xl border border-white/10 bg-[#101820] p-6 shadow-2xl sm:p-8">
    <div className="flex items-center justify-between gap-4"><div><div className="text-xs font-black uppercase tracking-[.2em] text-orange-300">Interactive demo</div><h3 className="mt-2 text-2xl font-black">Campaign planner</h3></div><span className="rounded-full border border-orange-400/30 px-3 py-1 text-xs text-orange-200">Example only</span></div>
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      <label className="text-sm text-slate-300">Industry<select value={industry} onChange={e=>setIndustry(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-white"><option>Local business</option><option>E-commerce</option><option>Healthcare</option><option>Startup</option></select></label>
      <label className="text-sm text-slate-300">Platform<select value={platform} onChange={e=>setPlatform(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-white"><option>Meta + Google</option><option>Meta Ads</option><option>Google Ads</option></select></label>
      <label className="text-sm text-slate-300">Monthly budget<select value={budget} onChange={e=>setBudget(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-3 text-white"><option>₹15,000</option><option>₹25,000</option><option>₹50,000</option><option>₹1,00,000+</option></select></label>
    </div>
    <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center"><p className="leading-7 text-slate-300">A {platform} starting plan for a {industry.toLowerCase()} with a {budget} monthly media budget: {plan}</p><div className="rounded-2xl bg-orange-400/10 p-4 text-sm text-orange-100"><div className="font-black">Illustrative estimate</div><div className="mt-1 text-orange-200/70">Not a forecast or guarantee.</div></div></div>
  </div>;
}
