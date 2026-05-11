# 🚀 Quick Start Guide - Gem Admin Panel

## 📋 Prerequisites

- Node.js 16+ installed
- Git installed
- GitHub account
- Telegram account

## ⚡ Quick Setup (5 minutes)

### 1. Install Dependencies

```bash
cd admin-panel
npm install
cd server
npm install
cd ..
```

### 2. Start Backend (Terminal 1)

```bash
cd admin-panel/server
npm start
```

Backend will start on `http://localhost:3002`

### 3. Start Frontend (Terminal 2)

```bash
cd admin-panel
npm run dev
```

Frontend will start on `http://localhost:3001`

### 4. Open in Browser

Navigate to `http://localhost:3001`

You should see the beautiful admin panel interface!

## 🎮 How to Use

### Dashboard Tab
- View total users, balance, deposits, withdrawals
- See recent activity
- Real-time statistics

### Users Tab
- View all registered users
- See their balances
- Check last activity
- Deposit/withdraw buttons (green/red arrows)

### Notifications Tab
- View all notifications
- New user registrations
- Deposits and withdrawals
- Real-time updates

## 🧪 Testing

### Test Backend API

```bash
# Get stats
curl http://localhost:3002/api/stats

# Get users
curl http://localhost:3002/api/users

# Add a test user
curl -X POST http://localhost:3002/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "123456789",
    "name": "Test User",
    "balances": {"ETH": 1.5, "USDT": 5000},
    "address": "0x123..."
  }'
```

### Test WebSocket Connection

Open browser console on `http://localhost:3001` and check for WebSocket connection logs.

## 📱 Deploy to Production

See `DEPLOYMENT.md` for detailed deployment instructions.

Quick deploy:
1. Push to GitHub
2. Connect to Vercel (frontend)
3. Connect to Render (backend)
4. Update environment variables
5. Configure Telegram Mini App

## 🔌 Connect to Wallet

In `gem-wallet/src/GemWallet.jsx`, update the notification function:

```javascript
async function notifyAdmin(message) {
  try {
    await fetch('http://localhost:3002/api/wallet/notification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'new_user',
        userId: getTgUserId(),
        userName: tgUser ? tgUser.username : 'Unknown',
        timestamp: Date.now()
      })
    });
  } catch (error) {
    console.error('Failed to notify admin:', error);
  }
}
```

Replace `localhost:3002` with your deployed backend URL in production.

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Add New Tabs

Edit `src/App.jsx`:
1. Add tab button in `TabButton` section
2. Add content in `AnimatePresence` section

### Add New Features

The backend API is easily extensible. Add new endpoints in `server/server.js`.

## 🐛 Common Issues

### Port already in use
```bash
# Kill process on port 3002 (Windows)
netstat -ano | findstr :3002
taskkill /PID <PID> /F

# (Mac/Linux)
lsof -ti:3002 | xargs kill -9
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### WebSocket not connecting
- Ensure backend is running
- Check firewall settings
- Verify correct URL in frontend

## 📞 Need Help?

1. Check console logs in browser
2. Check terminal logs for backend
3. Review `DEPLOYMENT.md` for deployment issues
4. Check GitHub issues for common problems

## 🎉 Next Steps

1. ✅ Test locally
2. ✅ Deploy to production
3. ✅ Connect Telegram bot
4. ✅ Integrate with wallet
5. ✅ Add real blockchain transactions
6. ✅ Add more features as needed

Enjoy your beautiful admin panel! 💎
