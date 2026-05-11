import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, DollarSign, TrendingUp, Bell, Settings, LogOut, Wallet, ArrowUpRight, ArrowDownLeft, RefreshCw } from 'lucide-react';

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
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
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

  const TabButton = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-300 ${
        activeTab === id
          ? 'gradient-bg text-white shadow-lg shadow-blue-500/30'
          : 'glass-dark text-gray-400 hover:text-white hover:bg-white/10'
      }`}
    >
      <Icon size={18} />
      <span className="font-medium">{label}</span>
    </button>
  );

  const StatCard = ({ icon: Icon, label, value, change, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-2xl p-5 card-hover"
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon size={20} className="text-white" />
        </div>
        {change && (
          <span className="text-green-400 text-sm font-medium flex items-center gap-1">
            <TrendingUp size={14} />
            {change}
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </motion.div>
  );

  const UserCard = ({ user }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass rounded-2xl p-4 card-hover"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <span className="text-white font-bold">{user.name.charAt(0)}</span>
          </div>
          <div>
            <p className="font-semibold text-white">{user.name}</p>
            <p className="text-xs text-gray-400">Last active: {user.lastActivity}</p>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
          {user.status}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-400 mb-1">Balance</p>
          <p className="text-lg font-bold text-white">${user.balance.toLocaleString()}</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors">
            <ArrowDownLeft size={16} />
          </button>
          <button className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors">
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4 spin">💎</div>
          <p className="text-gray-400">Loading Admin Panel...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark pb-24">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass-dark p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">💎</div>
            <div>
              <h1 className="text-xl font-bold gradient-text">Gem Admin</h1>
              <p className="text-xs text-gray-400">Panel v1.0</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg glass-dark hover:bg-white/10 transition-colors relative">
              <Bell size={20} className="text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>
            <button className="p-2 rounded-lg glass-dark hover:bg-white/10 transition-colors">
              <Settings size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Navigation Tabs */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="p-4 overflow-x-auto scrollbar-hide"
      >
        <div className="flex gap-2 min-w-max">
          <TabButton id="dashboard" icon={DollarSign} label="Dashboard" />
          <TabButton id="users" icon={Users} label="Users" />
          <TabButton id="transactions" icon={Wallet} label="Transactions" />
          <TabButton id="notifications" icon={Bell} label="Notifications" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="p-4">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <StatCard
                  icon={Users}
                  label="Total Users"
                  value={stats.totalUsers.toLocaleString()}
                  change="+12.5%"
                  color="bg-blue-500/20"
                />
                <StatCard
                  icon={DollarSign}
                  label="Total Balance"
                  value={`$${(stats.totalBalance / 1000000).toFixed(1)}M`}
                  change="+8.3%"
                  color="bg-purple-500/20"
                />
                <StatCard
                  icon={ArrowDownLeft}
                  label="Today Deposits"
                  value={`$${(stats.todayDeposits / 1000).toFixed(0)}K`}
                  change="+15.2%"
                  color="bg-green-500/20"
                />
                <StatCard
                  icon={ArrowUpRight}
                  label="Today Withdrawals"
                  value={`$${(stats.todayWithdrawals / 1000).toFixed(0)}K`}
                  change="-3.1%"
                  color="bg-red-500/20"
                />
              </div>

              <div className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {notifications.slice(0, 5).map((notif) => (
                    <div key={notif.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                      <div className={`p-2 rounded-lg ${
                        notif.type === 'new_user' ? 'bg-blue-500/20' :
                        notif.type === 'deposit' ? 'bg-green-500/20' : 'bg-red-500/20'
                      }`}>
                        {notif.type === 'new_user' && <Users size={16} className="text-blue-400" />}
                        {notif.type === 'deposit' && <ArrowDownLeft size={16} className="text-green-400" />}
                        {notif.type === 'withdrawal' && <ArrowUpRight size={16} className="text-red-400" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white">{notif.message}</p>
                        <p className="text-xs text-gray-400">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              key="users"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">All Users</h2>
                <button className="flex items-center gap-2 px-3 py-2 rounded-xl glass-dark text-sm text-gray-400 hover:text-white transition-colors">
                  <RefreshCw size={14} />
                  Refresh
                </button>
              </div>
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </motion.div>
          )}

          {activeTab === 'notifications' && (
            <motion.div
              key="notifications"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold text-white mb-4">All Notifications</h2>
              {notifications.map((notif) => (
                <div key={notif.id} className="glass rounded-2xl p-4 card-hover">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${
                      notif.type === 'new_user' ? 'bg-blue-500/20' :
                      notif.type === 'deposit' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      {notif.type === 'new_user' && <Users size={20} className="text-blue-400" />}
                      {notif.type === 'deposit' && <ArrowDownLeft size={20} className="text-green-400" />}
                      {notif.type === 'withdrawal' && <ArrowUpRight size={20} className="text-red-400" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{notif.message}</p>
                      <p className="text-sm text-gray-400">{notif.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
