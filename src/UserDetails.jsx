import React from 'react';

const EyeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const UserDetails = ({ user, onClose }) => {
  if (!user) return null;

  const formatBalance = (balance) => {
    const num = parseFloat(balance || 0);
    return num.toLocaleString(undefined, { maximumFractionDigits: 6 });
  };

  const getLevelColor = (level) => {
    const colors = {
      'Diamond': '#8b5cf6',
      'Platinum': '#06b6d4', 
      'Gold': '#f59e0b',
      'Silver': '#6b7280',
      'Bronze': '#92400e'
    };
    return colors[level] || '#92400e';
  };

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
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: '#1f2937',
        borderRadius: '16px',
        padding: '24px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto',
        border: '1px solid #374151'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, color: '#fff', fontSize: '20px' }}>User Details</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '0'
            }}
          >
            ×
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{
            fontSize: '48px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: '#374151',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {user.avatar}
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#fff', fontSize: '18px' }}>{user.name}</h3>
            <p style={{ margin: '0 0 8px 0', color: '#9ca3af', fontSize: '14px' }}>{user.telegram}</p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{
                fontSize: '12px',
                padding: '4px 12px',
                borderRadius: '12px',
                background: getLevelColor(user.level),
                color: '#ffffff',
                fontWeight: '500'
              }}>
                {user.level || 'Bronze'}
              </span>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: user.isOnline ? '#10b981' : '#6b7280'
              }} />
              <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                {user.isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ margin: '0 0 12px 0', color: '#fff', fontSize: '16px' }}>Financial Information</h4>
          <div style={{ 
            background: '#111827', 
            borderRadius: '8px', 
            padding: '16px',
            border: '1px solid #374151'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>Total Balance</span>
              <span style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}>
                ${(user.totalBalance || 0).toLocaleString()}
              </span>
            </div>
            {user.balances && Object.entries(user.balances).map(([token, balance]) => (
              <div key={token} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ color: '#9ca3af', fontSize: '12px' }}>{token}</span>
                <span style={{ color: '#fff', fontSize: '12px' }}>{formatBalance(balance)}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ margin: '0 0 12px 0', color: '#fff', fontSize: '16px' }}>Activity Information</h4>
          <div style={{ 
            background: '#111827', 
            borderRadius: '8px', 
            padding: '16px',
            border: '1px solid #374151'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>Status</span>
              <span style={{ color: '#fff', fontSize: '14px' }}>{user.status || 'active'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>Last Activity</span>
              <span style={{ color: '#fff', fontSize: '14px' }}>{user.lastActivity || 'Unknown'}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>Member Since</span>
              <span style={{ color: '#fff', fontSize: '14px' }}>
                {new Date(user.createdAt || Date.now()).toLocaleDateString()}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#9ca3af', fontSize: '14px' }}>Last Balance Update</span>
              <span style={{ color: '#fff', fontSize: '14px' }}>
                {user.lastBalanceUpdate ? new Date(user.lastBalanceUpdate).toLocaleString() : 'Never'}
              </span>
            </div>
          </div>
        </div>

        {user.addresses && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ margin: '0 0 12px 0', color: '#fff', fontSize: '16px' }}>Wallet Addresses</h4>
            <div style={{ 
              background: '#111827', 
              borderRadius: '8px', 
              padding: '16px',
              border: '1px solid #374151'
            }}>
              {Object.entries(user.addresses).map(([network, address]) => (
                <div key={network} style={{ marginBottom: '12px' }}>
                  <div style={{ color: '#9ca3af', fontSize: '12px', marginBottom: '4px' }}>
                    {network.toUpperCase()}
                  </div>
                  <div style={{ 
                    color: '#fff', 
                    fontSize: '12px',
                    fontFamily: 'monospace',
                    wordBreak: 'break-all',
                    background: '#1f2937',
                    padding: '8px',
                    borderRadius: '4px'
                  }}>
                    {address}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          style={{
            width: '100%',
            background: '#3b82f6',
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
