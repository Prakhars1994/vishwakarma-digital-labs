"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const agencyWhatsapp =
  "https://wa.me/918446000784?text=Hi%20Prakhar%2C%20I%20saw%20the%20restaurant%20demo%20and%20want%20a%20similar%20website.";

const menu = {
  "Chef's Picks": [
    { name: "Smoked Paneer Tikka", note: "Charred pepper • mint chutney • pickled onion", price: 425, badge: "Bestseller" },
    { name: "Truffle Galouti", note: "Jackfruit kebab • saffron roomali • onion jam", price: 465, badge: "Chef's pick" },
    { name: "Saffron Kofta", note: "Spinach dumpling • cashew curry • chilli oil", price: 495, badge: "New" },
  ],
  Mains: [
    { name: "Royal Dal Makhani", note: "18-hour black lentils • cultured butter", price: 365, badge: "Signature" },
    { name: "Awadhi Veg Biryani", note: "Basmati • seasonal vegetables • smoked raita", price: 445, badge: "Popular" },
    { name: "Kashmiri Morel Curry", note: "Gucchi • almond gravy • dry ginger", price: 625, badge: "Premium" },
  ],
  "Drinks & Dessert": [
    { name: "Rose & Lychee Fizz", note: "Rose cordial • lychee • citrus • soda", price: 225, badge: "Zero proof" },
    { name: "Saffron Tres Leches", note: "Cardamom sponge • saffron milk • pistachio", price: 315, badge: "Favourite" },
    { name: "Mango Cheesecake", note: "Alphonso mango • cream cheese • biscuit crumb", price: 295, badge: "Seasonal" },
  ],
};

type MenuKey = keyof typeof menu;

type CartItem = { name: string; price: number; qty: number };

export default function RestaurantDemoClient() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>("Chef's Picks");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDone, setBookingDone] = useState(false);
  const [guests, setGuests] = useState("2 guests");

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);

  function addToCart(name: string, price: number) {
    setCart((current) => {
      const existing = current.find((item) => item.name === name);
      if (existing) return current.map((item) => item.name === name ? { ...item, qty: item.qty + 1 } : item);
      return [...current, { name, price, qty: 1 }];
    });
  }

  return (
    <main className="min-h-screen bg-[#fff8ef] text-[#20140f]" style={{fontFamily: "Georgia, Cambria, Times New Roman, serif"}}>
      <header className="sticky top-0 z-50 border-b border-[#3f261a]/10 bg-[#fff8ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#8f2d20] text-lg font-black text-white">S</div>
            <div>
              <div className="font-serif text-lg font-black tracking-tight">Saffron Table</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9a5f45]">Modern Indian Kitchen</div>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#684738] md:flex">
            <a href="#menu" className="hover:text-[#8f2d20]">Menu</a>
            <a href="#story" className="hover:text-[#8f2d20]">Our story</a>
            <a href="#gallery" className="hover:text-[#8f2d20]">Gallery</a>
            <button onClick={() => setBookingOpen(true)} className="rounded-full bg-[#173f35] px-5 py-2.5 text-white hover:bg-[#245c4d]">Reserve table</button>
          </nav>
          <button onClick={() => setBookingOpen(true)} className="rounded-full bg-[#173f35] px-4 py-2 text-sm font-bold text-white md:hidden">Book</button>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#f2b84b]/25 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-16">
          <div className="relative z-10 py-8 lg:py-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8f2d20]/15 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8f2d20] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#d99a2b]" /> Delhi • Seasonal tasting menu
            </div>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              A table full of <span className="italic text-[#8f2d20]">stories, spice</span> & soul.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6c4d3f]">
              Contemporary Indian plates inspired by family recipes, market-fresh ingredients and a little theatre at the table.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setBookingOpen(true)} className="rounded-full bg-[#8f2d20] px-7 py-3.5 font-bold text-white shadow-xl shadow-[#8f2d20]/15 transition hover:-translate-y-0.5">Reserve a table</button>
              <a href="#menu" className="rounded-full border border-[#3f261a]/15 bg-white px-7 py-3.5 font-bold hover:border-[#8f2d20]/30">Explore menu ↓</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[#7d5a48]">
              <span>★ 4.9 dining experience</span><span>⏱ Open 12 PM – 11 PM</span><span>◎ Connaught Place</span>
            </div>
          </div>

          <div className="relative min-h-[540px] overflow-hidden rounded-[2.4rem] bg-[#3c1d14] shadow-2xl shadow-[#5e2a1b]/20">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85"
              alt="Elegant restaurant dining table"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a120d]/80 via-transparent to-black/10" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 rounded-3xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
              <div><div className="text-xs font-black uppercase tracking-[0.22em] text-[#ffd67e]">Tonight&apos;s experience</div><div className="mt-1 font-serif text-2xl font-black">Chef&apos;s seven-course journey</div></div>
              <div className="rounded-2xl bg-white px-4 py-3 text-center text-[#482114]"><div className="text-xs font-bold">from</div><div className="font-black">₹1,895</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#173f35] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div><div className="text-xs font-black uppercase tracking-[0.28em] text-[#f5c45d]">Curated menu</div><h2 className="mt-3 font-serif text-4xl font-black sm:text-5xl">Choose your craving.</h2></div>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(menu) as MenuKey[]).map((key) => (
                <button key={key} onClick={() => setActiveMenu(key)} className={`rounded-full px-4 py-2 text-sm font-bold transition ${activeMenu === key ? "bg-[#f5c45d] text-[#173f35]" : "border border-white/15 bg-white/5 text-white/75 hover:bg-white/10"}`}>{key}</button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {menu[activeMenu].map((item, index) => (
              <article key={item.name} className="group rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]">
                <div className="flex items-start justify-between gap-4"><span className="rounded-full bg-[#f5c45d]/15 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-[#ffd77d]">{item.badge}</span><div className="font-black text-[#f5c45d]">₹{item.price}</div></div>
                <div className="mt-8 text-4xl">{["🔥", "🌿", "✨"][index]}</div>
                <h3 className="mt-4 font-serif text-2xl font-black">{item.name}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-white/60">{item.note}</p>
                <button onClick={() => addToCart(item.name, item.price)} className="mt-6 w-full rounded-xl border border-white/15 px-4 py-3 text-sm font-black transition hover:border-[#f5c45d]/50 hover:bg-[#f5c45d] hover:text-[#173f35]">+ Add to tasting list</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <div className="grid grid-cols-2 gap-3">
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Shared dinner spread" className="h-72 w-full rounded-[2rem] object-cover" />
          <img src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80" alt="Fresh vegetarian dish" className="mt-10 h-72 w-full rounded-[2rem] object-cover" />
        </div>
        <div>
          <div className="text-xs font-black uppercase tracking-[0.28em] text-[#8f2d20]">Our philosophy</div>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight sm:text-5xl">Rooted in memory. Plated for now.</h2>
          <p className="mt-6 text-lg leading-8 text-[#6c4d3f]">We take familiar flavours—charcoal, saffron, mustard, tamarind—and build modern plates around them. The result feels nostalgic and new at the same time.</p>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[['24', 'seasonal plates'], ['8', 'regional stories'], ['1', 'open kitchen']].map(([num,label]) => <div key={label} className="rounded-2xl bg-white p-4 shadow-sm"><div className="font-serif text-3xl font-black text-[#8f2d20]">{num}</div><div className="mt-1 text-xs font-bold text-[#7d5a48]">{label}</div></div>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] bg-[#f0dfc9] p-5 sm:p-8">
          <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
            <div className="md:col-span-2 md:row-span-2"><img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80" alt="Indian cuisine" className="h-full min-h-80 w-full rounded-3xl object-cover" /></div>
            <div><img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80" alt="Colourful plated food" className="h-56 w-full rounded-3xl object-cover md:h-full" /></div>
            <div className="rounded-3xl bg-[#8f2d20] p-6 text-white"><div className="text-4xl">✦</div><div className="mt-10 font-serif text-2xl font-black">Celebrations taste better together.</div></div>
            <div className="rounded-3xl bg-[#f5c45d] p-6 text-[#382016]"><div className="text-xs font-black uppercase tracking-[0.2em]">Private dining</div><div className="mt-3 text-3xl font-black">10–36 guests</div><div className="mt-2 text-sm">Custom menus & intimate events.</div></div>
            <div><img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=700&q=80" alt="Restaurant interior" className="h-56 w-full rounded-3xl object-cover md:h-full" /></div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#3f261a]/10 bg-white py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 lg:flex-row lg:items-center lg:px-8">
          <div><div className="text-xs font-black uppercase tracking-[0.24em] text-[#8f2d20]">Portfolio demo by Vishwakarma Digital Labs</div><h2 className="mt-2 font-serif text-3xl font-black">Want a restaurant website this polished?</h2><p className="mt-2 text-sm text-[#6c4d3f]">Menus, reservations, WhatsApp ordering, maps, admin updates and deployment can be customized.</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/#work" className="rounded-full border border-[#3f261a]/15 px-5 py-3 font-bold">← Back to portfolio</Link><a href={agencyWhatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#8f2d20] px-6 py-3 font-bold text-white">Build something similar →</a></div>
        </div>
      </section>

      {cartCount > 0 && (
        <div className="fixed bottom-5 left-1/2 z-40 flex w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 items-center justify-between gap-4 rounded-2xl bg-[#20140f] px-5 py-4 text-white shadow-2xl">
          <div><div className="text-xs font-bold text-white/50">Tasting list</div><div className="font-black">{cartCount} item{cartCount > 1 ? "s" : ""} • ₹{cartTotal}</div></div>
          <button onClick={() => setCart([])} className="rounded-xl bg-[#f5c45d] px-4 py-2.5 text-sm font-black text-[#20140f]">Preview order</button>
        </div>
      )}

      {bookingOpen && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-[#20140f]/70 p-4 backdrop-blur-sm" onMouseDown={() => setBookingOpen(false)}>
          <div className="w-full max-w-lg rounded-[2rem] bg-[#fff8ef] p-6 shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between"><div><div className="text-xs font-black uppercase tracking-[0.2em] text-[#8f2d20]">Quick reservation</div><h3 className="mt-2 font-serif text-3xl font-black">Your table awaits.</h3></div><button onClick={() => setBookingOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-[#20140f]/5 font-black">×</button></div>
            {bookingDone ? (
              <div className="mt-8 rounded-2xl bg-[#173f35] p-6 text-white"><div className="text-3xl">✓</div><div className="mt-3 text-xl font-black">Reservation request created</div><p className="mt-2 text-sm text-white/70">Demo interaction complete. A real site can connect this to WhatsApp, email or a booking platform.</p></div>
            ) : (
              <div className="mt-7 grid gap-4">
                <label className="text-sm font-bold">Date<input type="date" className="mt-2 w-full rounded-xl border border-[#3f261a]/15 bg-white px-4 py-3 outline-none" /></label>
                <div className="grid grid-cols-2 gap-3"><label className="text-sm font-bold">Time<select className="mt-2 w-full rounded-xl border border-[#3f261a]/15 bg-white px-4 py-3"><option>7:00 PM</option><option>8:00 PM</option><option>9:00 PM</option></select></label><label className="text-sm font-bold">Party size<select value={guests} onChange={(e) => setGuests(e.target.value)} className="mt-2 w-full rounded-xl border border-[#3f261a]/15 bg-white px-4 py-3"><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option></select></label></div>
                <button onClick={() => setBookingDone(true)} className="mt-2 rounded-xl bg-[#8f2d20] px-5 py-4 font-black text-white">Request table for {guests}</button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
