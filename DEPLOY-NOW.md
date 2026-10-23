# DEPLOY vdldigital.com - 3 STEPS

## STEP 1: Get Cloudflare Credentials (2 minutes)

Go to: https://dash.cloudflare.com/

Find:
- **Account ID**: Account settings (right sidebar)
- **Zone ID**: vdldigital.com domain → Overview tab
- **API Token**: Create from "My Profile" → API Tokens

## STEP 2: Run Deployment (1 command)

```bash
cd /home/claude/vishwakarma-digital-labs

export CLOUDFLARE_API_TOKEN="your-token-here"
export CLOUDFLARE_ACCOUNT_ID="your-account-id"
export CLOUDFLARE_ZONE_ID="your-zone-id"

./QUICK-DEPLOY.sh
```

That's it. Script handles everything:
- ✓ Validates credentials
- ✓ Prepares files
- ✓ Deploys to Cloudflare
- ✓ Tests links
- ✓ Shows status

## STEP 3: Verify Links (after 2-5 minutes)

```bash
curl https://vdldigital.com/audit
curl https://vdldigital.com/blog/5-website-mistakes
```

Should return HTML (200 status).

---

## LINKS AFTER DEPLOYMENT

✅ https://vdldigital.com/audit
✅ https://vdldigital.com/blog/5-website-mistakes
✅ https://github.com/Prakhars1994/vishwakarma-digital-labs

---

## IF DEPLOYMENT FAILS

**Error: "Missing credentials"**
- Make sure all 3 env variables are set
- Check values are correct (no extra spaces)

**Error: "Zone ID not found"**
- Verify vdldigital.com is in your Cloudflare account
- Check Zone ID is correct (copy-paste from dashboard)

**Error: "Deployment timeout"**
- Run again: `./QUICK-DEPLOY.sh`
- Wait 5-10 minutes for DNS to propagate

---

## TOTAL TIME: ~5 minutes

1. Get credentials: 2 min
2. Run script: 1 min
3. Wait & verify: 2 min

