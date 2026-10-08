# FamilyVisaUAE Packaging Checkpoint — 2026-10-08

## Scope

Packaging validation only. No production deployment was attempted. Unrelated dirty files and projects were preserved.

## Source state

- Repository: `Prakhars1994/vishwakarma-digital-labs`
- Branch: `familyvisa-route-fix-20261008`
- HEAD: `750ddb2992708d4c8df7e8fd27d6f275373e6ff8`
- Route-fix parent: `8d056e7e55bb22f1c49f4cdfd29c47201bfd53d4`
- Focused changes: explicit FamilyVisaUAE family calculator route and the non-deploying Ubuntu packaging workflow/check.
- No unrelated files were staged or committed.

## Ubuntu packaging runs

### Run 37745116975 (commit `bd1ce99`)

- Ubuntu `ubuntu-latest`, Node 22, `npm ci`, and `npx opennextjs-cloudflare build`: passed.
- Worker: present.
- Handler: present and complete (`7,540,556` bytes in downloaded artifact).
- Assets: 86 files.
- Required route labels/prices: all found.
- Artifact archive timestamp: 2026-10-08 13:16:16 Asia/Calcutta.
- Downloaded GitHub artifact ZIP SHA-256: `35AF53F38F5F32D8BEC5DE4A378D4796B3127747EDCFBB130DB01A4995E75DB0`.

Local content inspection confirmed:

- `.open-next/worker.js`: present, 2,278 bytes.
- `.open-next/server-functions/default/handler.mjs`: present, 7,540,556 bytes.
- `.open-next/assets`: 86 files.
- `Family / Dependent Visa`, `AED 1,103`, `AED 3,864`, `AED 6,311`, and `AED 1,029`: present.
- CI-only paths: **present** in generated metadata/config, including `/home/runner/work/vishwakarma-digital-labs/vishwakarma-digital-labs`.

### Run 37745698347 (commit `750ddb2`)

- Re-ran the same Ubuntu build with a corrected binary-safe CI-path check.
- Build and package creation completed, but validation failed intentionally because `/home/runner/work/` paths were detected.
- No artifact was uploaded from the failed validation run.

## Packaging status

**Blocked — do not deploy.** The genuine fresh artifact contains CI build-machine paths in generated OpenNext metadata/config. The required “no `/home/runner/work/...` paths” acceptance check therefore fails. The handler and required prices are present, but the artifact is not yet release-valid under the documented runbook.

## Production status

- Deployment: not attempted.
- Production remains on the last known-good version.
- No live route verification was performed in this packaging-only phase.

## Next required fix

Adjust the Ubuntu packaging configuration/build so OpenNext emits portable paths (or otherwise produces a supported path-free artifact without manually wrapping or fabricating the handler), then rerun the build-only workflow. Deploy only after that check passes.

## Follow-up investigation — 2026-10-08

- Installed OpenNext version: `1.20.2`.
- Latest npm release checked: `1.20.9`.
- Attempted supported package-only upgrade: rejected by npm dependency resolution because OpenNext `1.20.9` requires Wrangler `^4.125.0`, while this project pins Wrangler `4.120.0`.
- No `--force` or `--legacy-peer-deps` override was used.
- No package files, customer-facing source, or production deployment were changed by this attempt.
- Current blocker remains: a supported, path-free OpenNext build configuration or a coordinated OpenNext/Wrangler upgrade must be selected and tested before deployment.
