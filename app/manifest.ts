import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vishwakarma Digital Labs",
    short_name: "VDL",
    description:
      "Web development, mobile apps, AI applications and business automation for startups and businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#f97316",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
