# Vishwakarma Digital Labs

Production-focused agency website for Vishwakarma Digital Labs, built with Next.js, React, TypeScript, Tailwind CSS and OpenNext for Cloudflare Workers.

## What the site includes

- Conversion-focused agency homepage
- Four service pages: web, mobile, AI and automation
- Dedicated `/work` portfolio hub
- CurrentPulse AI production case study
- Ten clearly labelled interactive demo concepts
- India / international project estimator
- WhatsApp project quote form with optional Supabase lead capture
- Cloudflare Turnstile support, honeypot and server-side lead validation
- Privacy and terms pages
- SEO metadata, JSON-LD, sitemap and robots
- Accessibility improvements including skip navigation and improved mobile menu semantics
- Cloudflare Workers deployment with GitHub build checks

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

No Vercel Analytics component is used in the application runtime.

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

## Portfolio policy

CurrentPulse AI is presented as real production work. The ten interactive demo products are explicitly presented as portfolio concepts and are not claimed as client engagements.
