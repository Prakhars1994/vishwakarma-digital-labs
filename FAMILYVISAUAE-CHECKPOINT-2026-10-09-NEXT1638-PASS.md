# FamilyVisaUAE OpenNext Compatibility Checkpoint — 2026-10-09

## Supported fix

OpenNext issue #1356 documents that Next.js 16.4 moved `preview-props.json` and causes `Unexpected loadManifest` failures until the upstream patch ships. The supported interim workaround is pinning Next.js to the latest 16.3 patch. Reference: https://github.com/opennextjs/opennextjs-cloudflare/pull/1356

## Source and workflow

- Branch: `familyvisa-packaging-upgrade-test-20261008`
- Commit: `128b862b376e425cd04fa03956167897be112819`
- Next.js: `16.3.8`
- OpenNext Cloudflare: `1.20.9`
- Wrangler: `4.148.0`
- Workflow run: `37869058198`
- URL: https://github.com/Prakhars1994/vishwakarma-digital-labs/actions/runs/37869058198

## Build and artifact

- Ubuntu OpenNext build: passed.
- Official `opennextjs-cloudflare preview`: passed.
- Artifact archive: `opennext-package.tgz`.
- Archive size: `28,264,704` bytes.
- Archive SHA-256: `510DD2BBFD9AC043E8EAE960C1304AF6C94782ECEC2BC5E422CFB37EE603465E`.
- Worker size/hash: `2,278` bytes; `D05223BF4D44C84108A102AB62AA3BC9C5568F0C3AC2064C37BE5CC65C64BC45`.
- Handler size/hash: `7,582,732` bytes; `2CEBAA3FA3C921B1A18D71212C2A2F53566089EC64DFC1387807EA739F543178`.
- Assets: 86 files.
- Worker entrypoint contains no `/home/runner/work/` path.
- Approved metadata/configuration-only path exemption remains documented.

## Required content

The workflow price scan passed for all four route labels and prices:

- Family / Dependent Visa — AED 1,103
- Golden Visa — AED 3,864
- Property Visa — AED 6,311
- Newborn Visa — AED 1,029

## Runtime smoke routes

All final responses returned HTTP 200 after following the canonical homepage redirect:

- Homepage: 308 → 200
- `/calculators/family`: 200
- `/services`: 200
- `/fees`: 200
- `/pro-services`: 200
- `/amer-centres-near-me`: 200
- `/contact`: 200
- `/guides`: 200
- `/checklist`: 200

## Release decision

Packaging and runtime validation passed in the isolated branch. **No deployment was performed**, as explicitly required. Production remains unchanged. A separate production authorization is required before deployment.
