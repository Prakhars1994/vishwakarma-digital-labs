import type { Metadata } from "next";
import { products } from "../catalog";
import { PageHero } from "../ui";
import ShopClient from "../ShopClient";

export const metadata: Metadata = {
  title: "Shop all products",
  description: "Browse every BarRaid beer tower, liquor dispenser and glass with codes, availability and prices.",
  alternates: { canonical: "/demos/barraid/shop" },
};

export default async function ShopPage({ searchParams }: { searchParams: Promise<{ q?: string; cat?: string }> }) {
  const { q = "", cat = "All" } = await searchParams;
  return (
    <>
      <PageHero eyebrow="BarRaid collection" title="Shop all products" copy={`${products.length} products across beer towers, liquor dispensers, glassware and whiskey glasses. Filter by category or search by code.`} />
      <ShopClient products={products} initialQ={q} initialCat={cat} />
    </>
  );
}
