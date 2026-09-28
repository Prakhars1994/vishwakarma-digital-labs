import type { Metadata } from "next";
import EcommerceDemoClient from "./EcommerceDemoClient";
export const metadata: Metadata = {
 title:"LUMACART — Modern Multi-Category Ecommerce Store",
 description:"A polished multi-category commerce storefront with product discovery, collections, cart, checkout, account and order-tracking experiences.",
 openGraph:{title:"LUMACART — Modern Ecommerce Store",description:"A polished multi-category ecommerce experience.",type:"website"}
};
export default function Page(){return <EcommerceDemoClient/>}