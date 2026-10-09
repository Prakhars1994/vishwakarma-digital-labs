# FamilyVisaUAE Preview Harness Checkpoint — 2026-10-09

## Diagnosis

Workflow run `37866104323` failed because the smoke harness invoked `wrangler dev` directly. The Worker started, but the homepage returned HTTP 500 with:

`Unexpected loadManifest(/.next/server/preview-props.json) call!`

The failure occurred in the generated OpenNext handler during preview initialization.

## Supported correction

OpenNext’s official Cloudflare CLI guidance says to use `opennextjs-cloudflare preview`, which launches the supported preview flow around Wrangler. The isolated workflow was changed from:

`npx wrangler dev --local --port 8787 --config wrangler.jsonc`

to:

`npx opennextjs-cloudflare preview --port 8787 --config wrangler.jsonc`

Local commit: `b8cea1a`.

## Current status

- The corrected commit has not yet been confirmed on the remote branch.
- A new Ubuntu workflow run has not been completed with the corrected command.
- No artifact was accepted and no deployment was attempted.
- Production remains unchanged.

## Next action

Complete the remote push, rerun the build-only workflow, collect final route statuses, and archive the fresh artifact only if all smoke tests pass.
