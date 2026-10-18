import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "../../catalog";
import { categoryBlurbs, categoryBySlug, categorySlugs } from "../../store";
import { PageHero, ProductGrid } from "../../ui";

export function generateStaticParams() {
  return Object.values(categorySlugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = categoryBySlug(slug);
  if (!name) return {};
  return { title: name, description: categoryBlurbs[name], alternates: { canonical: `/demos/barraid/category/${slug}` } };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const name = categoryBySlug(slug);
  if (!name) notFound();
  const list = products.filter((p) => p.category === name);
  return (
    <>
      <PageHero eyebrow="BarRaid collection" title={name} copy={`${categoryBlurbs[name]}. ${list.length} products.`} />
      <section className="mx-auto max-w-7xl px-5 py-12">
        <ProductGrid items={list} />
      </section>
    </>
  );
}
