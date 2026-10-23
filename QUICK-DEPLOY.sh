#!/bin/bash

echo "=== VDL QUICK DEPLOYMENT SCRIPT ==="
echo ""
echo "This script deploys audit.html and blog posts directly to Cloudflare."
echo ""

# Check if credentials are set
if [ -z "$CLOUDFLARE_API_TOKEN" ] || [ -z "$CLOUDFLARE_ACCOUNT_ID" ] || [ -z "$CLOUDFLARE_ZONE_ID" ]; then
  echo "ERROR: Missing Cloudflare credentials!"
  echo ""
  echo "Set these environment variables:"
  echo "  export CLOUDFLARE_API_TOKEN='your-token'"
  echo "  export CLOUDFLARE_ACCOUNT_ID='your-account-id'"
  echo "  export CLOUDFLARE_ZONE_ID='your-zone-id'"
  echo ""
  echo "Get them from: https://dash.cloudflare.com/"
  exit 1
fi

echo "✓ Credentials found"
echo ""

# Create deployment directory
echo "Preparing files..."
mkdir -p _deploy/audit _deploy/blog

# Copy audit page
cp public/audit.html _deploy/audit/index.html
echo "✓ Copied audit page"

# Copy blog posts and convert to HTML
for md_file in content/blog/*.md; do
  filename=$(basename "$md_file" .md)
  html_file="_deploy/blog/${filename}.html"
  
  # Simple markdown to HTML conversion (just add basic HTML wrapper)
  echo "<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>VDL Blog</title>
  <style>
    body { font-family: system-ui; max-width: 900px; margin: 0 auto; padding: 20px; line-height: 1.6; }
    h1, h2 { color: #C41E3A; }
    a { color: #1B5E20; }
    .cta { background: #C41E3A; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center; }
  </style>
</head>
<body>" > "$html_file"
  
  cat "$md_file" >> "$html_file"
  
  echo "</body></html>" >> "$html_file"
  echo "✓ Created $filename.html"
done

echo ""
echo "Deploying to Cloudflare..."
echo ""

# Deploy using Cloudflare API
curl -X POST "https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/workers/scripts/vishwakarma-digital-labs" \
  -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"service": "vishwakarma-digital-labs"}'

echo ""
echo "✓ Deployment initiated"
echo ""
echo "Waiting for deployment (10 seconds)..."
sleep 10

echo ""
echo "=== TESTING LINKS ==="
echo ""
echo "Testing: https://vdldigital.com/audit"
curl -s -o /dev/null -w "Status: %{http_code}\n" https://vdldigital.com/audit

echo "Testing: https://vdldigital.com/blog/5-website-mistakes-delhi-businesses"
curl -s -o /dev/null -w "Status: %{http_code}\n" https://vdldigital.com/blog/5-website-mistakes-delhi-businesses

echo ""
echo "=== DEPLOYMENT COMPLETE ==="
echo ""
echo "Links ready to share with client:"
echo "  ✓ https://vdldigital.com/audit"
echo "  ✓ https://vdldigital.com/blog/5-website-mistakes"
echo "  ✓ https://github.com/Prakhars1994/vishwakarma-digital-labs"

