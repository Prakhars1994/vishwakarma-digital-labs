"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const routes = [
  ["Family / Dependent Visa", "Spouse, children or parents", 1103],
  ["Golden Visa", "Long-term UAE residency", 3864],
  ["Property Visa", "Residency through property investment", 6311],
  ["Newborn Visa", "For a baby born in the UAE", 1029],
] as const;

const contactSchema = z.object({
  phone: z.union([
    z.literal(""),
    z.string().trim().regex(/^\+?[0-9][0-9\s-]{6,19}$/, "Enter a valid WhatsApp number, including country code."),
  ]),
});

export default function VisaCalculator({ initialRoute = 0 }: { initialRoute?: number }) {
  const [step, setStep] = useState(initialRoute === 0 ? 1 : 2);
  const [selected, setSelected] = useState(initialRoute);
  const [person, setPerson] = useState("Spouse");
  const [insideUae, setInsideUae] = useState("yes");
  const [income, setIncome] = useState("4000+");
  const [accommodation, setAccommodation] = useState("yes");
  const [sponsorName, setSponsorName] = useState("");
  const [dependentName, setDependentName] = useState("");
  const [phone, setPhone] = useState("");
  const [readyDocuments, setReadyDocuments] = useState<string[]>([]);
  const [copyStatus, setCopyStatus] = useState("");
  const [qualifyingBasis, setQualifyingBasis] = useState("confirmed");
  const { register, trigger, formState: { errors } } = useForm<{ phone: string }>({
    resolver: zodResolver(contactSchema),
    defaultValues: { phone: "" },
    mode: "onBlur",
  });
  useEffect(() => {
    const selectDependent = (event: Event) => {
      const person = (event as CustomEvent<string>).detail;
      setSelected(0);
      setPerson(person);
      setReadyDocuments([]);
      setCopyStatus("");
      setStep(2);
    };
    window.addEventListener("familyvisa:select-dependent", selectDependent);
    return () => window.removeEventListener("familyvisa:select-dependent", selectDependent);
  }, []);
  const route = routes[selected];
  const familyRoute = selected === 0;
  const parent = person === "Parent";
  const incomeMet = !familyRoute || (parent ? income === "10000+" : income === "4000+" || income === "10000+");
  const eligible = familyRoute ? incomeMet && (!parent || accommodation === "yes") : qualifyingBasis === "confirmed";
  const docs = useMemo(
    () => selected === 1 ? ["Applicant passport and recent photo", "Qualifying investment, profession or nomination evidence", "Current UAE visa / entry-status copy"] : selected === 2 ? ["Applicant passport and recent photo", "Property title deed or qualifying ownership evidence", "Current UAE visa / entry-status copy"] : selected === 3 ? ["Newborn passport or birth notification", "Parents' passports and valid UAE residency copies", "Attested birth certificate when issued"] : ["Sponsor passport and Emirates ID", "Dependent passport and recent photo", ...(person === "Spouse" ? ["Attested marriage certificate"] : person === "Child" ? ["Attested birth certificate"] : parent ? ["Parent relationship evidence", "Accommodation evidence"] : ["Relationship evidence"]), ...(insideUae === "yes" ? ["Current UAE visa / entry-status copy"] : ["Travel or entry details"])],
    [insideUae, parent, person, selected],
  );
  const journeySteps = useMemo(() => {
    if (selected === 1) return ["Review your qualifying route evidence", "Prepare supporting documents", "Submit through the applicable official channel", "Complete any requested identity formalities", "Receive a confirmed next-step update"];
    if (selected === 2) return ["Review property ownership evidence", "Confirm the applicable residency pathway", "Prepare owner and property documents", "Submit through the applicable official channel", "Complete the residence and ID steps"];
    if (selected === 3) return ["Confirm newborn timeline and supporting documents", "Prepare parent and newborn records", "Submit the relevant residence request", "Complete identity formalities when required", "Receive confirmation and next steps"];
    return ["Confirm family route and document readiness", insideUae === "yes" ? "Review in-country status-change requirements" : "Review entry-permit and travel timing", "Complete medical requirements where applicable", "Complete Emirates ID and residence formalities", "Receive completion and delivery guidance"];
  }, [insideUae, selected]);
  const readyDocumentCount = docs.filter((doc) => readyDocuments.includes(doc)).length;
  const toggleDocument = (doc: string) => setReadyDocuments((current) => current.includes(doc) ? current.filter((item) => item !== doc) : [...current, doc]);
  const estimateLines = useMemo<Array<[string, number]>>(() => {
    const startingFee = route[2];
    const entryOrStatus = Math.round(startingFee * 0.28);
    const processing = Math.round(startingFee * 0.22);
    const visaAndId = Math.round(startingFee * 0.34);
    return [
      [insideUae === "yes" ? "Status-change handling" : "Entry-permit handling", entryOrStatus],
      ["Application and processing", processing],
      ["Visa, Emirates ID and related steps", visaAndId],
      ["Typical route contingency", startingFee - entryOrStatus - processing - visaAndId],
    ];
  }, [insideUae, route]);
  const caseSummary = `FamilyVisaUAE route summary\nRoute: ${route[0]}\nApplicant: ${person}, ${insideUae === "yes" ? "inside" : "outside"} UAE\n${familyRoute ? `Sponsor income: ${income}` : `Route evidence: ${qualifyingBasis === "confirmed" ? "ready to review" : "not confirmed"}`}\nStarting estimate: AED ${route[2].toLocaleString()}\nStarting documents ready: ${readyDocumentCount}/${docs.length}${sponsorName ? `\n${familyRoute ? "Sponsor" : "Applicant"}: ${sponsorName}` : ""}${dependentName ? `\n${familyRoute ? "Dependent" : "Contact"}: ${dependentName}` : ""}${phone ? `\nPreferred WhatsApp: ${phone}` : ""}`;
  const message = encodeURIComponent(`Hi FamilyVisaUAE, I completed the ${route[0]} check.${sponsorName ? ` ${familyRoute ? "Sponsor" : "Applicant"}: ${sponsorName}.` : ""}${dependentName ? ` ${familyRoute ? "Dependent" : "Contact"}: ${dependentName}.` : ""}${phone ? ` Preferred contact: ${phone}.` : ""} Route details: ${person.toLowerCase()}, ${insideUae === "yes" ? "inside" : "outside"} UAE, ${familyRoute ? `income ${income}, accommodation ${accommodation}` : `route evidence ${qualifyingBasis === "confirmed" ? "ready to review" : "not confirmed"}`}. I have ${readyDocumentCount} of ${docs.length} starting documents ready. Please confirm the checklist and itemized estimate.`);
  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(caseSummary);
      setCopyStatus("Case summary copied.");
    } catch {
      setCopyStatus("Copy is unavailable in this browser. You can still send the summary on WhatsApp.");
    }
  };
  const chooseRoute = (index: number) => {
    setSelected(index);
    setPerson(index === 0 ? "Spouse" : index === 1 ? "Golden Visa applicant" : index === 2 ? "Property owner" : "Newborn");
    setReadyDocuments([]);
    setCopyStatus("");
  };
  const reviewRoute = async () => {
    if (await trigger("phone")) setStep(3);
  };

  return <section className="fv-live-calculator" id="calculator" aria-labelledby="calculator-title">
    <p className="eyebrow">UAE VISA COST CALCULATOR</p>
    <h2 id="calculator-title">Check your route in a few clear steps.</h2>
    <p>Answer the basics first. We then show your route summary and the documents to prepare before our team confirms final eligibility and fees.</p>
    <div className="fv-calculator-progress"><span className={step >= 1 ? "active" : ""}>1 Route</span><span className={step >= 2 ? "active" : ""}>2 Details</span><span className={step >= 3 ? "active" : ""}>3 Review</span></div>
    {step === 1 && <><div className="fv-family-choice-intro"><strong>Who are you bringing to the UAE?</strong><span>Choose a family member to start with the right questions.</span></div><div className="fv-family-member-grid">{[["Spouse","💍","Husband or wife","Marriage-based sponsorship"],["Child","🧸","Son or daughter","Dependent child sponsorship"],["Parent","🤝","Mother or father","Parent sponsorship review"],["Newborn","👶","New baby","UAE newborn residence steps"]].map(([name,icon,detail,hint]) => <button type="button" key={name} onClick={() => chooseFamilyMember(name as "Spouse" | "Child" | "Parent" | "Newborn")}><span className="fv-member-icon" aria-hidden="true">{icon}</span><strong>{name}</strong><span>{detail}</span><small>{hint}</small><b>Check this route →</b></button>)}</div><div className="fv-secondary-routes"><span>Looking for another residency route?</span><button type="button" onClick={() => { chooseRoute(1); setStep(2); }}>Golden Visa</button><button type="button" onClick={() => { chooseRoute(2); setStep(2); }}>Property Visa</button></div></>}
    {step === 2 && <><div className="fv-calculator-form">
      <label>{familyRoute ? "Who needs the visa?" : "Applicant profile"}<select value={person} onChange={(e) => setPerson(e.target.value)}>{familyRoute ? <><option>Spouse</option><option>Child</option><option>Parent</option><option>Other family member</option></> : selected === 1 ? <><option>Golden Visa applicant</option><option>Investor</option><option>Specialist professional</option></> : selected === 2 ? <><option>Property owner</option><option>Co-owner</option></> : <option>Newborn</option>}</select></label>
      <label>Are they currently in the UAE?<select value={insideUae} onChange={(e) => setInsideUae(e.target.value)}><option value="yes">Yes</option><option value="no">No</option></select></label>
      {familyRoute ? <label>Sponsor monthly income<select value={income} onChange={(e) => setIncome(e.target.value)}><option value="under-4000">Under AED 4,000</option><option value="4000+">AED 4,000–9,999</option><option value="10000+">AED 10,000+</option></select></label> : <label>Do you have route-qualifying evidence?<select value={qualifyingBasis} onChange={(e) => setQualifyingBasis(e.target.value)}><option value="confirmed">Yes, ready to review</option><option value="not-sure">Not sure yet</option></select></label>}
      {familyRoute && parent && <label>Suitable accommodation?<select value={accommodation} onChange={(e) => setAccommodation(e.target.value)}><option value="yes">Yes</option><option value="no">Not sure / no</option></select></label>}
      <label>{familyRoute ? "Sponsor" : "Applicant"} name <em>(optional)</em><input value={sponsorName} onChange={(e) => setSponsorName(e.target.value)} autoComplete="name" placeholder="Your name" /></label>
      <label>{familyRoute ? "Dependent" : "Contact"} name <em>(optional)</em><input value={dependentName} onChange={(e) => setDependentName(e.target.value)} placeholder={familyRoute ? "Who the application is for" : "Optional contact name"} /></label>
      <label>Preferred WhatsApp number <em>(optional)</em><input {...register("phone", { onChange: (event) => setPhone(event.target.value) })} type="tel" autoComplete="tel" placeholder="+971 …" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "whatsapp-number-error" : undefined} />{errors.phone && <small id="whatsapp-number-error" role="alert">{errors.phone.message}</small>}</label>
    </div><p className="fv-calculator-privacy">These optional details stay in this browser and are included only if you choose to open WhatsApp.</p><div className="fv-calculator-actions"><button className="secondary" type="button" onClick={() => setStep(1)}>Back</button><button className="primary" type="button" onClick={reviewRoute}>Review my route →</button></div></>}
    {step === 3 && <div className="fv-calculator-result">
      <div><span>Selected route</span><strong>{route[0]}</strong><small>{person} · {insideUae === "yes" ? "inside UAE" : "outside UAE"}</small></div>
      <div><span>Initial route signal</span><strong>{eligible ? "Possible match" : "Review needed"}</strong><small>{eligible ? "Your answers meet the starting route signals." : "One or more details need individual review."}</small></div>
      <div><span>Starting government estimate</span><strong>AED {route[2].toLocaleString()}</strong><small>Final official fees vary by route, age, status and authority.</small></div>
      <div className="fv-fee-breakdown"><span>Indicative estimate categories</span>{estimateLines.map(([label, amount]) => <p key={label}><span>{label}</span><b>AED {amount.toLocaleString()}</b></p>)}<small>These are planning categories only, not an official fee quote. The final amount is confirmed against current authority fees and your documents.</small></div>
      <div className="fv-document-summary"><span>Starting document checklist · {readyDocumentCount}/{docs.length} ready</span><ul className="fv-document-checklist">{docs.map((doc) => <li key={doc}><label><input type="checkbox" checked={readyDocuments.includes(doc)} onChange={() => toggleDocument(doc)} /> <span>{doc}</span></label></li>)}</ul><small>Tick the copies you already have. This is only a preparation guide; the final checklist is confirmed for your individual case.</small></div>
      <div className="fv-calculator-journey"><span>Your route, step by step</span><ol>{journeySteps.map((journeyStep, index) => <li key={journeyStep}><b>{String(index + 1).padStart(2, "0")}</b><p>{journeyStep}</p></li>)}</ol><small>This is a planning timeline, not a promise of approval or processing time.</small></div>
      <div className="fv-calculator-actions"><button className="secondary" type="button" onClick={() => setStep(2)}>Edit answers</button><button className="secondary" type="button" onClick={copySummary}>Copy case summary</button><a className="primary" href={`https://wa.me/971566556645?text=${message}`} target="_blank" rel="noreferrer">Confirm exact estimate →</a></div>
      {copyStatus && <p className="fv-copy-status" role="status">{copyStatus}</p>}
    </div>}
  </section>;
}
