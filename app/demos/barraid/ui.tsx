import Link from "next/link";
import type { BarRaidProduct } from "./catalog";
import AddToCartButton from "./AddToCartButton";
import { BASE, inr, isOrderable, productHref, savings } from "./store";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={"text-xs font-black uppercase tracking-[.22em] text-[#ff7a1a] " + className}>{children}</div>;
}

// Products sit on a bright studio panel so they stay clearly visible on the dark storefront.
export function ProductImage({ product, className = "", sizes = "h-64" }: { product: BarRaidProduct; className?: string; sizes?: string }) {
  return (
    <div className={"relative grid place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_30%,#ffffff_0%,#f3f4f6_55%,#dfe3e8_100%)] " + sizes + " " + className}>
      {product.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-contain p-4 transition duration-500 motion-safe:group-hover:scale-105" />
      ) : (
        <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_50%_30%,#2a2f38,#14171c)] p-6 text-center">
          <div>
            <div className="text-2xl font-black tracking-[-.06em] text-white">Bar<span className="text-[#ff6a00]">Raid</span></div>
            <div className="mt-2 text-[10px] font-black uppercase tracking-[.2em] text-white/50">Photo coming soon</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Availability({ value }: { value: string }) {
  const tone =
    value === "Out Of Stock"
      ? "bg-white/10 text-white/60"
      : value === "In Stock"
        ? "bg-emerald-400/15 text-emerald-300"
        : "bg-amber-400/15 text-amber-200";
  const label = value === "2-3 Days" ? "Ships in 2-3 days" : value;
  return <span className={"inline-flex rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-wider " + tone}>{label}</span>;
}

export function Price({ product, size = "text-xl" }: { product: BarRaidProduct; size?: string }) {
  if (!product.price) return <b className={size + " text-white"}>Price on request</b>;
  const save = savings(product);
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <b className={size + " text-white"}>{inr(product.price)}</b>
      {product.oldPrice && save > 0 && <span className="text-sm text-white/40 line-through">{inr(product.oldPrice)}</span>}
      {save > 0 && <span className="text-xs font-black text-[#ff8a3d]">{Math.round((save / product.oldPrice!) * 100)}% off</span>}
    </div>
  );
}

export function ProductCard({ product }: { product: BarRaidProduct }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#15181e] transition duration-300 hover:-translate-y-1 hover:border-[#ff6a00]/70 hover:shadow-[0_0_0_1px_rgba(255,106,0,.35),0_18px_50px_rgba(255,106,0,.18)]">
      <Link href={productHref(product)} className="block" aria-label={product.name}>
        <ProductImage product={product} sizes="h-64 sm:h-72" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-black uppercase tracking-[.18em] text-[#ff7a1a]">{product.category}</span>
          <Availability value={product.availability} />
        </div>
        <Link href={productHref(product)} className="mt-2 line-clamp-2 text-base font-black leading-snug text-white hover:text-[#ffb27a]">
          {product.name}
        </Link>
        <div className="mt-1 text-xs text-white/40">Code {product.code}</div>
        <div className="mt-auto pt-4">
          <Price product={product} />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <AddToCartButton id={product.id} disabled={!isOrderable(product)} compact />
            <Link
              href={`${BASE}/quote?product=${product.id}`}
              className="flex min-h-11 items-center justify-center rounded-xl border border-white/15 px-3 text-center text-sm font-black text-white transition hover:border-[#ff6a00] hover:text-[#ffb27a]"
            >
              Bulk quote
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProductGrid({ items }: { items: BarRaidProduct[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0b0d10]">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0d10_15%,rgba(11,13,16,.75)_55%,rgba(11,13,16,.35))]" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-.04em] text-white sm:text-6xl">{title}</h1>
        {copy && <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{copy}</p>}
      </div>
    </section>
  );
}
