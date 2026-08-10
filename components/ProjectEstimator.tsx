"use client";

import { useMemo, useState } from "react";

type ProductKey = "website" | "ecommerce" | "mobile" | "ai" | "automation";
type CurrencyKey = "INR" | "USD";

const products: Record<ProductKey, { label: string; short: string; inr: [number, number]; usd: [number, number] }> = {
  website: { label: "Business website", short: "WEB", inr: [18000, 45000], usd: [450, 1100] },
  ecommerce: { label: "E-commerce platform", short: "SHOP", inr: [45000, 110000], usd: [1100, 2800] },
  mobile: { label: "Mobile app", short: "APP", inr: [65000, 180000], usd: [1600, 4500] },
  ai: { label: "AI application / agent", short: "AI", inr: [55000, 160000], usd: [1400, 4000] },
  automation: { label: "Business automation", short: "AUTO", inr: [30000, 90000], usd: [750, 2250] },
};

const featureOptions = [
  { id: "auth", label: "User login / accounts", factor: 0.12 },
  { id: "payments", label: "Payments / checkout", factor: 0.18 },
  { id: "admin", label: "Admin dashboard", factor: 0.16 },
  { id: "ai", label: "AI / LLM integration", factor: 0.22 },
  { id: "integrations", label: "Third-party integrations", factor: 0.14 },
  { id: "realtime", label: "Real-time features", factor: 0.16 },
];

function formatMoney(value: number, currency: CurrencyKey) {
  return currency === "INR"
    ? `₹${Math.round(value).toLocaleString("en-IN")}`
    : `$${Math.round(value).toLocaleString("en-US")}`;
}

export default function ProjectEstimator() {
  const [product, setProduct] = useState<ProductKey>("website");
  const [currency, setCurrency] = useState<CurrencyKey>("INR");
  const [complexity, setComplexity] = useState("standard");
  const [timeline, setTimeline] = useState("normal");
  const [features, setFeatures] = useState<string[]>([]);

  const estimate = useMemo(() => {
    const base = products[product][currency === "INR" ? "inr" : "usd"];
    const complexityFactor = complexity === "simple" ? 0.82 : complexity === "advanced" ? 1.38 : 1;
    const timelineFactor = timeline === "urgent" ? 1.18 : timeline === "flexible" ? 0.95 : 1;
    const featureFactor = 1 + featureOptions
      .filter((item) => features.includes(item.id))
      .reduce((sum, item) => sum + item.factor, 0);

    return [base[0] * complexityFactor * timelineFactor * featureFactor, base[1] * complexityFactor * timelineFactor * featureFactor] as const;
  }, [product, currency, complexity, timeline, features]);

  const toggleFeature = (id: string) => {
    setFeatures((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const whatsappMessage = encodeURIComponent([
    "Hi Prakhar, I used the project estimator on Vishwakarma Digital Labs.",
    "",
    `Project: ${products[product].label}`,
    `Complexity: ${complexity}`,
    `Timeline: ${timeline}`,
    `Features: ${features.length ? featureOptions.filter((item) => features.includes(item.id)).map((item) => item.label).join(", ") : "No extra features selected"}`,
    `Estimated range: ${formatMoney(estimate[0], currency)} – ${formatMoney(estimate[1], currency)}`,
    "",
    "Please give me a final quote.",
  ].join("\n"));

  return (
    <div className="overflow-hidden border-2 border-blue-950 bg-[#f4f7ff] text-blue-950 shadow-[12px_12px_0_#172554]">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-b-2 border-blue-950 p-6 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b-2 border-blue-950 pb-5">
            <div>
              <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-blue-600">Scope builder / 01</div>
              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Configure your build</h3>
            </div>
            <div className="border-2 border-blue-950 bg-[#d8ff3e] px-4 py-2 font-mono text-sm font-black">LIVE ESTIMATE</div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label>
              <span className="mb-2 block font-mono text-xs font-black uppercase tracking-wider">Product type</span>
              <select value={product} onChange={(event) => setProduct(event.target.value as ProductKey)} className="w-full border-2 border-blue-950 bg-white px-4 py-3.5 font-semibold outline-none focus:bg-blue-50">
                {Object.entries(products).map(([key, item]) => <option key={key} value={key}>{item.label}</option>)}
              </select>
            </label>

            <label>
              <span className="mb-2 block font-mono text-xs font-black uppercase tracking-wider">Complexity</span>
              <select value={complexity} onChange={(event) => setComplexity(event.target.value)} className="w-full border-2 border-blue-950 bg-white px-4 py-3.5 font-semibold outline-none focus:bg-blue-50">
                <option value="simple">Simple / MVP</option>
                <option value="standard">Standard production build</option>
                <option value="advanced">Advanced / custom workflows</option>
              </select>
            </label>

            <label>
              <span className="mb-2 block font-mono text-xs font-black uppercase tracking-wider">Timeline</span>
              <select value={timeline} onChange={(event) => setTimeline(event.target.value)} className="w-full border-2 border-blue-950 bg-white px-4 py-3.5 font-semibold outline-none focus:bg-blue-50">
                <option value="flexible">Flexible</option>
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
              </select>
            </label>

            <div>
              <span className="mb-2 block font-mono text-xs font-black uppercase tracking-wider">Currency</span>
              <div className="grid grid-cols-2 border-2 border-blue-950 bg-white p-1">
                {(["INR", "USD"] as CurrencyKey[]).map((item) => (
                  <button key={item} type="button" onClick={() => setCurrency(item)} className={`px-4 py-2.5 text-sm font-black transition ${currency === item ? "bg-blue-950 text-white" : "text-blue-950 hover:bg-blue-100"}`}>{item}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="font-mono text-xs font-black uppercase tracking-wider">Optional modules</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {featureOptions.map((item) => {
                const active = features.includes(item.id);
                return (
                  <button key={item.id} type="button" onClick={() => toggleFeature(item.id)} className={`flex items-center justify-between border-2 px-4 py-3 text-left text-sm font-bold transition ${active ? "border-blue-950 bg-[#d8ff3e]" : "border-blue-200 bg-white hover:border-blue-950"}`}>
                    <span>{item.label}</span><span className="font-mono">{active ? "[x]" : "[ ]"}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden bg-blue-950 p-7 text-white sm:p-9 lg:p-10">
          <div className="absolute -right-16 top-8 h-40 w-40 rounded-full border-[24px] border-cyan-400/20" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rotate-12 bg-[#d8ff3e]/10" />

          <div className="relative">
            <div className="flex items-center justify-between gap-4">
              <div className="font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Estimate / 02</div>
              <div className="border border-white/30 px-3 py-1 font-mono text-xs">{products[product].short}</div>
            </div>

            <div className="mt-10 border-y border-white/20 py-8">
              <div className="font-mono text-xs uppercase tracking-widest text-blue-200">Indicative project range</div>
              <div className="mt-4 text-4xl font-black sm:text-5xl">{formatMoney(estimate[0], currency)}</div>
              <div className="mt-2 text-2xl font-black text-cyan-300">→ {formatMoney(estimate[1], currency)}</div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-px bg-white/20">
              <div className="bg-blue-950 p-4"><div className="font-mono text-[10px] uppercase text-blue-300">Complexity</div><div className="mt-1 font-bold capitalize">{complexity}</div></div>
              <div className="bg-blue-950 p-4"><div className="font-mono text-[10px] uppercase text-blue-300">Timeline</div><div className="mt-1 font-bold capitalize">{timeline}</div></div>
              <div className="bg-blue-950 p-4"><div className="font-mono text-[10px] uppercase text-blue-300">Modules</div><div className="mt-1 font-bold">{features.length}</div></div>
              <div className="bg-blue-950 p-4"><div className="font-mono text-[10px] uppercase text-blue-300">Currency</div><div className="mt-1 font-bold">{currency}</div></div>
            </div>

            <p className="mt-7 text-sm leading-6 text-blue-200">Planning range only. Final pricing depends on actual screens, integrations, content, data migration and deployment requirements.</p>
          </div>

          <a href={`https://wa.me/918446000784?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="relative mt-8 flex items-center justify-between border-2 border-[#d8ff3e] bg-[#d8ff3e] px-5 py-4 font-black text-blue-950 transition hover:bg-white">
            <span>Send scope on WhatsApp</span><span className="text-xl">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
