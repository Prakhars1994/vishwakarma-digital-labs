# FamilyVisaUAE Packaging Upgrade — Slice 04: Release Gate

## Before deployment

Confirm all of the following:

- The artifact was built from the current focused branch and commit.
- It is newer than the last saved artifact.
- The handler is genuine and complete.
- The worker imports only present modules/assets.
- No CI-only paths remain.
- All four homepage labels and prices are present.
- The build-only workflow passed.
- Unrelated files remain untouched.

## Live verification after approval

Only after packaging passes, verify HTTP 200 and expected content for:

- homepage
- `/calculators/family`
- `/services`
- `/fees`
- `/pro-services`
- `/amer-centres-near-me`
- `/contact`
- `/guides`
- `/checklist`

## Failure behavior

If packaging, deployment, or any live route check fails:

1. Do not promote the artifact.
2. Keep the last known-good production version live.
3. Save the exact failure evidence.
4. Record the next required external or technical action.

## Final checkpoint contents

The release checkpoint must list exact files changed, source commit, workflow run, artifact hashes/timestamp, route results, deployment version, live URL, and remaining differences/blockers.
