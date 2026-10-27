export type SolutionCollection = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: string;
  serviceSlug: string;
  platform: string[];
  evidence: string;
  demos: { title: string; summary: string; price: string; href: string }[];
};

export const solutionCollections: SolutionCollection[] = [
  { slug: "crm", title: "CRM systems", eyebrow: "Organise every opportunity", description: "Ready-to-customise pipelines, dashboards, follow-up and customer operations for growing teams.", icon: "▦", serviceSlug: "custom-software", platform: ["Next.js", "Supabase", "Open-source CRM"], evidence: "VDL demos + public references", demos: [{ title: "Lead pipeline CRM", summary: "Stages, owners, reminders and reporting.", price: "₹35,000+", href: "/demos/crm" }, { title: "AI-assisted CRM", summary: "Qualification, summaries and next actions.", price: "₹1,25,000+", href: "/services/ai-development" }] },
  { slug: "websites", title: "Websites", eyebrow: "Make the first impression count", description: "Business websites, landing pages, portals, blogs and campaign experiences built around a clear next action.", icon: "▤", serviceSlug: "web-development", platform: ["Next.js", "WordPress", "Shopify"], evidence: "Live demos + public builds", demos: [{ title: "Business website", summary: "Clear positioning, proof and enquiry flow.", price: "₹35,000+", href: "/services/web-development" }, { title: "Conversion landing page", summary: "Focused campaign page with lead capture.", price: "₹15,000+", href: "/contact" }] },
  { slug: "chatbots", title: "Chatbots & AI assistants", eyebrow: "Answer, qualify and hand off", description: "Customer support, knowledge, lead qualification and internal assistants connected to the right information and human review.", icon: "✦", serviceSlug: "ai-development", platform: ["AI APIs", "RAG", "Supabase", "Chat widgets"], evidence: "AI demos + reusable open-source references", demos: [{ title: "Knowledge assistant", summary: "Answers from approved business content.", price: "₹50,000+", href: "/demos/ai-assistant" }, { title: "Lead qualification bot", summary: "Questions, scoring and human handoff.", price: "₹45,000+", href: "/services/lead-generation" }] },
  { slug: "automations", title: "Automation flows", eyebrow: "Remove repetitive manual work", description: "Lead routing, notifications, reporting, document workflows and connected operations built from reusable workflow patterns.", icon: "↯", serviceSlug: "business-automation", platform: ["n8n", "APIs", "Webhooks", "Supabase"], evidence: "Workflow demos + VDL builds", demos: [{ title: "Lead-to-CRM flow", summary: "Capture, validate, assign and notify.", price: "₹15,000+", href: "/services/business-automation" }, { title: "Content approval flow", summary: "Brief, draft, review and publish-ready handoff.", price: "₹30,000+", href: "/services/content-writing" }] },
  { slug: "ecommerce", title: "Ecommerce systems", eyebrow: "Turn browsing into buying", description: "Shopify, WooCommerce and custom store foundations with catalogues, carts, checkout, integrations and operations.", icon: "◇", serviceSlug: "ecommerce-development", platform: ["Shopify", "WooCommerce", "Next.js"], evidence: "LumaCart + ecommerce demos", demos: [{ title: "D2C storefront", summary: "Products, cart, coupons and checkout flow.", price: "₹60,000+", href: "/demos/ecommerce" }, { title: "Shopify growth store", summary: "Theme customisation and conversion improvements.", price: "₹90,000+", href: "/services/shopify-development" }] },
  { slug: "internal-tools", title: "Internal tools", eyebrow: "Give your team a clearer system", description: "Dashboards, portals, estimators, trackers and admin workflows that make operations easier to run.", icon: "⌘", serviceSlug: "custom-software", platform: ["Next.js", "Supabase", "Cloudflare"], evidence: "CRM, logistics and portal demos", demos: [{ title: "Operations dashboard", summary: "KPIs, tasks, roles and activity history.", price: "₹75,000+", href: "/demos/logistics" }, { title: "Client portal", summary: "Secure status, documents and next steps.", price: "₹1,25,000+", href: "/services/custom-software" }] },
  { slug: "content-writing", title: "Content writing", eyebrow: "Make complex things clear", description: "Website, SEO, product, campaign, social and documentation content designed around audience, intent and action.", icon: "✎", serviceSlug: "content-writing", platform: ["SEO", "CMS", "Editorial workflow"], evidence: "VDL samples + approved public work", demos: [{ title: "Website copy system", summary: "Homepage, services, FAQs and CTAs.", price: "₹12,000+", href: "/services/content-writing" }, { title: "SEO content system", summary: "Briefs, articles, internal links and metadata.", price: "₹30,000+", href: "/services/seo-growth" }] },
];

export function getSolutionCollection(slug: string) {
  return solutionCollections.find((collection) => collection.slug === slug);
}
