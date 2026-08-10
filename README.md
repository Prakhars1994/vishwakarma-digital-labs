# Vishwakarma Digital Labs

Client-conversion website for Vishwakarma Digital Labs, built with Next.js, React, TypeScript and Tailwind CSS.

## Included

- Responsive agency homepage
- Website, mobile app, AI and automation services
- CurrentPulse AI featured case study
- Ten clearly labelled interactive portfolio demos
- WhatsApp project quote form with budget/timeline qualification
- Optional Supabase lead capture before WhatsApp opens
- SEO metadata, JSON-LD, sitemap and robots
- GitHub, email, call and WhatsApp CTAs

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Optional lead database

The WhatsApp form works without a database. To also save each submitted enquiry:

1. Open your Supabase SQL editor.
2. Run `supabase/lead_capture.sql`.
3. Copy `.env.example` to `.env.local`.
4. Add your server-side Supabase project URL and service-role key.
5. Restart the dev server.

Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser code and never prefix it with `NEXT_PUBLIC_`.

## Production URL

Before deployment, set:

```env
NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN.com
```

Then deploy to Vercel and use the same environment variable there.


## Portfolio demos
Includes 10 distinct interactive demos: restaurant, AI agent, lead-generation platform, ecommerce, clinic booking, real estate, LMS, CRM, home services marketplace, and logistics tracking. Demo concepts are clearly presented as portfolio concepts rather than client engagements.

## V6 production-style demo upgrades

The Ecommerce, Clinic, and CRM demos were upgraded with deeper interaction flows so prospects can experience them more like real products:
- Ecommerce: search, categories, product detail, variants, wishlist, quantity cart, coupon, shipping logic and checkout simulation.
- Clinic: specialty filters, doctor selection, visit mode, dates/slots, patient intake, fee summary, booking confirmation and patient portal preview.
- CRM: lead creation, source/search filtering, pipeline stages, weighted forecasting, lead scores, activity timeline, AI follow-up drafting and approval flow.


## V7 sales-conversion upgrade

- Four SEO-friendly service pages: web development, mobile app development, AI development and business automation.
- Interactive project cost estimator with INR/USD display, complexity, timeline and optional features.
- Estimator-to-WhatsApp handoff containing the selected project scope.
- Engagement model section for fixed-scope, MVP sprint and ongoing development work.
- Expanded FAQ section addressing scope, technology, pricing, MVPs and post-launch support.
- Service links added to the sitemap and homepage service cards.
- Next.js smooth-scroll warning handled with `data-scroll-behavior="smooth"`.


## V8 theme diversity pass
Each portfolio demo intentionally uses a different visual system (editorial, brutalist, neon terminal, healthcare-soft UI, luxury property, playful edtech, dense enterprise SaaS, trade-service poster, and industrial logistics) rather than sharing one agency template.
