import type { Metadata } from "next";
import EcommerceDemoClient from "./EcommerceDemoClient";

export const metadata: Metadata = { title: "LumaCart — E-commerce Demo", robots: { index: false, follow: false } };

export default function Page() { return <EcommerceDemoClient />; }
