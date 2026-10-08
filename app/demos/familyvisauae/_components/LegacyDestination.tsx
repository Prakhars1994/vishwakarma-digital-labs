import Link from "next/link";
import "../familyvisa.css";
import PreviewNav from "../PreviewNav";

type Props={title:string;eyebrow?:string;description:string;points?:string[]};
export default function LegacyDestination({title,eyebrow="UAE VISA SERVICES",description,points=[]}:Props){
 return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div><PreviewNav/><section className="fv-section"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lead">{description}</p>{points.length>0&&<div className="journey">{points.map((p,i)=><div key={p}><b>{String(i+1).padStart(2,"0")}</b><span>{p}</span></div>)}</div>}<div className="fv-cta" style={{marginTop:40}}><Link className="primary" href="/demos/familyvisauae/contact">Get route-specific guidance</Link><Link className="secondary" href="/demos/familyvisauae/checklist">Check documents</Link></div><p style={{marginTop:24}}>FamilyVisaUAE is a private third-party professional-services provider. Government requirements and authority fees remain subject to the relevant UAE authority.</p></section></main>;
}
