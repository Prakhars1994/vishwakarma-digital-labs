import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/ai-assistant",
  "AI Agent Demo | Vishwakarma Digital Labs",
  "Explore an AI operations copilot concept with tool use, business knowledge, RAG indicators and automation safeguards."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
