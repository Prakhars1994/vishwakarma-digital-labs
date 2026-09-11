import { demoMetadata } from "@/lib/demoMetadata";

export const metadata = demoMetadata(
  "/demos/ecommerce",
  "E-commerce Website Demo | Vishwakarma Digital Labs",
  "Explore a D2C e-commerce concept with product search, variants, wishlist, cart, coupons, shipping logic and checkout flows."
);

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
