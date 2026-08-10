import type { Metadata } from "next";
import ClinicDemoClient from "./ClinicDemoClient";

export const metadata: Metadata = { title: "MediNova — Clinic Booking Demo", robots: { index: false, follow: false } };

export default function Page() { return <ClinicDemoClient />; }
