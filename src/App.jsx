import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawalData, setWithdrawalData] = useState({});
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
    // Mock data with multiple currencies
    setTimeout(() => {
      setUsers([
        { 
          id: 1, 
          name: 'Alex', 
          balances: { 
            USD: 15420, 
            ETH: 5.2, 
            BTC: 0.15,
            USDT: 22000
          }, 
          status: 'active', 
          lastActivity: '2 min ago' 
        },
        { 
          id: 2, 
          name: 'Maria', 
          balances: { 
            USD: 18200, 
            ETH: 8.1, 
            BTC: 0.32,
            USDT: 35000
          }, 
          status: 'active', 
          lastActivity: '5 min ago' 
        },
        { 
          id: 3, 
          name: 'John', 
          balances: { 
            USD: 12300, 
            ETH: 3.7, 
            BTC: 0.08,
            USDT: 18000
          }, 
          status: 'active', 
          lastActivity: '10 min ago' 
        },
        { 
          id: 4, 
          name: 'Sophie', 
          balances: { 
            USD: 16750, 
            ETH: 6.4, 
            BTC: 0.25,
            USDT: 28000
          }, 
          status: 'active', 
          lastActivity: '15 min ago' 
        },
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
      border: selectedUsers.includes(user.id) ? '2px solid #2563eb' : '1px solid #1f2937',
      borderRadius: '16px',
      padding: '16px',
      marginBottom: '12px',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px'
      }}>
        <input
          type="checkbox"
          checked={selectedUsers.includes(user.id)}
          onChange={() => toggleUserSelection(user.id)}
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer'
          }}
        />
      </div>
      
      <div style={{
        marginBottom: '16px'
      }}>
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
        marginBottom: '12px'
      }}>
        <div style={{
          color: '#9ca3af',
          fontSize: '12px',
          fontWeight: '500',
          marginBottom: '8px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}>
          Balances:
        </div>
        {Object.entries(user.balances).map(([currency, amount]) => (
          <div key={currency} style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '4px',
            fontSize: '14px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>
            <span style={{ color: '#ffffff' }}>{currency}:</span>
            <span style={{ color: '#ffffff', fontWeight: '500' }}>
              {currency === 'USD' || currency === 'USDT' 
                ? `$${amount.toLocaleString()}` 
                : `${amount} ${currency}`
              }
            </span>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        gap: '8px'
      }}>
        <button 
          onClick={() => {
            setSelectedUsers([user.id]);
            setShowWithdrawModal(true);
          }}
          style={{
            background: '#ef4444',
            border: 'none',
            borderRadius: '6px',
            padding: '6px 12px',
            color: '#ffffff',
            fontSize: '12px',
            cursor: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}
        >
          Withdraw
        </button>
        <button style={{
          background: '#10b981',
          border: 'none',
          borderRadius: '6px',
          padding: '6px 12px',
          color: '#ffffff',
          fontSize: '12px',
          cursor: 'pointer',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
        }}>
          Deposit
        </button>
      </div>
    </div>
  );

  const WithdrawModal = () => {
    if (!showWithdrawModal) return null;

    const selectedUsersData = users.filter(user => selectedUsers.includes(user.id));

    return (
      <div style={{
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
      }}>
        <div style={{
          background: '#111111',
          border: '1px solid #1f2937',
          borderRadius: '16px',
          padding: '24px',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '80vh',
          overflow: 'auto'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h2 style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: '600',
              color: '#ffffff',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
            }}>
              Withdraw Funds
            </h2>
            <button
              onClick={() => setShowWithdrawModal(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#9ca3af',
                fontSize: '24px',
                cursor: 'pointer'
              }}
            >
              ×
            </button>
          </div>

          {selectedUsersData.map(user => (
            <div key={user.id} style={{
              background: '#000000',
              border: '1px solid #1f2937',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <h3 style={{
                margin: '0 0 12px 0',
                fontSize: '16px',
                fontWeight: '600',
                color: '#ffffff',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
              }}>
                {user.name}
              </h3>

              {Object.entries(user.balances).map(([currency, balance]) => (
                <div key={currency} style={{
                  marginBottom: '12px'
                }}>
                  <div style={{
                    color: '#9ca3af',
                    fontSize: '12px',
                    marginBottom: '6px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                  }}>
                    {currency} (Available: {currency === 'USD' || currency === 'USDT' 
                      ? `$${balance.toLocaleString()}` 
                      : `${balance} ${currency}`
                    })
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '6px'
                  }}>
                    <input
                      type="number"
                      placeholder="Amount"
                      value={withdrawalData[user.id]?.[currency] || ''}
                      onChange={(e) => updateWithdrawalAmount(user.id, currency, e.target.value)}
                      style={{
                        flex: 1,
                        background: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '6px',
                        padding: '8px',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                      }}
                    />
                    <input
                      type="text"
                      placeholder={`${currency} Address`}
                      value={withdrawalData[user.id]?.[`${currency}_address`] || ''}
                      onChange={(e) => updateWithdrawalAddress(user.id, currency, e.target.value)}
                      style={{
                        flex: 2,
                        background: '#1f2937',
                        border: '1px solid #374151',
                        borderRadius: '6px',
                        padding: '8px',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end'
          }}>
            <button
              onClick={() => setShowWithdrawModal(false)}
              style={{
                background: '#374151',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                color: '#ffffff',
                fontSize: '14px',
                cursor: 'pointer',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Process withdrawal logic here
                alert('Withdrawal processed!');
                setShowWithdrawModal(false);
                setSelectedUsers([]);
                setWithdrawalData({});
              }}
              style={{
                background: '#ef4444',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 24px',
                color: '#ffffff',
                fontSize: '14px',
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
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#ffffff',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                }}>
                  All Users
                </h2>
                <div style={{
                  display: 'flex',
                  gap: '8px'
                }}>
                  {selectedUsers.length > 0 && (
                    <>
                      <button
                        onClick={clearSelection}
                        style={{
                          background: '#374151',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '6px 12px',
                          color: '#ffffff',
                          fontSize: '12px',
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
                          borderRadius: '6px',
                          padding: '6px 12px',
                          color: '#ffffff',
                          fontSize: '12px',
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
                      background: '#2563eb',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      color: '#ffffff',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                    }}
                  >
                    Select All
                  </button>
                </div>
              </div>
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

      <WithdrawModal />
    </div>
  );
}

export default App;
