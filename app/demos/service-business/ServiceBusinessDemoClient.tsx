"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const agencyWhatsapp =
  "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20saw%20the%20service%20business%20demo%20and%20want%20a%20similar%20lead-generation%20website.";

const industries = {
  Consulting: ["Strategy audit", "Operations roadmap", "Executive advisory"],
  Property: ["Buyer qualification", "Property discovery", "Site visit booking"],
  Clinics: ["Treatment enquiry", "Appointment booking", "Patient follow-up"],
};

type Industry = keyof typeof industries;

export default function ServiceBusinessDemoClient() {
  const [industry, setIndustry] = useState<Industry>("Consulting");
  const [leads, setLeads] = useState(80);
  const [closeRate, setCloseRate] = useState(8);
  const [avgValue, setAvgValue] = useState(30000);
  const [submitted, setSubmitted] = useState(false);

  const projected = useMemo(() => {
    const improvedCloseRate = Math.min(closeRate + 4, 100);
    const currentRevenue = leads * (closeRate / 100) * avgValue;
    const improvedRevenue = leads * (improvedCloseRate / 100) * avgValue;
    return Math.round(improvedRevenue - currentRevenue);
  }, [leads, closeRate, avgValue]);

  function submitLead(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#fffdf2] text-[#111111]" style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
      <header className="sticky top-0 z-40 border-b border-black bg-[#ffe600]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-none border-2 border-black bg-[#2457ff] font-black text-white">N</div><div><div className="font-black tracking-tight">Northstar Growth</div><div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4b4b4b]">Advisory • Growth • Systems</div></div></div>
          <nav className="hidden items-center gap-7 text-sm font-bold text-[#4b4b4b] md:flex"><a href="#services" className="hover:text-[#2457ff]">Services</a><a href="#results" className="hover:text-[#2457ff]">Results</a><a href="#calculator" className="hover:text-[#2457ff]">ROI calculator</a><a href="#contact" className="rounded-none border-2 border-black bg-black px-5 py-2.5 text-white hover:bg-[#2457ff]">Free strategy call</a></nav>
          <a href="#contact" className="rounded-none border-2 border-black bg-black px-4 py-2 text-sm font-black text-white md:hidden">Book call</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#ffe600]/55 blur-[90px]" />
        <div className="absolute left-[35%] top-[5%] h-80 w-80 rounded-full bg-[#2457ff]/20 blur-[90px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex rounded-none border-2 border-black bg-[#ffe600] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#2457ff]">Growth systems for service businesses</div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">Turn more website traffic into <span className="text-[#2457ff]">qualified conversations.</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4b4b4b]">A high-conversion service website that explains your offer, builds trust, captures intent and routes every lead into a measurable follow-up system.</p>
            <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className="rounded-none bg-[#2457ff] px-7 py-4 font-black text-white shadow-xl shadow-blue-500/15">Get your growth plan</a><a href="#results" className="rounded-none border-2 border-black bg-white px-7 py-4 font-black shadow-sm">See how it works ↓</a></div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">{[['2.6×','more enquiries'],['< 5m','lead routing'],['100%','source tracking']].map(([value,label]) => <div key={label} className="rounded-none border-2 border-black bg-white p-4 shadow-[5px_5px_0_#111]"><div className="text-2xl font-black text-[#0c2540]">{value}</div><div className="mt-1 text-xs font-bold text-[#6a849a]">{label}</div></div>)}</div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-none bg-gradient-to-br from-[#1677ff]/15 to-[#00b894]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-none border border-black bg-white p-5 shadow-[12px_12px_0_#111]">
              <div className="flex items-center justify-between"><div><div className="text-xs font-black uppercase tracking-[0.18em] text-[#6a849a]">Pipeline snapshot</div><div className="mt-1 text-2xl font-black">This month</div></div><div className="rounded-none bg-[#d9ffe8] px-3 py-2 text-xs font-black text-[#008f72]">▲ 28.4%</div></div>
              <div className="mt-6 flex h-44 items-end gap-2 rounded-none bg-[#f4f4f4] p-4">{[36,44,31,58,52,76,68,92,82,105,96,124].map((height, i) => <div key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-[#1677ff] to-[#62c4ff]" style={{ height: `${Math.min(height,100)}%`, opacity: .45 + i * .04 }} />)}</div>
              <div className="mt-4 grid grid-cols-3 gap-3">{[['124','Leads'],['31','Qualified'],['₹8.7L','Pipeline']].map(([value,label]) => <div key={label} className="rounded-none border border-black p-4"><div className="text-xl font-black">{value}</div><div className="mt-1 text-xs font-bold text-[#6a849a]">{label}</div></div>)}</div>
              <div className="mt-4 rounded-none bg-[#111111] p-4 text-white"><div className="flex items-center justify-between gap-3"><div><div className="text-xs font-bold text-white/50">Next best action</div><div className="mt-1 font-black">Call 5 high-intent leads</div></div><div className="grid h-10 w-10 place-items-center rounded-none bg-[#00b86b]">→</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-black bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center"><div className="text-xs font-black uppercase tracking-[0.22em] text-[#00a45b]">One website, built around your funnel</div><h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Adapt the experience to your industry.</h2></div>
          <div className="mt-9 flex justify-center gap-2">{(Object.keys(industries) as Industry[]).map(key => <button key={key} onClick={() => setIndustry(key)} className={`rounded-full px-5 py-2.5 text-sm font-black ${industry === key ? 'bg-[#111111] text-white shadow-lg' : 'border border-black bg-white text-[#4b4b4b]'}`}>{key}</button>)}</div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{industries[industry].map((item,index) => <article key={item} className="group rounded-none border border-black bg-white p-6 transition hover:-translate-y-1 hover:border-[#1677ff]/25 hover:shadow-xl hover:shadow-blue-950/5"><div className={`grid h-12 w-12 place-items-center rounded-none text-xl font-black text-white ${['bg-[#2457ff]','bg-[#00b86b]','bg-[#ff8f4c]'][index]}`}>{index + 1}</div><h3 className="mt-6 text-xl font-black">{item}</h3><p className="mt-3 text-sm leading-6 text-[#6a849a]">Clear messaging, conversion-oriented UX and automated follow-up designed for this stage of the customer journey.</p><div className="mt-5 text-sm font-black text-[#2457ff]">See workflow →</div></article>)}</div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><div className="text-xs font-black uppercase tracking-[0.22em] text-[#2457ff]">Conversion architecture</div><h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">Every section has a job.</h2><p className="mt-5 text-lg leading-8 text-[#6a849a]">The page moves a visitor from “Is this for me?” to “I trust this business” to “I know what to do next.”</p></div>
          <div className="grid gap-4 sm:grid-cols-2">{[
            ['01','Intent-led hero','Match the visitor’s problem in seconds.','#eaf4ff','#1677ff'],
            ['02','Trust system','Proof, process and expectations reduce hesitation.','#e9fff8','#008f72'],
            ['03','Smart capture','Forms adapt to service, source and urgency.','#fff3e9','#e36b1d'],
            ['04','Follow-up automation','Route leads to WhatsApp, CRM, email or calendar.','#f5edff','#8a48d8'],
          ].map(([num,title,text,bg,color]) => <div key={num} className="rounded-none p-6" style={{backgroundColor:bg}}><div className="text-xs font-black" style={{color}}>{num}</div><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-[#4b4b4b]">{text}</p></div>)}</div>
        </div>
      </section>

      <section id="calculator" className="bg-[#111111] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div><div className="text-xs font-black uppercase tracking-[0.22em] text-[#62e6c2]">Interactive opportunity calculator</div><h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">What could better conversion be worth?</h2><p className="mt-5 text-lg leading-8 text-white/55">This demo models the additional monthly revenue from improving close rate by four percentage points. It is illustrative, not a guarantee.</p><div className="mt-8 rounded-none border border-white/10 bg-white/5 p-6"><div className="text-xs font-bold text-white/45">Illustrative monthly upside</div><div className="mt-2 text-5xl font-black text-[#62e6c2]">₹{projected.toLocaleString('en-IN')}</div><div className="mt-2 text-sm text-white/40">from the same lead volume</div></div></div>
          <div className="rounded-none bg-white p-6 text-[#0c2540] shadow-2xl sm:p-8">
            <Slider label="Monthly leads" value={leads} min={20} max={300} step={10} display={`${leads}`} onChange={setLeads} />
            <Slider label="Current close rate" value={closeRate} min={1} max={30} step={1} display={`${closeRate}%`} onChange={setCloseRate} />
            <Slider label="Average client value" value={avgValue} min={5000} max={200000} step={5000} display={`₹${avgValue.toLocaleString('en-IN')}`} onChange={setAvgValue} />
            <div className="mt-6 rounded-none bg-[#f3f9ff] p-4 text-sm leading-6 text-[#4b4b4b]">A production site can connect this calculator to lead capture, campaign attribution and your CRM so the visitor&apos;s result becomes part of the sales conversation.</div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-7xl gap-8 px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
        <div><div className="text-xs font-black uppercase tracking-[0.22em] text-[#00a45b]">Conversion demo</div><h2 className="mt-4 text-4xl font-black leading-tight">Make the next step ridiculously easy.</h2><p className="mt-5 text-lg leading-8 text-[#6a849a]">Short forms, clear expectations and immediate routing reduce friction at the moment a prospect is ready to talk.</p><div className="mt-7 space-y-3">{['Source tracking included','WhatsApp / email / CRM routing','Mobile-first validation','Fast confirmation state'].map(x => <div key={x} className="flex items-center gap-3 text-sm font-bold text-[#36546f]"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#d9ffe8] text-[#008f72]">✓</span>{x}</div>)}</div></div>
        <form onSubmit={submitLead} className="rounded-none border border-black bg-white p-6 shadow-[8px_8px_0_#111] sm:p-8">
          {submitted ? <div className="rounded-[1.5rem] bg-[#d9ffe8] p-7"><div className="grid h-12 w-12 place-items-center rounded-full bg-[#00b86b] text-xl font-black text-white">✓</div><h3 className="mt-5 text-2xl font-black">Thanks — your strategy request is ready.</h3><p className="mt-2 leading-7 text-[#4b4b4b]">This is a demo confirmation. In production the lead can be saved, attributed and routed automatically.</p><button type="button" onClick={() => setSubmitted(false)} className="mt-6 rounded-none border-2 border-black bg-black px-5 py-3 text-sm font-black text-white">Submit another demo lead</button></div> : <><div className="text-sm font-black text-[#2457ff]">FREE 20-MINUTE STRATEGY CALL</div><h3 className="mt-2 text-2xl font-black">Tell us where growth is getting stuck.</h3><div className="mt-6 grid gap-4 sm:grid-cols-2"><Field label="Name" placeholder="Your name" /><Field label="Work email" placeholder="you@company.com" /></div><div className="mt-4"><Field label="What do you want to improve?" placeholder="More qualified leads, better follow-up…" /></div><button className="mt-5 w-full rounded-none bg-gradient-to-r from-[#1677ff] to-[#00b894] px-5 py-4 font-black text-white shadow-lg shadow-blue-500/15">Get my growth plan →</button><p className="mt-3 text-center text-xs text-[#8aa0b2]">No spam. Demo form only.</p></>}
        </form>
      </section>

      <footer className="border-t border-black bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-[#2457ff]">Portfolio demo by Vishwakarma Digital Labs</div><div className="mt-2 font-black">Built to demonstrate conversion-focused web development.</div></div><div className="flex flex-wrap gap-3"><Link href="/#work" className="rounded-none border border-black px-5 py-3 text-sm font-black">← Back to portfolio</Link><a href={agencyWhatsapp} target="_blank" rel="noreferrer" className="rounded-none border-2 border-black bg-black px-5 py-3 text-sm font-black text-white">Build something similar →</a></div></div></footer>
    </main>
  );
}

function Slider({ label, value, min, max, step, display, onChange }: { label:string; value:number; min:number; max:number; step:number; display:string; onChange:(v:number)=>void }) {
  return <label className="mb-6 block"><div className="mb-3 flex items-center justify-between gap-4"><span className="text-sm font-black">{label}</span><span className="rounded-none bg-[#dfe6ff] px-3 py-1.5 text-sm font-black text-[#2457ff]">{display}</span></div><input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[#1677ff]" /></label>;
}

function Field({ label, placeholder }: {label:string; placeholder:string}) {
  return <label className="block"><span className="text-xs font-black uppercase tracking-[0.12em] text-[#4b4b4b]">{label}</span><input required placeholder={placeholder} className="mt-2 w-full rounded-none border border-black bg-white px-4 py-3.5 outline-none transition focus:border-[#1677ff]/40 focus:ring-4 focus:ring-[#1677ff]/5" /></label>;
}
