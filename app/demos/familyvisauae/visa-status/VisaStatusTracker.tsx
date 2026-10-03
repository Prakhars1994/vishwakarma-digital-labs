"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../familyvisa.css";
import "./status.css";
import "./status-premium.css";
import PreviewNav from "../PreviewNav";

const statusSchema = z.object({
  reference: z.string().trim().min(4, "Enter at least four characters from your application reference.").max(48, "Keep the reference under 48 characters.").regex(/^[A-Za-z0-9/_-]+$/, "Use only letters, numbers, hyphens, underscores or slashes."),
  route: z.string().min(1),
  stage: z.string().min(1),
});

export default function VisaStatusTracker() {
  const [notice, setNotice] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<z.infer<typeof statusSchema>>({
    resolver: zodResolver(statusSchema),
    defaultValues: { reference: "", route: "Family / Dependent Visa", stage: "Submitted / awaiting update" },
    mode: "onBlur",
  });
  const submit = ({ reference, route, stage }: z.infer<typeof statusSchema>) => {
    const message = encodeURIComponent(`Hi FamilyVisaUAE, I need help understanding my application status. Route: ${route}. Current stage: ${stage}. Reference: ${reference.trim()}. Please advise the next practical step and the relevant official channel.`);
    window.open(`https://wa.me/971566556645?text=${message}`, "_blank", "noopener,noreferrer");
    setNotice("Your secure status-support request has opened in WhatsApp. Please send the message there to reach the team.");
  };
  return <main className="fv fv-status-page"><div className="fv-top"><span>FamilyVisaUAE</span><span>UAE visa & document services</span></div><PreviewNav /><section className="fv-section"><p className="eyebrow">VISA STATUS SUPPORT</p><h1>Understand your next visa step.</h1><p className="lead">Share your reference and current stage privately with the team. We explain the practical next step and direct you to the relevant official confirmation channel.</p><form className="fv-status-form" onSubmit={handleSubmit(submit)} noValidate><label>Application reference <input {...register("reference")} placeholder="Enter your reference" autoComplete="off" aria-invalid={Boolean(errors.reference)} />{errors.reference && <small role="alert">{errors.reference.message}</small>}</label><label>Visa route <select {...register("route")}><option>Family / Dependent Visa</option><option>Golden Visa</option><option>Property Visa</option><option>Newborn Visa</option><option>Emirates ID</option></select></label><label>Current stage <select {...register("stage")}><option>Submitted / awaiting update</option><option>Entry permit or status change</option><option>Medical or biometrics</option><option>Visa stamping</option><option>Emirates ID delivery</option></select></label><button className="primary" type="submit">Ask for status support on WhatsApp →</button></form>{notice && <p className="fv-status-notice" role="status">{notice}</p>}<aside className="fv-status-disclaimer"><strong>Private support, not an official tracker.</strong><span>Do not enter passwords, OTPs, bank details, or full document scans here. Official authorities remain the source for final application status.</span></aside></section></main>;
}
