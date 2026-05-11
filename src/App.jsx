import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom SVG Icons
const WalletIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"/>
    <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"/>
    <path d="M21 12h-7a3 3 0 0 0 0 6h7"/>
    <path d="M17 12v.01"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ActivityIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const ArrowUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="19" x2="12" y2="5"/>
    <polyline points="5 12 12 5 19 12"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <polyline points="19 12 12 19 5 12"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const DollarIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 9.96l4.24 4.24M18.46 14.04l4.24 4.24M1.54 14.04l4.24 4.24"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawalData, setWithdrawalData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [showBalances, setShowBalances] = useState({});
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
      tg.setHeaderColor('#f8fafc');
      tg.setBackgroundColor('#ffffff');
    }
    loadRealData();
  }, []);

  const loadRealData = async () => {
    setLoading(true);
    try {
      // Simulate API calls to real backend
      const [usersRes, statsRes, notificationsRes] = await Promise.all([
        fetch('/api/users').then(res => res.json()).catch(() => mockUsers),
        fetch('/api/stats').then(res => res.json()).catch(() => mockStats),
        fetch('/api/notifications').then(res => res.json()).catch(() => mockNotifications)
      ]);
      
      setUsers(usersRes);
      setStats(statsRes);
      setNotifications(notificationsRes);
    } catch (error) {
      console.error('Error loading data:', error);
      // Fallback to mock data
      setUsers(mockUsers);
      setStats(mockStats);
      setNotifications(mockNotifications);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for fallback
  const mockUsers = [
    { 
      id: 1, 
      name: 'Alex Chen', 
      avatar: '👨‍💼',
      balances: { 
        USD: 15420, 
        ETH: 5.2, 
        BTC: 0.15,
        USDT: 22000
      }, 
      status: 'active', 
      lastActivity: '2 min ago',
      isOnline: true,
      level: 'Gold',
      email: 'alex@example.com',
      telegram: '@alex_chen'
    },
    { 
      id: 2, 
      name: 'Maria Silva', 
      avatar: '👩‍💻',
      balances: { 
        USD: 18200, 
        ETH: 8.1, 
        BTC: 0.32,
        USDT: 35000
      }, 
      status: 'active', 
      lastActivity: '5 min ago',
      isOnline: true,
      level: 'Platinum',
      email: 'maria@example.com',
      telegram: '@maria_silva'
    },
    { 
      id: 3, 
      name: 'John Wilson', 
      avatar: '👨‍🎓',
      balances: { 
        USD: 12300, 
        ETH: 3.7, 
        BTC: 0.08,
        USDT: 18000
      }, 
      status: 'active', 
      lastActivity: '10 min ago',
      isOnline: false,
      level: 'Silver',
      email: 'john@example.com',
      telegram: '@john_wilson'
    },
    { 
      id: 4, 
      name: 'Sophie Martin', 
      avatar: '👩‍🎨',
      balances: { 
        USD: 16750, 
        ETH: 6.4, 
        BTC: 0.25,
        USDT: 28000
      }, 
      status: 'active', 
      lastActivity: '15 min ago',
      isOnline: true,
      level: 'Gold',
      email: 'sophie@example.com',
      telegram: '@sophie_martin'
    },
  ];

  const mockStats = {
    totalUsers: 1247,
    totalBalance: 18945000,
    todayDeposits: 234000,
    todayWithdrawals: 89000
  };

  const mockNotifications = [
    { 
      id: 1, 
      type: 'new_user', 
      message: 'New user registered: @dmitry_k', 
      time: '2 min ago',
      icon: <UsersIcon />,
      read: false
    },
    { 
      id: 2, 
      type: 'deposit', 
      message: 'Deposit: $5000 from @alex_petrov', 
      time: '5 min ago',
      icon: <ArrowDownIcon />,
      read: false
    },
    { 
      id: 3, 
      type: 'withdrawal', 
      message: 'Withdrawal: $2000 to @maria_ivanova', 
      time: '10 min ago',
      icon: <ArrowUpIcon />,
      read: true
    },
  ];

  const toggleUserSelection = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const selectAllUsers = () => {
    setSelectedUsers(users.map(user => user.id));
  };

  const clearSelection = () => {
    setSelectedUsers([]);
  };

  const updateWithdrawalAmount = (userId, currency, amount) => {
    setWithdrawalData(prev => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        [currency]: amount
      }
    }));
  };

  const updateWithdrawalAddress = (userId, currency, address) => {
    setWithdrawalData(prev => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        [`${currency}_address`]: address
      }
    }));
  };

  const toggleBalanceVisibility = (userId) => {
    setShowBalances(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const processWithdrawal = async () => {
    try {
      const withdrawalRequests = selectedUsers.map(userId => ({
        userId,
        currencies: Object.entries(withdrawalData[userId] || {}).map(([currency, data]) => ({
          currency,
          amount: data,
          address: withdrawalData[userId]?.[`${currency}_address`]
        })).filter(item => item.amount && item.address)
      })).filter(req => req.currencies.length > 0);

      const response = await fetch('/api/withdrawals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ withdrawals: withdrawalRequests })
      });

      if (response.ok) {
        alert('Withdrawals processed successfully!');
        setShowWithdrawModal(false);
        setSelectedUsers([]);
        setWithdrawalData({});
        loadRealData(); // Reload data
      } else {
        throw new Error('Failed to process withdrawals');
      }
    } catch (error) {
      console.error('Withdrawal error:', error);
      alert('Error processing withdrawals. Please try again.');
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      await fetch(`/api/notifications/${notificationId}/read`, {
        method: 'POST'
      });
      setNotifications(prev => 
        prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const TabButton = ({ id, label, icon: Icon, isActive }) => (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        padding: '12px 20px',
        border: 'none',
        background: isActive ? '#1e293b' : 'transparent',
        color: isActive ? '#ffffff' : '#64748b',
        fontSize: '14px',
        fontWeight: '500',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'all 0.2s ease',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      <Icon />
      <span>{label}</span>
    </button>
  );

  const StatCard = ({ title, value, change, icon: Icon }) => (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '20px',
        flex: 1,
        color: '#1e293b',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '12px'
      }}>
        <div style={{
          background: '#f1f5f9',
          borderRadius: '8px',
          padding: '8px',
          color: '#475569'
        }}>
          <Icon size={20} />
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          color: '#64748b'
        }}>
          {title}
        </div>
      </div>
      <div style={{
        fontSize: '24px',
        fontWeight: '700',
        marginBottom: '8px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}>
        {value}
      </div>
      {change && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '14px',
          fontWeight: '500',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          color: change > 0 ? '#10b981' : '#ef4444'
        }}>
          {change > 0 ? <TrendingUpIcon /> : <TrendingUpIcon style={{ transform: 'rotate(180deg)' }} />}
          <span>{change > 0 ? '+' : ''}{change}%</span>
        </div>
      )}
    </div>
  );

  const UserCard = ({ user }) => (
    <div
      style={{
        background: '#ffffff',
        border: selectedUsers.includes(user.id) ? '2px solid #3b82f6' : '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '16px',
        position: 'relative',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        color: '#1e293b'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: user.isOnline ? '#10b981' : '#6b7280'
        }} />
        <input
          type="checkbox"
          checked={selectedUsers.includes(user.id)}
          onChange={() => toggleUserSelection(user.id)}
          style={{
            width: '18px',
            height: '18px',
            cursor: 'pointer',
            accentColor: '#3b82f6'
          }}
        />
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div style={{
          fontSize: '32px',
          marginRight: '12px'
        }}>
          {user.avatar}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '4px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>
            {user.name}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '12px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            color: '#64748b'
          }}>
            <ClockIcon />
            <span>{user.lastActivity}</span>
            <span style={{
              background: '#f1f5f9',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '10px',
              fontWeight: '600',
              color: '#475569'
            }}>
              {user.level}
            </span>
          </div>
          {user.telegram && (
            <div style={{
              fontSize: '12px',
              color: '#3b82f6',
              marginTop: '4px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
            }}>
              {user.telegram}
            </div>
          )}
        </div>
      </div>

      <div style={{
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            color: '#374151'
          }}>
            Balances:
          </div>
          <button
            onClick={() => toggleBalanceVisibility(user.id)}
            style={{
              background: 'none',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            {showBalances[user.id] ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {Object.entries(user.balances).map(([currency, amount]) => (
          <div key={currency} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '6px',
            fontSize: '14px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>
            <span style={{ color: '#64748b' }}>{currency}:</span>
            <span style={{ fontWeight: '600', color: '#1e293b' }}>
              {showBalances[user.id] !== false 
                ? (currency === 'USD' || currency === 'USDT' 
                  ? `$${amount.toLocaleString()}` 
                  : `${amount} ${currency}`)
                : '••••••'
              }
            </span>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '12px'
      }}>
        <button 
          onClick={() => {
            setSelectedUsers([user.id]);
            setShowWithdrawModal(true);
          }}
          style={{
            background: '#ef4444',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ArrowUpIcon />
          Withdraw
        </button>
        <button
          style={{
            background: '#10b981',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 16px',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ArrowDownIcon />
          Deposit
        </button>
      </div>
    </div>
  );

  const WithdrawModal = () => {
    if (!showWithdrawModal) return null;

    const selectedUsersData = users.filter(user => selectedUsers.includes(user.id));

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '700px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            color: '#1e293b',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px'
          }}>
            <h2 style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
            }}>
              Withdraw Funds
            </h2>
            <button
              onClick={() => setShowWithdrawModal(false)}
              style={{
                background: 'none',
                border: 'none',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                color: '#64748b'
              }}
            >
              ×
            </button>
          </div>

          {selectedUsersData.map(user => (
            <div
              key={user.id}
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '16px'
              }}
            >
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>{user.avatar}</span>
                {user.name}
              </h3>

              {Object.entries(user.balances).map(([currency, balance]) => (
                <div key={currency} style={{
                  marginBottom: '16px'
                }}>
                  <div style={{
                    color: '#64748b',
                    fontSize: '13px',
                    marginBottom: '8px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                  }}>
                    {currency} (Available: {currency === 'USD' || currency === 'USDT' 
                      ? `$${balance.toLocaleString()}` 
                      : `${balance} ${currency}`
                    })
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '12px'
                  }}>
                    <input
                      type="number"
                      placeholder="Amount"
                      value={withdrawalData[user.id]?.[currency] || ''}
                      onChange={(e) => updateWithdrawalAmount(user.id, currency, e.target.value)}
                      style={{
                        flex: 1,
                        background: '#ffffff',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#1e293b',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        outline: 'none'
                      }}
                    />
                    <input
                      type="text"
                      placeholder={`${currency} Address`}
                      value={withdrawalData[user.id]?.[`${currency}_address`] || ''}
                      onChange={(e) => updateWithdrawalAddress(user.id, currency, e.target.value)}
                      style={{
                        flex: 2,
                        background: '#ffffff',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#1e293b',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'flex-end'
          }}>
            <button
              onClick={() => setShowWithdrawModal(false)}
              style={{
                background: '#ffffff',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                padding: '12px 24px',
                color: '#64748b',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
              }}
            >
              Cancel
            </button>
            <button
              onClick={processWithdrawal}
              style={{
                background: '#ef4444',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
              }}
            >
              Process Withdrawal
            </button>
          </div>
        </div>
      </div>
    );
  };

  const NotificationCard = ({ notification }) => (
    <div
      onClick={() => markNotificationAsRead(notification.id)}
      style={{
        background: notification.read ? '#ffffff' : '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: notification.read ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
        <div style={{
          background: notification.read ? '#f1f5f9' : '#dbeafe',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: notification.read ? '#64748b' : '#3b82f6'
        }}>
          {notification.icon}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: notification.read ? '500' : '600',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          flex: 1,
          color: '#1e293b'
        }}>
          {notification.message}
        </div>
      </div>
      <div style={{
        fontSize: '12px',
        color: '#64748b',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
        <ClockIcon />
        {notification.time}
      </div>
    </div>
  );

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #e2e8f0',
          borderTop: '4px solid #3b82f6',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8fafc',
      color: '#1e293b',
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
      <div
        style={{
          padding: '24px',
          borderBottom: '1px solid #e2e8f0',
          background: '#ffffff'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#1e293b'
          }}>
            <div style={{
              background: '#f1f5f9',
              borderRadius: '8px',
              padding: '8px',
              color: '#475569'
            }}>
              <WalletIcon />
            </div>
            Gem Admin
          </h1>
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <button
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                color: '#64748b'
              }}
            >
              <BellIcon />
            </button>
            <button
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                color: '#64748b'
              }}
            >
              <SettingsIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        padding: '16px 24px',
        borderBottom: '1px solid #e2e8f0',
        background: '#ffffff',
        display: 'flex',
        gap: '8px'
      }}>
        <TabButton id="dashboard" label="Dashboard" icon={ActivityIcon} isActive={activeTab === 'dashboard'} />
        <TabButton id="users" label="Users" icon={UsersIcon} isActive={activeTab === 'users'} />
        <TabButton id="notifications" label="Notifications" icon={BellIcon} isActive={activeTab === 'notifications'} />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          style={{ padding: '24px' }}
        >
          {activeTab === 'dashboard' && (
            <div>
              <div style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '32px',
                flexWrap: 'wrap'
              }}>
                <StatCard 
                  title="Total Users" 
                  value={stats.totalUsers.toLocaleString()} 
                  change={12.5} 
                  icon={UsersIcon}
                />
                <StatCard 
                  title="Total Balance" 
                  value={`$${stats.totalBalance.toLocaleString()}`} 
                  change={12.5} 
                  icon={DollarIcon}
                />
                <StatCard 
                  title="Today Deposits" 
                  value={`$${stats.todayDeposits.toLocaleString()}`} 
                  change={8.2} 
                  icon={ArrowDownIcon}
                />
                <StatCard 
                  title="Today Withdrawals" 
                  value={`$${stats.todayWithdrawals.toLocaleString()}`} 
                  change={-3.1} 
                  icon={ArrowUpIcon}
                />
              </div>
              
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                <h3 style={{
                  margin: '0 0 16px 0',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#1e293b'
                }}>
                  <ZapIcon />
                  Recent Activity
                </h3>
                <div style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                  color: '#64748b'
                }}>
                  System is running smoothly. All services operational. Last sync: {new Date().toLocaleTimeString()}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: '600',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#1e293b'
                }}>
                  <UsersIcon />
                  All Users
                </h2>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center'
                }}>
                  <div style={{
                    position: 'relative'
                  }}>
                    <SearchIcon style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af'
                    }} />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px',
                        padding: '10px 12px 10px 40px',
                        color: '#1e293b',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        outline: 'none',
                        width: '200px'
                      }}
                    />
                  </div>
                  {selectedUsers.length > 0 && (
                    <>
                      <button
                        onClick={clearSelection}
                        style={{
                          background: '#ffffff',
                          border: '1px solid #d1d5db',
                          borderRadius: '8px',
                          padding: '10px 16px',
                          color: '#64748b',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                        }}
                      >
                        Clear ({selectedUsers.length})
                      </button>
                      <button
                        onClick={() => setShowWithdrawModal(true)}
                        style={{
                          background: '#ef4444',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '10px 16px',
                          color: '#ffffff',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                        }}
                      >
                        Withdraw Selected
                      </button>
                    </>
                  )}
                  <button
                    onClick={selectAllUsers}
                    style={{
                      background: '#3b82f6',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '10px 16px',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                    }}
                  >
                    Select All
                  </button>
                </div>
              </div>
              {filteredUsers.map((user, index) => (
                <div key={user.id}>
                  <UserCard user={user} />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 style={{
                margin: '0 0 24px 0',
                fontSize: '20px',
                fontWeight: '600',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1e293b'
              }}>
                <BellIcon />
                Notifications
              </h2>
              {notifications.map((notification, index) => (
                <div key={notification.id}>
                  <NotificationCard notification={notification} />
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <WithdrawModal />
    </div>
  );
}

export default App;
