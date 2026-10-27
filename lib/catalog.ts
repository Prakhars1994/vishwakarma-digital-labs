export type ServicePackage = {
  name: string;
  price: string;
  timeline: string;
  summary: string;
  includes: string[];
  cta: string;
};

export const servicePackages: Record<string, ServicePackage[]> = {
  "digital-marketing": [
    { name: "Marketing Audit", price: "₹15,000+", timeline: "1–2 weeks", summary: "A practical review of your website, SEO, content, campaigns and conversion path.", includes: ["Growth audit", "Priority action plan", "Measurement recommendations"], cta: "Request a marketing audit" },
    { name: "Growth System", price: "₹1,25,000+", timeline: "4–8 weeks", summary: "Strategy, landing pages, content, campaigns, lead routing and reporting connected together.", includes: ["Campaign strategy", "Funnel and landing page", "Lead and reporting workflow"], cta: "Discuss a growth system" },
  ],
  "social-media-automation": [
    { name: "Meta Lead Capture", price: "₹30,000+", timeline: "2–4 weeks", summary: "Capture, qualify and route leads from Facebook and Instagram into an organised workflow.", includes: ["Lead form setup", "CRM routing", "Approval-ready follow-up"], cta: "Request Meta lead setup" },
    { name: "Social Workflow", price: "₹75,000+", timeline: "4–6 weeks", summary: "Content planning, approvals, publishing support and campaign reporting in one operating system.", includes: ["Content calendar", "Approval flow", "Reporting dashboard"], cta: "Discuss social automation" },
  ],
  "content-writing": [
    { name: "Content Starter", price: "₹12,000+", timeline: "1–2 weeks", summary: "Clear, conversion-focused content for a focused website or campaign requirement.", includes: ["Content brief", "Draft and revision", "CTA recommendations"], cta: "Start a content brief" },
    { name: "SEO Content System", price: "₹30,000+", timeline: "Monthly", summary: "A repeatable editorial system for SEO pages, articles, social variations and publishing.", includes: ["Content calendar", "SEO briefs", "Review-ready drafts"], cta: "Discuss content support" },
  ],
  "shopify-development": [
    { name: "Store Launch", price: "₹40,000+", timeline: "3–6 weeks", summary: "A focused Shopify setup with theme direction, products, navigation and launch QA.", includes: ["Theme setup", "Product structure", "Launch checklist"], cta: "Request Shopify quote" },
    { name: "Growth Store", price: "₹90,000+", timeline: "5–10 weeks", summary: "A customised Shopify storefront with integrations and conversion-focused improvements.", includes: ["Custom sections", "Integrations", "Conversion improvements"], cta: "Discuss a Shopify build" },
  ],
  "wordpress-development": [
    { name: "Business Website", price: "₹30,000+", timeline: "3–5 weeks", summary: "A manageable WordPress website with responsive pages, forms and SEO foundations.", includes: ["Page structure", "CMS setup", "Launch handover"], cta: "Request WordPress quote" },
    { name: "WooCommerce Growth", price: "₹65,000+", timeline: "5–9 weeks", summary: "A product and commerce experience with catalogue, cart, checkout and operational foundations.", includes: ["Store setup", "Product flows", "Payments and QA"], cta: "Discuss WooCommerce" },
  ],
  "ecommerce-development": [
    { name: "Store Foundation", price: "₹60,000+", timeline: "4–7 weeks", summary: "A clear product catalogue, cart and checkout foundation for an online store.", includes: ["Catalogue structure", "Cart and checkout", "Analytics foundations"], cta: "Request ecommerce quote" },
    { name: "Custom Commerce", price: "₹1,25,000+", timeline: "6–12 weeks", summary: "A customised ecommerce system with integrations, operations and growth-ready UX.", includes: ["Custom experience", "Integrations", "Operations handover"], cta: "Discuss custom commerce" },
  ],
  "custom-software": [
    { name: "Workflow MVP", price: "₹1,25,000+", timeline: "6–10 weeks", summary: "A focused first version of a dashboard, portal or internal workflow system.", includes: ["Discovery", "Core workflow", "Deployment handover"], cta: "Scope an MVP" },
    { name: "Business Platform", price: "₹2,50,000+", timeline: "10–18 weeks", summary: "A connected business application with roles, data, integrations and reporting.", includes: ["Architecture", "Roles and permissions", "Integrations and reporting"], cta: "Discuss a platform" },
  ],
  "seo-growth": [
    { name: "SEO Growth Starter", price: "₹25,000+", timeline: "2–4 weeks", summary: "A prioritised SEO and content roadmap based on your current website and search intent.", includes: ["Technical review", "Keyword map", "Page recommendations"], cta: "Request an SEO audit" },
    { name: "Ongoing Growth", price: "₹30,000/month+", timeline: "Monthly", summary: "Continuous technical, content and conversion improvements with regular reporting.", includes: ["Monthly priorities", "Content briefs", "Performance report"], cta: "Discuss SEO support" },
  ],
  "lead-generation": [
    { name: "Lead Funnel", price: "₹50,000+", timeline: "3–6 weeks", summary: "A landing page, form, qualification and routing workflow for fewer missed enquiries.", includes: ["Lead capture", "CRM routing", "Follow-up reminders"], cta: "Request a lead funnel" },
    { name: "Lead Operations System", price: "₹1,25,000+", timeline: "6–10 weeks", summary: "A broader lead, CRM, outreach and reporting system with approval and consent controls.", includes: ["Pipeline", "Automation", "Reporting and controls"], cta: "Discuss lead operations" },
  ],
};

export function getServicePackages(slug: string): ServicePackage[] {
  return servicePackages[slug] ?? [];
}
