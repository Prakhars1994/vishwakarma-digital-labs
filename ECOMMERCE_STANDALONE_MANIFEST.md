# Standalone Extraction Manifest

This file defines the exact source scope to move into a clean LUMACART repository before transfer.

## Ecommerce application source
- app/demos/ecommerce/**
- components/ecommerce/ProductVisual.tsx
- lib/ecommerce-catalog.ts

## Recreate as standalone root
Move `app/demos/ecommerce/page.tsx` to `app/page.tsx`.
Move child routes so:
- `app/demos/ecommerce/shop` → `app/shop`
- `app/demos/ecommerce/product` → `app/product`
- `app/demos/ecommerce/collections` → `app/collections`
- `app/demos/ecommerce/cart` → `app/cart`
- `app/demos/ecommerce/checkout` → `app/checkout`
- `app/demos/ecommerce/order-confirmation` → `app/order-confirmation`
- `app/demos/ecommerce/login` → `app/login`
- `app/demos/ecommerce/account` → `app/account`
- `app/demos/ecommerce/track` → `app/track`

Then replace route prefixes `/demos/ecommerce` with empty root prefixes.

## Standalone dependencies
Use Next.js 16, React 19, React DOM 19, TypeScript, Tailwind CSS 4, ESLint 9 and eslint-config-next 16. Cloudflare/OpenNext packages are optional and should only be retained when Cloudflare is the chosen deployment target.

## Do NOT transfer from VDL
- VDL root layout metadata/schema
- VDL analytics tokens
- VDL contact/founder/company information
- unrelated demos
- unrelated public assets
- Supabase/project credentials
- deployment credentials or environment files
- client information

## Standalone root layout
Create a fresh root layout that imports the standalone globals stylesheet and contains only LUMACART metadata. Do not reuse VDL Organization/Person JSON-LD.

## Verification after extraction
Run:
```
npm install
npm run lint
npm run build
```
Then manually verify every route and responsive layout before deployment.

This manifest is intentionally explicit so the buyer receives only the ecommerce asset and no unrelated VDL intellectual property or credentials.
