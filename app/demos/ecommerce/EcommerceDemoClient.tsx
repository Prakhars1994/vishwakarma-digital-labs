"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  cat: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  tone: string;
  rating: number;
  reviews: number;
  stock: number;
  badge?: string;
  sizes?: string[];
};

type CartLine = { id: number; qty: number; size?: string };

const products: Product[] = [
  { id: 1, name: "Sunset Runner", cat: "Sneakers", price: 3499, oldPrice: 4299, emoji: "👟", tone: "from-orange-300 to-rose-400", rating: 4.8, reviews: 184, stock: 12, badge: "BESTSELLER", sizes: ["7","8","9","10"] },
  { id: 2, name: "Cloud Hoodie", cat: "Apparel", price: 2299, emoji: "🧥", tone: "from-sky-200 to-violet-300", rating: 4.7, reviews: 96, stock: 8, badge: "NEW", sizes: ["S","M","L","XL"] },
  { id: 3, name: "Studio Tote", cat: "Accessories", price: 1799, emoji: "👜", tone: "from-lime-200 to-emerald-300", rating: 4.9, reviews: 61, stock: 21 },
  { id: 4, name: "Pulse Watch", cat: "Accessories", price: 4999, oldPrice: 5499, emoji: "⌚", tone: "from-amber-200 to-orange-300", rating: 4.6, reviews: 72, stock: 6, badge: "LIMITED" },
  { id: 5, name: "Metro Knit", cat: "Apparel", price: 1999, emoji: "👕", tone: "from-fuchsia-200 to-pink-300", rating: 4.5, reviews: 43, stock: 16, sizes: ["S","M","L"] },
  { id: 6, name: "Night Sprint", cat: "Sneakers", price: 3799, emoji: "👟", tone: "from-slate-300 to-indigo-300", rating: 4.8, reviews: 128, stock: 10, sizes: ["7","8","9","10","11"] },
];

export default function EcommerceDemoClient() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [drawer, setDrawer] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const categoryMatch = category === "All" || p.cat === category;
      const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0);
  const subtotal = cart.reduce((sum, line) => {
    const product = products.find((p) => p.id === line.id);
    return sum + (product?.price || 0) * line.qty;
  }, 0);
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal - discount >= 3999 || subtotal === 0 ? 0 : 149;
  const total = subtotal - discount + shipping;

  function addToCart(product: Product, size?: string) {
    setCart((current) => {
      const existing = current.find((line) => line.id === product.id && line.size === size);
      if (existing) return current.map((line) => line === existing ? { ...line, qty: line.qty + 1 } : line);
      return [...current, { id: product.id, qty: 1, size }];
    });
    setDrawer(true);
  }

  function changeQty(index: number, delta: number) {
    setCart((current) => current.flatMap((line, i) => {
      if (i !== index) return [line];
      const qty = line.qty + delta;
      return qty <= 0 ? [] : [{ ...line, qty }];
    }));
  }

  function openProduct(product: Product) {
    setSelected(product);
    setSelectedSize(product.sizes?.[0] || "");
  }

  return (
    <main className="min-h-screen bg-[#fff4fb] text-black" style={{fontFamily: "Arial Black, Arial, Helvetica, sans-serif"}}>
      <div className="bg-black px-4 py-2 text-center text-xs font-black uppercase tracking-[.16em] text-white">Free shipping above ₹3,999 • 7-day easy returns • Demo storefront</div>
      <header className="sticky top-0 z-40 border-b border-black bg-[#fff4fb]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <div className="flex items-center gap-5"><Link href="/#work" className="text-sm font-bold text-black/50">← Portfolio</Link><div className="text-2xl font-black tracking-tight">LUMA<span className="text-[#ff2d8d]">CART</span></div></div>
          <div className="hidden flex-1 justify-center md:flex"><div className="flex w-full max-w-md items-center rounded-full border border-black bg-white px-4"><span>⌕</span><input value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full bg-transparent px-3 py-2.5 text-sm outline-none" placeholder="Search products…" /></div></div>
          <div className="flex items-center gap-2"><button className="rounded-full border border-black bg-white px-4 py-2.5 text-sm font-black">♡ {wishlist.length}</button><button onClick={() => setDrawer(true)} className="rounded-full bg-black px-5 py-2.5 text-sm font-black text-white">Bag ({cartCount})</button></div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
        <div><div className="inline-flex rounded-full bg-[#c8ff00] px-4 py-2 text-xs font-black uppercase tracking-[.2em]">Production-style commerce demo</div><h1 className="mt-6 max-w-3xl text-6xl font-black leading-[.92] tracking-[-.05em] sm:text-7xl">A storefront that feels like a <span className="text-[#ff2d8d]">brand.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-black/60">Search, filters, product detail, variants, wishlist, persistent cart state, coupon logic and checkout simulation — designed to resemble a real D2C buying flow.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#shop" className="rounded-full bg-[#ff2d8d] px-7 py-4 font-black text-white shadow-[8px_8px_0_#000] shadow-orange-200">Shop the drop ↓</a><button onClick={()=>{setSelected(products[0]);setSelectedSize("8")}} className="rounded-full border border-black/15 bg-white px-7 py-4 font-black">Preview product</button></div></div>
        <div className="relative min-h-[480px] overflow-hidden rounded-[2.5rem] bg-black p-6 text-white shadow-[14px_14px_0_#000]"><div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#c8ff00] opacity-40 blur-3xl"/><div className="relative flex h-full flex-col justify-between"><div className="flex justify-between text-xs font-black uppercase tracking-[.25em]"><span>Limited 08/26</span><span>Worldwide</span></div><div className="my-14 text-center text-[9rem]">👟</div><div><div className="flex items-end justify-between"><div><div className="text-4xl font-black">Sunset Runner</div><div className="mt-2 text-sm text-white/50">★ 4.8 • 184 verified reviews</div></div><button onClick={()=>openProduct(products[0])} className="rounded-full bg-[#c8ff00] px-5 py-3 font-black text-black">Quick view</button></div></div></div></div>
      </section>

      <section id="shop" className="mx-auto max-w-7xl px-5 py-16"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="text-xs font-black uppercase tracking-[.25em] text-[#ff2d8d]">Shop demo</div><h2 className="mt-2 text-4xl font-black">Trending now</h2></div><div className="flex flex-wrap gap-2">{["All","Sneakers","Apparel","Accessories"].map(c => <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-2 text-sm font-bold ${category===c ? "bg-black text-white" : "border border-black bg-white"}`}>{c}</button>)}</div></div>
        <div className="mt-6 md:hidden"><input value={search} onChange={(e)=>setSearch(e.target.value)} className="w-full rounded-full border border-black bg-white px-5 py-3 outline-none" placeholder="Search products…" /></div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(p => <article key={p.id} className="group rounded-none border border-black bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#000]"><div className="relative"><button onClick={()=>setWishlist(w=>w.includes(p.id)?w.filter(id=>id!==p.id):[...w,p.id])} className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-lg shadow">{wishlist.includes(p.id)?"♥":"♡"}</button>{p.badge&&<span className="absolute left-4 top-4 z-10 rounded-full bg-black px-3 py-1.5 text-[10px] font-black tracking-wider text-white">{p.badge}</span>}<button onClick={()=>openProduct(p)} className={`grid h-64 w-full place-items-center rounded-[1.5rem] bg-gradient-to-br ${p.tone} text-7xl transition group-hover:scale-[1.01]`}>{p.emoji}</button></div><div className="px-2 pb-2 pt-5"><div className="flex items-start justify-between gap-4"><div><div className="text-xs font-bold uppercase tracking-widest text-black/40">{p.cat}</div><button onClick={()=>openProduct(p)} className="mt-1 text-left text-xl font-black hover:text-[#ff2d8d]">{p.name}</button><div className="mt-1 text-xs font-bold text-black/45">★ {p.rating} ({p.reviews}) • {p.stock} left</div></div><div className="text-right"><div className="font-black">₹{p.price.toLocaleString("en-IN")}</div>{p.oldPrice&&<div className="text-xs text-black/35 line-through">₹{p.oldPrice.toLocaleString("en-IN")}</div>}</div></div><button onClick={()=>openProduct(p)} className="mt-4 w-full rounded-none bg-[#ff2d8d] py-3 text-sm font-black text-white">Choose options →</button></div></article>)}</div>
        {filtered.length===0&&<div className="mt-10 rounded-none border border-dashed border-black/15 bg-white p-12 text-center font-bold text-black/40">No products match your search.</div>}
      </section>

      <section className="bg-[#c8ff00]"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-4"><div className="text-4xl font-black">Built for conversion.</div>{[["01","Fast discovery"],["02","Product storytelling"],["03","Cart + checkout"]].map(([n,t]) => <div key={n} className="rounded-none bg-black p-6 text-white"><div className="text-sm text-white/40">{n}</div><div className="mt-12 text-2xl font-black">{t}</div></div>)}</div></section>

      {selected && <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/55 p-4" onClick={()=>setSelected(null)}><div onClick={(e)=>e.stopPropagation()} className="grid w-full max-w-4xl overflow-hidden rounded-none bg-[#fff4fb] shadow-[14px_14px_0_#000] md:grid-cols-2"><div className={`grid min-h-[380px] place-items-center bg-gradient-to-br ${selected.tone} text-[9rem]`}>{selected.emoji}</div><div className="p-7 sm:p-9"><div className="flex items-start justify-between"><div><div className="text-xs font-black uppercase tracking-[.2em] text-[#ff2d8d]">{selected.cat}</div><h3 className="mt-2 text-4xl font-black">{selected.name}</h3></div><button onClick={()=>setSelected(null)} className="text-3xl">×</button></div><div className="mt-3 text-sm font-bold text-black/50">★ {selected.rating} • {selected.reviews} reviews • {selected.stock} in stock</div><div className="mt-5 flex items-end gap-3"><span className="text-3xl font-black">₹{selected.price.toLocaleString("en-IN")}</span>{selected.oldPrice&&<span className="pb-1 text-black/35 line-through">₹{selected.oldPrice.toLocaleString("en-IN")}</span>}</div><p className="mt-5 leading-7 text-black/55">Premium materials, fast shipping and an optimized mobile shopping experience. This modal demonstrates a real product-detail purchase step.</p>{selected.sizes&&<div className="mt-6"><div className="text-sm font-black">Select size</div><div className="mt-3 flex flex-wrap gap-2">{selected.sizes.map(size=><button key={size} onClick={()=>setSelectedSize(size)} className={`h-11 min-w-11 rounded-none border px-3 font-black ${selectedSize===size?"border-black bg-black text-white":"border-black/15 bg-white"}`}>{size}</button>)}</div></div>}<div className="mt-7 grid grid-cols-[1fr_auto] gap-3"><button onClick={()=>{addToCart(selected,selectedSize||undefined);setSelected(null)}} className="rounded-none bg-[#ff2d8d] py-4 font-black text-white">Add to bag →</button><button onClick={()=>setWishlist(w=>w.includes(selected.id)?w.filter(id=>id!==selected.id):[...w,selected.id])} className="rounded-none border border-black/15 bg-white px-5 text-xl">{wishlist.includes(selected.id)?"♥":"♡"}</button></div><div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-black/45"><div className="rounded-none bg-white p-3">🚚 2–4 day delivery</div><div className="rounded-none bg-white p-3">↩ 7-day returns</div><div className="rounded-none bg-white p-3">🔒 Secure payment</div></div></div></div></div>}

      {drawer && <div className="fixed inset-0 z-50 bg-black/45" onClick={() => setDrawer(false)}><aside onClick={e=>e.stopPropagation()} className="ml-auto flex h-full w-full max-w-md flex-col bg-[#fff4fb] p-6 shadow-[14px_14px_0_#000]"><div className="flex items-center justify-between"><div><h3 className="text-2xl font-black">Your bag</h3><div className="text-xs font-bold text-black/40">{cartCount} item{cartCount!==1?"s":""}</div></div><button onClick={() => setDrawer(false)} className="text-2xl">×</button></div><div className="mt-7 flex-1 space-y-3 overflow-y-auto">{cart.length===0 ? <div className="rounded-none border border-dashed border-black/15 bg-white p-8 text-center text-black/45">Your bag is empty.<br/><button onClick={()=>setDrawer(false)} className="mt-3 font-black text-[#ff2d8d]">Continue shopping</button></div> : cart.map((line,i) => {const p=products.find(x=>x.id===line.id)!; return <div key={`${line.id}-${line.size}-${i}`} className="rounded-none bg-white p-4"><div className="flex items-start justify-between"><div><div className="font-black">{p.emoji} {p.name}</div><div className="mt-1 text-xs font-bold text-black/40">{line.size?`Size ${line.size} • `:""}₹{p.price.toLocaleString("en-IN")} each</div></div><span className="font-black">₹{(p.price*line.qty).toLocaleString("en-IN")}</span></div><div className="mt-3 flex items-center gap-2"><button onClick={()=>changeQty(i,-1)} className="grid h-8 w-8 place-items-center rounded-lg bg-black/5 font-black">−</button><span className="min-w-7 text-center font-black">{line.qty}</span><button onClick={()=>changeQty(i,1)} className="grid h-8 w-8 place-items-center rounded-lg bg-black/5 font-black">+</button></div></div>})}</div>{cart.length>0&&<div className="border-t border-black pt-5"><div className="flex gap-2"><input value={coupon} onChange={(e)=>setCoupon(e.target.value)} placeholder="Coupon: LUMA10" className="min-w-0 flex-1 rounded-none border border-black bg-white px-4 py-3 text-sm outline-none"/><button onClick={()=>setCouponApplied(coupon.trim().toUpperCase()==="LUMA10")} className="rounded-none bg-black px-4 text-sm font-black text-white">Apply</button></div>{couponApplied&&<div className="mt-2 text-xs font-black text-emerald-700">✓ LUMA10 applied — 10% off</div>}<div className="mt-5 space-y-2 text-sm"><div className="flex justify-between"><span className="text-black/50">Subtotal</span><span>₹{subtotal.toLocaleString("en-IN")}</span></div><div className="flex justify-between"><span className="text-black/50">Discount</span><span>-₹{discount.toLocaleString("en-IN")}</span></div><div className="flex justify-between"><span className="text-black/50">Shipping</span><span>{shipping===0?"FREE":`₹${shipping}`}</span></div><div className="flex justify-between border-t border-black pt-3 text-xl font-black"><span>Total</span><span>₹{total.toLocaleString("en-IN")}</span></div></div><button onClick={()=>{setCheckout(true);setDrawer(false)}} className="mt-4 w-full rounded-none bg-black py-4 font-black text-white">Secure checkout →</button></div>}</aside></div>}

      {checkout&&<div className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-black/60 p-4" onClick={()=>setCheckout(false)}><div onClick={(e)=>e.stopPropagation()} className="w-full max-w-2xl rounded-none bg-white p-7 shadow-[14px_14px_0_#000]"><div className="flex justify-between"><div><div className="text-xs font-black uppercase tracking-[.2em] text-[#ff2d8d]">Demo checkout</div><h3 className="mt-1 text-3xl font-black">Complete your order</h3></div><button onClick={()=>setCheckout(false)} className="text-3xl">×</button></div>{orderPlaced?<div className="mt-8 rounded-none bg-emerald-50 p-8 text-center"><div className="text-5xl">✓</div><div className="mt-4 text-2xl font-black text-emerald-800">Order confirmed</div><p className="mt-2 text-emerald-800/60">Demo order LC-{orderId} created. In production this would connect to payment, inventory, email/SMS and fulfilment.</p><button onClick={()=>{setOrderPlaced(false);setCheckout(false);setCart([]);setCouponApplied(false)}} className="mt-5 rounded-none bg-emerald-700 px-5 py-3 font-black text-white">Done</button></div>:<><div className="mt-7 grid gap-3 sm:grid-cols-2"><input className="rounded-none border px-4 py-3" placeholder="Full name"/><input className="rounded-none border px-4 py-3" placeholder="Phone"/><input className="rounded-none border px-4 py-3 sm:col-span-2" placeholder="Delivery address"/><input className="rounded-none border px-4 py-3" placeholder="City"/><input className="rounded-none border px-4 py-3" placeholder="PIN code"/></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{["UPI","Card","Cash on delivery"].map((x,i)=><button key={x} className={`rounded-none border p-4 text-left font-black ${i===0?"border-[#ff2d8d] bg-orange-50":""}`}>{i===0?"●":"○"} {x}</button>)}</div><div className="mt-6 flex items-center justify-between rounded-none bg-[#fff4fb] p-5"><div><div className="text-xs font-bold text-black/40">PAYABLE</div><div className="text-2xl font-black">₹{total.toLocaleString("en-IN")}</div></div><button onClick={()=>{setOrderId(String(Date.now()).slice(-6));setOrderPlaced(true)}} className="rounded-none bg-[#ff2d8d] px-6 py-4 font-black text-white">Place demo order →</button></div></>}</div></div>}
    </main>
  );
}
