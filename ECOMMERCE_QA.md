# Ecommerce QA Matrix

Use this after extraction and before marketplace publication.

| Route | Desktop | Mobile | Main check |
|---|---|---|---|
| / | pending | pending | navigation, merchandising, quick view |
| /shop | pending | pending | catalogue and all product links |
| /product/[slug] | pending | pending | all 12 product routes |
| /collections | pending | pending | collection navigation |
| /cart | pending | pending | quantity, coupon, totals |
| /checkout | pending | pending | delivery fields and payment-mode UI |
| /order-confirmation | pending | pending | confirmation state |
| /login | pending | pending | sign-in/register UI |
| /account | pending | pending | overview/orders/address/wishlist |
| /track | pending | pending | demo tracking state |

## Automated validation
In the current VDL branch:
`npm run check:ecommerce`

For the standalone project:
`npm run lint && npm run build`

Do not mark any pending QA item as passed until it has actually been executed against the standalone build.
