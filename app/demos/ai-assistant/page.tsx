import type { Metadata } from "next";
import AIAssistantDemoClient from "./AIAssistantDemoClient";

export const metadata: Metadata = {
  title: "Advanced AI Business Assistant Demo",
  description: "Interactive AI agent and business automation portfolio demo by Vishwakarma Digital Labs.",
};

export default function AIAssistantDemo() {
  return <AIAssistantDemoClient />;
}
