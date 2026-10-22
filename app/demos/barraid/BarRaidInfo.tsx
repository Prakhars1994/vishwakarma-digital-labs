import Link from "next/link";
import { BASE } from "./store";
import { PageHero } from "./ui";

const data={
about:{eyebrow:"About BarRaid",title:"More than 40 years around the bar.",copy:"BarRaid describes itself as a well-established company of more than 40 years, selling distinctive home and professional bar accessories and novelty items for domestic and international marketplaces. Its range serves home bars, public bars, pubs, shopping malls, hotels, liquor shops and corporate gifting.",points:["40+ years stated experience","Home & professional bar accessories","Hospitality and corporate gifting"],image:"/barraid/bar-interior.jpg"},
contact:{eyebrow:"Talk to BarRaid",title:"Questions before you order?",copy:"Contact BarRaid for product questions, quantity enquiries and order support. Pacific Plastic Industries is listed at A-267, Second Floor, Okhla Industrial Area Phase 1, New Delhi 110020.",points:["WhatsApp · +91 98681 07595","Phone · +91 11 41617595","Email · info@barraid.com"],image:"/barraid/bottle-wall.jpg"},
shipping:{eyebrow:"Delivery",title:"Delivery across India.",copy:"BarRaid's published FAQ says it currently ships within India. Shipping time varies by location, product and customization; the company says it tries to keep shipping time within 21 days. Shipping charges vary by shipment, product weight and destination.",points:["India shipping stated","Timing varies by product & location","Charges vary by weight & destination"],image:"/barraid/beer-service.jpg"},
returns:{eyebrow:"Refund & Return",title:"Original BarRaid return terms.",copy:"BarRaid's published Refund & Return page says damaged or wrongly shipped item exchange requests should be submitted within 3 days of delivery. Returned items must be in original condition. Refunds or exchanges are processed after return and the published policy states shipping/handling charges are deducted.",points:["3-day damaged/wrong-item request","Original condition required","Shipping/handling deductions stated"],image:"/barraid/bar-taps.jpg"},
cancellation:{eyebrow:"Cancellation",title:"Published cancellation guidance.",copy:"BarRaid’s cancellation terms are preserved from the original site. For an order-specific cancellation request, contact BarRaid directly so the request can be assessed against the published terms and current order status.",points:["Use the published cancellation terms","Contact BarRaid for order-specific status","No invented cancellation promise"],image:"/barraid/beer-service.jpg"},
features:{eyebrow:"Features & service",title:"How BarRaid serves buyers.",copy:"The original site’s Features/Service information is represented here without inventing capabilities: browse the product catalogue, review product availability and details, and contact BarRaid directly for product, quantity and order enquiries.",points:["Browse source-backed products","Check availability and details","Direct product and quantity enquiries"],image:"/barraid/bottle-wall.jpg"},
bulk:{eyebrow:"Trade & bulk",title:"Build a bar setup at quantity.",copy:"Restaurants, clubs, hotels, event teams and gifting buyers can ask BarRaid for MOQ, availability, quantity pricing and available product options through WhatsApp.",points:["MOQ and availability","Quantity pricing","Hospitality and event enquiries"],image:"/barraid/bottle-wall.jpg"}
} as const;

export type InfoKey = keyof typeof data;

export default function BarRaidInfo({ kind }: { kind: InfoKey }) {
  const x = data[kind];
  return (
    <>
      <PageHero eyebrow={x.eyebrow} title={x.title} copy={x.copy} image={x.image} />
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-4 md:grid-cols-3">
          {x.points.map((p, i) => (
            <div key={p} className="rounded-2xl border border-white/10 bg-[#15181e] p-7">
              <span className="text-xs font-black text-[#ff7a1a]">0{i + 1}</span>
              <h2 className="mt-10 text-xl font-black">{p}</h2>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href={`${BASE}/shop`} className="rounded-full bg-[#ff6a00] px-6 py-3 font-black text-white">Shop the collection</Link>
          <Link href={`${BASE}/quote`} className="rounded-full border border-white/20 px-6 py-3 font-black text-white">Request a quote</Link>
        </div>
      </section>
    </>
  );
}
