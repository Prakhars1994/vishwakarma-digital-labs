"use client";

import { useState } from "react";

const whatsapp =
  "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20am%20interested%20in%20your%20website%2C%20mobile%20app%20or%20AI%20development%20services.";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen((value) => !value)}
        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-[76px] rounded-2xl border border-white/10 bg-slate-950 p-4 shadow-2xl">
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            {[
              ["Services", "#services"],
              ["Work", "#work"],
              ["Estimator", "#estimator"],
              ["Pricing", "/pricing"],
              ["Case Study", "/case-studies/currentpulse-ai"],
              ["Process", "#process"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-xl bg-orange-500 px-4 py-3 text-center font-bold text-white"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
