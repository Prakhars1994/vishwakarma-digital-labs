import Link from "next/link";
import { BASE } from "./store";
import { PageHero } from "./ui";

const content={
terms:{title:"Terms & Conditions",intro:"Migrated from BarRaid's published Terms & Conditions.",sections:[["Payment mode","The original BarRaid terms state that Cash on Delivery is not applicable."],["Copyright","BarRaid states that its products, logo, graphics, text and design are protected and may not be copied or published without prior written permission."],["Product availability","BarRaid says customers are informed if a product is unavailable. Availability shown in the catalogue is retained from the original site."],["Cancellation","The original terms state that cancellation requests are handled by customer support and may be subject to processing charges and the return policy. The legacy cancellation page contains conflicting/stale text, so customers should confirm current cancellation terms directly with BarRaid before payment."],["Warranty & after-sales","Warranty, after-sales service and maintenance are subject to the conditions applicable to the product sold."]]},
faq:{title:"Frequently Asked Questions",intro:"Key answers migrated from BarRaid's published FAQ. Where the legacy site conflicts with another policy page, the new site asks customers to confirm the current rule before payment.",sections:[["Where does BarRaid ship?","The published FAQ says BarRaid currently ships within India."],["How long does shipping take?","Shipping time varies by location, product and customization. The FAQ says BarRaid tries to keep shipping time within 21 days."],["How are shipping charges calculated?","The published FAQ says charges vary by shipment, product weight and delivery destination."],["Can I use a different shipping address?","Yes. The original FAQ says shipping and billing addresses may be different."],["How do I contact BarRaid?","For order and product questions, use the Contact page or WhatsApp support."],["What payment methods are live here?","This replacement currently does not collect online payment. BarRaid confirms the available payment method before finalizing the order."]]},
privacy:{title:"Privacy Policy",intro:"Policy migration notice",sections:[["Legacy-content review required","The original BarRaid privacy URL currently contains text referring to another brand and unrelated fashion content. That material has not been republished as BarRaid policy because doing so would be misleading."],["Before production launch","BarRaid should approve a current privacy policy covering the information actually collected by the replacement website, including enquiries and checkout/order-request details."],["Contact","For privacy questions before the approved policy is published, contact BarRaid through the Contact page."]]}
} as const;

export type LegalKind = keyof typeof content;

export default function BarRaidLegal({ kind }: { kind: LegalKind }) {
  const x = content[kind];
  return (
    <>
      <PageHero eyebrow="Customer information" title={x.title} copy={x.intro} />
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="grid gap-4">
          {x.sections.map(([h, t]) => (
            <article key={h} className="rounded-2xl border border-white/10 bg-[#15181e] p-6 sm:p-8">
              <h2 className="text-xl font-black">{h}</h2>
              <p className="mt-3 leading-7 text-white/65">{t}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={`${BASE}/contact`} className="rounded-full bg-[#ff6a00] px-5 py-3 font-black text-white">Contact BarRaid</Link>
          <Link href={`${BASE}/returns`} className="rounded-full border border-white/20 px-5 py-3 font-black text-white">Refund & returns</Link>
          <Link href={`${BASE}/shipping`} className="rounded-full border border-white/20 px-5 py-3 font-black text-white">Delivery</Link>
        </div>
      </section>
    </>
  );
}
