export type PortfolioDemo = {
  label: string;
  icon: string;
  title: string;
  text: string;
  tags: string[];
  href: string;
  featured?: boolean;
};

export const portfolioDemos: PortfolioDemo[] = [
  {
    label: "AI AGENT",
    icon: "✦",
    title: "NOVA AI Operations Copilot",
    text: "Agent workspace with chat simulation, connected tools, RAG indicators and automation safeguards.",
    tags: ["AI Agent", "RAG", "Automation"],
    href: "/demos/ai-assistant",
    featured: true,
  },
  {
    label: "ECOMMERCE",
    icon: "🛍️",
    title: "LumaCart D2C Store",
    text: "Production-style D2C storefront with product variants, wishlist, cart, coupons, shipping logic and checkout.",
    tags: ["E-commerce", "Cart", "D2C"],
    href: "/demos/ecommerce",
    featured: true,
  },
  {
    label: "HEALTHCARE",
    icon: "🏥",
    title: "MediNova Clinic Portal",
    text: "Clinic portal with specialty filters, doctor booking, patient intake, fee summary and portal preview.",
    tags: ["Booking", "Healthcare", "Portal"],
    href: "/demos/clinic",
    featured: true,
  },
  {
    label: "B2B SAAS / CRM",
    icon: "📊",
    title: "PipelineOS CRM",
    text: "CRM with lead capture, forecasting, scoring, activity history, pipeline stages and AI-assisted follow-ups.",
    tags: ["CRM", "SaaS", "Pipeline"],
    href: "/demos/crm",
    featured: true,
  },
  {
    label: "RESTAURANT",
    icon: "🍽️",
    title: "Saffron Table",
    text: "Premium restaurant experience with interactive menu, reservations and tasting-list flow.",
    tags: ["Menu", "Reservations", "Gallery"],
    href: "/demos/restaurant",
  },
  {
    label: "LEAD GENERATION",
    icon: "↗",
    title: "Northstar Growth Platform",
    text: "Conversion-first business platform with lead flow, pipeline visuals and an interactive ROI calculator.",
    tags: ["Lead Capture", "CRM", "Analytics"],
    href: "/demos/service-business",
  },
  {
    label: "REAL ESTATE",
    icon: "🏡",
    title: "Aurelia Property Portal",
    text: "Property discovery with filters, viewing requests and an interactive mortgage estimator.",
    tags: ["Listings", "Search", "Mortgage"],
    href: "/demos/real-estate",
  },
  {
    label: "EDTECH / COACHING",
    icon: "🎓",
    title: "SkillForge LMS",
    text: "Learning portal with course progress, lessons, quiz interaction and live-class touchpoints.",
    tags: ["LMS", "Courses", "Quiz"],
    href: "/demos/lms",
  },
  {
    label: "HOME SERVICES",
    icon: "🧰",
    title: "Fixly Home Services",
    text: "On-demand service booking with instant estimates, schedule selection and provider workflow.",
    tags: ["Marketplace", "Booking", "Pricing"],
    href: "/demos/home-services",
  },
  {
    label: "LOGISTICS",
    icon: "🚚",
    title: "RoutePilot Logistics",
    text: "Shipment tracking, route progress, fleet KPIs and operations automation dashboard.",
    tags: ["Tracking", "Fleet", "Dashboard"],
    href: "/demos/logistics",
  },
];
