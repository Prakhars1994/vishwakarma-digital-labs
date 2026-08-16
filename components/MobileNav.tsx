"use client";

import { useEffect, useId, useRef, useState } from "react";
import { CONTACT } from "@/lib/site";

const links = [
  ["Services", "/#services"],
  ["Work", "/work"],
  ["Estimator", "/#estimator"],
  ["Process", "/#process"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id={menuId}
          className="absolute left-4 right-4 top-[76px] rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-2xl"
        >
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                {label}
              </a>
            ))}
            <a
              href={`${CONTACT.whatsapp}?text=${encodeURIComponent(
                "Hi Prakhar, I want to discuss a project with Vishwakarma Digital Labs.",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-orange-500 px-4 py-3 text-center font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
