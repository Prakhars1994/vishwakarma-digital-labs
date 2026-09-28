# LUMACART Ecommerce Asset
Sale-preparation branch: `vdl-ecommerce-marketplace`

## Current readiness
The frontend product is substantially complete: storefront, catalogue, dynamic product pages, collections, cart, checkout demonstration, customer account UI and order tracking.

## Honest limitations
The current catalogue uses visual placeholders rather than production product photography. Payments, authentication, persistence, inventory, email/SMS and fulfilment are demonstration flows until external services are connected.

## Final release gates
1. Add buyer-owned or properly licensed product photography.
2. Export this ecommerce scope to a standalone repository.
3. Run `npm install`, lint and production build in the standalone repository.
4. Fix any build/runtime issues.
5. Test all routes at desktop and mobile widths.
6. Deploy the standalone repository to a transferable hosting account/domain.
7. Capture final screenshots and list only verified functionality.

See `ECOMMERCE_BUYER_GUIDE.md` and `ECOMMERCE_FLIPPA_CHECKLIST.md`.
