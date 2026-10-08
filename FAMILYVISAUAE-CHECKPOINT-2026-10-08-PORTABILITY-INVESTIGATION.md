# FamilyVisaUAE Portability Investigation — 2026-10-08

## Scope

Official OpenNext path-portability investigation only. No customer-facing source changes and no deployment.

## Findings

- OpenNext Cloudflare `1.20.9` was tested with Wrangler `4.148.0`.
- The Ubuntu build completed successfully.
- The generated output still contained `/home/runner/work/...` in OpenNext metadata/config.
- No documented `outputFileTracingRoot`, OpenNext config, or Wrangler setting was found that removes or normalizes these paths while preserving a supported artifact.
- The repository’s official issue/build examples also show runner absolute paths as normal OpenNext build output: https://github.com/opennextjs/opennextjs-cloudflare/issues/659
- Official project source and package guidance were reviewed: https://github.com/opennextjs/opennextjs-cloudflare

## Disallowed workarounds

- No manual handler wrapper.
- No stale artifact reuse.
- No forced dependency installation.
- No `--legacy-peer-deps`.
- No unsafe binary or metadata rewriting.

## Decision

**Blocked by tooling/acceptance criteria.** The artifact cannot be accepted under the project requirement that all CI-only paths be absent, and no supported configuration-based fix was identified. Production remains unchanged.

## Required external resolution

One of the following is required before deployment:

1. An official OpenNext option/version that emits path-portable metadata, or
2. A documented confirmation that these metadata-only paths are harmless and may be exempted from the release gate.
