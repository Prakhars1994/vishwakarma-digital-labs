import type { Metadata } from "next";
import Image from "next/image";
import ServiceDirectory from "./ServiceDirectory";
import PreviewNav from "../PreviewNav";
import "../familyvisa.css";
import "./directory.css";

export const metadata: Metadata = {
  title: { absolute: "UAE Visa, PRO & Document Services | FamilyVisaUAE" },
  description: "Explore FamilyVisaUAE support for family residence, employment, Golden Visa, Emirates ID, PRO, government and document services.",
  alternates: { canonical: "/demos/familyvisauae/services" },
};

export default function ServicesPage(){
 return <main className="fv fv-services-directory"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div><PreviewNav/>
  <section className="fv-service-hero" style={{position:"relative",minHeight:"420px",display:"grid",alignItems:"end",overflow:"hidden"}}>
   <Image src="/familyvisauae-consultation-v1.png" alt="FamilyVisaUAE consultant helping with UAE visa and document services" fill priority sizes="100vw" style={{objectFit:"cover",objectPosition:"center 42%"}}/>
   <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(42,6,10,.92),rgba(78,10,16,.7) 52%,rgba(78,10,16,.2))"}}/>
   <div style={{position:"relative",zIndex:1,maxWidth:760,padding:"70px clamp(24px,7vw,110px)",color:"#fff"}}><p className="eyebrow">SERVICE DIRECTORY</p><h1>One clear place for your UAE paperwork.</h1><p className="lead">Find the route that matches your situation—from family residence and employment to Emirates ID, PRO support, property and document services.</p></div>
  </section>
  <section className="fv-section"><div className="section-head"><div><p className="eyebrow">CHOOSE YOUR ROUTE</p><h2>Visa, identity, business and document support.</h2><p className="lead">Start with a service below. Each route explains the preparation, process and next step without forcing you through a generic enquiry first.</p></div></div><ServiceDirectory/></section>
 </main>
}