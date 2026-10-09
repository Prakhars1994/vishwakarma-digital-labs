import { demoMetadata } from "@/lib/demoMetadata";
import ClinicDemoClient from "./ClinicDemoClient";

export const metadata = demoMetadata(
  "/demos/clinic",
  "MediNova — Interactive Clinic Booking Demo",
  "Explore a healthcare website concept with specialty filters, doctor appointments, visit modes and patient intake workflows by Vishwakarma Digital Labs."
);

export default function Page() { return <ClinicDemoClient />; }
