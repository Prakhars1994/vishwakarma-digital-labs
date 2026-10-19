import type { Metadata } from "next";
import LMSDemoClient from "./LMSDemoClient";

export const metadata: Metadata = { title: "SkillForge — LMS Demo", robots: { index: false, follow: true } };

export default function Page() { return <LMSDemoClient />; }
