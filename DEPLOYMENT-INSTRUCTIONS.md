# VDL Deployment Instructions - vdldigital.com

## ⚠️ PREREQUISITE

You need:
- Cloudflare account with vdldigital.com domain
- Cloudflare API token
- npm installed locally

---

## STEP 1: Get Your Cloudflare Credentials

1. Go to: https://dash.cloudflare.com/
2. Select vdldigital.com domain
3. Go to **Settings → API Tokens**
4. Create token with:
   - **Zone:DNS** read
   - **Zone:Workers Routes** edit
   - **Account:Workers KV** write
5. Copy the token

---

## STEP 2: Set Environment Variables

Run locally on your machine:

```bash
export CLOUDFLARE_API_TOKEN="your-api-token-here"
export CLOUDFLARE_ACCOUNT_ID="your-account-id-from-dashboard"
export CLOUDFLARE_ZONE_ID="your-zone-id-for-vdldigital.com"
```

Find these values:
- **Account ID**: Cloudflare dashboard → Account settings
- **Zone ID**: Cloudflare dashboard → Domain → Overview (right sidebar)

---

## STEP 3: Update wrangler.toml

Update the file with your credentials:

```bash
# Replace with your actual values
sed -i 's/account_id = ""/account_id = "YOUR-ID"/' wrangler.toml
sed -i 's/zone_id = ""/zone_id = "YOUR-ZONE-ID"/' wrangler.toml
```

---

## STEP 4: Install & Build

```bash
npm install
npm run build
```

---

## STEP 5: Deploy to Cloudflare

```bash
npm run deploy
```

---

## STEP 6: Verify Deployment

Test these URLs (after 5-10 minutes):
- https://vdldigital.com/audit
- https://vdldigital.com/blog/5-website-mistakes
- https://github.com/Prakhars1994/vishwakarma-digital-labs

---

## QUICK START (One Command)

If you have credentials ready:

```bash
cd /home/claude/vishwakarma-digital-labs
export CLOUDFLARE_API_TOKEN="your-token"
export CLOUDFLARE_ACCOUNT_ID="your-account-id"
export CLOUDFLARE_ZONE_ID="your-zone-id"
npm install && npm run build && npm run deploy
```

---

**Timeline:** Complete before Oct 24 campaign launch.
