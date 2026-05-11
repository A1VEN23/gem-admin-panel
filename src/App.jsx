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
  const [a,: 35000
      }, 
      status: 'active', 
 lastActivity: '5 min ago',
      isOnline: tru
      level: 'Platinum',
      email: 'maria@example.com',
      telegram: '@maria_silva'
    },
 
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
    setSupdateCommonAddress = (currency, address) => {
    setCommonAddresses(prev => ({
      ...prev,
      [currency]: address
    }));
  };

  const howBalances(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };moun

  const processWitdmounrwal = async () => {
    try {commonAdess || ''
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
      });});
        setCommonAddresses({ USD: '', ETH: '', BTC: '', USDT: '' 

      if (response.ok) {
        alert('Withdrawals processed successfully!');
        setShowWithdrawModal(false);
        nsole.error('Withdrawal error:', error);
      alert('Error processing withdrawals. Please try again.');
    }
  };

  const markNotificationAsRead = async (notificationId) => {
    try tch (error) {
      console.error('Error markinti82f6fication as read:', error);
    }9ca3af
  };

  const filteredUsers = users.filter(user => 
    userborder: 'none',
        background: isActive ? '#1e293b' : 'transparent',
        color: isActive ? '#ffffff' : '#64748b',
        fontSize: '14px',
    fontWeight: '500',
        cursor: 'pointer',
        con />3
      <span>{label}</span>
    </button>
  );

  const StatCard = ({ title, value, change, icon: Icon }) => (
    <divboxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div style={{
    display: 'flex',
        alignItems: 'center',
        }}>
          <Icon size={20} />
        </div>pple-
        <div style={{
      fontSize: '14px',
          fontWeight: '500',
        fontWeight: '700',
        marginBottom: '8px',
        fontFamily: '-ppple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
      }}>
    {value}2x,
      </div>
      {change && (ha
     div 
          dispay: 'flex',
          alignItems: 'center',ng o
     a'4p
          fontWeight: 1'2937
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-ser374151
          color: change > 0 ? '#10b981' : '#ef4444'
        }}>m: '12
          {change > 0  pple-ndingUpIcon /> : <TrendingUpIcon style={{ transform: 'rotate(180deg)' }} />}
          <span>{change '+' : ''}{change}%</span>
        </div>32x,
      )}ffaf
    </div>
  );2

  const UserCard = ({ user }) => g no(
    <
        background: '#ffffff',
        border: selectedUsers.includes(user.id) ? '2px solid #3b82f6' : '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '2m: '12
        marginBottom: 1pple-,
        position: 'relat
        boxShadow: '0 1p2pxx,rgba(0, 0, 0, 0.1)',
        color: '#1e293b'
      }}
    >,
      <div stye={{
        position: 'absolute',ng o
     : '20px',
        right: '20px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>m: '12
        <div style={{pple-
          width: '8px',
          height: '8px',2x,
          borderRadius: '50%',
          background: s500',sOnline ? '#10b981' : '#6b7280'
     } />if',293b'
        <input
          type="checkbox"g no
     hecked={selectedUsers.includes(user.id)}
          onChange={() => toggleUserSelection(user.id)}
          styl={{
        width: '18px',
            height: '18px',
            cursor:m: '12ter',
            accentColo:pple-b82f6'
          }}
        />2x,
      </div>
      500',
     v style={{29,b',
        displa: 'flex',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div syle={{
        ntSize: '32px',
          marginRight: '12px'
        }}>m: '12
          {user.avatarpple-
        </div>
        <div style={{ fl2 x1,}}>
          <div style=9ca3af
            fontSize: 1500',,
        fontWei293b'g600',if',
            maginBottom: '4px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>3741
            {user.name}
          </di>
        iv style={{
            display: 'flex',
            alignItm: '12dedber',
            gap: '8px',
            fontSize: '12px',
            fontFamily: 2pxp,e-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            color: '#64748b'
          }}>'500,
            <ClockI29 b',if',
            <span>{user.lastActivity}</span>
            <span style60a5a
              background: '#f1f5f9',
              padding: '2px 8px',
              orderRadius: '12px',
          fontSize: '10px',
              fontWeight: '600',
              colorm: '125569'
            }}>
              {user.level}
            </span>
          </div>
          {user.telegrm500',(
            <div style={{if',
              fontSize: '12px',
              color: '#3b82f6',
              marginTop: '4px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
            }}
          {user.t{{m}
            </div>
          )}
        </div>
      </div>

      <div style={{
        marginBottom: '5001,
      }}>if',
        <div style={{
          display: 'fle 'cnt
          justifyContd:d dbspace-between',
          alignItems: 'center',
          margnBottom: '12px'
        {
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            fontFamily:={{ple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            c: '#374151'
          }}>9ca3af
            Balances:500',
          </div>if',
          <button
            onClick={() 'c ntggleBalanceVisibility(user.id)}
            style={{
              background: 'none',
              order: 'none',
          color: {{8b',
              cursor: 'pointer',
              padding: '4px'
            }}
          >={{
            {Balances[user.id] ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>
        {Object.entries(user.balances).map(([currency, amount]) => (
          <div key={currency} style={{
            display: 'f 'c'nt
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '6px',
            fontSize:{{',
            fontFamily: '-apple-syst9ca3afinkMacSystemFont, "SF Pro Display", sans-serif'
          }}>ffaf
            <span style={{ color: '#64748b' }}>{currency}:</span>
            <span style={{ontWeight: '600', color: '#1e293b' }}>
             owBalances[user.id] !== false 
                ? (currency === 'USD' || currency === 'USDT' 
                  ? `$${amount.toLocaleString()}` 
                  : `${amount} ${currency}`)
                : '••••••'
              } 'cnt
            </span>
          </div>
        ))}
      </div>{{

      <div style={{
        display: 'flex',
        gap: '12px'={{
      }}>
        <button 
          onClick={() => {
            setSelectedUsers([user.id]);
            setShowWithdrawModal(true);
          }} 'cnt
          style={{
            background: '#ef4444',
            border: 'none',
            borderRad{{8px',
            padding: '8px 16px',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight:={{',
            cr: 'pointer',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }} 'cnt
        >
          <ArrowUpIcon />
          Withdraw
        </button>{{
        <button
          style={{
            background: '#10b981',
            border: 'no={{
            brRadius: '8px',
            padding: '8px 16px',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'po 'cent,
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <ArrowDownIcon />
          Deposit={{
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
                marginBottom: 374151
              }}4b5563
            >
              <h3 style={{
                margin: '0 0 16px 0',
                fontSize: '16px',
                fontWeight: '600',
                fontFamily: '-apple-sys8em, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span>{user.avatar}</span>
                {user.name}
              </h3>,
  color: '#f9fafb'
              12937
              {Object.entries(user.balances).map(([currency, balance]) => (
                <div key={currency} style={{
                  margi8Bottom: '16px'
                }}>
                  <div style={{
                    color: '#64748b',
                    ffSfafze: '13px',
                    marginBottom: '8px',5
                    fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                  }}>d1d5d
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
                        color: '#1e2931b2937
                        fontSize: '14px',4b563
                   or: '#9ca3af'
              }}
            >
              ×
            </button>
          </div>

          {/* C mmon Add esses Section */}
          <div
            style={{
              background   f3tF151',
              border: '1px solid #4b5563',
              morderRadius: '12px',
              padding: '20px',
              marginBottom: '20px'
            }}
          >
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '16pxi,ly: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
              color: '#f9fafb'
              >
              Common Addresses        outline: 'none'
            </h3          }}ffaf
            {Object.entries(commonAddresses).map(([currency, address]) => (
              <div key={currency} style={{     />
                marginBottom: '12px'
              }}>
                 div style={{
                  color: '#d1d5db',
                  fontSize: '13px',
                  marginBottom: '6px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                }}>
                  {currency} Address:
                < div>
                <input
                  type="text"
                  placeholder={`Enter ${currency} address...`}
                  value={address}
                  onChange={(e) => updateCommonAddress(currency, e.target.value)}
                  style={{
                    width: '100%',
                    background: '#1f2937',
                    border: '1px solid #4b5563',
                     orderRadi s: '8px',
                    padding: '10px',
                    color: '#f9fafb',
                    fontSize: '14px',
                    fontFamily: '-apple-system, BlinkMacSystemFon , "SF Pro Display", sans-serif',
                    ou line: 'n  e'
                  }}
                />
              </div<
            ))}input
                      type="text"
                      placeholder={`${currency} Address`}
                      value={withdrawalData[user.id]?.[`${currency}_address`] || ''}
                     d   borderRadius: '8px',
                      padding: '10px',
                      color: '#1e29312937
                      fontSize: '14px',4b563
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
                      outline: 'none'
                    }}caaf
                  />
                </div>
                      display: 'flex',
            </div>  agItmscetr
                 ))}}}>
                  {commonAddresses[currency] ||'Set common address above'
            </div><div
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
            </button>374151
            <button4b563
              onClick={processWithdrawal}
              style={{
                backgrounf9fafef4444',
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
          borderRadius: '50%',12937374151
          width: '32px',4b5563
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: notification.read ? '#64748b' : '#3b82f6'
        }}>3',
        color: '#f9fafb
          {notification.icon}
        </div>
        <div style={{
          fontSize: '14px',
          fontWeight: notification.read ? '500' : '600',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
          flex: 1,
          color: '#1e293b'
        }}>
          {notification.message}3741140
        </div>
      </div>
      <div style={{
        fontSize: '12px',
        color: '#64748b',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif',
        display: 'flex',9ca3af60a5a
        alignItems: 'center',
        gap: '4px'
      }}>
        <ClockIcon />
        {notification.time}
      </div>
    </div>
  );
ffaf
  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#f8fafc',
        display: 'flex',
        alignItem9ca3afnter',
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
    }}>000
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>374151

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
          justifyCon0t0n0:'space-between',
          alignfmfaf: 'center'
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
                borderRadius: '8px',374151
                padding:1a1a1a,
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
            >ffaf
              <SettingsIcon />
            </button>
          </div>3741
        </div>
      </div>
ca3af
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
      </div>374151
4b5563
      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}9ca3af
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          style={{ padding: '24px' }}
        >
          {activeTab === 'dash374151 && (
            <div>4b5563
              <div style={{
                display: 'flex',
                gap: '16px',
                marginBot9ca3af32px',
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
                  change={12.5} 374151
                  icon1a1a1aarIcon}
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
                  <UsersIcon />12937
                  All Users
                </h2>
                <div style={{3
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
                      top: f%faf,
                      transform: 'translateY(-50%)',
                      color: '#9ca3af'
                    }} />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      style9ca3af
                        background: '#ffffff',
                        borf:faf'1px solid #d1d5db',
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
                          backg6b7280 '#ef4444',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '10px 16px',
                          color: '#ffffff',
                          fontSize: '13px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          fontFamily: 1l2937e-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'
                        }}3741
                      >
                        Withdraw Selected
                      </button>ffaf
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
                <BellIcon />374151
                Notifications4b563
              </h2>
              {notifica>
f9faf
      <WithdrawModal /t
    </div>
  );ions.map((notification, index) => (
}
>

      <WithdrawModal /
    </div>
  );
}
>

      <WithdrawModal />
    </div
  );
}

export default App;export default App;export default App;                <div key={notification.id}>
                  <Noti>

      <WithdrawModal />
    </divficationCard notification={notification} />
  );
}
>

      <WithdrawModal />
    </div
  );
}>

      <WithdrawModal />
    </divdiv>
      </AnimatePresence>

      <WithdrawModal />
    </
  );
}

export default App;
  );
}

export default App;
export default App;export default App;                </div>
              ))}div>
      </AnimatePresence>
ffaf
      <WithdrawModal />
    </
  );
}

export default App;
            </div>
          )}
        </motion.div>
      </AnimatePrdiv>
      </AnimatePresence>
div>
      </AnimatePresence>

      <WithdrawModal />
    </
  );
}

export default App;
      <WithdrawModal />
    </esen
  );
}

export default Apdiv>
      </AnimatePresence>

      <WithdrawModal />
    </p;ce
  );
}

export default App;>

      <WithdrawModal />
    </div>
  );
}
div>
      </AnimatePresence>

      <WithdrawModal />
    </
  );
}

export default App;
export default App;
div>
      </AnimatePresence>

      <WithdrawModal />
    </
  );
}

export default App;