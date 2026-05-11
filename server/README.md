# Gem Admin Panel Server

Backend server for the Gem Admin Panel Mini App.

## Features

- REST API for user management
- WebSocket for real-time updates
- Webhook for wallet notifications
- Transaction processing
- Data persistence (JSON file - upgrade to database for production)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### GET /api/users
Get all users

### GET /api/stats
Get platform statistics

### GET /api/notifications
Get all notifications

### GET /api/transactions
Get all transactions

### POST /api/users
Add or update a user
```json
{
  "userId": "123456789",
  "name": "User Name",
  "balances": {
    "ETH": 1.5,
    "USDT": 5000
  },
  "address": "0x..."
}
```

### POST /api/withdraw
Withdraw from user
```json
{
  "userId": "123456789",
  "amount": 1000,
  "currency": "USDT",
  "address": "0x..."
}
```

### POST /api/deposit
Deposit to user
```json
{
  "userId": "123456789",
  "amount": 1000,
  "currency": "USDT"
}
```

### POST /api/wallet/notification
Webhook for wallet notifications
```json
{
  "type": "new_user|deposit|withdrawal",
  "userId": "123456789",
  "userName": "username",
  "amount": 1000,
  "currency": "USDT",
  "timestamp": 1234567890
}
```

## WebSocket

Connect to `ws://localhost:3002` for real-time updates.

Message types:
- `refresh` - Request data refresh
- `withdraw` - Process withdrawal
- `deposit` - Process deposit

Server broadcasts:
- `init` - Initial data
- `users` - User list update
- `stats` - Statistics update
- `notification` - New notification
- `transaction` - New transaction

## Production Notes

For production:
1. Replace JSON file storage with PostgreSQL/MongoDB
2. Add authentication middleware
3. Implement proper blockchain transaction execution
4. Add rate limiting
5. Add error logging and monitoring
