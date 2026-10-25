"use client";

import Link from "next/link";
import { cart, useCart } from "./cart";
import { products } from "./catalog";
import { BASE, MAX_QTY, inr, savings } from "./store";
import { Availability, ProductImage } from "./ui";

export default function CartView() {
  const { lines, count, ready } = useCart();
  const rows = lines.map((l) => ({ line: l, p: products.find((p) => p.id === l.id)! })).filter((r) => r.p);
  const subtotal = rows.reduce((n, r) => n + r.p.price * r.line.qty, 0);
  const saved = rows.reduce((n, r) => n + savings(r.p) * r.line.qty, 0);

  if (!ready) return <div className="mx-auto max-w-7xl px-5 py-20 text-white/50">Loading your cart…</div>;

  if (!rows.length)
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-4xl font-black tracking-[-.04em]">Your cart is empty</h1>
        <p className="mt-3 text-white/60">Browse beer towers, dispensers and barware, then add your favourites here.</p>
        <Link href={`${BASE}/shop`} className="mt-7 inline-block rounded-full bg-[#ff6a00] px-7 py-3 font-black text-white">Shop the collection</Link>
      </div>
    );

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="text-4xl font-black tracking-[-.04em] sm:text-5xl">Your cart</h1>
      <p className="mt-2 text-white/55">{count} item{count === 1 ? "" : "s"}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <ul className="grid gap-4">
          {rows.map(({ line, p }) => (
            <li key={p.id} className="grid items-center gap-5 rounded-2xl border border-white/10 bg-[#15181e] p-4 sm:grid-cols-[9rem_1fr_auto] sm:p-5">
              <Link href={`${BASE}/product/${p.slug}`} className="block">
                <ProductImage product={p} sizes="h-36" />
              </Link>
              <div className="flex flex-col justify-center">
                <span className="text-[10px] font-black uppercase tracking-[.18em] text-[#ff7a1a]">{p.category}</span>
                <Link href={`${BASE}/product/${p.slug}`} className="mt-1 text-lg font-black leading-snug hover:text-[#ffb27a]">{p.name}</Link>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-white/50">
                  <span>Code {p.code}</span>
                  <Availability value={p.availability} />
                </div>
                <div className="mt-3 text-white/80">{inr(p.price)} each</div>
              </div>
              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <b className="text-lg">{inr(p.price * line.qty)}</b>
                <div className="flex items-center rounded-full border border-white/15 bg-[#0b0d10] p-1">
                  <button type="button" aria-label={`Decrease ${p.name} quantity`} onClick={() => cart.setQty(p.id, line.qty - 1)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10">−</button>
                  <span className="min-w-9 text-center font-black" aria-live="polite">{line.qty}</span>
                  <button type="button" aria-label={`Increase ${p.name} quantity`} disabled={line.qty >= MAX_QTY} onClick={() => cart.setQty(p.id, line.qty + 1)} className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10 disabled:opacity-30">+</button>
                </div>
                <button type="button" onClick={() => cart.remove(p.id)} className="text-xs font-black text-[#ff8a3d] underline underline-offset-4">Remove</button>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-2xl border border-white/10 bg-[#15181e] p-6 lg:sticky lg:top-40">
          <h2 className="text-xl font-black">Order summary</h2>
          <dl className="mt-5 grid gap-3 text-sm">
            <div className="flex justify-between"><dt className="text-white/55">Subtotal</dt><dd className="font-bold">{inr(subtotal)}</dd></div>
            {saved > 0 && <div className="flex justify-between text-[#7fd49a]"><dt>You save</dt><dd className="font-bold">−{inr(saved)}</dd></div>}
            <div className="flex justify-between gap-4"><dt className="text-white/55">Shipping</dt><dd className="text-right font-bold">Confirmed by BarRaid</dd></div>
          </dl>
          <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-5">
            <span className="font-black">Estimated total</span>
            <b className="text-3xl tracking-[-.04em]">{inr(subtotal)}</b>
          </div>
          <p className="mt-4 rounded-xl bg-white/5 p-4 text-xs leading-5 text-white/55">
            Shipping charge, delivery estimate and payment method are confirmed by BarRaid before the order is finalized.
          </p>
          <Link href={`${BASE}/checkout`} className="mt-5 flex min-h-14 items-center justify-center rounded-full bg-[#ff6a00] font-black text-white shadow-[0_10px_30px_rgba(255,106,0,.3)] hover:bg-[#ff7d1f]">
            Continue to checkout →
          </Link>
          <button type="button" onClick={() => cart.clear()} className="mt-3 w-full text-center text-xs font-black text-white/45 hover:text-white">Clear cart</button>
        </aside>
      </div>
    </div>
  );
}
