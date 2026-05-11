# Integration Guide - Wallet to Admin Panel

## Step 1: Start the Admin Server

```bash
cd admin-panel/server
npm install
npm start
```

Server will run on port 3002.

## Step 2: Update Wallet Notification Function

In `gem-wallet/src/GemWallet.jsx`, modify the `notifyAdmin` function to send notifications to the admin server:

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

## Step 3: Deploy Admin Panel Mini App

1. Build the admin panel:
```bash
cd admin-panel
npm install
npm run build
```

2. Deploy the `dist` folder to your server (Vercel, Netlify, or custom server)

3. Create a Telegram Bot via @BotFather:
   - Create new bot
   - Get bot token
   - Create Mini App via @BotFather:
     - Use `/newapp`
     - Enter your deployed URL
     - Get Mini App URL

## Step 4: Configure Telegram Bot

1. Set up the bot with @BotFather:
   - `/mybots` → select your bot
   - `/setmenubutton` → configure to open Mini App

2. Only your userId (1192740493) will have access to the admin panel

## Step 5: Real Blockchain Integration

For real blockchain transactions, modify the server's withdraw/deposit endpoints to use:

- **ETH**: ethers.js with RPC node
- **BNB**: ethers.js with BSC RPC
- **SOL**: @solana/web3.js
- **TON**: @ton/ton

Example for ETH:
```javascript
const { ethers } = require('ethers');
const provider = new ethers.JsonRpcProvider('YOUR_RPC_URL');
const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);

async function sendETH(toAddress, amount) {
  const tx = await wallet.sendTransaction({
    to: toAddress,
    value: ethers.parseEther(amount.toString())
  });
  await tx.wait();
  return tx.hash;
}
```

## Security Notes

1. Never commit private keys
2. Use environment variables for sensitive data
3. Implement proper authentication
4. Add rate limiting
5. Use HTTPS in production
