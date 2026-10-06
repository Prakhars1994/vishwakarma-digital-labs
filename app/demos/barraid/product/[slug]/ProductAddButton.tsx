"use client";

import { useState } from "react";

const KEY = "barraid-cart";
type Line = { id: number; qty: number };

export default function ProductAddButton({ id, disabled = false }: { id: number; disabled?: boolean }) {
  const [added, setAdded] = useState(false);
  const add = () => {
    if (disabled) return;
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "[]");
      const cart: Line[] = Array.isArray(raw) ? raw : [];
      const found = cart.find((x) => x.id === id);
      const next = found
        ? cart.map((x) => (x.id === id ? { ...x, qty: Math.min(20, Number(x.qty || 0) + 1) } : x))
        : [...cart, { id, qty: 1 }];
      localStorage.setItem(KEY, JSON.stringify(next));
      setAdded(true);
    } catch {
      localStorage.setItem(KEY, JSON.stringify([{ id, qty: 1 }]));
      setAdded(true);
    }
  };
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={add}
      className="flex min-h-14 items-center justify-center rounded-xl bg-[#ff6a00] px-6 text-center font-black text-white shadow-lg transition hover:bg-[#e85f00] disabled:cursor-not-allowed disabled:bg-black/25"
    >
      {disabled ? "Out of stock" : added ? "Added to cart ✓" : "Add to cart"}
    </button>
  );
}
