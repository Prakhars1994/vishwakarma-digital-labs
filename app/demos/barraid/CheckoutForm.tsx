"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "./cart";
import { products } from "./catalog";
import { BASE, WHATSAPP_NUMBER, inr } from "./store";
import { inputClass, labelClass } from "./formStyles";
import { checkoutSchema, type CheckoutInput } from "./schemas";

const fields = [
  { key: "name", label: "Full name", auto: "name" },
  { key: "phone", label: "Phone (WhatsApp)", auto: "tel", numeric: true },
  { key: "address", label: "Delivery address", auto: "street-address", wide: true },
  { key: "city", label: "City", auto: "address-level2" },
  { key: "pin", label: "PIN code", auto: "postal-code", numeric: true, max: 6 },
] as const;

export default function CheckoutForm() {
  const { lines, ready } = useCart();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutInput>({ resolver: zodResolver(checkoutSchema), defaultValues: { name: "", phone: "", address: "", city: "", pin: "" } });

  const rows = lines.map((l) => ({ l, p: products.find((p) => p.id === l.id)! })).filter((r) => r.p);
  const total = rows.reduce((n, r) => n + r.p.price * r.l.qty, 0);

  if (!ready) return <div className="py-20 text-white/50">Loading your order…</div>;
  if (!rows.length)
    return (
      <div className="py-20 text-center">
        <p className="text-white/60">Your cart is empty.</p>
        <Link href={`${BASE}/shop`} className="mt-4 inline-block font-black text-[#ff8a3d] underline">Shop products</Link>
      </div>
    );

  const onValid = (v: CheckoutInput) => {
    const message = [
      "Hello BarRaid, I want to place an order.",
      ...rows.map((r) => `${r.p.name} (${r.p.code}) x ${r.l.qty} = ${inr(r.p.price * r.l.qty)}`),
      `Subtotal: ${inr(total)} (shipping to be confirmed)`,
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      `Address: ${v.address}, ${v.city} - ${v.pin}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
      <form onSubmit={handleSubmit(onValid)} noValidate className="rounded-2xl border border-white/10 bg-[#15181e] p-6 sm:p-8">
        <h2 className="text-2xl font-black">Delivery details</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.key} className={labelClass + ("wide" in f ? " sm:col-span-2" : "")}>
              {f.label}
              <input
                autoComplete={f.auto}
                inputMode={"numeric" in f ? "numeric" : undefined}
                maxLength={"max" in f ? f.max : undefined}
                aria-invalid={!!errors[f.key]}
                className={inputClass}
                {...register(f.key)}
              />
              {errors[f.key] && <span role="alert" className="text-xs font-bold text-[#ff8a3d]">{errors[f.key]?.message}</span>}
            </label>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-white/10 bg-[#0b0d10] p-5 text-sm leading-6 text-white/60">
          <b className="text-white">Payment & fulfilment</b>
          <br />
          BarRaid confirms the payment method, shipping charge and delivery estimate on WhatsApp before the order is finalized. No card or UPI details are collected on this website.
        </div>
        <button type="submit" disabled={isSubmitting} className="mt-6 min-h-14 w-full rounded-full bg-[#ff6a00] px-5 font-black text-white shadow-[0_10px_30px_rgba(255,106,0,.3)] hover:bg-[#ff7d1f] disabled:opacity-60">
          Send order to BarRaid on WhatsApp
        </button>
        {sent && <p className="mt-3 text-sm text-white/65" role="status">Your order details are ready in WhatsApp. Your cart stays saved until BarRaid confirms the order.</p>}
      </form>

      <aside className="h-fit rounded-2xl border border-white/10 bg-[#15181e] p-6 lg:sticky lg:top-40">
        <h2 className="text-xl font-black">Your order</h2>
        <ul className="mt-4 grid gap-3 text-sm">
          {rows.map((r) => (
            <li key={r.p.id} className="flex justify-between gap-3">
              <span className="text-white/75">{r.p.name} × {r.l.qty}</span>
              <b className="shrink-0">{inr(r.p.price * r.l.qty)}</b>
            </li>
          ))}
        </ul>
        <div className="mt-5 border-t border-white/10 pt-5">
          <div className="text-xs font-black uppercase tracking-wider text-white/45">Subtotal</div>
          <div className="text-3xl font-black">{inr(total)}</div>
        </div>
      </aside>
    </div>
  );
}
