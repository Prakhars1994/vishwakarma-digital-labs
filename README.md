# Vishwakarma Digital Labs

Production-focused agency website for Vishwakarma Digital Labs, built with Next.js, React, TypeScript, Tailwind CSS and OpenNext for Cloudflare Workers.

## What the site includes

- Conversion-focused agency homepage
- Four service pages: web, mobile, AI and automation
- Three engagement models: fixed-scope project, MVP sprint and ongoing development
- Dedicated `/work` portfolio hub
- CurrentPulse AI production case study with live Cloudflare link
- Ten interactive portfolio concepts visible on the homepage and work hub
- Deliberately different visual systems for restaurant, AI, lead generation, ecommerce, clinic, real estate, LMS, CRM, home services and logistics demos
- Six-point “Why Vishwakarma Digital Labs?” trust section plus founder profile
- India / international project estimator
- WhatsApp project quote form with optional Supabase lead capture
- Cloudflare Turnstile support, honeypot and server-side lead validation
- Privacy and terms pages
- SEO metadata, JSON-LD, sitemap and robots
- Accessibility improvements including skip navigation and improved mobile menu semantics
- Cloudflare Workers deployment with GitHub build checks
- Final conversion CTA after the contact form

## Portfolio architecture

CurrentPulse AI is presented as real production work. The ten interactive demo products are explicitly presented as portfolio concepts and are not claimed as client engagements.

The demo concepts remain publicly accessible from the homepage and `/work`, but `/demos/*` stays `noindex`. Individual demo URLs are therefore intentionally excluded from `sitemap.xml`; Google can index the real portfolio hub and case study without treating fictional concept products as standalone search landing pages.

The ten demo concepts are:

1. Saffron Table — restaurant / menu / reservation experience
2. NOVA AI Operations Copilot — AI agent / RAG / automation workspace
3. Northstar Growth Platform — lead-generation / CRM / ROI flow
4. LumaCart D2C Store — ecommerce / cart / checkout experience
5. MediNova Clinic Portal — healthcare / booking / patient portal
6. Aurelia Property Portal — real-estate / search / mortgage experience
7. SkillForge LMS — education / lessons / quiz / live-class experience
8. PipelineOS CRM — B2B SaaS / pipeline / forecasting / AI follow-ups
9. Fixly Home Services — local-services marketplace / booking / pricing
10. RoutePilot Logistics — shipment tracking / fleet / operations dashboard

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and configure only the services you use.

```env
NEXT_PUBLIC_SITE_URL=https://vdl.vliab.workers.dev

SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=

NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN=
```

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, schema, sitemap and robots. Replace the workers.dev value with the permanent branded custom domain after it is connected in Cloudflare.

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `TURNSTILE_SECRET_KEY` in browser code or prefix them with `NEXT_PUBLIC_`.

## Optional lead database

The WhatsApp form works even if the Supabase lead database is not configured. To save submitted enquiries as well:

1. Open the Supabase SQL editor.
2. Run `supabase/lead_capture.sql`.
3. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as server-side environment variables.

The lead endpoint includes input limits, origin validation, a honeypot and best-effort per-IP throttling. Configure Turnstile for stronger bot protection.

## Cloudflare Turnstile

Create a Turnstile widget for the production hostname and set:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
```

If the keys are omitted, the form remains usable with the built-in non-Turnstile protections.

## Cloudflare Web Analytics

To load the Cloudflare Web Analytics beacon, set:

```env
NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN=...
```

The site is deployed only through Cloudflare Workers.

## Production build

```bash
npm run build
```

## Cloudflare deployment

The project uses `@opennextjs/cloudflare` and `wrangler.jsonc`.

```bash
npm run deploy
```

For a preview:

```bash
npm run preview
```
