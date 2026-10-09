# FamilyVisaUAE Official Preview Checkpoint — 2026-10-09

## Workflow

- Branch: `familyvisa-packaging-upgrade-test-20261008`
- Commit: `b24ffd3`
- Run: `37868283856`
- Preview command: `npx opennextjs-cloudflare preview --port 8787 --config wrangler.jsonc`
- Build and package validation: passed
- Metadata-only path exemption checks: passed

## Runtime result

The official OpenNext preview started successfully and returned the canonical homepage redirect, but the redirected request returned HTTP 500. The preview log reports:

`Unexpected loadManifest(/.next/server/preview-props.json) call!`

The stack originates in the generated OpenNext handler during `NextNodeServer.getPreviewProps`. The diagnostic artifact was uploaded as `preview-diagnostics` (run `37868283856`).

## Decision

**Blocked.** The supported preview runtime does not currently serve the fresh artifact successfully, so route smoke tests cannot pass. No release artifact was accepted and no deployment was attempted.

## Next requirement

Resolve the OpenNext/Next preview-props compatibility issue through an official supported version/configuration change, then rerun all route smoke tests. Production remains unchanged.
