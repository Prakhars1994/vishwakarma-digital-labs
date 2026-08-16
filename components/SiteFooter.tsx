import Link from "next/link";
import { CONTACT, SITE_NAME } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-slate-400 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="font-bold text-slate-100">{SITE_NAME}</div>
          <p className="mt-2 max-w-md leading-6">
            Production-focused websites, apps, AI integrations and business automation for teams that need practical digital products.
          </p>
          <div className="mt-3 text-slate-500">© {new Date().getFullYear()} Vishwakarma Digital Labs.</div>
        </div>

        <div>
          <div className="font-semibold text-slate-200">Explore</div>
          <div className="mt-3 grid gap-2">
            <a href="/#services" className="hover:text-white">Services</a>
            <Link href="/work" className="hover:text-white">Work</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold text-slate-200">Contact & legal</div>
          <div className="mt-3 grid gap-2">
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white">{CONTACT.email}</a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
