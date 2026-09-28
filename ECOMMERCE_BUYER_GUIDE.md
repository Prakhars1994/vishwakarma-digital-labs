# LUMACART — Buyer Guide

## What this asset is
LUMACART is a custom-built multi-page ecommerce frontend built with Next.js, React, TypeScript and Tailwind CSS. It is structured as a white-label starter that can be rebranded for fashion, electronics, home, beauty, jewellery or general retail.

## Included experiences
- Storefront and merchandising sections
- Shop catalogue
- Product detail experience
- Collections
- Search, category filtering and sorting
- Wishlist UI
- Cart, quantity controls, coupon and shipping logic
- Checkout UI with UPI/Card/COD selections
- Order confirmation
- Sign-in/register UI
- Customer dashboard, orders, addresses and wishlist
- Order tracking UI
- Responsive layouts and SEO metadata

## Important implementation disclosure
This asset currently demonstrates commerce flows on the frontend. Payment processing, live authentication, persistent customer accounts, database-backed inventory, transactional email/SMS and fulfilment integrations are NOT represented as live services. A buyer can connect their preferred providers.

## Rebranding checklist
1. Replace LUMACART name and store copy.
2. Replace demo product data and visual placeholders with licensed buyer-owned media.
3. Set currency, shipping thresholds, tax rules and returns policy.
4. Connect authentication/database if required.
5. Connect a payment provider if required.
6. Configure email/SMS and fulfilment integrations if required.
7. Update metadata, legal pages, domain and analytics.
8. Run production build and end-to-end checkout QA before launch.

## Main routes
- /demos/ecommerce
- /demos/ecommerce/shop
- /demos/ecommerce/product/sunset-runner
- /demos/ecommerce/collections
- /demos/ecommerce/cart
- /demos/ecommerce/checkout
- /demos/ecommerce/order-confirmation
- /demos/ecommerce/login
- /demos/ecommerce/account
- /demos/ecommerce/track

## Transfer notes
The ecommerce work is isolated on the vdl-ecommerce-marketplace development branch. Before an asset sale, export the ecommerce code into a standalone repository/deployment and transfer only the agreed asset scope. Do not include unrelated VDL code, accounts, client data, domains or credentials.

## Marketplace representation
Describe the asset as a custom-built deployable ecommerce frontend/MVP. Do not claim revenue, traffic, real payment processing, persistent authentication, live inventory or fulfilment unless independently implemented and verified before listing.
