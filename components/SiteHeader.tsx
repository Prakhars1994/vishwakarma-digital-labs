import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { CONTACT, SITE_NAME } from "@/lib/site";

const quoteUrl = `${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hi Prakhar, I want to discuss a website, app, AI or automation project.",
)}`;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-xl font-black shadow-lg shadow-orange-500/20">
            V
          </span>
          <span>
            <span className="block font-bold tracking-tight">{SITE_NAME}</span>
            <span className="block text-xs text-slate-400">Build • Automate • Grow</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          <a href="/#services" className="transition hover:text-white">Services</a>
          <Link href="/work" className="transition hover:text-white">Work</Link>
          <a href="/#estimator" className="transition hover:text-white">Estimator</a>
          <a href="/#process" className="transition hover:text-white">Process</a>
          <Link href="/about" className="transition hover:text-white">About</Link>
          <Link href="/contact" className="transition hover:text-white">Contact</Link>
          <a
            href={quoteUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-orange-400"
          >
            Get Free Quote
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
