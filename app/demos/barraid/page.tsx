import { demoMetadata } from "@/lib/demoMetadata";
import BarRaidDemoClient from "./BarRaidDemoClient";

export const metadata = demoMetadata(
  "/demos/barraid",
  "BarRaid | Barware, Beer Towers & Liquor Dispensers",
  "Shop BarRaid beer towers, liquor dispensers and novelty barware, with retail checkout and bulk WhatsApp enquiries."
);

const products=[
  ["3L Draft Beer Tower",3599,"Beer Towers"],
  ["Double Gas Pump Liquor Dispenser",1999,"Liquor Dispensers"],
  ["Green Beer Boot Glass",599,"Novelty Glassware"],
  ["Santa Claus Round Dispenser",1599,"Liquor Dispensers"],
  ["Amazing Cup LED Dispenser",3599,"Beer Towers"],
  ["Blue Beer Boot Glass",599,"Novelty Glassware"]
];

export default function BarRaidPage(){
  const data={
    "@context":"https://schema.org",
    "@type":"ItemList",
    name:"BarRaid barware collection",
    itemListElement:products.map(([name,price,category],i)=>({
      "@type":"ListItem",position:i+1,item:{
        "@type":"Product",name,category,
        offers:{"@type":"Offer",priceCurrency:"INR",price,availability:"https://schema.org/InStock"}
      }
    }))
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><BarRaidDemoClient/></>;
}
