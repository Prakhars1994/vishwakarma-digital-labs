import type { Metadata } from "next";
import HomeServicesDemoClient from "./HomeServicesDemoClient";

export const metadata: Metadata = { title: "Fixly — Home Services Demo", robots: { index: true, follow: true } };

export default function Page() { return <HomeServicesDemoClient />; }
