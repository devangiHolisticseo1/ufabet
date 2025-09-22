# Domain Configuration Guide

## Canonical Link Issue - FIXED ✅

The canonical link issue has been resolved. Previously, your application was pointing to `https://www.ufabet.com/` (external domain) instead of your own domain.

## What Was Changed

### 1. Layout.js Metadata
- Fixed `metadataBase` to use your domain
- Updated `openGraph.url` to use your domain  
- Fixed `alternates.canonical` to use your domain

### 2. Sitemap Configuration
- Updated `next-sitemap.config.js` to use correct domain
- Regenerated sitemap and robots.txt files

### 3. Environment Variables
Created `.env.local` with proper configuration:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PRODUCTION_URL=https://your-domain.com
NODE_ENV=development
```

### 4. URL Utility Functions
Created `src/lib/urls.js` for consistent URL handling across the app.

## For Development (Current)
- Canonical URLs point to: `http://localhost:3000`
- Sitemap uses: `http://localhost:3000`

## For Production Deployment

### Step 1: Update Environment Variables
Update `.env.local` or your hosting platform's environment variables:
```env
NEXT_PUBLIC_PRODUCTION_URL=https://your-actual-domain.com
NODE_ENV=production
```

### Step 2: Replace "your-domain.com" 
In these files, replace `https://your-domain.com` with your actual domain:
- `src/lib/urls.js`
- `.env.local`

### Step 3: Rebuild and Deploy
```bash
npm run build
```

This will automatically generate correct:
- Canonical links pointing to your domain
- Sitemap with your domain
- robots.txt with your domain

## Verification

After deployment, check:
1. View page source - canonical link should point to your domain
2. Visit `/robots.txt` - should show your domain
3. Visit `/sitemap.xml` - should show your domain
4. Google Search Console should not show canonical errors

## Current Status
✅ Canonical link points to correct domain (localhost for development)
✅ Sitemap generated with correct URLs
✅ Robots.txt updated with correct domain
✅ Environment-based URL handling implemented
✅ Utility functions for consistent URL generation

The canonical link error you saw should now be resolved!