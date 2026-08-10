import type { Metadata } from "next";
import CRMDemoClient from "./CRMDemoClient";

export const metadata: Metadata = { title: "PipelineOS — CRM Demo", robots: { index: false, follow: false } };

export default function Page() { return <CRMDemoClient />; }
