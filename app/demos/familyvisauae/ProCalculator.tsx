"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const services = [
  ["Government processing", "Authority submissions, applications and follow-up"],
  ["Immigration services", "Visa, residency and immigration support"],
  ["Business & PRO support", "Routine company and government liaison services"],
  ["Document services", "Attestation, translation or document preparation"],
] as const;

const proContactSchema = z.object({
  phone: z.union([
    z.literal(""),
    z.string().trim().regex(/^\+?[0-9][0-9\s-]{6,19}$/, "Enter a valid WhatsApp number, including country code."),
  ]),
});

export default function ProCalculator() {
  const [step, setStep] = useState(1);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [customerType, setCustomerType] = useState("Company");
  const [urgency, setUrgency] = useState("Standard");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { register, trigger, formState: { errors } } = useForm<{ phone: string }>({
    resolver: zodResolver(proContactSchema),
    defaultValues: { phone: "" },
    mode: "onBlur",
  });
  const service = services[serviceIndex];
  const checklist = useMemo(() => [customerType === "Company" ? "Trade licence and company details" : "Passport and Emirates ID copy", "Authorised signatory or applicant details", "Service-specific reference or current application copy", ...(urgency === "Urgent" ? ["Deadline or appointment information"] : [])], [customerType, urgency]);
  const message = encodeURIComponent(`Hi FamilyVisaUAE, I need a PRO Services estimate. Service: ${service[0]}. Customer type: ${customerType}. Priority: ${urgency}.${name ? ` Name: ${name}.` : ""}${phone ? ` Preferred contact: ${phone}.` : ""} Please confirm the document checklist, authority charges and professional support fee.`);
  const reviewRequest = async () => {
    if (await trigger("phone")) setStep(3);
  };
  return <section className="fv-live-calculator" id="calculator" aria-labelledby="pro-calculator-title"><p className="eyebrow">PRO SERVICES ESTIMATE</p><h2 id="pro-calculator-title">Describe your government-facing request.</h2><p>Choose the support you need. We prepare a practical starting checklist, then confirm the applicable authority charges and professional support before work starts.</p><div className="fv-calculator-progress"><span className={step >= 1 ? "active" : ""}>1 Service</span><span className={step >= 2 ? "active" : ""}>2 Details</span><span className={step >= 3 ? "active" : ""}>3 Review</span></div>{step === 1 && <><div className="fv-calculator-options">{services.map(([title, description], index) => <button type="button" key={title} onClick={() => setServiceIndex(index)} className={serviceIndex === index ? "is-selected" : ""} aria-pressed={serviceIndex === index}><strong>{title}</strong><span>{description}</span><b>Request a clear quote</b></button>)}</div><button className="primary" type="button" onClick={() => setStep(2)}>Continue to details →</button></>}{step === 2 && <><div className="fv-calculator-form"><label>Who is requesting support?<select value={customerType} onChange={(event) => setCustomerType(event.target.value)}><option>Company</option><option>Individual</option></select></label><label>Priority<select value={urgency} onChange={(event) => setUrgency(event.target.value)}><option>Standard</option><option>Urgent</option></select></label><label>Name <em>(optional)</em><input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" placeholder="Your name" /></label><label>Preferred WhatsApp number <em>(optional)</em><input {...register("phone", { onChange: (event) => setPhone(event.target.value) })} type="tel" autoComplete="tel" placeholder="+971 …" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "pro-whatsapp-number-error" : undefined} />{errors.phone && <small id="pro-whatsapp-number-error" role="alert">{errors.phone.message}</small>}</label></div><p className="fv-calculator-privacy">Optional details stay in this browser and are included only if you choose to open WhatsApp.</p><div className="fv-calculator-actions"><button className="secondary" type="button" onClick={() => setStep(1)}>Back</button><button className="primary" type="button" onClick={reviewRequest}>Review my request →</button></div></>}{step === 3 && <div className="fv-calculator-result"><div><span>Selected service</span><strong>{service[0]}</strong><small>{service[1]}</small></div><div><span>Customer type</span><strong>{customerType}</strong><small>{urgency} priority</small></div><div><span>Fee approach</span><strong>Quoted separately</strong><small>Authority fees and professional support are disclosed before confirmation.</small></div><div className="fv-document-summary"><span>Starting document checklist</span><ul>{checklist.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="fv-calculator-actions"><button className="secondary" type="button" onClick={() => setStep(2)}>Edit request</button><a className="primary" href={`https://wa.me/971566556645?text=${message}`} target="_blank" rel="noreferrer">Request my PRO estimate →</a></div></div>}</section>;
}
