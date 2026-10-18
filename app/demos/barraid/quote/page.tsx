import type { Metadata } from "next";
import { products } from "../catalog";
import BarRaidQuoteForm from "../BarRaidQuoteForm";
import { PageHero } from "../ui";

export const metadata: Metadata = {
  title: "Bulk quote",
  description: "Request a bulk or trade quote from BarRaid for bars, hotels, events and corporate gifting.",
  alternates: { canonical: "/demos/barraid/quote" },
};

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product = "" } = await searchParams;
  const options = products.map((p) => ({ id: p.id, name: p.name, code: p.code }));
  const initial = options.some((o) => String(o.id) === product) ? product : "";
  return (
    <>
      <PageHero eyebrow="Trade & bulk" title="Request a bulk quote" copy="Tell us the product, quantity and delivery city. BarRaid replies on WhatsApp with MOQ, pricing and availability." />
      <div className="mx-auto max-w-4xl px-5 py-12">
        <BarRaidQuoteForm options={options} initialProductId={initial} />
      </div>
    </>
  );
}
