"use client";

import { useMemo, useState } from "react";
import type { BarRaidProduct } from "./catalog";
import { ProductGrid } from "./ui";
import { shopCategories } from "./store";

export default function ShopClient({ products, initialQ, initialCat }: { products: BarRaidProduct[]; initialQ: string; initialCat: string }) {
  const [q, setQ] = useState(initialQ);
  const [cat, setCat] = useState(initialCat);
  const [sort, setSort] = useState("featured");

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    let list = products.filter(
      (p) => (cat === "All" || p.category === cat) && (!term || `${p.name} ${p.description} ${p.code}`.toLowerCase().includes(term)),
    );
    if (sort === "low") list = [...list].sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [products, q, cat, sort]);

  const reset = () => {
    setQ("");
    setCat("All");
  };

  return (
    <section id="shop" className="mx-auto max-w-7xl px-5 py-12">
      <div className="grid gap-3 md:grid-cols-[1fr_auto]">
        <label className="grid gap-1.5">
          <span className="sr-only">Search products</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or product code"
            className="min-h-12 rounded-xl border border-white/15 bg-[#15181e] px-4 py-3 text-white outline-none placeholder:text-white/35 focus:border-[#ff6a00]"
          />
        </label>
        <label className="grid gap-1.5">
          <span className="sr-only">Sort products</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="min-h-12 rounded-xl border border-white/15 bg-[#15181e] px-4 py-3 font-bold text-white outline-none focus:border-[#ff6a00] [&>option]:bg-[#15181e]">
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {["All", ...shopCategories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={"min-h-11 rounded-full px-4 text-sm font-bold transition " + (cat === c ? "bg-[#ff6a00] text-white" : "border border-white/15 text-white/75 hover:border-white/40")}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between text-sm">
        <span className="font-bold text-white/55" aria-live="polite">{shown.length} product{shown.length === 1 ? "" : "s"}</span>
        {(q || cat !== "All") && (
          <button type="button" onClick={reset} className="font-black text-[#ff8a3d] underline underline-offset-4">Clear filters</button>
        )}
      </div>

      <div className="mt-5">
        {shown.length ? (
          <ProductGrid items={shown} />
        ) : (
          <div className="rounded-2xl border border-white/10 bg-[#15181e] p-10 text-center">
            <h2 className="text-xl font-black">No matching products</h2>
            <p className="mt-2 text-white/55">Try another search, or ask BarRaid on WhatsApp for a product that isn’t listed.</p>
            <button type="button" onClick={reset} className="mt-5 rounded-full bg-white px-5 py-2 text-sm font-black text-black">Reset filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
