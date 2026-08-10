import type { Metadata } from "next";
import RealEstateDemoClient from "./RealEstateDemoClient";

export const metadata: Metadata = { title: "Aurelia — Real Estate Portal Demo", robots: { index: false, follow: false } };

export default function Page() { return <RealEstateDemoClient />; }
