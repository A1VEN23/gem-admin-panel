# Gem Admin Panel - Telegram Mini App

Beautiful admin panel for managing Gem Wallet users and balances.

## 🚀 Quick Deploy

### 1. Deploy Backend on Render
1. Create repository: https://github.com/A1VEN23/gem-admin-server
2. Go to [render.com](https://render.com)
3. Create Web Service
4. Connect repository: `gem-admin-server`
5. Build Command: `npm install`
6. Start Command: `node server.js`
7. Environment Variables:
   - `PORT`: `3002`
   - `NODE_ENV`: `production`

### 2. Deploy Frontend on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import repository: `gem-admin-panel`
3. Environment Variables:
   - `VITE_API_URL`: `https://your-backend-url.onrender.com`

### 3. Setup Telegram Mini App
1. Open @BotFather in Telegram
2. Create bot: `/newbot`
3. Create Mini App: `/newapp`
4. Enter your Vercel URL
5. Set menu button: `/setmenubutton`

## 📱 Features

- 🎨 Beautiful UI with smooth animations
- 📊 Real-time dashboard with statistics
- 👥 User management
- 💰 Balance tracking
- 🔔 Real-time notifications
- 💸 Withdraw and deposit functionality

## 🔗 Links

- Frontend: https://github.com/A1VEN23/gem-admin-panel
- Backend: https://github.com/A1VEN23/gem-admin-server
- Demo: https://gem-admin-panel.vercel.app (after deployment)

## 📞 Support

Check the deployment logs if you encounter issues.
