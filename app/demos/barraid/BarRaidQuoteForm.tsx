"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WHATSAPP_NUMBER } from "./store";
import { inputClass, labelClass } from "./formStyles";
import { quoteSchema, type QuoteInput } from "./schemas";

type Option = { id: number; name: string; code: string };

export default function BarRaidQuoteForm({ options, initialProductId }: { options: Option[]; initialProductId: string }) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { name: "", company: "", phone: "", email: "", product: initialProductId || "general", quantity: "", city: "", message: "" },
  });

  const onValid = (v: QuoteInput) => {
    const item = options.find((o) => String(o.id) === v.product);
    const message = [
      "Hello BarRaid, I would like a bulk / trade quote.",
      `Product: ${item ? `${item.name} (${item.code})` : "General enquiry"}`,
      `Quantity: ${v.quantity || "not specified"}`,
      `Name: ${v.name}${v.company ? ` · ${v.company}` : ""}`,
      `Phone: ${v.phone}`,
      v.email ? `Email: ${v.email}` : "",
      `City: ${v.city}`,
      v.message ? `Notes: ${v.message}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const err = (k: keyof QuoteInput) => errors[k] && <span role="alert" className="text-xs font-bold text-[#ff8a3d]">{errors[k]?.message}</span>;

  return (
    <form onSubmit={handleSubmit(onValid)} noValidate className="grid gap-4 rounded-2xl border border-white/10 bg-[#15181e] p-6 sm:grid-cols-2 sm:p-8">
      <label className={labelClass}>Full name *<input className={inputClass} autoComplete="name" {...register("name")} />{err("name")}</label>
      <label className={labelClass}>Business / venue<input className={inputClass} autoComplete="organization" {...register("company")} /></label>
      <label className={labelClass}>Phone (WhatsApp) *<input className={inputClass} inputMode="tel" autoComplete="tel" {...register("phone")} />{err("phone")}</label>
      <label className={labelClass}>Email<input className={inputClass} type="email" autoComplete="email" {...register("email")} />{err("email")}</label>
      <label className={labelClass + " sm:col-span-2"}>
        Product
        <select className={inputClass + " [&>option]:bg-[#0b0d10]"} {...register("product")}>
          <option value="general">General enquiry / not sure yet</option>
          {options.map((o) => (
            <option key={o.id} value={o.id}>{o.name} ({o.code})</option>
          ))}
        </select>
      </label>
      <label className={labelClass}>Quantity needed<input className={inputClass} placeholder="e.g. 20 units" {...register("quantity")} /></label>
      <label className={labelClass}>City *<input className={inputClass} autoComplete="address-level2" {...register("city")} />{err("city")}</label>
      <label className={labelClass + " sm:col-span-2"}>Notes<textarea rows={4} className={inputClass} placeholder="Event date, venue type, customisation or delivery location" {...register("message")} /></label>
      <div className="sm:col-span-2">
        <button type="submit" disabled={isSubmitting} className="min-h-14 w-full rounded-full bg-[#ff6a00] px-6 font-black text-white hover:bg-[#ff7d1f] disabled:opacity-60 sm:w-auto">Send quote request on WhatsApp</button>
        {sent && <p role="status" className="mt-3 text-sm text-white/65">Your request is ready in WhatsApp. BarRaid replies with MOQ, pricing and availability.</p>}
      </div>
    </form>
  );
}
