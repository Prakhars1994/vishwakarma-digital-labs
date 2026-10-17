import type { Metadata } from "next";
import LogisticsDemoClient from "./LogisticsDemoClient";

export const metadata: Metadata = { title: "RoutePilot — Logistics Demo", robots: { index: false, follow: true } };

export default function Page() { return <LogisticsDemoClient />; }
