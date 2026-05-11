# 🚀 Deployment Guide - Free Hosting

## 📋 Overview

This guide will help you deploy both the Admin Panel Frontend and Backend on free hosting platforms.

## 🎯 Free Hosting Options

### Frontend (React App)
- **Vercel** (Recommended) - Free, automatic deployments, custom domains
- **Netlify** - Free, easy to use, CDN
- **GitHub Pages** - Free, static hosting

### Backend (Node.js Server)
- **Render** - Free tier, supports websockets
- **Railway** - Free tier, easy setup
- **Fly.io** - Free tier, global deployment

## 📦 Step-by-Step Deployment

### Option 1: Vercel (Frontend) + Render (Backend) - RECOMMENDED

#### Step 1: Deploy Backend on Render

1. **Create a GitHub repository** for your admin panel
2. **Push the code to GitHub:**
```bash
cd admin-panel
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gem-admin-panel.git
git push -u origin main
```

3. **Go to [render.com](https://render.com)** and sign up
4. **Create a new Web Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the `admin-panel` folder
   - **Root directory:** `server`
   - **Build command:** `npm install`
   - **Start command:** `node server.js`
   - **Environment variables:**
     - `PORT`: `3002`
   - Click "Create Web Service"

5. **Get your Render URL** (e.g., `https://gem-admin-server.onrender.com`)

#### Step 2: Deploy Frontend on Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up
2. **Import your GitHub repository**
3. **Configure the project:**
   - **Framework Preset:** Vite
   - **Root directory:** `admin-panel`
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Environment variables:**
     - `VITE_API_URL`: `https://your-render-url.onrender.com`
4. **Click "Deploy"**

5. **Get your Vercel URL** (e.g., `https://gem-admin.vercel.app`)

#### Step 3: Configure Telegram Mini App

1. **Open @BotFather in Telegram**
2. **Create a new bot:**
   - `/newbot`
   - Name: `Gem Admin Bot`
   - Username: `gem_admin_bot`
   - Save the bot token

3. **Create Mini App:**
   - `/newapp`
   - Select your bot
   - Enter your Vercel URL: `https://gem-admin.vercel.app`
   - Get the Mini App URL

4. **Set menu button:**
   - `/mybots` → select your bot
   - `/setmenubutton` → "Open Mini App" → select your app

### Option 2: Railway (Both Frontend + Backend)

1. **Go to [railway.app](https://railway.app)**
2. **Create a new project**
3. **Deploy Backend:**
   - Click "New Service" → "Deploy from GitHub repo"
   - Select your repository
   - Root directory: `server`
   - Command: `node server.js`
4. **Deploy Frontend:**
   - Click "New Service" → "Deploy from GitHub repo"
   - Select your repository
   - Root directory: `admin-panel`
   - Command: `npm run build && npm run preview`
5. **Get the public URLs from Railway**

### Option 3: Fly.io (Backend) + Vercel (Frontend)

1. **Install Fly CLI:**
```bash
npm install -g flyctl
```

2. **Deploy Backend:**
```bash
cd admin-panel/server
flyctl launch
flyctl deploy
```

3. **Deploy Frontend on Vercel** (same as Option 1)

## 🔧 Configuration Updates

### Update Frontend API URL

In `admin-panel/src/App.jsx`, update the API URL to your deployed backend:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'https://your-render-url.onrender.com';
```

### Update Wallet Notification URL

In `gem-wallet/src/GemWallet.jsx`, update the webhook URL:

```javascript
await fetch('https://your-render-url.onrender.com/api/wallet/notification', {
  method: 'POST',
  // ...
});
```

## 🧪 Testing the Deployment

### 1. Test Backend
```bash
curl https://your-backend-url.onrender.com/api/stats
```

### 2. Test Frontend
- Open your Vercel URL in browser
- Should see the admin panel interface

### 3. Test Telegram Mini App
- Open your bot in Telegram
- Click the menu button
- Mini App should open

## 📝 Environment Variables

### Backend (.env)
```
PORT=3002
NODE_ENV=production
```

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-url.onrender.com
```

## 🔒 Security Notes

1. **Never commit API keys or secrets**
2. **Use environment variables for sensitive data**
3. **Enable HTTPS** (automatic on Vercel/Render)
4. **Add rate limiting** in production
5. **Implement authentication** for admin access

## 📊 Monitoring

### Free Tier Limits
- **Vercel:** 100GB bandwidth/month
- **Render:** 750 hours/month
- **Railway:** $5 free credit/month
- **Fly.io:** 3 VMs with 256MB RAM

### Upgrade to Paid if:
- High traffic expected
- Need more storage
- Need faster response times
- Need dedicated resources

## 🐛 Troubleshooting

### Backend not starting
- Check logs in Render/Railway dashboard
- Ensure `package.json` has correct scripts
- Verify environment variables

### Frontend build errors
- Check Vercel deployment logs
- Ensure all dependencies are in package.json
- Verify build command

### WebSocket connection issues
- Ensure backend supports websockets (Render does)
- Check firewall settings
- Verify correct URL protocol (ws:// or wss://)

## 📞 Support

If you encounter issues:
1. Check deployment logs
2. Review error messages
3. Verify environment variables
4. Test locally first

## 🎉 Success!

Once deployed:
- Backend will be accessible at your Render URL
- Frontend will be accessible at your Vercel URL
- Telegram Mini App will open from your bot
- Real-time updates will work via WebSocket
