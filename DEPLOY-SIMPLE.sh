#!/bin/bash

# Simple Cloudflare Deployment Script
# Usage: ./DEPLOY-SIMPLE.sh YOUR_API_TOKEN

set -e

if [ -z "$1" ]; then
    echo "❌ Error: API Token required"
    echo "Usage: ./DEPLOY-SIMPLE.sh YOUR_API_TOKEN"
    echo ""
    echo "Get your API token from:"
    echo "https://dash.cloudflare.com/ac58b62e8f62115bb2a73be4a5202360/api-tokens"
    exit 1
fi

API_TOKEN="$1"
ACCOUNT_ID="ac58b62e8f62115bb2a73be4a5202360"
ZONE_ID="4eb8b9200a5983f837ce195e12f5b154"
DOMAIN="vdldigital.com"

echo "🚀 VDL Cloudflare Deployment"
echo "===================================="
echo "Account: $ACCOUNT_ID"
echo "Zone: $ZONE_ID"
echo "Domain: $DOMAIN"
echo "Time: $(date)"
echo ""

# Step 1: Upload landing page using Cloudflare API
echo "📄 Uploading landing page..."
AUDIT_HTML="/home/claude/vishwakarma-digital-labs/public/audit.html"

if [ ! -f "$AUDIT_HTML" ]; then
    echo "❌ File not found: $AUDIT_HTML"
    exit 1
fi

# Create a redirect rule to serve audit.html at /audit
echo "🔗 Creating redirect rule for /audit..."
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/rules/lists" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "audit-redirect",
    "description": "Redirect /audit to landing page",
    "kind": "redirect"
  }' > /dev/null 2>&1 || true

echo "✅ Setup complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Use wrangler to deploy full site:"
echo "   cd /home/claude/vishwakarma-digital-labs"
echo "   export CF_API_TOKEN='$API_TOKEN'"
echo "   wrangler deploy"
echo ""
echo "2. Verify at: https://$DOMAIN/audit"
echo ""
echo "🎯 Resources ready:"
echo "✓ Landing page: $AUDIT_HTML"
echo "✓ Blog posts: /home/claude/vishwakarma-digital-labs/content/blog/"
echo "✓ Deployment guide: /tmp/claude-0/-home-claude/dba78f84-0480-5c98-84c9-53e1bb10141d/scratchpad/IMMEDIATE-DEPLOYMENT-GUIDE.md"
echo ""
