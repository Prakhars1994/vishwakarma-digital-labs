import Link from "next/link";
import type { ReactNode } from "react";

const whatsapp =
  "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20saw%20your%20portfolio%20demo%20and%20would%20like%20a%20similar%20project.";

export default function DemoFrame({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/#work" className="font-semibold text-slate-200 hover:text-white">
            ← Vishwakarma Digital Labs
          </Link>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold hover:bg-orange-400"
          >
            Build Something Similar
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-1/2 top-0 h-96 w-[720px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-orange-300">
            {eyebrow}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{subtitle}</p>
          <p className="mt-5 text-xs text-slate-500">
            Portfolio demo concept — shown to demonstrate design and development capability, not claimed as a client engagement.
          </p>
        </div>
      </section>

      {children}

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/20 to-slate-900 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-black sm:text-4xl">Want this adapted for your business?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            We can customize the design, features, branding, integrations and deployment around your exact requirements.
          </p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block rounded-xl bg-orange-500 px-7 py-4 font-bold hover:bg-orange-400"
          >
            Discuss on WhatsApp →
          </a>
        </div>
      </section>
    </main>
  );
}
