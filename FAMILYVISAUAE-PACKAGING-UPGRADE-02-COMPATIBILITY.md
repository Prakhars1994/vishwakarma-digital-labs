# FamilyVisaUAE Packaging Upgrade — Slice 02: Compatibility Matrix

## Test matrix

| Candidate | Wrangler | Purpose | Allowed action |
|---|---:|---|---|
| Baseline | 4.120.0 | Reproduce current behavior | Build-only |
| Coordinated upgrade | 4.125+ | Satisfy OpenNext 1.20.9 peer requirement | Build-only |
| Latest compatible patch | version selected by npm lockfile | Test official fixes | Build-only |

## Procedure

1. Preserve the current branch and checkpoint.
2. Make dependency changes only in the isolated packaging test commit.
3. Run `npm ci` on Ubuntu.
4. Run `npx opennextjs-cloudflare build`.
5. Never trigger the production deploy workflow during this test.
6. Record package versions, lockfile changes, workflow run URL, duration, and result.

## Rejection rules

Reject a candidate if npm reports unresolved peer dependencies, the build stalls, the handler is missing/incomplete, required assets are absent, prices are missing, or CI paths remain.

## Rollback

If the candidate fails, retain the current production version and restore the packaging branch to the last validated source state. Do not force-install incompatible packages.
