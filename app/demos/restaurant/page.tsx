import type { Metadata } from "next";
import RestaurantDemoClient from "./RestaurantDemoClient";

export const metadata: Metadata = {
  title: "Advanced Restaurant Website Demo",
  description: "Premium interactive restaurant website portfolio demo by Vishwakarma Digital Labs.",
};

export default function RestaurantDemo() {
  return <RestaurantDemoClient />;
}
