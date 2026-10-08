"use client";

import { useMemo, useState } from "react";
import "../familyvisa.css";
import PreviewNav from "../PreviewNav";

export default function IloePage(){
  const [salary,setSalary]=useState("");
  const n=Math.max(0,Number(salary.replace(/,/g,""))||0);
  const result=useMemo(()=>{
    if(!n)return null;
    const category=n<=16000?"A":"B";
    const cap=category==="A"?10000:20000;
    const monthly=Math.min(n*0.6,cap);
    return {category,cap,monthly,total:monthly*3,premium:category==="A"?5:10};
  },[n]);
  return <main className="fv"><div className="fv-top"><span>FamilyVisaUAE</span><span>ILOE insurance · UAE</span></div><PreviewNav/>
    <section className="fv-section"><p className="eyebrow">ILOE CLAIM CALCULATOR</p><h1>Estimate your ILOE unemployment benefit.</h1><p className="lead">The current reference calculates 60% of your average basic salary over the last six months, subject to the ILOE category cap.</p>
      <div className="fv-question-card"><label>Average monthly basic salary — last 6 months<input inputMode="numeric" value={salary} onChange={e=>setSalary(e.target.value.replace(/[^0-9]/g,""))} placeholder="e.g. 12000" /></label>
      {result?<div className="fv-calculator-result"><div><span>Category</span><strong>{result.category}</strong><small>{result.category==="A"?"Basic salary up to AED 16,000":"Basic salary above AED 16,000"}</small></div><div><span>Estimated monthly benefit</span><strong>AED {result.monthly.toLocaleString()}</strong><small>60% of basic salary, capped at AED {result.cap.toLocaleString()} per month</small></div><div><span>Maximum for a 3-month claim</span><strong>AED {result.total.toLocaleString()}</strong><small>Eligibility and actual approved compensation remain subject to ILOE rules.</small></div></div>:<p>Enter your average basic salary to see the estimate.</p>}</div>
    </section>
    <section className="fv-section" style={{background:"#f7f3ef"}}><p className="eyebrow">CURRENT REFERENCE RULES</p><h2>What the calculator assumes.</h2><div className="service-grid"><article><h3>Category A</h3><p>Basic salary up to AED 16,000. Published premium AED 5/month plus applicable VAT; claim cap AED 10,000/month.</p></article><article><h3>Category B</h3><p>Basic salary above AED 16,000. Published premium AED 10/month plus applicable VAT; claim cap AED 20,000/month.</p></article><article><h3>Claim conditions</h3><p>The reference says a claim generally requires at least 12 consecutive months of subscription, involuntary job loss and filing within 30 days of the last working day.</p></article></div><p className="fv-package-note">ILOE figures may change. Verify current scheme rules before acting. FamilyVisaUAE is a private third-party service provider and is not affiliated with the ILOE scheme.</p></section>
  </main>;
}
