"use client";

import { useSyncExternalStore } from "react";
import { products } from "./catalog";
import { MAX_QTY, isOrderable } from "./store";

export type CartLine = { id: number; qty: number };

const KEY = "barraid-cart";
const EVENT = "barraid-cart-change";
const EMPTY: CartLine[] = [];

let cache: { raw: string | null; lines: CartLine[] } = { raw: null, lines: EMPTY };

function sanitize(value: unknown): CartLine[] {
  if (!Array.isArray(value)) return EMPTY;
  const seen = new Set<number>();
  const lines: CartLine[] = [];
  for (const item of value) {
    const id = Number(item?.id);
    const qty = Number(item?.qty);
    const product = products.find((p) => p.id === id);
    if (!product || !isOrderable(product) || !Number.isInteger(qty) || qty < 1 || seen.has(id)) continue;
    seen.add(id);
    lines.push({ id, qty: Math.min(qty, MAX_QTY) });
  }
  return lines;
}

function read(): CartLine[] {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(KEY);
  } catch {
    return EMPTY;
  }
  if (raw === cache.raw) return cache.lines;
  let lines = EMPTY;
  try {
    lines = raw ? sanitize(JSON.parse(raw)) : EMPTY;
  } catch {
    lines = EMPTY;
  }
  cache = { raw, lines };
  return lines;
}

function write(lines: CartLine[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    // Storage can be unavailable (private mode); the cart then lives for this page view only.
    cache = { raw: cache.raw, lines };
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) callback();
  };
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

export function useCart() {
  const lines = useSyncExternalStore(subscribe, read, () => EMPTY);
  const ready = useSyncExternalStore(subscribe, () => true, () => false);
  const count = lines.reduce((n, l) => n + l.qty, 0);
  return { lines, count, ready };
}

export const cart = {
  add(id: number, qty = 1) {
    const lines = read();
    const found = lines.find((l) => l.id === id);
    write(
      found
        ? lines.map((l) => (l.id === id ? { ...l, qty: Math.min(MAX_QTY, l.qty + qty) } : l))
        : [...lines, { id, qty: Math.min(MAX_QTY, qty) }],
    );
  },
  setQty(id: number, qty: number) {
    const lines = read();
    write(qty < 1 ? lines.filter((l) => l.id !== id) : lines.map((l) => (l.id === id ? { ...l, qty: Math.min(MAX_QTY, qty) } : l)));
  },
  remove(id: number) {
    write(read().filter((l) => l.id !== id));
  },
  clear() {
    write([]);
  },
};
