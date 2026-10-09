# FamilyVisaUAE Final Portability Check — 2026-10-09

## Official release check

- Latest `@opennextjs/cloudflare`: `1.20.9`.
- No newer npm release or documented path-portability option was available.
- OpenNext `1.20.9` requires Wrangler `^4.125.0`; the isolated test used Wrangler `4.148.0`.

## Runtime classification

The existing fresh artifact contains the CI path in serialized `outputFileTracingRoot` configuration within:

- `middleware/handler.mjs`
- `server-functions/default/index.mjs`
- `server-functions/default/handler.mjs`

It also appears extensively in `handler.mjs.meta.json` as esbuild origin/diagnostic metadata, including WASM/font/module origins.

The occurrences inspected are serialized configuration and trace metadata; no direct Worker filesystem read of `/home/runner/work/...` was identified. However, the runtime bundles still embed the path and no official OpenNext guidance authorizes exempting it under this project’s strict portability gate.

## Decision

**Blocked.** No new official fix is available, so the isolated build was not rerun. No artifact was rewritten and no deployment was attempted. Production remains unchanged.

## Required resolution

Either an official OpenNext release/configuration must remove or normalize the path, or the project owner must explicitly approve a release-gate exemption limited to metadata/configuration paths after separate runtime smoke testing.
