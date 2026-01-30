import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Orders Today',
      value: '248',
      change: '+12.5%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Total Revenue',
      value: '$45,280',
      change: '+23.1%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Active Stores',
      value: '142',
      change: '+5.4%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Active Users',
      value: '12,458',
      change: '+8.4%',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  const ordersData = [
    { day: 'Mon', orders: 45 },
    { day: 'Tue', orders: 52 },
    { day: 'Wed', orders: 49 },
    { day: 'Thu', orders: 65 },
    { day: 'Fri', orders: 58 },
    { day: 'Sat', orders: 72 },
    { day: 'Sun', orders: 68 }
  ];

  const revenueData = [
    { category: 'Food', revenue: 36000 },
    { category: 'Groceries', revenue: 27000 },
    { category: 'Pharmacy', revenue: 18000 },
    { category: 'Electronics', revenue: 22000 },
    { category: 'Fashion', revenue: 15000 }
  ];

  const orderStatus = [
    { 
      label: 'Pending', 
      value: '24', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBg: 'bg-yellow-50',
      iconColor: 'text-yellow-500'
    },
    { 
      label: 'Preparing', 
      value: '38', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500'
    },
    { 
      label: 'On the Way', 
      value: '16', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-500'
    },
    { 
      label: 'Delivered', 
      value: '170', 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      iconBg: 'bg-green-50',
      iconColor: 'text-green-500'
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-900">{payload[0].payload.day}</p>
          <p className="text-sm text-red-600">orders: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <DashboardLayout 
      title="Dashboard" 
      subtitle="Welcome back! Here's what's happening today."
    >
      {/* Page Title */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-sm sm:text-base text-gray-500">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between mb-3 sm:mb-4">
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm text-gray-600 mb-1">{stat.title}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">{stat.value}</h3>
                <p className="text-xs sm:text-sm text-green-600 mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.iconBg} ${stat.iconColor} p-2 sm:p-3 rounded-lg flex-shrink-0`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* Orders Over Time */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Orders Over Time</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">Last 7 days performance</p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={ordersData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="day" 
                tick={{ fill: '#9ca3af', fontSize: 11 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                tick={{ fill: '#9ca3af', fontSize: 11 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="orders" 
                stroke="#ef4444" 
                strokeWidth={2}
                dot={{ fill: '#ef4444', r: 3 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center mt-3 sm:mt-4">
            <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span className="w-3 h-0.5 bg-red-600"></span>
              orders
            </span>
          </div>
        </div>

        {/* Revenue by Category */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Revenue by Category</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">This week's breakdown</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="category" 
                tick={{ fill: '#9ca3af', fontSize: 11 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <YAxis 
                tick={{ fill: '#9ca3af', fontSize: 11 }}
                axisLine={{ stroke: '#e5e7eb' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
                cursor={{ fill: 'rgba(239, 68, 68, 0.1)' }}
              />
              <Bar 
                dataKey="revenue" 
                fill="#ef4444" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex items-center justify-center mt-3 sm:mt-4">
            <span className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span className="w-3 h-3 bg-red-600 rounded"></span>
              revenue
            </span>
          </div>
        </div>
      </div>

      {/* Order Status */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
        {orderStatus.map((status, index) => (
          <div key={index} className="bg-white rounded-xl p-3 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4">
              <div className={`${status.iconBg} ${status.iconColor} p-2 sm:p-3 rounded-lg flex-shrink-0`}>
                {status.icon}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{status.label}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{status.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders and Top Stores */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 lg:w-[65%]">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Recent Orders</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">Latest transactions from your platform</p>
          <div className="space-y-3 sm:space-y-4">
            {/* Order 1 */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm sm:text-base">
                JS
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">#ORD-2451</span>
                  <span className="px-2 py-0.5 bg-black text-white text-xs rounded-md font-medium">Delivered</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 truncate">John Smith • Pizza Palace</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-gray-900 text-sm sm:text-base">$650</p>
                <p className="text-xs text-gray-400 hidden sm:block">2 mins ago</p>
              </div>
            </div>

            {/* Order 2 */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm sm:text-base">
                EJ
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">#ORD-2450</span>
                  <span className="px-2 py-0.5 bg-white border border-gray-300 text-gray-700 text-xs rounded-md font-medium">Preparing</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 truncate">Emily Johnson • Fresh Mart</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-gray-900 text-sm sm:text-base">$1,250</p>
                <p className="text-xs text-gray-400 hidden sm:block">5 mins ago</p>
              </div>
            </div>

            {/* Order 3 */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm sm:text-base">
                MD
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">#ORD-2449</span>
                  <span className="px-2 py-0.5 bg-white border border-gray-300 text-gray-700 text-xs rounded-md font-medium">On the Way</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 truncate">Michael Davis • Burger King</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-gray-900 text-sm sm:text-base">$450</p>
                <p className="text-xs text-gray-400 hidden sm:block">12 mins ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Stores */}
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 lg:w-[35%]">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">Top Stores</h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">Best performing this week</p>
          <div className="space-y-3 sm:space-y-4">
            {/* Store 1 */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                1
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 mb-0.5 text-sm sm:text-base truncate">Pizza Palace</h4>
                <p className="text-xs sm:text-sm text-gray-500">145 orders</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm mb-1">
                  <span>★</span>
                  <span className="font-semibold">4.8</span>
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-base">$45.6K</p>
              </div>
            </div>

            {/* Store 2 */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                2
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 mb-0.5 text-sm sm:text-base truncate">Fresh Mart</h4>
                <p className="text-xs sm:text-sm text-gray-500">132 orders</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm mb-1">
                  <span>★</span>
                  <span className="font-semibold">4.7</span>
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-base">$38.2K</p>
              </div>
            </div>

            {/* Store 3 */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                3
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 mb-0.5 text-sm sm:text-base truncate">Burger King</h4>
                <p className="text-xs sm:text-sm text-gray-500">128 orders</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm mb-1">
                  <span>★</span>
                  <span className="font-semibold">4.6</span>
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-base">$35.8K</p>
              </div>
            </div>

            {/* Store 4 */}
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-base sm:text-lg flex-shrink-0">
                4
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 mb-0.5 text-sm sm:text-base truncate">Cafe Delight</h4>
                <p className="text-xs sm:text-sm text-gray-500">115 orders</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="flex items-center gap-1 text-yellow-500 text-xs sm:text-sm mb-1">
                  <span>★</span>
                  <span className="font-semibold">4.9</span>
                </div>
                <p className="font-bold text-gray-900 text-xs sm:text-base">$28.4K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
