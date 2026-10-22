import { categories, products, type BarRaidProduct } from "./catalog";

export const BASE = "/demos/barraid";
export const WHATSAPP_NUMBER = "919868107595";
export const CONTACT = {
  whatsapp: "+91 98681 07595",
  phone: "+91 11 41617595",
  email: "info@barraid.com",
  address: "Pacific Plastic Industries, A-267, Second Floor, Okhla Industrial Area Phase 1, New Delhi 110020",
};
export const MAX_QTY = 50;

export const categorySlugs: Record<string, string> = {
  "Beer Towers": "beer-towers",
  "Liquor Dispensers": "liquor-dispensers",
  "Beer Glassware": "beer-glassware",
  "Whiskey Glasses": "whiskey-glasses",
};
export const categoryBySlug = (slug: string) =>
  Object.keys(categorySlugs).find((name) => categorySlugs[name] === slug);
export const categoryHref = (name: string) => `${BASE}/category/${categorySlugs[name] ?? ""}`;
export const productHref = (p: Pick<BarRaidProduct, "slug">) => `${BASE}/product/${p.slug}`;

export const categoryBlurbs: Record<string, string> = {
  "Beer Towers": "3 litre towers, LED dispensers and tabletop draft systems",
  "Liquor Dispensers": "Gas-pump, Singapore Lion and novelty spirit dispensers",
  "Beer Glassware": "Boot glasses, trophy glasses and statement mugs",
  "Whiskey Glasses": "Heavy-base crystal rocks glasses",
};

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
export const isOrderable = (p: BarRaidProduct) => p.price > 0 && p.availability !== "Out Of Stock";
export const savings = (p: BarRaidProduct) => (p.oldPrice && p.oldPrice > p.price ? p.oldPrice - p.price : 0);
export const findProduct = (id: number) => products.find((p) => p.id === id);

export const whatsappLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// Featured picks for the homepage: in-stock products with real photography, towers first.
export const featuredProducts = () =>
  products.filter((p) => p.image && isOrderable(p)).slice(0, 8);

export const shopCategories = categories;
