import { demoMetadata } from "@/lib/demoMetadata";
import RestaurantDemoClient from "./RestaurantDemoClient";

export const metadata = demoMetadata(
  "/demos/restaurant",
  "Restaurant Website Demo",
  "Explore a premium restaurant website concept with menu discovery, reservations, gallery and conversion-focused dining experience design."
);

export default function RestaurantDemo() {
  return <RestaurantDemoClient />;
}
