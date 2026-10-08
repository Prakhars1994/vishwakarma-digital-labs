import Link from "next/link";
import WhatsAppIconLink from "./WhatsAppIconLink";
import "./familyvisa.css";
import PreviewNav from "./PreviewNav";

export default function InfoPage({ eyebrow, title, text, points }: { eyebrow: string; title: string; text: string; points: string[] }) { const message = encodeURIComponent(`Hi FamilyVisaUAE, I have a question about ${title}.`); return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{text}</p><div className="journey">{points.map((point, index) => <div key={point}><b>0{index + 1}</b><span>{point}</span></div>)}</div><div className="fv-cta" style={{ marginTop: 38 }}><WhatsAppIconLink href={`https://wa.me/9718003627?text=${message}`} label={`Ask about ${title} on WhatsApp`}/><Link className="secondary" href="/demos/familyvisauae/calculators/family">Open calculator</Link></div></section></main>; }

