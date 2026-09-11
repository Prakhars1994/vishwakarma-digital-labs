import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/lms",
  "LMS Website Demo | Vishwakarma Digital Labs",
  "Explore a learning-management portal concept with courses, progress tracking, lessons, quizzes and live-class touchpoints."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
