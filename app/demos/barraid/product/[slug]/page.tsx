import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legacySlugToId, productBySlug, products } from "../../catalog";
import BuyBox from "../../BuyBox";
import { BASE, categoryHref, inr, isOrderable, savings } from "../../store";
import { Availability, Eyebrow, Price, ProductGrid, ProductImage } from "../../ui";

export function generateStaticParams() {
  return [...products.map((p) => ({ slug: p.slug })), ...Object.keys(legacySlugToId).map((slug) => ({ slug }))];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return {};
  const description = p.description.slice(0, 155);
  return {
    title: p.name,
    description,
    alternates: { canonical: `${BASE}/product/${p.slug}` },
    openGraph: { title: p.name, description, images: p.image ? [p.image] : undefined },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();
  const related = products.filter((x) => x.id !== p.id && x.category === p.category && isOrderable(x)).slice(0, 4);
  const save = savings(p);
  const allImages = [p.image, ...(p.gallery ?? [])].filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-white/45">
        <Link href={BASE} className="hover:text-white">Home</Link> <span className="px-1">/</span>
        <Link href={`${BASE}/shop`} className="hover:text-white">Shop</Link> <span className="px-1">/</span>
        <Link href={categoryHref(p.category)} className="hover:text-white">{p.category}</Link>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="relative rounded-3xl border border-white/10">
            <ProductImage product={p} sizes="h-[24rem] sm:h-[34rem] rounded-3xl" />
            {p.capacity && <span className="absolute left-5 top-5 rounded-full bg-[#0b0d10]/85 px-4 py-2 text-[10px] font-black uppercase tracking-[.15em] text-white">{p.capacity}</span>}
          </div>
          {allImages.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-2">
              {allImages.map((img, i) => (
                <div key={img} className="grid aspect-square place-items-center overflow-hidden rounded-xl border border-white/10 bg-white p-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={`${p.name}, photo ${i + 1}`} loading="lazy" className="h-full w-full object-contain" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <Eyebrow>{p.category}</Eyebrow>
          <h1 className="mt-3 text-3xl font-black leading-tight tracking-[-.03em] sm:text-4xl">{p.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/55">
            <span>Code · {p.code}</span>
            {p.capacity && <><span aria-hidden="true">•</span><span>{p.capacity}</span></>}
            <Availability value={p.availability} />
          </div>
          <div className="mt-6"><Price product={p} size="text-4xl tracking-[-.04em]" /></div>
          {save > 0 && <p className="mt-1 text-sm text-[#7fd49a]">You save {inr(save)} against the listed price</p>}
          <p className="mt-6 text-base leading-7 text-white/65">{p.description}</p>

          <div className="mt-8">
            <BuyBox product={p} bulkHref={`${BASE}/quote?product=${p.id}`} />
          </div>

          <dl className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#15181e] px-5 text-sm">
            <div className="flex justify-between gap-4 py-3"><dt className="text-white/50">Category</dt><dd className="font-bold">{p.category}</dd></div>
            <div className="flex justify-between gap-4 py-3"><dt className="text-white/50">Product code</dt><dd className="font-bold">{p.code}</dd></div>
            {p.capacity && <div className="flex justify-between gap-4 py-3"><dt className="text-white/50">Capacity</dt><dd className="font-bold">{p.capacity}</dd></div>}
            <div className="flex justify-between gap-4 py-3"><dt className="text-white/50">Availability</dt><dd className="font-bold">{p.availability}</dd></div>
          </dl>
          <div className="mt-4 grid gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-[#15181e] p-4"><b>Delivery</b><p className="mt-1 text-xs leading-5 text-white/55">Shipping charge and delivery estimate are confirmed by BarRaid before the order is final.</p></div>
            <div className="rounded-xl border border-white/10 bg-[#15181e] p-4"><b>Payment</b><p className="mt-1 text-xs leading-5 text-white/55">The payment method is confirmed by BarRaid on WhatsApp before the order is finalized.</p></div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <Eyebrow>More in {p.category}</Eyebrow>
          <h2 className="mt-2 text-2xl font-black">You may also like</h2>
          <div className="mt-6"><ProductGrid items={related} /></div>
        </section>
      )}
    </div>
  );
}
