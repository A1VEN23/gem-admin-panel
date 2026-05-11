import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, DollarSign, TrendingUp, Bell, Settings, LogOut, Wallet, 
  ArrowUpRight, ArrowDownLeft, RefreshCw, Check, X, ChevronDown,
  Activity, Zap, Shield, Globe, CreditCard, ArrowRight, Eye, EyeOff,
  Copy, AlertCircle, CheckCircle, Clock, Filter, Search, Menu
} from 'lucide-react';

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
      tg.setHeaderColor('#1a1a2e');
      tg.setBackgroundColor('#16213e');
    }
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    // Mock data with multiple currencies
    setTimeout(() => {
      setUsers([
        { 
          id: 1, 
          name: 'Alex', 
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
          level: 'Gold'
        },
        { 
          id: 2, 
          name: 'Maria', 
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
          level: 'Platinum'
        },
        { 
          id: 3, 
          name: 'John', 
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
          level: 'Silver'
        },
        { 
          id: 4, 
          name: 'Sophie', 
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
          level: 'Gold'
        },
      ]);
      setStats({
        totalUsers: 1247,
        totalBalance: 18945000,
        todayDeposits: 234000,
        todayWithdrawals: 89000
      });
      setNotifications([
        { id: 1, type: 'new_user', message: 'New user registered: @dmitry_k', time: '2 min ago', icon: <Users size={16} /> },
        { id: 2, type: 'deposit', message: 'Deposit: $5000 from @alex_petrov', time: '5 min ago', icon: <ArrowDownLeft size={16} /> },
        { id: 3, type: 'withdrawal', message: 'Withdrawal: $2000 to @maria_ivanova', time: '10 min ago', icon: <ArrowUpRight size={16} /> },
      ]);
      setLoading(false);
    }, 1000);
  };

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

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const TabButton = ({ id, label, icon: Icon, isActive }) => (
    <motion.button
      onClick={() => setActiveTab(id)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        padding: '16px 20px',
        border: 'none',
        background: isActive 
          ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          : 'transparent',
        color: isActive ? '#ffffff' : '#9ca3af',
        fontSize: '14px',
        fontWeight: '600',
        cursor: 'pointer',
        borderRadius: '16px',
        transition: 'all 0.3s ease',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: isActive ? '0 8px 32px rgba(102, 126, 234, 0.3)' : 'none'
      }}
    >
      <Icon size={18} />
      <span>{label}</span>
    </motion.button>
  );

  const StatCard = ({ title, value, change, icon: Icon, gradient }) => (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      style={{
        background: gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        padding: '24px',
        flex: 1,
        color: '#ffffff',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        opacity: 0.3
      }}>
        <Icon size={32} />
      </div>
      <div style={{
        fontSize: '14px',
        fontWeight: '500',
        marginBottom: '8px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        opacity: 0.9
      }}>
        {title}
      </div>
      <div style={{
        fontSize: '28px',
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
          fontWeight: '600',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}>
          {change > 0 ? <TrendingUp size={16} /> : <TrendingUp size={16} style={{ transform: 'rotate(180deg)' }} />}
          <span>{change > 0 ? '+' : ''}{change}%</span>
        </div>
      )}
    </motion.div>
  );

  const UserCard = ({ user }) => (
    <motion.div
      whileHover={{ y: -3, scale: 1.01 }}
      style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
        border: selectedUsers.includes(user.id) ? '2px solid #667eea' : '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '16px',
        position: 'relative',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        color: '#ffffff'
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
          background: user.isOnline ? '#10b981' : '#6b7280',
          boxShadow: user.isOnline ? '0 0 10px rgba(16, 185, 129, 0.5)' : 'none'
        }} />
        <input
          type="checkbox"
          checked={selectedUsers.includes(user.id)}
          onChange={() => toggleUserSelection(user.id)}
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            accentColor: '#667eea'
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
            fontSize: '18px',
            fontWeight: '700',
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
            opacity: 0.8
          }}>
            <Clock size={12} />
            <span>{user.lastActivity}</span>
            <span style={{
              background: 'rgba(255, 255, 255, 0.2)',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '10px',
              fontWeight: '600'
            }}>
              {user.level}
            </span>
          </div>
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
            opacity: 0.9
          }}>
            Balances:
          </div>
          <button
            onClick={() => toggleBalanceVisibility(user.id)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '4px'
            }}
          >
            {showBalances[user.id] ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
        {Object.entries(user.balances).map(([currency, amount]) => (
          <div key={currency} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
            fontSize: '14px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>
            <span style={{ opacity: 0.8 }}>{currency}:</span>
            <span style={{ fontWeight: '600' }}>
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
        <motion.button 
          onClick={() => {
            setSelectedUsers([user.id]);
            setShowWithdrawModal(true);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '10px 16px',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 15px rgba(245, 87, 108, 0.3)'
          }}
        >
          <ArrowUpRight size={16} />
          Withdraw
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '10px 16px',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 15px rgba(79, 172, 254, 0.3)'
          }}
        >
          <ArrowDownLeft size={16} />
          Deposit
        </motion.button>
      </div>
    </motion.div>
  );

  const WithdrawModal = () => {
    if (!showWithdrawModal) return null;

    const selectedUsersData = users.filter(user => selectedUsers.includes(user.id));

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          style={{
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            padding: '32px',
            maxWidth: '700px',
            width: '90%',
            maxHeight: '80vh',
            overflow: 'auto',
            color: '#ffffff',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
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
              fontSize: '24px',
              fontWeight: '700',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
            }}>
              Withdraw Funds
            </h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowWithdrawModal(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#ffffff',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </motion.button>
          </div>

          {selectedUsersData.map(user => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '16px'
              }}
            >
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '18px',
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
                    color: 'rgba(255, 255, 255, 0.8)',
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
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        padding: '12px',
                        color: '#ffffff',
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
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        padding: '12px',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'flex-end'
          }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowWithdrawModal(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '14px 28px',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
              }}
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                alert('Withdrawal processed!');
                setShowWithdrawModal(false);
                setSelectedUsers([]);
                setWithdrawalData({});
              }}
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                border: 'none',
                borderRadius: '12px',
                padding: '14px 28px',
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                boxShadow: '0 8px 25px rgba(245, 87, 108, 0.4)'
              }}
            >
              Process Withdrawal
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const NotificationCard = ({ notification }) => (
    <motion.div
      whileHover={{ x: 5 }}
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '16px',
        padding: '16px',
        marginBottom: '12px',
        color: '#ffffff',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '8px'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {notification.icon}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: '600',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          flex: 1
        }}>
          {notification.message}
        </div>
      </div>
      <div style={{
        fontSize: '12px',
        opacity: 0.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
        <Clock size={12} />
        {notification.time}
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{
            width: '60px',
            height: '60px',
            border: '4px solid rgba(255, 255, 255, 0.3)',
            borderTop: '4px solid #ffffff',
            borderRadius: '50%'
          }}
        />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
    }}>
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          padding: '24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            margin: 0,
            fontSize: '28px',
            fontWeight: '700',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '8px'
            }}>
              <Wallet size={24} />
            </div>
            Gem Admin
          </h1>
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '12px',
                padding: '10px',
                cursor: 'pointer'
              }}
            >
              <Bell size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '12px',
                padding: '10px',
                cursor: 'pointer'
              }}
            >
              <Settings size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        gap: '12px',
        overflowX: 'auto'
      }}>
        <TabButton id="dashboard" label="Dashboard" icon={Activity} isActive={activeTab === 'dashboard'} />
        <TabButton id="users" label="Users" icon={Users} isActive={activeTab === 'users'} />
        <TabButton id="notifications" label="Notifications" icon={Bell} isActive={activeTab === 'notifications'} />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
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
                  icon={Users}
                  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                />
                <StatCard 
                  title="Total Balance" 
                  value={`$${stats.totalBalance.toLocaleString()}`} 
                  change={12.5} 
                  icon={DollarSign}
                  gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                />
                <StatCard 
                  title="Today Deposits" 
                  value={`$${stats.todayDeposits.toLocaleString()}`} 
                  change={8.2} 
                  icon={ArrowDownLeft}
                  gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                />
                <StatCard 
                  title="Today Withdrawals" 
                  value={`$${stats.todayWithdrawals.toLocaleString()}`} 
                  change={-3.1} 
                  icon={ArrowUpRight}
                  gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
                />
              </div>
              
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                  borderRadius: '20px',
                  padding: '24px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                }}
              >
                <h3 style={{
                  margin: '0 0 16px 0',
                  fontSize: '20px',
                  fontWeight: '600',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Zap size={20} />
                  Recent Activity
                </h3>
                <div style={{
                  fontSize: '15px',
                  lineHeight: '1.6',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                  opacity: 0.9
                }}>
                  System is running smoothly. All services operational.
                </div>
              </motion.div>
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
                  fontSize: '24px',
                  fontWeight: '700',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Users size={24} />
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
                    <Search size={20} style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }} />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '12px',
                        padding: '10px 12px 10px 40px',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                        outline: 'none',
                        width: '200px'
                      }}
                    />
                  </div>
                  {selectedUsers.length > 0 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={clearSelection}
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '12px',
                          padding: '10px 16px',
                          color: '#ffffff',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                        }}
                      >
                        Clear ({selectedUsers.length})
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowWithdrawModal(true)}
                        style={{
                          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                          border: 'none',
                          borderRadius: '12px',
                          padding: '10px 16px',
                          color: '#ffffff',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                          boxShadow: '0 4px 15px rgba(245, 87, 108, 0.3)'
                        }}
                      >
                        Withdraw Selected
                      </motion.button>
                    </>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={selectAllUsers}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '12px',
                      padding: '10px 16px',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                    }}
                  >
                    Select All
                  </motion.button>
                </div>
              </div>
              {filteredUsers.map((user, index) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <UserCard user={user} />
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h2 style={{
                margin: '0 0 24px 0',
                fontSize: '24px',
                fontWeight: '700',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Bell size={24} />
                Notifications
              </h2>
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NotificationCard notification={notification} />
                </motion.div>
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
