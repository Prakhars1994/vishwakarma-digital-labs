"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "./cart";
import { BASE, categoryHref, shopCategories } from "./store";

export function Logo() {
  return (
    <Link href={BASE} className="group flex flex-col leading-none" aria-label="BarRaid home">
      <span className="text-[1.7rem] font-black tracking-[-.06em] text-white">
        Bar<span className="text-[#ff6a00]">Raid</span>
      </span>
      <span className="mt-1 text-[8px] font-bold uppercase tracking-[.32em] text-white/55">Beverage solutions</span>
    </Link>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6.2" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
    </svg>
  );
}

export default function StoreHeader() {
  const router = useRouter();
  const { count, ready } = useCart();
  const [menu, setMenu] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (q.trim()) params.set("q", q.trim());
    if (cat !== "All") params.set("cat", cat);
    setMenu(false);
    router.push(`${BASE}/shop${params.size ? "?" + params : ""}`);
  };

  const searchForm = (id: string) => (
    <form onSubmit={search} role="search" className="flex w-full overflow-hidden rounded-xl border border-white/15 bg-[#15181e] focus-within:border-[#ff6a00]">
      <label htmlFor={id + "-cat"} className="sr-only">Category</label>
      <select id={id + "-cat"} value={cat} onChange={(e) => setCat(e.target.value)} className="hidden border-r border-white/10 bg-transparent px-3 text-sm font-bold text-white/80 outline-none sm:block [&>option]:bg-[#15181e]">
        <option>All</option>
        {shopCategories.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <label htmlFor={id + "-q"} className="sr-only">Search products</label>
      <input id={id + "-q"} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search beer towers, dispensers, glassware…" className="min-h-11 min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/40" />
      <button className="bg-[#ff6a00] px-5 text-sm font-black text-white hover:bg-[#ff7d1f]">Search</button>
    </form>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0d10]/95 backdrop-blur">
      <div className="hidden border-b border-white/5 bg-black/40 text-[11px] text-white/60 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1.5">
          <span>Beer towers · Liquor dispensers · Barware for bars, hotels, events and gifting</span>
          <span className="flex gap-5">
            <Link href={`${BASE}/contact`} className="hover:text-white">Contact</Link>
            <a href="https://wa.me/919868107595" className="hover:text-white">WhatsApp +91 98681 07595</a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 lg:gap-8">
        <button onClick={() => setMenu((v) => !v)} aria-expanded={menu} aria-controls="barraid-menu" aria-label="Menu" className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white lg:hidden">
          <span aria-hidden="true" className="text-xl">{menu ? "✕" : "☰"}</span>
        </button>
        <Logo />
        <div className="hidden flex-1 lg:block">{searchForm("desk")}</div>
        <nav className="ml-auto flex items-center gap-2 sm:gap-3" aria-label="Store">
          <Link href={`${BASE}/quote`} className="hidden min-h-11 items-center rounded-xl border border-[#ff6a00] px-4 text-sm font-black text-[#ff8a3d] transition hover:bg-[#ff6a00] hover:text-white sm:flex">
            Request a Quote
          </Link>
          <Link href={`${BASE}/cart`} className="relative grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white hover:border-[#ff6a00]" aria-label={`Cart, ${ready ? count : 0} item${count === 1 ? "" : "s"}`}>
            <CartIcon />
            {ready && count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff6a00] px-1 text-[11px] font-black text-white">{count}</span>
            )}
          </Link>
        </nav>
      </div>
      <nav aria-label="Categories" className="hidden border-t border-white/5 lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-7 px-5 py-2.5 text-sm font-bold text-white/75">
          <Link href={`${BASE}/shop`} className="hover:text-[#ff8a3d]">All products</Link>
          {shopCategories.map((c) => (
            <Link key={c} href={categoryHref(c)} className="hover:text-[#ff8a3d]">{c}</Link>
          ))}
          <Link href={`${BASE}/bulk`} className="hover:text-[#ff8a3d]">Bulk & hospitality</Link>
          <Link href={`${BASE}/about`} className="ml-auto hover:text-[#ff8a3d]">About BarRaid</Link>
        </div>
      </nav>
      <div className="px-5 pb-3 lg:hidden">{searchForm("mob")}</div>
      {menu && (
        <nav id="barraid-menu" aria-label="Mobile" className="border-t border-white/10 bg-[#0b0d10] px-5 pb-5 lg:hidden">
          <div className="grid gap-1 pt-3 text-base font-bold text-white" onClick={() => setMenu(false)}>
            <Link className="rounded-lg px-3 py-3 hover:bg-white/5" href={`${BASE}/shop`}>All products</Link>
            {shopCategories.map((c) => (
              <Link key={c} className="rounded-lg px-3 py-3 hover:bg-white/5" href={categoryHref(c)}>{c}</Link>
            ))}
            <Link className="rounded-lg px-3 py-3 hover:bg-white/5" href={`${BASE}/bulk`}>Bulk & hospitality</Link>
            <Link className="rounded-lg px-3 py-3 hover:bg-white/5" href={`${BASE}/contact`}>Contact</Link>
            <Link className="mt-2 rounded-xl bg-[#ff6a00] px-3 py-3 text-center font-black" href={`${BASE}/quote`}>Request a Quote</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
