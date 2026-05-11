const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

// Data storage (in production, use a real database)
const DATA_FILE = path.join(__dirname, 'data.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({
    users: [],
    transactions: [],
    notifications: [],
    stats: {
      totalUsers: 0,
      totalBalance: 0,
      todayDeposits: 0,
      todayWithdrawals: 0
    }
  }, null, 2));
}

// Helper functions
const loadData = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (error) {
    console.error('Error loading data:', error);
    return { users: [], transactions: [], notifications: [], stats: {} };
  }
};

const saveData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error saving data:', error);
  }
};

const broadcast = (type, data) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type, data }));
    }
  });
};

// WebSocket connection handling
wss.on('connection', (ws) => {
  console.log('New admin connected');
  
  // Send initial data
  const data = loadData();
  ws.send(JSON.stringify({ type: 'init', data }));

  ws.on('message', (message) => {
    try {
      const parsed = JSON.parse(message);
      console.log('Received message:', parsed);
      
      // Handle different message types
      switch (parsed.type) {
        case 'refresh':
          const data = loadData();
          ws.send(JSON.stringify({ type: 'init', data }));
          break;
        case 'withdraw':
          handleWithdraw(parsed.data);
          break;
        case 'deposit':
          handleDeposit(parsed.data);
          break;
      }
    } catch (error) {
      console.error('Error handling message:', error);
    }
  });

  ws.on('close', () => {
    console.log('Admin disconnected');
  });
});

// API Routes
app.get('/api/users', (req, res) => {
  const data = loadData();
  res.json(data.users);
});

app.get('/api/stats', (req, res) => {
  const data = loadData();
  res.json(data.stats);
});

app.get('/api/notifications', (req, res) => {
  const data = loadData();
  res.json(data.notifications);
});

app.get('/api/transactions', (req, res) => {
  const data = loadData();
  res.json(data.transactions);
});

// Webhook for wallet notifications
app.post('/api/wallet/notification', (req, res) => {
  const { type, userId, userName, amount, currency, timestamp } = req.body;
  
  console.log('Received wallet notification:', req.body);
  
  const data = loadData();
  
  // Add notification
  const notification = {
    id: Date.now(),
    type,
    message: formatNotification(type, userName, amount, currency),
    time: new Date().toLocaleString(),
    userId,
    timestamp
  };
  
  data.notifications.unshift(notification);
  
  // Update stats based on notification type
  if (type === 'deposit') {
    data.stats.todayDeposits += amount || 0;
  } else if (type === 'withdrawal') {
    data.stats.todayWithdrawals += amount || 0;
  } else if (type === 'new_user') {
    data.stats.totalUsers += 1;
  }
  
  saveData(data);
  broadcast('notification', notification);
  broadcast('stats', data.stats);
  
  res.json({ success: true });
});

// Add or update user
app.post('/api/users', (req, res) => {
  const { userId, name, balances, address } = req.body;
  
  const data = loadData();
  const existingUserIndex = data.users.findIndex(u => u.id === userId);
  
  const totalBalance = Object.values(balances || {}).reduce((sum, bal) => sum + (parseFloat(bal) || 0), 0);
  
  const userData = {
    id: userId,
    name,
    balances,
    address,
    totalBalance,
    status: 'active',
    lastActivity: new Date().toLocaleString(),
    createdAt: new Date().toISOString()
  };
  
  if (existingUserIndex >= 0) {
    data.users[existingUserIndex] = { ...data.users[existingUserIndex], ...userData };
  } else {
    data.users.push(userData);
    data.stats.totalUsers += 1;
  }
  
  data.stats.totalBalance = data.users.reduce((sum, u) => sum + (u.totalBalance || 0), 0);
  
  saveData(data);
  broadcast('users', data.users);
  broadcast('stats', data.stats);
  
  res.json({ success: true });
});

// Withdraw from user
app.post('/api/withdraw', (req, res) => {
  const { userId, amount, currency, address } = req.body;
  
  const data = loadData();
  const userIndex = data.users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ success: false, error: 'User not found' });
  }
  
  const user = data.users[userIndex];
  
  if (user.totalBalance < amount) {
    return res.status(400).json({ success: false, error: 'Insufficient balance' });
  }
  
  // In production, this would execute a real blockchain transaction
  // For now, we'll simulate it
  
  user.totalBalance -= amount;
  if (user.balances) {
    user.balances[currency] = (user.balances[currency] || 0) - amount;
  }
  
  data.users[userIndex] = user;
  data.stats.totalBalance = data.users.reduce((sum, u) => sum + (u.totalBalance || 0), 0);
  data.stats.todayWithdrawals += amount;
  
  // Add transaction record
  const transaction = {
    id: Date.now(),
    type: 'withdrawal',
    userId,
    userName: user.name,
    amount,
    currency,
    address,
    status: 'completed',
    timestamp: new Date().toISOString()
  };
  
  data.transactions.unshift(transaction);
  
  saveData(data);
  broadcast('users', data.users);
  broadcast('stats', data.stats);
  broadcast('transaction', transaction);
  
  res.json({ success: true });
});

// Deposit to user
app.post('/api/deposit', (req, res) => {
  const { userId, amount, currency } = req.body;
  
  const data = loadData();
  const userIndex = data.users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({ success: false, error: 'User not found' });
  }
  
  const user = data.users[userIndex];
  
  user.totalBalance += amount;
  if (user.balances) {
    user.balances[currency] = (user.balances[currency] || 0) + amount;
  }
  
  data.users[userIndex] = user;
  data.stats.totalBalance = data.users.reduce((sum, u) => sum + (u.totalBalance || 0), 0);
  data.stats.todayDeposits += amount;
  
  // Add transaction record
  const transaction = {
    id: Date.now(),
    type: 'deposit',
    userId,
    userName: user.name,
    amount,
    currency,
    status: 'completed',
    timestamp: new Date().toISOString()
  };
  
  data.transactions.unshift(transaction);
  
  saveData(data);
  broadcast('users', data.users);
  broadcast('stats', data.stats);
  broadcast('transaction', transaction);
  
  res.json({ success: true });
});

function formatNotification(type, userName, amount, currency) {
  switch (type) {
    case 'new_user':
      return `New user registered: ${userName}`;
    case 'deposit':
      return `Deposit: $${amount} from ${userName}`;
    case 'withdrawal':
      return `Withdrawal: $${amount} from ${userName}`;
    default:
      return `Notification from ${userName}`;
  }
}

function handleWithdraw(data) {
  // Handle withdrawal request from WebSocket
  console.log('Processing withdrawal:', data);
}

function handleDeposit(data) {
  // Handle deposit request from WebSocket
  console.log('Processing deposit:', data);
}

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log(`Admin server running on port ${PORT}`);
  console.log(`WebSocket server ready`);
});
