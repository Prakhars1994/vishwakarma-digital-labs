export type StoreProduct={slug:string;name:string;category:string;price:number;oldPrice?:number;icon:string;rating:number;reviews:number;stock:number;description:string;variants?:string[]};
export const storeProducts:StoreProduct[]=[
{slug:"sunset-runner",name:"Sunset Runner",category:"Sneakers",price:3499,oldPrice:4299,icon:"👟",rating:4.8,reviews:184,stock:12,description:"A lightweight everyday sneaker built around comfort, easy styling and a bold sunset-inspired finish.",variants:["7","8","9","10"]},
{slug:"cloud-hoodie",name:"Cloud Hoodie",category:"Apparel",price:2299,icon:"🧥",rating:4.7,reviews:96,stock:8,description:"A soft everyday layer with a relaxed silhouette and clean finish.",variants:["S","M","L","XL"]},
{slug:"studio-tote",name:"Studio Tote",category:"Accessories",price:1799,icon:"👜",rating:4.9,reviews:61,stock:21,description:"A roomy carryall designed for commuting, errands and everyday essentials."},
{slug:"pulse-watch",name:"Pulse Watch",category:"Accessories",price:4999,oldPrice:5499,icon:"⌚",rating:4.6,reviews:72,stock:6,description:"A minimal statement watch with an easy everyday profile."},
{slug:"arc-buds-pro",name:"Arc Buds Pro",category:"Electronics",price:6499,oldPrice:7999,icon:"🎧",rating:4.7,reviews:214,stock:18,description:"Compact wireless audio designed for work, travel and downtime."},
{slug:"halo-table-lamp",name:"Halo Table Lamp",category:"Home",price:2899,icon:"💡",rating:4.8,reviews:83,stock:14,description:"Warm ambient lighting in a compact modern form."},
{slug:"dew-barrier-serum",name:"Dew Barrier Serum",category:"Beauty",price:1499,oldPrice:1799,icon:"🧴",rating:4.9,reviews:301,stock:24,description:"A simple daily skincare staple presented as demonstration catalogue content."},
{slug:"orbit-pendant",name:"Orbit Pendant",category:"Jewellery",price:3199,icon:"💎",rating:4.8,reviews:109,stock:9,description:"A clean statement pendant designed for versatile everyday styling."},
{slug:"night-sprint",name:"Night Sprint",category:"Sneakers",price:3799,icon:"👟",rating:4.8,reviews:128,stock:10,description:"A darker performance-inspired sneaker for everyday wear.",variants:["7","8","9","10","11"]},
{slug:"metro-knit",name:"Metro Knit",category:"Apparel",price:1999,icon:"👕",rating:4.5,reviews:43,stock:16,description:"An easy knit essential for layering and daily wear.",variants:["S","M","L"]},
{slug:"aura-speaker",name:"Aura Speaker",category:"Electronics",price:5299,icon:"🔊",rating:4.7,reviews:88,stock:11,description:"A compact wireless speaker concept with a clean home-friendly form."},
{slug:"linen-cushion-set",name:"Linen Cushion Set",category:"Home",price:1299,icon:"🛋️",rating:4.6,reviews:54,stock:19,description:"Textured soft furnishings designed to refresh a living space."}
];