# Render Deployment Guide - Omar Telecom (عمر للاتصالات)

This guide explains how to deploy Omar Telecom to Render as a static site.

## Prerequisites

1. GitHub repository: `https://github.com/FLANsa/omar-telecom` (or your repo)
2. Render account
3. Firebase project: **Omar telecom** (`omar-telecom-682ac`) configured

## Deployment Steps

### 1. Create New Static Site on Render

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Static Site"
3. Connect your GitHub account if not already connected
4. Select repository: `omar-telecom` (or your repository name)

### 2. Configure Static Site Settings

**Basic Settings:**
- **Name**: `omar-telecom`
- **Branch**: `main`
- **Root Directory**: Leave empty (uses repository root)
- **Build Command**: Leave empty (no build required)
- **Publish Directory**: `./` (root directory)

**Advanced Settings:**
- **Node Version**: 18.x (if needed)
- **Environment**: Production

### 3. Environment Variables (Optional)

The app reads Firebase config from `js/firebase-config-cdn.js` (project: **omar-telecom-682ac**). Environment variables are not used for Firebase in the current setup. If you later add build-time overrides, use your Omar telecom project values:

- **Project ID**: `omar-telecom-682ac`
- **Auth Domain**: `omar-telecom-682ac.firebaseapp.com`
- **Storage Bucket**: `omar-telecom-682ac.firebasestorage.app`
- **Project Number**: `357723312982`
- **Web App ID**: `1:357723312982:web:a7fbe2c0e1f55f545ffcf7`

### 4. Deploy

1. Click "Create Static Site"
2. Render will automatically:
   - Clone your repository
   - Deploy the static files
   - Provide a public URL

### 5. Custom Domain (Optional)

1. Go to your static site settings
2. Click "Custom Domains"
3. Add your domain
4. Update DNS records as instructed

## File Structure for Static Deployment

```
omar-telecom/
├── index.html              # Main entry point
├── login.html              # Login page
├── dashboard.html          # Dashboard
├── add_new_phone.html      # Add new phone
├── add_used_phone.html     # Add used phone
├── add_accessory.html      # Add accessory
├── create_sale.html        # Create sale
├── list_sales.html         # List sales
├── inventory_summary.html  # Inventory summary
├── search.html             # Search
├── js/                     # JavaScript files
│   ├── firebase-config-cdn.js  # Firebase configuration (Omar telecom)
│   ├── firebase-database-cdn.js
│   ├── main.js             # Main application logic
│   └── ...                 # Other JS files
├── _redirects              # SPA routing rules
├── render.yaml             # Render configuration
└── package.json            # Dependencies
```

## Important Notes

1. **Firebase Configuration**: The app is wired to Firebase project **omar-telecom-682ac** (Omar telecom). Config is in `js/firebase-config-cdn.js`.
2. **CORS Settings**: Ensure Firebase allows your Render domain in the Firebase Console.
3. **Authentication**: Configure Firebase Auth for your domain if using Firebase Auth.
4. **Storage Rules**: Update Firebase Storage rules if needed.

## Troubleshooting

### Common Issues:

1. **404 Errors**: Check `_redirects` file for SPA routing
2. **Firebase Connection**: Verify `js/firebase-config-cdn.js` uses project `omar-telecom-682ac`
3. **CORS Errors**: Update Firebase CORS settings
4. **Build Failures**: Check build logs in Render dashboard

### Debug Steps:

1. Check Render build logs
2. Verify all files are in the correct directory
3. Test Firebase connection locally
4. Check browser console for errors (and for the Firebase projectId check message)

## Post-Deployment

1. Test all functionality
2. Verify Firebase integration (omar-telecom-682ac)
3. Check mobile responsiveness
4. Test user authentication
5. Verify data persistence

## Monitoring

- Use Render's built-in monitoring
- Check Firebase Analytics (Omar telecom project)
- Monitor error logs
- Track performance metrics

---

**Deployment URL**: Will be provided by Render after successful deployment  
**Firebase Project**: Omar telecom (`omar-telecom-682ac`)
