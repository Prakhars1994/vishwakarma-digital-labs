import type { Metadata } from "next";
import DocumentChecker from "./DocumentChecker";
import "../familyvisa.css";
import "../calculator.css";
import PreviewNav from "../PreviewNav";

export const metadata: Metadata = { title: { absolute: "UAE Visa Document Checklist & Specifications | FamilyVisaUAE" }, description: "Prepare passport scans, visa photographs, relationship certificates and route documents for a UAE residence application.", alternates: { canonical: "/demos/familyvisauae/checklist" } };

const specs=[
 ["Passport copy","Use a clear colour scan or flat photograph. Keep all four corners visible, avoid glare and cropping, and make sure the machine-readable lines and passport number are sharp. Check that sufficient passport validity remains for the intended application."],
 ["Visa photograph","Use a recent passport-style photograph on a plain light background with the full face clearly visible. Avoid shadows, tinted lenses and heavy image processing."],
 ["Marriage or birth certificate","Use the correct relationship certificate for the dependant. Depending on where it was issued and how it will be used, attestation and/or certified Arabic translation may be required."],
 ["Sponsor records","Keep the sponsor passport, residence record, Emirates ID, salary/employment evidence and accommodation information ready for a family route review."],
 ["Digital file quality","Send complete readable files rather than screenshots of cropped previews. Keep originals available in case an authority or service channel requests them."]
] as const;

export default function ChecklistPage(){return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Document checklist & specifications</span></div><PreviewNav/>
 <section className="fv-section"><p className="eyebrow">DOCUMENT CHECKER</p><h1>Prepare the file before you submit it.</h1><p className="lead">The reference site places strong emphasis on document quality. This migrated page combines its preparation guidance with the interactive family-route checklist already built into the new site.</p><DocumentChecker/></section>
 <section className="fv-section" style={{background:"#f7f3ef"}}><p className="eyebrow">FILE SPECIFICATIONS</p><h2>Make every document easy to verify.</h2><div className="service-grid">{specs.map(([title,detail],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
 <section className="fv-approval"><p className="eyebrow">BEFORE SUBMISSION</p><h2>Do a final name, date and image-quality check.</h2><p>Requirements vary by route and authority. Use this as preparation guidance and have the exact case checked before paying fees or sending original documents.</p></section>
 </main>}