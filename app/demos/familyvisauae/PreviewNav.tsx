"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./floating-contact.css";
import "./call-action.css";
import "./preview-nav-refresh.css";

const groups=[
 {label:"Visas",items:["Family Residence Visa","Golden Visa","Property Investor Visa","Newborn Visa","Domestic Worker Visa"]},
 {label:"Emirates ID",items:["New Emirates ID","Renewal","Lost / Damaged ID","Medical Fitness","Visa Status"]},
 {label:"Business & PRO",items:["PRO Services","Government Processing","Immigration Services","Business Support"]},
 {label:"Documents",items:["Document Attestation","Legal Translation","Power of Attorney","Wills & Testament"]},
 {label:"Help & More",items:["Visa Status","ILOE Insurance Check","Amer Centre Guidance","DLD Trustee Services"]},
];
const languages=[["English","en"],["العربية","ar"],["اردو","ur"],["हिन्दी","hi"]];
const routeFor=(item:string)=>({"Family Residence Visa":"family-residence-visa","Golden Visa":"golden-visa","Property Investor Visa":"property-investor-visa","Newborn Visa":"newborn-visa","Domestic Worker Visa":"domestic-worker-visa","New Emirates ID":"emirates-id","Renewal":"emirates-id-renewal","Lost / Damaged ID":"emirates-id-replacement","Medical Fitness":"medical-fitness","Visa Status":"visa-status","ILOE Insurance Check":"iloe","Amer Centre Guidance":"amer-center","DLD Trustee Services":"dld-trustee-services","PRO Services":"pro-services","Government Processing":"government-processing","Immigration Services":"immigration-services","Business Support":"business-support","Document Attestation":"document-attestation","Legal Translation":"legal-translation","Power of Attorney":"power-of-attorney","Wills & Testament":"wills-testament"}[item] ?? "family-residence-visa");
const groupActions: Record<string,{href:string;label:string}>={"Visas":{href:"/demos/familyvisauae/calculators/family",label:"Open visa calculator"},"Business & PRO":{href:"/demos/familyvisauae/calculators/pro",label:"Estimate PRO support"},"Emirates ID":{href:"/demos/familyvisauae/visa-status",label:"Check your next step"},"Documents":{href:"/demos/familyvisauae/checklist",label:"Open document checker"},"Help & More":{href:"/demos/familyvisauae/contact",label:"Ask for route support"}};
const groupAction=(group:string)=>groupActions[group];

export default function PreviewNav(){
 const [menu,setMenu]=useState<string|null>(null),[mobile,setMobile]=useState(false),[lang,setLang]=useState(false);
 const router=useRouter();
 const pathname=usePathname();
 const code=pathname?.split("/").filter(Boolean).at(-1);
 const selectedLanguage=languages.find(([,languageCode])=>languageCode===code) ?? languages[0];
 const chooseLanguage=(_language:string,languageCode:string)=>{setLang(false);setMobile(false);if(languageCode==="ar"||languageCode==="ur"||languageCode==="hi") router.push(`/demos/familyvisauae/${languageCode}`); if(languageCode==="en") router.push("/demos/familyvisauae");};
 useEffect(()=>{document.documentElement.lang=selectedLanguage[1];document.documentElement.dir=selectedLanguage[1]==="ar"||selectedLanguage[1]==="ur"?"rtl":"ltr";},[selectedLanguage]);
 useEffect(()=>{const close=()=>{setMenu(null);setLang(false)};window.addEventListener("scroll",close);return()=>window.removeEventListener("scroll",close)},[]);
 return <header className="fv-header">
  <Link className="fv-brand" href="/demos/familyvisauae" aria-label="FamilyVisaUAE home"><span className="fv-mark" aria-hidden="true"><i/><i/></span><span className="fv-wordmark"><b>FamilyVisa</b><em>UAE</em></span></Link>
  <nav className="fv-desktop-nav" aria-label="Primary navigation">
   <div className="nav-group fv-service-menu"><button onClick={()=>setMenu(menu==="Services"?null:"Services")} aria-expanded={menu==="Services"}>Services <span>⌄</span></button>
    {menu==="Services"&&<div className="mega-card fv-services-card"><small>Explore our services</small><div className="fv-service-columns">{groups.slice(0,4).map(group=><div key={group.label}><strong>{group.label}</strong>{group.items.slice(0,4).map(item=><Link key={item} href={`/demos/familyvisauae/${routeFor(item)}`} onClick={()=>setMenu(null)}>{item}<b>→</b></Link>)}</div>)}</div><Link className="view-all" href="/demos/familyvisauae/services" onClick={()=>setMenu(null)}>View all services →</Link></div>}</div>
   <Link href="/demos/familyvisauae/calculators">Visa calculators</Link><Link href="/demos/familyvisauae/checklist">Document checker</Link><Link href="/demos/familyvisauae/guides">Guides</Link>
  </nav>
  <div className="fv-actions">
   <div className="lang-wrap"><button className="fv-language" onClick={()=>setLang(!lang)} aria-expanded={lang}>◎ {selectedLanguage[0]} <span>⌄</span></button>{lang&&<div className="lang-menu">{languages.map(([name,code])=><button key={code} onClick={()=>chooseLanguage(name,code)} dir={code==="ar"||code==="ur"?"rtl":"ltr"}>{name}<small>{code.toUpperCase()}</small></button>)}</div>}</div>
   <a className="fv-call" href="tel:+971566556645" aria-label="Call FamilyVisaUAE on +971 56 655 6645"><span aria-hidden="true">☎</span><b>Call</b></a>
   <a className="fv-wa" href="https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20would%20like%20help%20with%20a%20visa." target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.2 22l5.5-1.4A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.7-1 .1-.2.1-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.6-.3Z"/></svg></a>
   <button className="mobile-toggle" onClick={()=>setMobile(!mobile)} aria-label="Toggle navigation" aria-expanded={mobile}><i/><i/><i/></button>
  </div>
  {mobile&&<div className="mobile-menu">{groups.map(g=><details key={g.label}><summary>{g.label}</summary>{g.items.map(x=><Link href={`/demos/familyvisauae/${routeFor(x)}`} onClick={()=>setMobile(false)} key={x}>{x}</Link>)}<Link className="mobile-menu-action" href={groupAction(g.label)?.href ?? "/demos/familyvisauae/guides"} onClick={()=>setMobile(false)}>{groupAction(g.label)?.label ?? `View all ${g.label}`} →</Link></details>)}<Link href="/demos/familyvisauae/calculators" onClick={()=>setMobile(false)}>Calculators</Link><Link href="/demos/familyvisauae/guides" onClick={()=>setMobile(false)}>Guides</Link><div className="mobile-langs">{languages.map(([name,code])=><button type="button" dir={code==="ar"||code==="ur"?"rtl":"ltr"} onClick={()=>chooseLanguage(name,code)} key={code}>{name}</button>)}</div></div>}<a className="fv-wa-float" href="https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20need%20help%20with%20a%20UAE%20visa." target="_blank" rel="noreferrer" aria-label="Chat with FamilyVisaUAE on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.2 22l5.5-1.4A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.7-1 .1-.2.1-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.6-.3Z"/></svg></a>
 </header>
}
