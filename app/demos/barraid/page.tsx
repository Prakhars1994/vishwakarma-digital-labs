import { demoMetadata } from "@/lib/demoMetadata";
import BarRaidDemoClient from "./BarRaidDemoClient";

export const metadata = demoMetadata(
  "/demos/barraid",
  "BarRaid | Barware, Beer Towers & Liquor Dispensers",
  "Shop BarRaid beer towers, liquor dispensers and novelty barware, with retail checkout and bulk WhatsApp enquiries."
);

const faq=[["Can I order a single piece?","Retail-priced products can be added individually, subject to current availability."],["Do you handle bulk orders?","Use the WhatsApp bulk enquiry to discuss quantity pricing, availability and order requirements."],["How can I confirm a product before ordering?","Contact BarRaid for current product imagery, availability and order details before finalizing your purchase."],["Is online payment live?","No. The current checkout records an order request; BarRaid confirms the available payment method and fulfilment details before the order is finalized."]];
const products=[
  ["Tripod Beer / Liquor Tower 3L",3599,"Beer Towers"],
  ["Double Gas Pump Liquor Dispenser 900 ML",1999,"Liquor Dispensers"],
  ["Green Beer Boot Glass",599,"Novelty Glassware"],
  ["3L Sparkling Light Draft Beer Tower",3599,"Beer Towers"],
  ["Elite Tower 3L - Wooden Pattern",3599,"Beer Towers"],
  ["Dual-Tap Beer Tower 3L - Silver",3599,"Beer Towers"],
  ["Tabletop Draft Drink Dispenser 3L",3599,"Beer Towers"]
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
