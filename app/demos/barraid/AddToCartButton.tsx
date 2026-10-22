"use client";

import { useEffect, useState } from "react";
import { cart } from "./cart";

export default function AddToCartButton({ id, disabled = false, compact = false, qty = 1 }: { id: number; disabled?: boolean; compact?: boolean; qty?: number }) {
  const [added, setAdded] = useState(false);
  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 1800);
    return () => clearTimeout(t);
  }, [added]);

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => {
        cart.add(id, qty);
        setAdded(true);
      }}
      aria-live="polite"
      className={
        "flex items-center justify-center rounded-xl bg-[#ff6a00] px-3 text-center font-black text-white shadow-[0_8px_24px_rgba(255,106,0,.3)] transition hover:bg-[#ff7d1f] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none " +
        (compact ? "min-h-11 text-sm" : "min-h-14 px-6 text-base")
      }
    >
      {disabled ? "Unavailable" : added ? "Added ✓" : "Add to cart"}
    </button>
  );
}
