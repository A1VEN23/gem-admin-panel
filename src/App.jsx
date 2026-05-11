import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBalance: 0,
    todayDeposits: 0,
    todayWithdrawals: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
      tg.setHeaderColor('#000000');
      tg.setBackgroundColor('#000000');
    }
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    // Mock data - will be replaced with API calls
    setTimeout(() => {
      setUsers([
        { id: 1, name: 'Alex', balance: 15420, currency: 'USD', status: 'active', lastActivity: '2 min ago' },
        { id: 2, name: 'Maria', balance: 18200, currency: 'USD', status: 'active', lastActivity: '5 min ago' },
        { id: 3, name: 'John', balance: 12300, currency: 'USD', status: 'active', lastActivity: '10 min ago' },
        { id: 4, name: 'Sophie', balance: 16750, currency: 'USD', status: 'active', lastActivity: '15 min ago' },
      ]);
      setStats({
        totalUsers: 1247,
        totalBalance: 18945000,
        todayDeposits: 234000,
        todayWithdrawals: 89000
      });
      setNotifications([
        { id: 1, type: 'new_user', message: 'New user registered: @dmitry_k', time: '2 min ago' },
        { id: 2, type: 'deposit', message: 'Deposit: $5000 from @alex_petrov', time: '5 min ago' },
        { id: 3, type: 'withdrawal', message: 'Withdrawal: $2000 to @maria_ivanova', time: '10 min ago' },
      ]);
      setLoading(false);
    }, 1000);
  };

  const TabButton = ({ id, label, isActive }) => (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        padding: '16px 20px',
        border: 'none',
        background: isActive ? '#2563eb' : 'transparent',
        color: isActive ? '#ffffff' : '#9ca3af',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        borderRadius: '12px',
        transition: 'all 0.2s',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}
    >
      {label}
    </button>
  );

  const StatCard = ({ title, value, change }) => (
    <div style={{
      background: '#111111',
      border: '1px solid #1f2937',
      borderRadius: '16px',
      padding: '20px',
      flex: 1
    }}>
      <div style={{
        color: '#9ca3af',
        fontSize: '12px',
        fontWeight: '500',
        marginBottom: '8px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}>
        {title}
      </div>
      <div style={{
        color: '#ffffff',
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '4px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}>
        {value}
      </div>
      {change && (
        <div style={{
          color: change > 0 ? '#10b981' : '#ef4444',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}>
          {change > 0 ? '+' : ''}{change}%
        </div>
      )}
    </div>
  );

  const UserCard = ({ user }) => (
    <div style={{
      background: '#111111',
      border: '1px solid #1f2937',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div>
        <div style={{
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '4px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}>
          {user.name}
        </div>
        <div style={{
          color: '#9ca3af',
          fontSize: '12px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}>
          {user.lastActivity}
        </div>
      </div>
      <div style={{
        textAlign: 'right'
      }}>
        <div style={{
          color: '#ffffff',
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}>
          ${user.balance.toLocaleString()}
        </div>
        <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px'
        }}>
          <button style={{
            background: '#10b981',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 8px',
            color: '#ffffff',
            fontSize: '11px',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>
            Deposit
          </button>
          <button style={{
            background: '#ef4444',
            border: 'none',
            borderRadius: '6px',
            padding: '4px 8px',
            color: '#ffffff',
            fontSize: '11px',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );

  const NotificationCard = ({ notification }) => (
    <div style={{
      background: '#111111',
      border: '1px solid #1f2937',
      borderRadius: '12px',
      padding: '12px',
      marginBottom: '8px'
    }}>
      <div style={{
        color: '#ffffff',
        fontSize: '14px',
        marginBottom: '4px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}>
        {notification.message}
      </div>
      <div style={{
        color: '#9ca3af',
        fontSize: '11px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}>
        {notification.time}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #1f2937',
          borderTop: '3px solid #2563eb',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    }}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* Header */}
      <div style={{
        padding: '20px',
        borderBottom: '1px solid #1f2937'
      }}>
        <h1 style={{
          margin: 0,
          fontSize: '24px',
          fontWeight: '700',
          color: '#ffffff',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}>
          Gem Admin
        </h1>
      </div>

      {/* Tabs */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid #1f2937',
        display: 'flex',
        gap: '8px'
      }}>
        <TabButton id="dashboard" label="Dashboard" isActive={activeTab === 'dashboard'} />
        <TabButton id="users" label="Users" isActive={activeTab === 'users'} />
        <TabButton id="notifications" label="Notifications" isActive={activeTab === 'notifications'} />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          style={{ padding: '20px' }}
        >
          {activeTab === 'dashboard' && (
            <div>
              <div style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '24px',
                flexWrap: 'wrap'
              }}>
                <StatCard title="Total Users" value={stats.totalUsers.toLocaleString()} />
                <StatCard title="Total Balance" value={`$${stats.totalBalance.toLocaleString()}`} change={12.5} />
                <StatCard title="Today Deposits" value={`$${stats.todayDeposits.toLocaleString()}`} change={8.2} />
                <StatCard title="Today Withdrawals" value={`$${stats.todayWithdrawals.toLocaleString()}`} change={-3.1} />
              </div>
              
              <div style={{
                background: '#111111',
                border: '1px solid #1f2937',
                borderRadius: '16px',
                padding: '20px'
              }}>
                <h3 style={{
                  margin: '0 0 16px 0',
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#ffffff',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                }}>
                  Recent Activity
                </h3>
                <div style={{
                  color: '#9ca3af',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                }}>
                  System is running smoothly. All services operational.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 style={{
                margin: '0 0 20px 0',
                fontSize: '20px',
                fontWeight: '600',
                color: '#ffffff',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
              }}>
                All Users
              </h2>
              {users.map(user => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 style={{
                margin: '0 0 20px 0',
                fontSize: '20px',
                fontWeight: '600',
                color: '#ffffff',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
              }}>
                Notifications
              </h2>
              {notifications.map(notification => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
