"use client";
import { useEffect, useState } from "react";

const groups=[
 {label:"Visas",items:["Family Residence Visa","Golden Visa","Property Investor Visa","Newborn Visa","Domestic Worker Visa"]},
 {label:"Emirates ID",items:["New Emirates ID","Renewal","Lost / Damaged ID","Medical Fitness","Visa Status"]},
 {label:"Business & PRO",items:["PRO Services","Government Processing","Immigration Services","Business Support"]},
 {label:"Documents",items:["Document Attestation","Legal Translation","Power of Attorney","Wills & Testament"]},
 {label:"Property",items:["Property Investor Visa","Property Registration","Property Revaluation","Related Property Services"]},
];
const languages=[["English","en"],["العربية","ar"],["Русский","ru"],["Deutsch","de"],["Español","es"],["Français","fr"],["Türkçe","tr"],["中文","zh"],["हिन्दी","hi"],["اردو","ur"]];

export default function PreviewNav(){
 const [menu,setMenu]=useState<string|null>(null),[mobile,setMobile]=useState(false),[lang,setLang]=useState(false);
 useEffect(()=>{const close=()=>{setMenu(null);setLang(false)};window.addEventListener("scroll",close);return()=>window.removeEventListener("scroll",close)},[]);
 return <header className="fv-header">
  <a className="fv-brand" href="#top" aria-label="FamilyVisaUAE home"><span className="fv-mark">FV</span><span>FamilyVisa<span>UAE</span></span></a>
  <nav className="fv-desktop-nav" aria-label="Primary navigation">
   {groups.map(g=><div className="nav-group" key={g.label}><button onClick={()=>setMenu(menu===g.label?null:g.label)} aria-expanded={menu===g.label}>{g.label}<span>⌄</span></button>
    {menu===g.label&&<div className="mega-card"><small>{g.label}</small>{g.items.map(x=><a key={x} href="#services" onClick={()=>setMenu(null)}>{x}<b>→</b></a>)}<a className="view-all" href="#structure">View all {g.label} →</a></div>}</div>)}
   <a href="#calculators">Calculators</a><a href="#structure">Guides</a><a href="#about">About</a><a href="#contact">Contact</a>
  </nav>
  <div className="fv-actions">
   <div className="lang-wrap"><button className="fv-language" onClick={()=>setLang(!lang)} aria-expanded={lang}>◎ English <span>⌄</span></button>{lang&&<div className="lang-menu">{languages.map(([name,code])=><button key={code} onClick={()=>setLang(false)} dir={code==="ar"||code==="ur"?"rtl":"ltr"}>{name}<small>{code.toUpperCase()}</small></button>)}</div>}</div>
   <a className="fv-wa" href="#contact" aria-label="WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.2 22l5.5-1.4A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.7-1 .1-.2.1-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.6-.3Z"/></svg></a>
   <button className="mobile-toggle" onClick={()=>setMobile(!mobile)} aria-label="Toggle navigation" aria-expanded={mobile}><i/><i/><i/></button>
  </div>
  {mobile&&<div className="mobile-menu">{groups.map(g=><details key={g.label}><summary>{g.label}</summary>{g.items.map(x=><a href="#services" onClick={()=>setMobile(false)} key={x}>{x}</a>)}</details>)}<a href="#calculators" onClick={()=>setMobile(false)}>Calculators</a><a href="#structure" onClick={()=>setMobile(false)}>Guides</a><a href="#about" onClick={()=>setMobile(false)}>About</a><a href="#contact" onClick={()=>setMobile(false)}>Contact</a><div className="mobile-langs">{languages.map(([x,c])=><span dir={c==="ar"||c==="ur"?"rtl":"ltr"} key={c}>{x}</span>)}</div></div>}
 </header>
}