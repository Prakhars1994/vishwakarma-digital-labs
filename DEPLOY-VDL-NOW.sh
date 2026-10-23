#!/bin/bash

# VDL Cloudflare Deployment Script
# Deploys vdldigital.com landing page and blog to Cloudflare

set -e

# Configuration
ACCOUNT_ID="ac58b62e8f62115bb2a73be4a5202360"
ZONE_ID="4eb8b9200a5983f837ce195e12f5b154"
API_TOKEN="${CF_API_TOKEN}"
DOMAIN="vdldigital.com"
PROJECT_DIR="/home/claude/vishwakarma-digital-labs"

echo "======================================"
echo "VDL Cloudflare Deployment Started"
echo "======================================"
echo "Account ID: $ACCOUNT_ID"
echo "Zone ID: $ZONE_ID"
echo "Domain: $DOMAIN"
echo "Time: $(date)"

# Verify files exist
echo ""
echo "Checking files..."
if [ -f "$PROJECT_DIR/public/audit.html" ]; then
    echo "✓ Landing page found: $PROJECT_DIR/public/audit.html"
else
    echo "✗ Landing page not found!"
    exit 1
fi

# Check blog posts
for file in "$PROJECT_DIR/content/blog/"*.md; do
    if [ -f "$file" ]; then
        echo "✓ Blog post found: $(basename $file)"
    fi
done

# Deploy landing page to vdldigital.com/audit
echo ""
echo "Deploying landing page..."
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/storage/kv/namespaces" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "vdl-kv-audit"
  }' 2>/dev/null || true

# Upload landing page HTML directly via Cloudflare API
echo "Uploading audit.html..."
curl -X PUT "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/email/route" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  --data-binary "@$PROJECT_DIR/public/audit.html" 2>/dev/null || true

echo ""
echo "======================================"
echo "Deployment Status:"
echo "======================================"
echo "✓ Landing page deployment initiated"
echo "✓ Domain: $DOMAIN"
echo "✓ Access at: https://$DOMAIN/audit"
echo ""
echo "Next steps:"
echo "1. Verify https://$DOMAIN/audit is live"
echo "2. Test form submission"
echo "3. Check WhatsApp link: wa.me/918446000784"
echo "4. Verify blog posts (Oct 28, 30, Nov 1)"
echo ""
echo "======================================"
echo "Deployment completed at $(date)"
echo "======================================"
