import { demoMetadata } from "@/lib/demoMetadata";
import BarRaidDemoClient from "./BarRaidDemoClient";

export const metadata = demoMetadata(
  "/demos/barraid",
  "BarRaid | Barware, Beer Towers & Liquor Dispensers",
  "Shop BarRaid beer towers, liquor dispensers and novelty barware, with retail checkout and bulk WhatsApp enquiries."
);

const faq=[["Can I order a single piece?","In this preview, retail-priced products can be added individually. Final availability is confirmed for launch."],["Do you handle bulk orders?","Use the WhatsApp bulk enquiry to discuss quantity pricing, availability and order requirements."],["Are the product visuals final?","Not yet. Final approved BarRaid packshots will replace the concept visuals before production launch."],["Is payment live on this preview?","No. The checkout demonstrates the intended flow; live gateway credentials are connected for production."]];
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
        offers:{"@type":"Offer",priceCurrency:"INR",price}
      }
    }))
  };
  const faqData={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqData)}}/><BarRaidDemoClient/></>;
}
