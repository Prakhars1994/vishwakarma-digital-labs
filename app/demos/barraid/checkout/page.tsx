import type { Metadata } from "next";
import Link from "next/link";
import CheckoutForm from "../CheckoutForm";
import { PageHero } from "../ui";
import { BASE } from "../store";

export const metadata: Metadata = { title: "Checkout", robots: { index: false, follow: true } };

export default function CheckoutPage() {
  return (
    <>
      <PageHero eyebrow="Order details" title="Checkout" copy="Share delivery details, then send the order to BarRaid on WhatsApp to confirm payment and shipping." />
      <div className="mx-auto max-w-7xl px-5 py-12">
        <Link href={`${BASE}/cart`} className="text-sm font-black text-white/60 hover:text-white">← Back to cart</Link>
        <div className="mt-6"><CheckoutForm /></div>
      </div>
    </>
  );
}
