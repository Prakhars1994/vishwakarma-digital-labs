"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const agencyWhatsapp =
  "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20saw%20the%20AI%20assistant%20demo%20and%20want%20a%20similar%20AI%20solution.";

type Message = { role: "user" | "assistant"; text: string; meta?: string[] };

const initialMessages: Message[] = [
  { role: "assistant", text: "Good evening. I have your product catalogue, pricing policy and CRM playbook loaded. What can I help with?", meta: ["Knowledge base synced", "CRM connected"] },
  { role: "user", text: "A 25-person sales team wants CRM automation and onboarding. Which package should I suggest?" },
  { role: "assistant", text: "Recommend the Scale plan. It supports multi-user CRM workflows, onboarding playbooks and automated follow-ups. I can create the opportunity and draft the proposal.", meta: ["Pricing verified", "CRM action ready", "92% confidence"] },
];

const quickPrompts = [
  "Summarize today's leads",
  "Draft a follow-up email",
  "Find our refund policy",
  "Book a discovery call",
];

function buildReply(input: string): Message {
  const lower = input.toLowerCase();
  if (lower.includes("lead")) return { role: "assistant", text: "You have 18 qualified leads today. Five are high intent, with an estimated pipeline value of ₹6.4L. I would prioritize Northstar Retail and Aster Labs first.", meta: ["CRM queried", "18 records", "Live data demo"] };
  if (lower.includes("email") || lower.includes("follow")) return { role: "assistant", text: "Draft ready: “Hi Maya, thanks for reviewing the proposal. Based on your team size, I’ve highlighted the automation workflow that could save the most manual follow-up time…”", meta: ["Tone: concise", "Personalized", "Ready to review"] };
  if (lower.includes("refund") || lower.includes("policy")) return { role: "assistant", text: "The current policy allows a full refund within 14 days when onboarding has not started. After onboarding begins, requests are reviewed against delivered milestones.", meta: ["Source: Policy_v4.pdf", "Section 3.2"] };
  if (lower.includes("book") || lower.includes("call")) return { role: "assistant", text: "I found open slots Tuesday at 11:30 AM and Wednesday at 3:00 PM. In production I can confirm the slot and create the calendar event after approval.", meta: ["Calendar checked", "2 slots found", "Approval required"] };
  return { role: "assistant", text: "I can answer that using your approved business data, then trigger the next workflow step. For this demo, try asking about leads, policies, emails or appointment booking.", meta: ["Guardrails active", "Business context loaded"] };
}

export default function AIAssistantDemoClient() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [active, setActive] = useState("Agent workspace");
  const [autoMode, setAutoMode] = useState(true);

  const stats = useMemo(() => ({ conversations: 142, resolved: 89, actions: 37, saved: 18.6 }), []);

  function send(text?: string) {
    const value = (text ?? input).trim();
    if (!value) return;
    setMessages((m) => [...m, { role: "user", text: value }, buildReply(value)]);
    setInput("");
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    send();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#060817] text-white" style={{fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"}}>
      <div className="pointer-events-none fixed inset-0 opacity-70" style={{ backgroundImage: "radial-gradient(circle at 20% 10%, rgba(111,76,255,.22), transparent 30%), radial-gradient(circle at 90% 25%, rgba(0,213,255,.14), transparent 28%), radial-gradient(circle at 50% 100%, rgba(244,63,94,.10), transparent 35%)" }} />

      <header className="relative z-30 border-b border-white/10 bg-[#07091a]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3"><div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 font-black shadow-lg shadow-violet-500/25">N<div className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#07091a] bg-emerald-400" /></div><div><div className="font-black tracking-tight">NOVA OS</div><div className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300/70">AI Operations Copilot</div></div></div>
          <div className="flex items-center gap-3"><div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs font-bold text-emerald-300 sm:block">● All systems operational</div><a href={agencyWhatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-white px-4 py-2.5 text-sm font-black text-[#07091a] hover:bg-cyan-200">Build an AI agent</a></div>
        </div>
      </header>

      <div className="relative z-10 mx-auto grid max-w-[1500px] lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="hidden min-h-[calc(100vh-76px)] border-r border-white/10 bg-white/[0.02] p-4 lg:block">
          <div className="px-3 pb-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/35">Workspace</div>
          {['Agent workspace','Conversations','Knowledge','Automations','Analytics'].map((item, index) => (
            <button key={item} onClick={() => setActive(item)} className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-bold transition ${active === item ? 'bg-gradient-to-r from-violet-500/20 to-cyan-400/10 text-white ring-1 ring-violet-400/20' : 'text-white/45 hover:bg-white/5 hover:text-white/80'}`}><span className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 text-xs">{['✦','◫','⌕','↯','⌁'][index]}</span>{item}</button>
          ))}
          <div className="mt-7 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-4"><div className="flex items-center justify-between"><div className="text-xs font-black">Autopilot</div><button onClick={() => setAutoMode(v => !v)} className={`relative h-6 w-11 rounded-full transition ${autoMode ? 'bg-emerald-400' : 'bg-white/15'}`}><span className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${autoMode ? 'left-6' : 'left-1'}`} /></button></div><p className="mt-3 text-xs leading-5 text-white/40">Low-risk actions can run automatically. Sensitive actions still require approval.</p></div>
        </aside>

        <div className="min-w-0 p-4 sm:p-6 lg:p-8">
          <section className="grid gap-4 xl:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1027]/80 shadow-2xl shadow-violet-950/30 backdrop-blur-xl">
              <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-black">✦</div><div><div className="font-black">Revenue Assistant</div><div className="mt-0.5 text-xs text-white/35">GPT-class LLM • tools • business knowledge</div></div></div>
                <div className="flex items-center gap-2"><span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-[11px] font-bold text-cyan-300">RAG ON</span><span className="rounded-full bg-violet-400/10 px-3 py-1.5 text-[11px] font-bold text-violet-300">6 TOOLS</span></div>
              </div>

              <div className="h-[520px] overflow-y-auto p-5 sm:p-7">
                <div className="mx-auto max-w-3xl space-y-5">
                  {messages.map((message, index) => (
                    <div key={index} className={message.role === 'user' ? 'ml-auto max-w-[82%]' : 'max-w-[90%]'}>
                      <div className={`rounded-2xl p-4 sm:p-5 ${message.role === 'user' ? 'rounded-tr-sm bg-gradient-to-br from-violet-500 to-indigo-600 text-white' : 'rounded-tl-sm border border-cyan-300/10 bg-white/[0.055] text-white/85'}`}>
                        {message.role === 'assistant' && <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">NOVA AGENT</div>}
                        <p className="leading-7">{message.text}</p>
                      </div>
                      {message.meta && <div className="mt-2 flex flex-wrap gap-1.5">{message.meta.map((m) => <span key={m} className="rounded-full border border-white/8 bg-white/[0.035] px-2.5 py-1 text-[10px] font-bold text-white/35">✓ {m}</span>)}</div>}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 p-4 sm:p-5">
                <div className="mb-3 flex gap-2 overflow-x-auto pb-1">{quickPrompts.map((prompt) => <button key={prompt} onClick={() => send(prompt)} className="shrink-0 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-bold text-white/55 hover:border-cyan-300/30 hover:text-cyan-200">{prompt}</button>)}</div>
                <form onSubmit={submit} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-2 focus-within:border-violet-400/40"><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask NOVA to research, answer or take an action…" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-white/25" /><button className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-black text-white shadow-lg shadow-violet-500/15">Send ↗</button></form>
              </div>
            </div>

            <aside className="grid content-start gap-4">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"><div className="flex items-center justify-between"><div><div className="text-xs font-black uppercase tracking-[0.18em] text-white/35">Live performance</div><div className="mt-2 text-2xl font-black">Today</div></div><div className="rounded-xl bg-emerald-400/10 px-3 py-2 text-xs font-black text-emerald-300">+18.4%</div></div><div className="mt-5 grid grid-cols-2 gap-3">{[[stats.conversations,'Chats'],[`${stats.resolved}%`,'Resolved'],[stats.actions,'Actions'],[`${stats.saved}h`,'Saved']].map(([value,label]) => <div key={label} className="rounded-2xl bg-white/[0.04] p-4"><div className="text-2xl font-black">{value}</div><div className="mt-1 text-xs font-bold text-white/35">{label}</div></div>)}</div></div>

              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-white/35">Connected tools</div><div className="mt-4 grid grid-cols-2 gap-2">{[['CRM','◈','from-violet-500 to-indigo-500'],['Docs','▤','from-cyan-400 to-blue-500'],['Calendar','◫','from-rose-400 to-orange-400'],['Email','✉','from-emerald-400 to-teal-500']].map(([name,icon,grad]) => <div key={name} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3"><div className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${grad} font-black`}>{icon}</div><div className="mt-3 text-sm font-black">{name}</div><div className="mt-1 text-[10px] text-emerald-300">● Connected</div></div>)}</div></div>

              <div className="rounded-[1.7rem] border border-fuchsia-400/20 bg-gradient-to-br from-violet-500/15 via-fuchsia-500/10 to-cyan-400/10 p-5"><div className="text-xs font-black uppercase tracking-[0.18em] text-fuchsia-200">Agent safeguards</div><div className="mt-4 space-y-3 text-sm text-white/65">{['Source-grounded answers','Approval for sensitive actions','Conversation audit trail','PII-aware workflow rules'].map((x) => <div key={x} className="flex items-center gap-2"><span className="text-emerald-300">✓</span>{x}</div>)}</div></div>
            </aside>
          </section>

          <section className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ['01','Answer with company knowledge','Ground responses in approved docs, policies, databases and product information.','from-violet-500/20 to-indigo-500/5'],
              ['02','Take real business actions','Create CRM records, draft emails, schedule meetings and call APIs after validation.','from-cyan-400/20 to-blue-500/5'],
              ['03','Measure every workflow','Track resolution, handoffs, costs, latency and the business outcome of each automation.','from-fuchsia-500/20 to-rose-500/5'],
            ].map(([num,title,text,gradient]) => <article key={num} className={`rounded-[1.7rem] border border-white/10 bg-gradient-to-br ${gradient} p-6`}><div className="text-xs font-black text-white/30">{num}</div><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">{text}</p></article>)}
          </section>

          <section className="mt-5 flex flex-col gap-5 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">Portfolio demo by Vishwakarma Digital Labs</div><h2 className="mt-2 text-2xl font-black sm:text-3xl">Want an AI agent connected to your business?</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-white/40">We can tailor the model, knowledge sources, tools, dashboards, permissions and automation flows around your use case.</p></div><div className="flex shrink-0 flex-wrap gap-3"><Link href="/#work" className="rounded-xl border border-white/10 px-5 py-3 text-sm font-black">← Portfolio</Link><a href={agencyWhatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-black">Discuss AI project →</a></div></section>
        </div>
      </div>
    </main>
  );
}
