import { demoMetadata } from "@/lib/demoMetadata";
import BarRaidDemoClient from "./BarRaidDemoClient";

export const metadata = demoMetadata(
  "/demos/barraid",
  "BarRaid | Barware, Beer Towers & Liquor Dispensers",
  "Shop BarRaid beer towers, liquor dispensers and novelty barware, with retail checkout and bulk WhatsApp enquiries."
);

export default function BarRaidPage(){ return <BarRaidDemoClient/>; }
