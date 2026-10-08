import Link from "next/link";
import "../familyvisa.css";
import PreviewNav from "../PreviewNav";

export const metadata = { title: "Amer Center Near Me — Dubai Amer Centres | FamilyVisaUAE", description: "Find GDRFA-licensed Amer centres in Dubai and continue to directions or Amer-at-home support." };

export default function Page() {
  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>Dubai Amer centres</span></div><PreviewNav/><section className="fv-section"><p className="eyebrow">NEAR YOU IN DUBAI</p><h1>Find an Amer Center near you</h1><p className="lead">The reference service lists GDRFA-licensed Amer centres across Dubai and helps visitors choose a nearby centre. This dedicated route is preserved separately from the Amer-at-home service.</p><div className="journey"><div><b>01</b><span>Search or choose the Dubai area most convenient for you</span></div><div><b>02</b><span>Use the centre's map listing for current directions and opening information</span></div><div><b>03</b><span>Amer centres handle GDRFA residence, renewal, cancellation, entry-permit, status-change and sponsorship transactions</span></div></div><div className="fv-cta" style={{marginTop:40}}><Link className="primary" href="/demos/familyvisauae/amer-services-home">Use Amer-at-home support</Link><a className="secondary" href="https://www.google.com/maps/search/Amer+Center+Dubai" target="_blank" rel="noreferrer">Find Amer centres on Maps</a></div><p style={{marginTop:24}}>FamilyVisaUAE is a private third-party professional-services provider and is not a government authority.</p></section></main>;
}
