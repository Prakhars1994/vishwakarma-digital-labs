import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../familyvisa.css";
import PreviewNav from "../../PreviewNav";
import WhatsAppIconLink from "../../WhatsAppIconLink";
import { guideArticles } from "../guide-data";

export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(guideArticles).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideArticles[slug];
  if (!guide) notFound();
  return { title: { absolute: `${guide.title} | FamilyVisaUAE` }, description: guide.intro, alternates: { canonical: `/demos/familyvisauae/guides/${slug}` }, openGraph: { title: guide.title, description: guide.intro } };
}

export default async function GuideArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guideArticles[slug];
  if (!guide) notFound();
  const message = encodeURIComponent(`Hi FamilyVisaUAE, I read the guide â€œ${guide.title}â€ and need help with my case.`);
  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa guides</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">{guide.category.toUpperCase()} GUIDE</p><h1>{guide.title}</h1><p className="lead">{guide.intro}</p><div className="journey">{guide.points.map((point, index) => <div key={point}><b>{String(index + 1).padStart(2, "0")}</b><span>{point}</span></div>)}</div><div className="fv-cta" style={{ marginTop: 40 }}><WhatsAppIconLink href={`https://wa.me/9718003627?text=${message}`} label={`Ask about ${guide.title} on WhatsApp`} /><Link className="secondary" href="/demos/familyvisauae/guides">View all guides</Link></div></section></main>;
}

