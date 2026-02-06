# Deployment Guide

This guide covers how to deploy the portfolio to Firebase Hosting.

## Step 1: Check if Firebase CLI is Installed

First, verify if Firebase CLI is already installed:

```bash
firebase --version
```

**If you see a version number** (e.g., `15.5.1`), proceed to [Step 2: Login to Firebase](#step-2-login-to-firebase).

**If you get an error** like `command not found`, proceed to [Install Firebase CLI](#install-firebase-cli) below.

---

## Install Firebase CLI

If Firebase CLI is not installed, install it globally:

```bash
npm install -g firebase-tools
```

**Alternative:** If you prefer not to install globally, you can use `npx` instead (no installation needed):
```bash
npx firebase-tools [command]
```

After installation, verify it works:
```bash
firebase --version
```

Then proceed to [Step 2: Login to Firebase](#step-2-login-to-firebase).

---

## Step 2: Login to Firebase

Authenticate with your Firebase account:

```bash
firebase login
```

This will open a browser window for you to sign in with your Google account. Make sure you're logged in with the account that has access to the Firebase project.

**If browser doesn't open automatically:**
```bash
firebase login --no-localhost
```
This will provide a code you can paste in your browser.

**If you get authentication errors** (401 Unauthenticated):
```bash
firebase logout
firebase login
```

---

## Step 3: Build and Deploy

Build your React app and deploy to Firebase:

```bash
npm run build && firebase deploy
```

This will:
1. Create an optimized production build in the `build/` directory
2. Deploy the built files to Firebase Hosting

**Alternative:** Deploy only hosting (if you have other Firebase services):
```bash
npm run build && firebase deploy --only hosting
```

---

## Verify Deployment

After deployment, you'll see output with:
- **Project Console**: Link to your Firebase project
- **Hosting URL**: Your Firebase hosting URL (e.g., `https://portfolio-24322.web.app`)

Your site should be live immediately at both:
- Firebase hosting URL: `https://portfolio-24322.web.app`
- Custom domain: `https://dannysanchez.dev` (if already connected)

**Note:** If you just deployed, you may need to hard refresh your browser (`Cmd+Shift+R` on Mac, `Ctrl+Shift+R` on Windows) to see the latest changes.

---

## Verify Custom Domain Connection

To confirm that your custom domain `dannysanchez.dev` is connected to Firebase:

### Option 1: Check Firebase Console (Easiest)

1. Go to: https://console.firebase.google.com/project/portfolio-24322/hosting
2. Scroll to the "Domains" section
3. You should see your custom domain listed with a "Connected" status:
   - `dannysanchez.dev` - Status: "Connected" (Custom)
   - `www.dannysanchez.dev` - Status: "Connected" with "Redirect → dannysanchez.dev" (if configured)

### Option 2: Using Firebase CLI

```bash
firebase hosting:sites:list
```

Your custom domain should appear in the list once connected.

### Option 3: Verify Live Site

- Visit your custom domain: `https://dannysanchez.dev`
- If it loads your Firebase-hosted site, the domain is connected

---

## Troubleshooting

### Firebase CLI Not Found

If `firebase` command is not recognized:
- Make sure Firebase CLI is installed: `npm install -g firebase-tools`
- Verify installation: `firebase --version`
- If using npx: `npx firebase-tools --version`

### Authentication Errors

If you get `401 Unauthenticated` errors:
1. Log out: `firebase logout`
2. Log back in: `firebase login`
3. Verify: `firebase projects:list`

### Project Not Found

If the project ID in `.firebaserc` doesn't match your Firebase project:
1. Check your Firebase console: https://console.firebase.google.com/
2. Find your project ID
3. Update `.firebaserc` with the correct project ID, or run:
   ```bash
   firebase use --add
   ```

### Build Errors

If `npm run build` fails:
- Check for linting errors
- Ensure all dependencies are installed: `npm install`
- Check Node.js version compatibility

---

## Quick Reference

**Complete deployment workflow:**
```bash
firebase --version  # Check if installed
npm install -g firebase-tools  # Install if needed
firebase login  # Authenticate
npm run build && firebase deploy  # Build and deploy
```

**Current project configuration:**
- Project ID: `portfolio-24322`
- Custom domain: `dannysanchez.dev` (already connected)

---

## Additional Resources

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [Firebase Custom Domain Setup](https://firebase.google.com/docs/hosting/custom-domain)
- [Firebase CLI Reference](https://firebase.google.com/docs/cli)
