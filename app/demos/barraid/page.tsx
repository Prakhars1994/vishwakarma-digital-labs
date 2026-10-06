import { demoMetadata } from "@/lib/demoMetadata";
import BarRaidDemoClient from "./BarRaidDemoClient";
import { products } from "./catalog";

export const metadata = demoMetadata(
  "/demos/barraid",
  "BarRaid | Barware, Beer Towers & Liquor Dispensers",
  "Shop BarRaid beer towers, liquor dispensers and novelty barware, with retail checkout and bulk WhatsApp enquiries."
);

const faq=[["Can I order a single piece?","Retail-priced products can be added individually, subject to current availability."],["Do you handle bulk orders?","Use the WhatsApp bulk enquiry to discuss quantity pricing, availability and order requirements."],["How can I confirm a product before ordering?","Contact BarRaid for current product imagery, availability and order details before finalizing your purchase."],["Is online payment live?","No. The current checkout records an order request; BarRaid confirms the available payment method and fulfilment details before the order is finalized."]];
export default function BarRaidPage(){
  const data={
    "@context":"https://schema.org",
    "@type":"ItemList",
    name:"BarRaid barware collection",
    itemListElement:products.map((p,i)=>({
      "@type":"ListItem",position:i+1,item:{
        "@type":"Product",name:p.name,category:p.category,sku:p.code,image:p.image,
        offers:{"@type":"Offer",priceCurrency:"INR",price:p.price,availability:p.availability==="In Stock"?"https://schema.org/InStock":"https://schema.org/OutOfStock"}
      }
    }))
  };
  const faqData={"@context":"https://schema.org","@type":"FAQPage",mainEntity:faq.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqData)}}/><BarRaidDemoClient/></>;
}
