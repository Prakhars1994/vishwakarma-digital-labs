import Link from "next/link";
import { products } from "./catalog";
import { BASE, categoryBlurbs, categoryHref, featuredProducts, shopCategories } from "./store";
import { Eyebrow, ProductGrid } from "./ui";

const faq = [
  ["Can I order a single piece?", "Products in stock can be added to the cart individually. Products marked 2-3 days ship after that short preparation window."],
  ["Do you handle bulk orders?", "Yes. Use Request a bulk quote to ask for MOQ, quantity pricing and availability for bars, hotels, events and gifting."],
  ["How can I confirm a product before ordering?", "Each product page shows its code and availability. Contact BarRaid on WhatsApp to confirm details before you pay."],
  ["Is online payment live?", "Not yet. Checkout sends your order to BarRaid on WhatsApp, and BarRaid confirms the payment method and delivery charge before the order is final."],
  ["Where do you deliver?", "BarRaid's published policy says it ships within India. Delivery time and charges depend on product, weight and destination."],
];

const categoryImages: Record<string, string> = {
  "Beer Towers": "/barraid/bar-taps.jpg",
  "Liquor Dispensers": "/barraid/bottle-wall.jpg",
  "Beer Glassware": "/barraid/beer-service.jpg",
  "Whiskey Glasses": "/barraid/bar-interior.jpg",
};

export default function BarRaidHome() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "BarRaid barware collection",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        category: p.category,
        sku: p.code,
        image: p.image || undefined,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: p.price || undefined,
          availability: p.availability === "Out Of Stock" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
        },
      },
    })),
  };
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <section className="relative overflow-hidden border-b border-white/10">
        <video autoPlay muted loop playsInline poster="/barraid/bar-taps.jpg" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-35 motion-reduce:hidden">
          <source src="/barraid/nightlife-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0d10_12%,rgba(11,13,16,.7)_60%,rgba(11,13,16,.25))]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-28">
          <Eyebrow>Beer towers · Liquor dispensers · Barware</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[.98] tracking-[-.05em] sm:text-7xl">
            Statement pours for <span className="text-[#ff6a00]">every bar.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Shop BarRaid beer towers, liquor dispensers and glassware with clear photos, codes and prices. For bars, hotels and events, request a bulk quote and our team replies on WhatsApp.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href={`${BASE}/shop`} className="rounded-full bg-[#ff6a00] px-7 py-4 font-black text-white shadow-[0_10px_30px_rgba(255,106,0,.35)] hover:bg-[#ff7d1f]">Shop the collection →</Link>
            <Link href={`${BASE}/quote`} className="rounded-full border border-white/25 px-7 py-4 font-black text-white hover:bg-white/10">Request a bulk quote</Link>
          </div>
          <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 text-sm">
            <div><dt className="text-white/45">Products</dt><dd className="mt-1 text-2xl font-black">{products.length}</dd></div>
            <div><dt className="text-white/45">Ships within</dt><dd className="mt-1 text-2xl font-black">India</dd></div>
            <div><dt className="text-white/45">Bulk & MOQ</dt><dd className="mt-1 text-2xl font-black">On request</dd></div>
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <Eyebrow>Shop by category</Eyebrow>
        <h2 className="mt-2 text-3xl font-black tracking-[-.03em] sm:text-4xl">Choose the serve first.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {shopCategories.map((c) => {
            const count = products.filter((p) => p.category === c).length;
            return (
              <Link key={c} href={categoryHref(c)} className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-[#15181e] p-6 transition hover:border-[#ff6a00]/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={categoryImages[c] ?? "/barraid/bar-interior.jpg"} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-500 group-hover:scale-105 group-hover:opacity-55" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#0b0d10]/60 to-transparent" />
                <div className="relative">
                  <div className="text-xs font-black uppercase tracking-[.18em] text-[#ff8a3d]">{count} product{count === 1 ? "" : "s"}</div>
                  <h3 className="mt-2 text-2xl font-black">{c}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{categoryBlurbs[c]}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101318]">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>In stock now</Eyebrow>
              <h2 className="mt-2 text-3xl font-black tracking-[-.03em] sm:text-4xl">Featured pieces</h2>
            </div>
            <Link href={`${BASE}/shop`} className="font-black text-[#ff8a3d] underline underline-offset-4">View all products →</Link>
          </div>
          <div className="mt-8">
            <ProductGrid items={featuredProducts()} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#15181e] md:grid-cols-2">
          <div className="relative min-h-72">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/barraid/bar-interior.jpg" alt="Premium bar interior" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <Eyebrow>Hospitality & gifting</Eyebrow>
            <h2 className="mt-3 text-3xl font-black tracking-[-.03em] sm:text-4xl">Buying for a venue, event or client gift?</h2>
            <p className="mt-4 leading-7 text-white/65">Send the product codes and quantities. BarRaid replies with MOQ, quantity pricing and delivery options.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`${BASE}/quote`} className="rounded-full bg-[#ff6a00] px-6 py-3 font-black text-white">Request a bulk quote</Link>
              <Link href={`${BASE}/bulk`} className="rounded-full border border-white/20 px-6 py-3 font-black text-white">Trade & bulk info</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-20">
        <Eyebrow>Before you order</Eyebrow>
        <h2 className="mt-2 text-3xl font-black tracking-[-.03em]">Quick answers</h2>
        <div className="mt-8 grid gap-3">
          {faq.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-white/10 bg-[#15181e] p-5 open:border-[#ff6a00]/40">
              <summary className="cursor-pointer list-none font-black">
                <span className="flex items-center justify-between gap-4">{q}<span aria-hidden="true" className="text-[#ff8a3d] transition group-open:rotate-45">+</span></span>
              </summary>
              <p className="mt-3 leading-7 text-white/65">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
