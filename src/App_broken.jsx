import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const TrendingUpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
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

const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M20.46 20.46l-4.24-4.24M1.54 20.46l4.24-4.24"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const RefreshCw = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 4 23 10 17 10"/>
    <polyline points="1 20 1 14 7 14"/>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
  </svg>
);

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawalData, setWithdrawalData] = useState({});
  const [commonAddresses, setCommonAddresses] = useState({
    USD: '',
    ETH: '',
    BTC: '',
    USDT: ''
  });
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
      tg.setHeaderColor('#1a1a1a');
      tg.setBackgroundColor('#0f0f0f');
    }
    loadRealData();
  }, []);

  const loadRealData = async () => {
    setLoading(true);
    try {
      const [usersRes, statsRes, notificationsRes] = await Promise.all([
        fetch('/api/users').then(res => res.json()).catch(() => []),
        fetch('/api/stats').then(res => res.json()).catch(() => ({ totalUsers: 0, totalBalance: 0, todayDeposits: 0, todayWithdrawals: 0 })),
        fetch('/api/notifications').then(res => res.json()).catch(() => [])
      ]);

      setUsers(usersRes);
      setStats(statsRes);
      setNotifications(notificationsRes);
    } catch (error) {
      console.error('Error loading data:', error);
      setUsers([]);
      setStats({ totalUsers: 0, totalBalance: 0, todayDeposits: 0, todayWithdrawals: 0 });
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  // Real-time data refresh
  const refreshRealTimeData = async () => {
    try {
      // Trigger balance updates on server
      await fetch('/api/refresh-balances', { method: 'POST' });
      
      // Reload data
      await loadRealData();
    } catch (error) {
      console.error('Error refreshing real-time data:', error);
    }
  };

  const mockUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      telegram: '@johndoe',
      avatar: '👤',
      level: 'Gold',
      isOnline: true,
      lastActivity: '2 min ago',
      balances: { USD: 5000, ETH: 2.5, BTC: 0.1, USDT: 3000 }
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      telegram: '@janesmith',
      avatar: '👩',
      level: 'Platinum',
      isOnline: true,
      lastActivity: '5 min ago',
      balances: { USD: 12000, ETH: 5.2, BTC: 0.3, USDT: 8000 }
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      telegram: '@bobjohnson',
      avatar: '👨',
      level: 'Silver',
      isOnline: false,
      lastActivity: '1 hour ago',
      balances: { USD: 3000, ETH: 1.1, BTC: 0.05, USDT: 2000 }
    }
  ];

  const mockStats = {
    totalUsers: 1247,
    totalBalance: 2847500,
    todayDeposits: 125000,
    todayWithdrawals: 87000
  };

  const mockNotifications = [
    {
      id: 1,
      message: 'New user registration: Alice Cooper',
      time: '2 min ago',
      read: false,
      icon: <UsersIcon />
    },
    {
      id: 2,
      message: 'Large withdrawal processed: $50,000',
      time: '15 min ago',
      read: false,
      icon: <ArrowUpIcon />
    },
    {
      id: 3,
      message: 'System maintenance completed',
      time: '1 hour ago',
      read: true,
      icon: <ZapIcon />
    }
  ];

  const toggleUserSelection = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const clearSelection = () => {
    setSelectedUsers([]);
    setWithdrawalData({});
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

  const updateCommonAddress = (currency, address) => {
    setCommonAddresses(prev => ({
      ...prev,
      [currency]: address
    }));
  };

  const processWithdrawal = async () => {
    try {
      const selectedUsersData = users.filter(user => selectedUsers.includes(user.id));
      let processedCount = 0;
      let failedCount = 0;

      for (const user of selectedUsersData) {
        const userData = withdrawalData[user.id] || {};
        
        for (const [currency, amount] of Object.entries(userData)) {
          if (!amount || parseFloat(amount) <= 0) continue;
          
          const address = commonAddresses[currency];
          if (!address) {
            console.error(`No address set for ${currency}`);
            failedCount++;
            continue;
          }

          // Determine network based on currency
          let network = 'ethereum';
          if (currency === 'BNB') network = 'bsc';
          else if (currency === 'SOL') network = 'solana';
          else if (currency === 'TON') network = 'ton';
          else if (currency.includes('USDT')) {
            if (currency.includes('BSC')) network = 'bsc';
            else if (currency.includes('ARB')) network = 'arbitrum';
            else network = 'ethereum';
          }

          // Get private key for the user (in production, this should be securely retrieved)
          const privateKey = prompt(`Введите приватный ключ для ${user.name} (${currency}):`);
          if (!privateKey) {
            failedCount++;
            continue;
          }

          try {
            const response = await fetch('/api/withdraw', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId: user.id,
                amount: parseFloat(amount),
                currency,
                address,
                network,
                privateKey
              })
            });

            const result = await response.json();
            
            if (result.success) {
              processedCount++;
              console.log(`Withdrawal processed for ${user.name}: ${amount} ${currency}`);
              
              if (result.transaction?.txHash) {
                alert(`Транзакция отправлена: ${result.transaction.txHash}`);
              }
            } else {
              failedCount++;
              console.error(`Withdrawal failed for ${user.name}:`, result.error);
              alert(`Ошибка вывода для ${user.name}: ${result.error}`);
            }
          } catch (txError) {
            failedCount++;
            console.error(`Transaction error for ${user.name}:`, txError);
            alert(`Ошибка транзакции для ${user.name}: ${txError.message}`);
          }
        }
      }

      // Show summary
      alert(`Вывод завершен:\n✅ Успешно: ${processedCount}\n❌ Ошибок: ${failedCount}`);
      
      // Reset form and reload data
      setShowWithdrawModal(false);
      setSelectedUsers([]);
      setWithdrawalData({});
      setCommonAddresses({ USD: '', ETH: '', BTC: '', USDT: '' });
      await loadRealData();
      
    } catch (error) {
      console.error('Withdrawal process error:', error);
      alert('Ошибка процесса вывода. Пожалуйста, попробуйте снова.');
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try {
      await fetch(`/api/notifications/${notificationId}/read`, {
        method: 'POST'
      });
      
      setNotifications(prev => 
        prev.map(notif => 
          notif.id === notificationId 
            ? { ...notif, read: true }
            : notif
        )
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  const toggleBalanceVisibility = (userId) => {
    setShowBalances(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const TabButton = ({ id, label, icon: Icon, isActive }) => (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        padding: window.innerWidth < 768 ? '8px 12px' : '12px 20px',
        border: 'none',
        background: isActive ? '#3b82f6' : 'transparent',
        color: isActive ? '#ffffff' : '#9ca3af',
        fontSize: window.innerWidth < 768 ? '12px' : '14px',
        fontWeight: '500',
        cursor: 'pointer',
        borderRadius: '6px',
        transition: 'all 0.2s ease',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: window.innerWidth < 768 ? '4px' : '8px',
        whiteSpace: 'nowrap',
        flexShrink: 0
      }}
    >
      <Icon size={window.innerWidth < 768 ? 16 : 20} />
      {label && <span>{label}</span>}
    </button>
  );

  const StatCard = ({ title, value, change, icon: Icon }) => (
    <div
      style={{
        background: '#1f2937',
        border: '1px solid #374151',
        borderRadius: window.innerWidth < 768 ? '8px' : '12px',
        padding: window.innerWidth < 768 ? '16px' : '20px',
        flex: 1,
        color: '#f9fafb',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        minWidth: window.innerWidth < 768 ? '140px' : 'auto'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: window.innerWidth < 768 ? '8px' : '12px',
        marginBottom: '12px'
      }}>
        <div style={{
          background: '#374151',
          borderRadius: '6px',
          padding: window.innerWidth < 768 ? '6px' : '8px',
          color: '#9ca3af'
        }}>
          <Icon size={window.innerWidth < 768 ? 16 : 20} />
        </div>
        <div style={{
          fontSize: window.innerWidth < 768 ? '12px' : '14px',
          fontWeight: '500',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          color: '#9ca3af',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {title}
        </div>
      </div>
      <div style={{
        fontSize: window.innerWidth < 768 ? '18px' : '24px',
        fontWeight: '700',
        marginBottom: '8px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}>
        {value}
      </div>
      {change && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: window.innerWidth < 768 ? '12px' : '14px',
          fontWeight: '500',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          color: change > 0 ? '#10b981' : '#ef4444'
        }}>
          {change > 0 ? <TrendingUpIcon size={12} /> : <TrendingUpIcon size={12} style={{ transform: 'rotate(180deg)' }} />}
          <span>{change > 0 ? '+' : ''}{change}%</span>
        </div>
      )}
    </div>
  );

  const UserCard = ({ user }) => {
  const showUserDetails = () => {
    alert(` ${user.name} (@${user.telegram})\n\n Balance: $${(user.totalBalance || 0).toLocaleString()}\n Level: ${user.level || 'Bronze'}\n Status: ${user.isOnline ? ' Online' : ' Offline'}\n Last Activity: ${user.lastActivity || 'Unknown'}\n Created: ${new Date(user.createdAt || Date.now()).toLocaleDateString()}\n\n Wallets:\n${user.addresses ? Object.entries(user.addresses).map(([net, addr]) => `${net.toUpperCase()}: ${addr.slice(0, 8)}...${addr.slice(-6)}`).join('\n') : 'No wallets'}`);
  };

  return (
    <div
      style={{
        background: '#1f2937',
        border: selectedUsers.includes(user.id) ? '2px solid #3b82f6' : '1px solid #374151',
        borderRadius: window.innerWidth < 768 ? '8px' : '12px',
        padding: window.innerWidth < 768 ? '16px' : '20px',
        marginBottom: '16px',
        position: 'relative',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.2s ease',
        cursor: 'pointer'
      }}
      onClick={() => toggleUserSelection(user.id)}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <div style={{ fontSize: '24px' }}>{user.avatar}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
        gap: '12px',
        marginBottom: '12px'
      }}>
        <div style={{
          fontSize: '24px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#374151',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {user.avatar}
        </div>
        <div>
          <div style={{
            fontSize: '16px',
            fontWeight: '600',
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
            color: '#9ca3af'
          }}>
            <ClockIcon />
            <span>{user.lastActivity}</span>
            <span style={{
              background: '#374151',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '10px',
              fontWeight: '600',
              color: '#d1d5db'
            }}>
              {user.level}
            </span>
          </div>
          {user.telegram && (
            <div style={{
              fontSize: '12px',
              color: '#60a5fa',
              marginTop: '4px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
            }}>
              {user.telegram}
            </div>
          )}
        </div>
      </div>

      <div style={{
        borderTop: '1px solid #374151',
        paddingTop: '12px'
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
            color: '#d1d5db'
          }}>
            Balances:
          </div>
          <button
            onClick={() => toggleBalanceVisibility(user.id)}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            {showBalances[user.id] ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {Object.entries(user.balances || {}).map(([currency, amount]) => (
          <div key={currency} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '6px',
            fontSize: '14px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>
            <span style={{ color: '#9ca3af' }}>{currency}:</span>
            <span style={{ fontWeight: '600', color: '#f9fafb' }}>
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
    </div>
  );

  const WithdrawModal = () => {
    const selectedUsersData = users.filter(user => selectedUsers.includes(user.id));

    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
      >
        <div
          style={{
            background: '#1f2937',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '800px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            color: '#f9fafb',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
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
                color: '#9ca3af'
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              background: '#374151',
              border: '1px solid #4b5563',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '20px'
            }}
          >
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              color: '#f9fafb'
            }}>
              Common Addresses
            </h3>
            {Object.entries(commonAddresses).map(([currency, address]) => (
              <div key={currency} style={{
                marginBottom: '12px'
              }}>
                <div style={{
                  color: '#d1d5db',
                  fontSize: '13px',
                  marginBottom: '6px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                }}>
                  {currency} Address:
                </div>
                <input
                  type="text"
                  placeholder={`Enter ${currency} address...`}
                  value={address}
                  onChange={(e) => updateCommonAddress(currency, e.target.value)}
                  style={{
                    width: '100%',
                    background: '#1f2937',
                    border: '1px solid #4b5563',
                    borderRadius: '8px',
                    padding: '10px',
                    color: '#f9fafb',
                    fontSize: '14px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                    outline: 'none'
                  }}
                />
              </div>
            ))}
          </div>

          {selectedUsersData.map(user => (
            <div
              key={user.id}
              style={{
                background: '#374151',
                border: '1px solid #4b5563',
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
                gap: '8px',
                color: '#f9fafb'
              }}>
                <span>{user.avatar}</span>
                {user.name}
              </h3>

              {Object.entries(user.balances || {}).map(([currency, balance]) => (
                <div key={currency} style={{
                  marginBottom: '16px'
                }}>
                  <div style={{
                    color: '#d1d5db',
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
                        background: '#1f2937',
                        border: '1px solid #4b5563',
                        borderRadius: '8px',
                        padding: '10px',
                        color: '#f9fafb',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        outline: 'none'
                      }}
                    />
                    <div style={{
                      flex: 2,
                      background: '#1f2937',
                      border: '1px solid #4b5563',
                      borderRadius: '8px',
                      padding: '10px',
                      color: '#9ca3af',
                      fontSize: '14px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {commonAddresses[currency] || 'Set common address above'}
                    </div>
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
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: '8px',
                padding: '12px 24px',
                color: '#f9fafb',
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
        background: notification.read ? '#1f2937' : '#374151',
        border: '1px solid #4b5563',
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '12px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        boxShadow: notification.read ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.3)',
        color: '#f9fafb'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
        <div style={{
          background: notification.read ? '#374151' : '#1e40af',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: notification.read ? '#9ca3af' : '#60a5fa'
        }}>
          {notification.icon}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: notification.read ? '500' : '600',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          flex: 1,
          color: '#f9fafb'
        }}>
          {notification.message}
        </div>
      </div>
      <div style={{
        fontSize: '12px',
        color: '#9ca3af',
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
        background: '#0f0f0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #374151',
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
      background: '#0f0f0f',
      color: '#f9fafb',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
      overflowX: 'hidden'
    }}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div
        style={{
          padding: window.innerWidth < 768 ? '16px' : '24px',
          borderBottom: '1px solid #374151',
          background: '#1a1a1a'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: window.innerWidth < 768 ? 'wrap' : 'nowrap',
          gap: window.innerWidth < 768 ? '12px' : '0'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: window.innerWidth < 768 ? '18px' : '24px',
            fontWeight: '700',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#f9fafb',
            flex: 1,
            minWidth: 0
          }}>
            <div style={{
              background: '#374151',
              borderRadius: '6px',
              padding: '6px',
              color: '#9ca3af',
              flexShrink: 0
            }}>
              <WalletIcon />
            </div>
            <span style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              Gem Admin
            </span>
          </h1>
          <div style={{
            display: 'flex',
            gap: '8px',
            flexShrink: 0
          }}>
            <button
              onClick={refreshRealTimeData}
              style={{
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                padding: '6px',
                cursor: 'pointer',
                color: '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                fontSize: window.innerWidth < 768 ? '12px' : '14px'
              }}
              title="Обновить реальные данные"
            >
              <RefreshCw />
            </button>
            <button
              style={{
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                padding: '6px',
                cursor: 'pointer',
                color: '#9ca3af',
                fontSize: window.innerWidth < 768 ? '12px' : '14px'
              }}
            >
              <BellIcon />
            </button>
            <button
              style={{
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: '6px',
                padding: '6px',
                cursor: 'pointer',
                color: '#9ca3af',
                fontSize: window.innerWidth < 768 ? '12px' : '14px'
              }}
            >
              <SettingsIcon />
            </button>
          </div>
        </div>
      </div>

      <div style={{
        padding: window.innerWidth < 768 ? '12px 16px' : '16px 24px',
        borderBottom: '1px solid #374151',
        background: '#1a1a1a',
        display: 'flex',
        gap: window.innerWidth < 768 ? '4px' : '8px',
        overflowX: 'auto',
        scrollbarWidth: 'none'
      }}>
        <TabButton id="dashboard" label={window.innerWidth < 768 ? "" : "Dashboard"} icon={ActivityIcon} isActive={activeTab === 'dashboard'} />
        <TabButton id="users" label={window.innerWidth < 768 ? "" : "Users"} icon={UsersIcon} isActive={activeTab === 'users'} />
        <TabButton id="notifications" label={window.innerWidth < 768 ? "" : "Notifications"} icon={BellIcon} isActive={activeTab === 'notifications'} />
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'dashboard' && (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: window.innerWidth < 768 ? '16px' : '24px'
            }}
          >
            <div style={{
              display: 'flex',
              gap: window.innerWidth < 768 ? '8px' : '16px',
              marginBottom: '24px',
              flexWrap: window.innerWidth < 768 ? 'wrap' : 'nowrap',
              overflowX: window.innerWidth < 768 ? 'visible' : 'auto'
            }}>
              <StatCard 
                title="Total Users" 
                value={stats.totalUsers?.toLocaleString() || '0'} 
                change={parseFloat(stats.dailyGrowth || 0)} 
                icon={UsersIcon}
              />
              <StatCard 
                title="Total Balance" 
                value={`$${(stats.totalBalance || 0).toLocaleString()}`} 
                change={parseFloat(stats.weeklyGrowth || 0)} 
                icon={WalletIcon}
              />
              <StatCard 
                title="Today Deposits" 
                value={`$${(stats.todayDeposits || 0).toLocaleString()}`} 
                change={parseFloat(stats.dailyGrowth || 0)} 
                icon={ArrowDownIcon}
              />
              <StatCard 
                title="Today Withdrawals" 
                value={`$${(stats.todayWithdrawals || 0).toLocaleString()}`} 
                change={-Math.abs(parseFloat(stats.dailyGrowth || 0))} 
                icon={ArrowUpIcon}
              />
            </div>
            
            <div
              style={{
                background: '#1f2937',
                borderRadius: window.innerWidth < 768 ? '8px' : '12px',
                padding: window.innerWidth < 768 ? '16px' : '24px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
              }}
            >
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: window.innerWidth < 768 ? '16px' : '18px',
                fontWeight: '600',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#f9fafb'
              }}>
                <ZapIcon size={window.innerWidth < 768 ? 16 : 20} />
                Real-Time Blockchain Data
              </h3>
              <div style={{
                fontSize: window.innerWidth < 768 ? '12px' : '14px',
                lineHeight: '1.6',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                color: '#9ca3af'
              }}>
                <div style={{ marginBottom: '8px' }}>✅ All balances are REAL from blockchains</div>
                <div style={{ marginBottom: '8px' }}>✅ {stats.activeUsers || 0} users currently online</div>
                <div style={{ marginBottom: '8px' }}>✅ {stats.newUsersToday || 0} new users today</div>
                <div style={{ marginBottom: '8px' }}>✅ Daily growth: {stats.dailyGrowth || 0}%</div>
                <div style={{ marginBottom: '8px' }}>✅ Weekly growth: {stats.weeklyGrowth || 0}%</div>
                <div>🔄 Last sync: {new Date().toLocaleTimeString()}</div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'users' && (
          <motion.div
            key="users"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: window.innerWidth < 768 ? '16px' : '24px'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px',
              gap: '12px',
              flexWrap: window.innerWidth < 768 ? 'wrap' : 'nowrap'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: window.innerWidth < 768 ? '18px' : '20px',
                fontWeight: '600',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#f9fafb',
                flex: 1,
                minWidth: 0
              }}>
                <UsersIcon size={window.innerWidth < 768 ? 18 : 20} />
                <span style={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  All Users
                </span>
              </h2>
              <div style={{
                display: 'flex',
                gap: window.innerWidth < 768 ? '8px' : '12px',
                alignItems: 'center',
                flexWrap: window.innerWidth < 768 ? 'wrap' : 'nowrap',
                flexShrink: 0
              }}>
                <div style={{
                  position: 'relative',
                  flex: window.innerWidth < 768 ? 1 : 'auto'
                }}>
                  <SearchIcon size={16} style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#6b7280'
                  }} />
                  <input
                    type="text"
                    placeholder={window.innerWidth < 768 ? "Search..." : "Search users..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      background: '#1f2937',
                      border: '1px solid #374151',
                      borderRadius: '6px',
                      padding: '8px 12px 8px 36px',
                      color: '#f9fafb',
                      fontSize: window.innerWidth < 768 ? '12px' : '14px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                      outline: 'none',
                      width: window.innerWidth < 768 ? '100%' : '200px'
                    }}
                  />
                </div>
                {selectedUsers.length > 0 && (
                  <>
                    <button
                      onClick={clearSelection}
                      style={{
                        background: '#374151',
                        border: '1px solid #4b5563',
                        borderRadius: '6px',
                        padding: window.innerWidth < 768 ? '6px 10px' : '10px 16px',
                        color: '#f9fafb',
                        fontSize: window.innerWidth < 768 ? '11px' : '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {window.innerWidth < 768 ? `(${selectedUsers.length})` : `Clear (${selectedUsers.length})`}
                    </button>
                    <button
                      onClick={() => setShowWithdrawModal(true)}
                      style={{
                        background: '#ef4444',
                        border: 'none',
                        borderRadius: '6px',
                        padding: window.innerWidth < 768 ? '6px 10px' : '10px 16px',
                        color: '#ffffff',
                        fontSize: window.innerWidth < 768 ? '11px' : '13px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {window.innerWidth < 768 ? 'Withdraw' : 'Withdraw'}
                    </button>
                  </>
                )}
              </div>
            </div>

            {filteredUsers.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </motion.div>
        )}

        {activeTab === 'notifications' && (
          <motion.div
            key="notifications"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              padding: '24px'
            }}
          >
            <h2 style={{
              margin: '0 0 24px 0',
              fontSize: '20px',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#f9fafb'
            }}>
              <BellIcon />
              Notifications
            </h2>
            {notifications.map((notification, index) => (
              <div key={notification.id}>
                <NotificationCard notification={notification} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {showWithdrawModal && <WithdrawModal />}
    </div>
  );
}

export default App;
