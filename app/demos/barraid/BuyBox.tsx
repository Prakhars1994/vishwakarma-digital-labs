"use client";

import Link from "next/link";
import { useState } from "react";
import { cart } from "./cart";
import type { BarRaidProduct } from "./catalog";
import { MAX_QTY, isOrderable } from "./store";

export default function BuyBox({ product, bulkHref }: { product: BarRaidProduct; bulkHref: string }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const orderable = isOrderable(product);
  const label = !product.price ? "Price on request" : product.availability === "Out Of Stock" ? "Out of stock" : added ? "Added to cart ✓" : "Add to cart";

  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-bold text-white/60">Quantity</span>
        <div className="flex items-center rounded-full border border-white/15 bg-[#0b0d10] p-1">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-10 w-10 place-items-center rounded-full text-lg hover:bg-white/10">−</button>
          <span className="min-w-10 text-center font-black" aria-live="polite">{qty}</span>
          <button type="button" aria-label="Increase quantity" disabled={qty >= MAX_QTY} onClick={() => setQty((q) => Math.min(MAX_QTY, q + 1))} className="grid h-10 w-10 place-items-center rounded-full text-lg hover:bg-white/10 disabled:opacity-30">+</button>
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          disabled={!orderable}
          onClick={() => {
            cart.add(product.id, qty);
            setAdded(true);
          }}
          className="min-h-14 rounded-full bg-[#ff6a00] px-6 font-black text-white shadow-[0_10px_30px_rgba(255,106,0,.3)] transition hover:bg-[#ff7d1f] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none"
        >
          {label}
        </button>
        <Link href={bulkHref} className="flex min-h-14 items-center justify-center rounded-full border border-[#ff6a00] px-6 text-center font-black text-[#ff8a3d] transition hover:bg-[#ff6a00] hover:text-white">
          Request a bulk quote
        </Link>
      </div>
      {added && (
        <p className="mt-3 text-sm text-white/60">
          Saved to your cart. <Link href="/demos/barraid/cart" className="font-bold text-[#ff8a3d] underline">View cart</Link>
        </p>
      )}
    </div>
  );
}
