# FamilyVisaUAE Scoped Release-Gate Smoke Test — 2026-10-09

## Workflow

- Branch: `familyvisa-packaging-upgrade-test-20261008`
- Commit: `9e5d226`
- Run: `37864461109`
- URL: https://github.com/Prakhars1994/vishwakarma-digital-labs/actions/runs/37864461109
- OpenNext build: passed
- Scoped metadata/configuration path check: passed
- Worker, handler, assets, and four required prices: passed

## Runtime smoke test

The workflow started local Wrangler preview and attempted the homepage plus required FamilyVisaUAE routes. The smoke step failed with curl exit code `22` before the artifact archive/upload step completed. Therefore no fresh release artifact was uploaded and no route result is accepted as a release result.

## Release decision

**Blocked. Do not deploy.** Production remains unchanged.

## Next investigation

Inspect the preview startup log and route response that caused curl 22, then rerun smoke tests with explicit readiness/error diagnostics. Do not weaken route checks or deploy around the failure.
