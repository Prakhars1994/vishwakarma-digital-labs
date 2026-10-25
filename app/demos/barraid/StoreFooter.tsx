import Link from "next/link";
import { BASE, CONTACT, categoryHref, shopCategories } from "./store";

const help = [
  ["Delivery", "/shipping"],
  ["Refund & returns", "/returns"],
  ["Cancellation", "/cancellation"],
  ["FAQ", "/faq"],
];
const company = [
  ["About BarRaid", "/about"],
  ["Bulk & hospitality", "/bulk"],
  ["Request a quote", "/quote"],
  ["Contact", "/contact"],
  ["Terms", "/terms"],
  ["Privacy", "/privacy"],
];

export default function StoreFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#08090b] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="text-2xl font-black tracking-[-.06em] text-white">Bar<span className="text-[#ff6a00]">Raid</span></div>
          <p className="mt-3 max-w-sm text-sm leading-6">Beer towers, liquor dispensers and statement barware for home bars, pubs, hotels, events and corporate gifting.</p>
          <div className="mt-5 grid gap-1 text-sm">
            <a className="hover:text-white" href="https://wa.me/919868107595">WhatsApp · {CONTACT.whatsapp}</a>
            <a className="hover:text-white" href="tel:+911141617595">Phone · {CONTACT.phone}</a>
            <a className="hover:text-white" href={`mailto:${CONTACT.email}`}>Email · {CONTACT.email}</a>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-black uppercase tracking-[.2em] text-white">Shop</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><Link className="hover:text-white" href={`${BASE}/shop`}>All products</Link></li>
            {shopCategories.map((c) => <li key={c}><Link className="hover:text-white" href={categoryHref(c)}>{c}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-black uppercase tracking-[.2em] text-white">Help</h2>
          <ul className="mt-4 grid gap-2 text-sm">{help.map(([l, h]) => <li key={h}><Link className="hover:text-white" href={BASE + h}>{l}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="text-xs font-black uppercase tracking-[.2em] text-white">Company</h2>
          <ul className="mt-4 grid gap-2 text-sm">{company.map(([l, h]) => <li key={h}><Link className="hover:text-white" href={BASE + h}>{l}</Link></li>)}</ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-5 py-5 text-xs text-white/40">
          <span>© {new Date().getFullYear()} BarRaid · Pacific Plastic Industries, New Delhi</span>
          <span>Lifestyle photography: Unsplash contributors. Product photography: BarRaid catalogue.</span>
        </div>
      </div>
    </footer>
  );
}
