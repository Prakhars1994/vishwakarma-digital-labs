"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../familyvisa.css";
import "./contact.css";
import PreviewNav from "../PreviewNav";

const officeHours = [null, [9, 18], [9, 18], [9, 18], [9, 18], [9, 18], [9, 18]] as const;
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
  const [officeStatus, setOfficeStatus] = useState({ open: false, text: "Checking Dubai office hours…" });
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
    window.open(`https://wa.me/971566556645?text=${text}`, "_blank", "noopener,noreferrer");
    setNotice("WhatsApp has opened with your enquiry. Send the message there to reach the team.");
  };
  return <main className="fv fv-contact-page"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">CONTACT</p><h1>Speak with the visa support team.</h1><p className="lead">Choose WhatsApp for a route-specific answer, call during office hours, or visit the Dubai office.</p><div className="fv-contact-grid"><article><span>WHATSAPP</span><strong>+971 56 655 6645</strong><a className="primary" href="https://wa.me/971566556645?text=Hi%20FamilyVisaUAE%2C%20I%20need%20help%20with%20a%20UAE%20visa." target="_blank" rel="noreferrer">Chat on WhatsApp →</a></article><article><span>CALL OR EMAIL</span><a href="tel:+971566556645"><strong>+971 56 655 6645</strong></a><a href="mailto:info@familyvisauae.com">info@familyvisauae.com</a></article><article><span>OFFICE HOURS</span><strong>Monday–Saturday, 9 AM–6 PM</strong><p>Sunday closed<br />Dubai time</p><b className={officeStatus.open ? "fv-open-status" : "fv-open-status is-closed"}>{officeStatus.text}</b></article><article><span>DUBAI OFFICE</span><strong>Office M08-27, M1 Floor</strong><p>Crystal Tower, Millennium Central<br />Al Asayel St, Business Bay, Dubai</p><a href="https://maps.app.goo.gl/LNRyUy4djwMDFsQ46" target="_blank" rel="noreferrer">Get directions →</a></article></div><div className="fv-contact-layout"><form className="fv-contact-form" onSubmit={handleSubmit(send)} noValidate><h2>Send your question on WhatsApp</h2><label>Name <em>(optional)</em><input {...register("name")} autoComplete="name" placeholder="Your name" />{errors.name && <small role="alert">{errors.name.message}</small>}</label><label>What do you need help with?<select {...register("topic")} aria-invalid={Boolean(errors.topic)}><option>Family / Dependent Visa</option><option>Golden Visa</option><option>Property Visa</option><option>Emirates ID</option><option>Documents or attestation</option><option>Visa status support</option></select>{errors.topic && <small role="alert">{errors.topic.message}</small>}</label><label>Your question <textarea {...register("message")} aria-invalid={Boolean(errors.message)} placeholder="Tell us the route or document question" />{errors.message && <small role="alert">{errors.message.message}</small>}</label><button className="primary" type="submit">Open WhatsApp enquiry →</button>{notice && <p role="status">{notice}</p>}</form><aside className="fv-contact-note"><strong>Independent private consultancy</strong><span>FamilyVisaUAE is operated by Brightlink Management Consultancy LLC, a DET-licensed third-party professional-services provider (Licence No. 1053387). With customer authorisation, we assist with documentation and submissions through the relevant official channels. Government fees are paid to the relevant authorities; professional support is quoted separately before confirmation. Content last reviewed: 01 September 2026.</span></aside></div></section></main>;
}
