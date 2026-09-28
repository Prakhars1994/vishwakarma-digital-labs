export type StoreCategory = { name: string; slug: string; description: string; icon: string };

export const storeCategories: StoreCategory[] = [
  { name: "Fashion", slug: "fashion", description: "Streetwear, essentials and seasonal drops", icon: "✦" },
  { name: "Electronics", slug: "electronics", description: "Smart devices and everyday technology", icon: "⌁" },
  { name: "Home & Living", slug: "home", description: "Furniture, décor and home essentials", icon: "⌂" },
  { name: "Beauty", slug: "beauty", description: "Skincare, wellness and personal care", icon: "◇" },
  { name: "Jewellery", slug: "jewellery", description: "Modern accessories and timeless pieces", icon: "✧" },
  { name: "Sports", slug: "sports", description: "Performance gear for active lifestyles", icon: "◉" },
];

export const commerceHighlights = [
  "Responsive storefront",
  "Search & category discovery",
  "Product variants",
  "Wishlist",
  "Cart & coupon logic",
  "Checkout flow",
  "Customer-ready UI",
  "Reusable Next.js components",
];
