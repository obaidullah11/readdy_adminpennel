import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Orders = () => {
  const [activeStatus, setActiveStatus] = useState('new');

  const ordersByStatus = {
    new: [
      {
        id: 2451,
        customer: 'John S.',
        store: 'Pizza Palace',
        amount: 650,
        time: '2m ago',
        avatar: 'JS',
        avatarBg: 'bg-blue-500'
      },
      {
        id: 2452,
        customer: 'Emily J.',
        store: 'Fresh Mart',
        amount: 1250,
        time: '5m ago',
        avatar: 'EJ',
        avatarBg: 'bg-purple-500'
      }
    ],
    preparing: [
      {
        id: 2450,
        customer: 'Michael D.',
        store: 'Burger King',
        amount: 890,
        time: '8m ago',
        avatar: 'MD',
        avatarBg: 'bg-green-500'
      },
      {
        id: 2449,
        customer: 'Sarah W.',
        store: 'Cafe Delight',
        amount: 420,
        time: '12m ago',
        avatar: 'SW',
        avatarBg: 'bg-pink-500'
      },
      {
        id: 2448,
        customer: 'David L.',
        store: 'Pizza Palace',
        amount: 780,
        time: '15m ago',
        avatar: 'DL',
        avatarBg: 'bg-indigo-500'
      }
    ],
    onTheWay: [
      {
        id: 2447,
        customer: 'Lisa A.',
        store: 'Fresh Mart',
        amount: 1120,
        time: '18m ago',
        avatar: 'LA',
        avatarBg: 'bg-teal-500'
      },
      {
        id: 2446,
        customer: 'Robert B.',
        store: 'Sushi Bar',
        amount: 950,
        time: '22m ago',
        avatar: 'RB',
        avatarBg: 'bg-orange-500'
      }
    ],
    delivered: [
      {
        id: 2445,
        customer: 'Patricia G.',
        store: 'Pizza Palace',
        amount: 670,
        time: '25m ago',
        avatar: 'PG',
        avatarBg: 'bg-yellow-500'
      },
      {
        id: 2444,
        customer: 'James W.',
        store: 'Burger King',
        amount: 540,
        time: '30m ago',
        avatar: 'JW',
        avatarBg: 'bg-red-500'
      },
      {
        id: 2443,
        customer: 'Jennifer M.',
        store: 'Fresh Mart',
        amount: 1340,
        time: '35m ago',
        avatar: 'JM',
        avatarBg: 'bg-cyan-500'
      },
      {
        id: 2442,
        customer: 'Christopher L.',
        store: 'Cafe Delight',
        amount: 380,
        time: '40m ago',
        avatar: 'CL',
        avatarBg: 'bg-gray-500'
      }
    ],
    cancelled: [
      {
        id: 2441,
        customer: 'Amanda T.',
        store: 'Pizza Palace',
        amount: 720,
        time: '45m ago',
        avatar: 'AT',
        avatarBg: 'bg-rose-500'
      }
    ]
  };

  const statusTabs = [
    { key: 'new', label: 'New', count: ordersByStatus.new.length },
    { key: 'preparing', label: 'Preparing', count: ordersByStatus.preparing.length },
    { key: 'onTheWay', label: 'On the Way', count: ordersByStatus.onTheWay.length },
    { key: 'delivered', label: 'Delivered', count: ordersByStatus.delivered.length },
    { key: 'cancelled', label: 'Cancelled', count: ordersByStatus.cancelled.length }
  ];

  const handleViewDetails = (orderId) => {
    console.log('View details for order:', orderId);
  };

  const currentOrders = ordersByStatus[activeStatus] || [];

  return (
    <DashboardLayout title="Orders Management" subtitle="Real-time order tracking and management">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Orders Management</h1>
        <p className="text-sm sm:text-base text-gray-500">Real-time order tracking and management</p>
      </div>

      {/* Status Tabs */}
      <div className="bg-gray-100 rounded-2xl p-2 mb-8">
        <div className="flex gap-2 overflow-x-auto">
          {statusTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveStatus(tab.key)}
              className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl transition-all whitespace-nowrap ${
                activeStatus === tab.key
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'bg-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center">
                <span className="text-sm sm:text-base font-semibold">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Orders Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {statusTabs.find(t => t.key === activeStatus)?.label} Orders
          </h2>
          <span className="text-sm text-gray-500 font-medium">
            {currentOrders.length} {currentOrders.length === 1 ? 'order' : 'orders'}
          </span>
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              {/* Order Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">#{order.id}</h3>
                  <p className="text-sm text-gray-500">{order.time}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="mb-4">
                <p className="text-base font-semibold text-gray-900 mb-1">{order.customer}</p>
                <p className="text-sm text-gray-500">{order.store}</p>
              </div>

              {/* Order Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xl font-bold text-red-600">${order.amount}</p>
                </div>
                <button
                  onClick={() => handleViewDetails(order.id)}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentOrders.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No orders found</h3>
            <p className="text-sm text-gray-500">There are no {statusTabs.find(t => t.key === activeStatus)?.label.toLowerCase()} orders at the moment.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Orders;
