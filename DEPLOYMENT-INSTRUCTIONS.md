# VDL Deployment Instructions (vdldigital.com)

## Current Status
- ✅ Code: Complete and committed to GitHub
- ✅ Landing page: public/audit.html (ready)
- ✅ Blog posts: content/blog/ (ready)
- ✅ GitHub Actions: Configured for auto-deployment
- ⏳ Cloudflare: Requires credentials setup

## Deployment to vdldigital.com

### Option 1: GitHub Actions Auto-Deploy (Recommended)

The repository is configured to deploy automatically on every push to `main` branch.

**Requirements:**
1. Cloudflare account with vdldigital.com domain
2. Two GitHub Secrets:
   - `CLOUDFLARE_API_TOKEN` - Get from Cloudflare Dashboard → Account Settings
   - `CLOUDFLARE_ACCOUNT_ID` - Get from Cloudflare Dashboard → Account Settings

**Setup Steps:**
1. Go to Cloudflare Dashboard
2. Copy your Account ID
3. Create API Token with Workers.dev permissions
4. Go to GitHub Repo → Settings → Secrets and variables → Actions
5. Add:
   - `CLOUDFLARE_API_TOKEN` = (your token)
   - `CLOUDFLARE_ACCOUNT_ID` = (your account ID)
6. Run GitHub Actions workflow manually or push to trigger

### Option 2: Manual Deployment

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Deploy to Cloudflare
npm run deploy
```

Requires Cloudflare credentials in environment:
```bash
export CLOUDFLARE_API_TOKEN=your_token
export CLOUDFLARE_ACCOUNT_ID=your_account_id
npm run deploy
```

### Option 3: Vercel Deployment (Temporary)

If Cloudflare isn't ready, deploy to Vercel instead:

```bash
npm install -g vercel
vercel --prod
```

This will give you a temporary URL like:
- https://vishwakarma-digital-labs.vercel.app

Later, point vdldigital.com domain to Vercel.

## What Gets Deployed

### Landing Page
- **File:** `public/audit.html`
- **URL:** vdldigital.com/audit
- **Function:** Lead capture form with Formspree integration

### Blog Posts (Auto-Publishing Oct 24-Nov 6)
- **Location:** `content/blog/`
- **Schedule:** GitHub Actions workflow in `.github/workflows/publish-blog.yml`
- **Posts:**
  - Oct 28: 5-website-mistakes-delhi-businesses.md
  - Oct 30: cost-of-inaction-slow-websites.md
  - Nov 1: case-study-fashion-brand-growth.md

### Production Smoke Tests
Deployment automatically tests these URLs:
- `/` (homepage)
- `/audit` (landing page)
- `/blog/*` (blog posts)

## Campaign Timeline

| Date | Action | Status |
|------|--------|--------|
| Oct 23 | Code committed ✅ | Complete |
| Oct 24 | Campaign launches, first posts go live | Ready |
| Oct 28 | Blog post #1 auto-publishes | Scheduled |
| Oct 30 | Blog post #2 auto-publishes | Scheduled |
| Nov 1 | Blog post #3 auto-publishes | Scheduled |
| Nov 6 | Campaign review & results | Planned |

## Troubleshooting

### Deployment fails in GitHub Actions
1. Check Cloudflare credentials are correct
2. Verify vdldigital.com is in Cloudflare account
3. Check API token has Workers.dev permissions
4. View GitHub Actions logs for specific error

### Site shows wrong content
1. Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
2. Wait 30 seconds for CDN to update
3. Check that latest commit was deployed

### Form not sending emails
1. Verify Formspree integration in `public/audit.html`
2. Check Formspree account is connected
3. Test form submission manually

## Domain Configuration

**For vdldigital.com to work:**

1. Domain must be pointed to Cloudflare
2. Cloudflare must be configured as:
   - Nameservers: Cloudflare nameservers
   - OR: CNAME pointing to Cloudflare Workers
3. Workers route configured in Cloudflare dashboard

## Next Steps

1. **Get Cloudflare credentials** (if not already setup)
2. **Add GitHub Secrets** for automatic deployment
3. **Push latest commit** to trigger deployment
4. **Verify vdldigital.com loads** within 2-3 minutes
5. **Test landing page form** by filling and submitting
6. **Oct 24: Launch campaign**

## Files Referenced

- `.github/workflows/deploy.yml` - Deployment automation
- `.github/workflows/publish-blog.yml` - Blog auto-publishing
- `wrangler.toml` - Cloudflare configuration
- `public/audit.html` - Landing page
- `content/blog/` - Blog posts
- `next.config.ts` - Next.js config
- `open-next.config.ts` - OpenNext config for Cloudflare

---

**Questions?** Check the GitHub Actions logs for detailed error messages.
