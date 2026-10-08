"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../familyvisa.css";
import "./contact.css";
import PreviewNav from "../PreviewNav";
import WhatsAppIconLink from "../WhatsAppIconLink";

const officeHours = [[9, 19], [9, 19], [9, 19], [9, 19], [9, 19], null, [9, 19]] as const;
const enquirySchema = z.object({
  name: z.string().trim().max(80, "Keep your name under 80 characters.").optional(),
  topic: z.string().min(1, "Choose the service you need help with."),
  message: z.string().trim().min(8, "Please add a short question so our team can help.").max(1000, "Keep your question under 1,000 characters."),
});
const dayNumbers: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
const hourLabel = (hour: number) => `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? "PM" : "AM"}`;
const getDubaiOfficeStatus = () => {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Dubai", weekday: "short", hour: "2-digit", hour12: false }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const day = dayNumbers[values.weekday];
  const hour = Number(values.hour) % 24;
  const today = officeHours[day];
  if (today && hour >= today[0] && hour < today[1]) return { open: true, text: `Open now · until ${hourLabel(today[1])}` };
  for (let offset = 0; offset < 7; offset += 1) {
    const nextDay = (day + offset) % 7;
    const nextHours = officeHours[nextDay];
    if (nextHours && (offset > 0 || hour < nextHours[0])) return { open: false, text: `Closed · opens ${offset === 0 ? "today" : offset === 1 ? "tomorrow" : "soon"} at ${hourLabel(nextHours[0])}` };
  }
  return { open: false, text: "Closed" };
};

export default function ContactClient() {
  const [notice, setNotice] = useState("");
  const [officeStatus, setOfficeStatus] = useState({ open: false, text: "Checking Dubai office hoursâ€¦" });
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof enquirySchema>>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", topic: "Family / Dependent Visa", message: "" },
    mode: "onBlur",
  });
  useEffect(() => {
    const update = () => setOfficeStatus(getDubaiOfficeStatus());
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, []);
  const send = ({ name, topic, message }: z.infer<typeof enquirySchema>) => {
    const text = encodeURIComponent(`Hi FamilyVisaUAE, I need help with ${topic}.${name ? ` My name is ${name}.` : ""}${message ? ` ${message}` : ""}`);
    window.open(`https://wa.me/9718003627?text=${text}`, "_blank", "noopener,noreferrer");
    setNotice("WhatsApp has opened with your enquiry. Send the message there to reach the team.");
  };
  return <main className="fv fv-contact-page"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">CONTACT</p><h1>Speak with the visa support team.</h1><p className="lead">Choose WhatsApp for a route-specific answer, call during office hours, or visit the Dubai office.</p><div className="fv-contact-grid"><article><span>WHATSAPP</span><strong>800 DOCS (3627)</strong><WhatsAppIconLink href="https://wa.me/9718003627?text=Hi%20FamilyVisaUAE%2C%20I%20need%20help%20with%20a%20UAE%20visa." label="Chat with FamilyVisaUAE on WhatsApp"/></article><article><span>CALL OR EMAIL</span><a href="tel:+9718003627"><strong>800 DOCS (3627)</strong></a><a href="mailto:info@familyvisa.ae">info@familyvisa.ae</a></article><article><span>BUSINESS</span><strong>800 DOCS LLC SOC</strong><p>Dubai DET Commercial Licence No. 1237998<br />Private third-party documentation & PRO services provider</p></article><article><span>DUBAI OFFICE</span><strong>Office 709</strong><p>Business Village B Block<br />Next to Clock Tower, Port Saeed, Deira, Dubai, UAE</p></article></div><div className="fv-contact-layout"><form className="fv-contact-form" onSubmit={handleSubmit(send)} noValidate><h2>Send your question on WhatsApp</h2><label>Name <em>(optional)</em><input {...register("name")} autoComplete="name" placeholder="Your name" />{errors.name && <small role="alert">{errors.name.message}</small>}</label><label>What do you need help with?<select {...register("topic")} aria-invalid={Boolean(errors.topic)}><option>Family / Dependent Visa</option><option>Employment Visa / Work Permit</option><option>Golden Visa</option><option>Property Visa</option><option>Business Setup / PRO Services</option><option>Emirates ID / Medical Fitness</option><option>Documents / Attestation / Translation</option><option>Visa Status / Cancellation</option></select>{errors.topic && <small role="alert">{errors.topic.message}</small>}</label><label>Your question <textarea {...register("message")} aria-invalid={Boolean(errors.message)} placeholder="Tell us the route or document question" />{errors.message && <small role="alert">{errors.message.message}</small>}</label><button className="primary fv-whatsapp-submit" type="submit" aria-label="Open WhatsApp enquiry" title="Open WhatsApp enquiry"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2.2 22l5.5-1.4A9.8 9.8 0 1 0 12 2Zm0 17.7c-1.5 0-3-.4-4.2-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A7.8 7.8 0 1 1 12 19.7Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.7-1 .1-.2.1-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.6-.3Z"/></svg></button>{notice && <p role="status">{notice}</p>}</form><aside className="fv-contact-note"><strong>Independent private service provider</strong><span>FamilyVisa.ae is operated by 800 DOCS LLC SOC (Commercial Licence No. 1237998). It is not a UAE government authority. Applications are assisted through relevant official channels with customer consent; government fees and professional service charges are disclosed separately.</span></aside></div></section></main>;
}


