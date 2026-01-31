import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Users = () => {
  const [activeTab, setActiveTab] = useState('all-users');
  const [openDropdown, setOpenDropdown] = useState(null);

  const [allUsers, setAllUsers] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1 555-123-4567',
      role: 'Customer',
      wallet: '$125.50',
      createdDate: '7 months ago',
      avatar: 'JS',
      avatarBg: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Robert Brown',
      email: 'robert@example.com',
      phone: '+1 555-567-8901',
      role: 'Delivery Guy',
      wallet: '$450.00',
      createdDate: '8 months ago',
      avatar: 'RB',
      avatarBg: 'bg-orange-500'
    },
    {
      id: 3,
      name: 'James Wilson',
      email: 'james@pizzapalace.com',
      phone: '+1 555-890-1234',
      role: 'Store Owner',
      wallet: '$2,340.75',
      createdDate: '9 months ago',
      avatar: 'JW',
      avatarBg: 'bg-indigo-500'
    },
    {
      id: 4,
      name: 'Sarah Admin',
      email: 'sarah@reddyapp.com',
      phone: '+1 555-111-2222',
      role: 'Staff',
      wallet: '$0.00',
      createdDate: '10 months ago',
      avatar: 'SA',
      avatarBg: 'bg-purple-500'
    }
  ]);

  const [customers] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1 555-123-4567',
      orders: 45,
      status: 'Active',
      avatar: 'JS',
      avatarBg: 'bg-blue-500',
      joinedDate: 'Jan 15, 2024',
      totalSpent: '$2,450'
    },
    {
      id: 2,
      name: 'Emily Johnson',
      email: 'emily@example.com',
      phone: '+1 555-234-5678',
      orders: 32,
      status: 'Active',
      avatar: 'EJ',
      avatarBg: 'bg-purple-500',
      joinedDate: 'Feb 20, 2024',
      totalSpent: '$1,890'
    },
    {
      id: 3,
      name: 'Michael Davis',
      email: 'michael@example.com',
      phone: '+1 555-345-6789',
      orders: 28,
      status: 'Suspended',
      avatar: 'MD',
      avatarBg: 'bg-green-500',
      joinedDate: 'Mar 10, 2024',
      totalSpent: '$1,560'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      phone: '+1 555-456-7890',
      orders: 51,
      status: 'Active',
      avatar: 'SW',
      avatarBg: 'bg-pink-500',
      joinedDate: 'Jan 5, 2024',
      totalSpent: '$3,120'
    }
  ]);

  const [drivers] = useState([
    {
      id: 1,
      name: 'Robert Brown',
      email: 'robert@example.com',
      phone: '+1 555-567-8901',
      deliveries: 234,
      status: 'Active',
      avatar: 'RB',
      avatarBg: 'bg-orange-500',
      joinedDate: 'Dec 1, 2023',
      rating: 4.8,
      vehicle: 'Honda Civic'
    },
    {
      id: 2,
      name: 'Lisa Anderson',
      email: 'lisa@example.com',
      phone: '+1 555-678-9012',
      deliveries: 189,
      status: 'Active',
      avatar: 'LA',
      avatarBg: 'bg-teal-500',
      joinedDate: 'Jan 10, 2024',
      rating: 4.9,
      vehicle: 'Toyota Corolla'
    },
    {
      id: 3,
      name: 'David Martinez',
      email: 'david@example.com',
      phone: '+1 555-789-0123',
      deliveries: 156,
      status: 'Inactive',
      avatar: 'DM',
      avatarBg: 'bg-red-500',
      joinedDate: 'Feb 15, 2024',
      rating: 4.6,
      vehicle: 'Ford Focus'
    }
  ]);

  const [owners] = useState([
    {
      id: 1,
      name: 'James Wilson',
      email: 'james@pizzapalace.com',
      phone: '+1 555-890-1234',
      stores: 2,
      status: 'Active',
      avatar: 'JW',
      avatarBg: 'bg-indigo-500',
      joinedDate: 'Nov 1, 2023',
      totalRevenue: '$45,600',
      storeName: 'Pizza Palace'
    },
    {
      id: 2,
      name: 'Patricia Garcia',
      email: 'patricia@freshmart.com',
      phone: '+1 555-901-2345',
      stores: 1,
      status: 'Active',
      avatar: 'PG',
      avatarBg: 'bg-yellow-500',
      joinedDate: 'Dec 15, 2023',
      totalRevenue: '$38,200',
      storeName: 'Fresh Mart'
    },
    {
      id: 3,
      name: 'Christopher Lee',
      email: 'chris@burgerking.com',
      phone: '+1 555-012-3456',
      stores: 3,
      status: 'Suspended',
      avatar: 'CL',
      avatarBg: 'bg-gray-500',
      joinedDate: 'Jan 20, 2024',
      totalRevenue: '$52,800',
      storeName: 'Burger King'
    }
  ]);

  const [staff] = useState([
    {
      id: 1,
      name: 'Sarah Admin',
      email: 'sarah@reddyapp.com',
      phone: '+1 555-111-2222',
      role: 'Manager',
      status: 'Active',
      avatar: 'SA',
      avatarBg: 'bg-purple-500',
      joinedDate: 'Oct 1, 2023',
      department: 'Operations'
    },
    {
      id: 2,
      name: 'Tom Support',
      email: 'tom@reddyapp.com',
      phone: '+1 555-222-3333',
      role: 'Support Agent',
      status: 'Active',
      avatar: 'TS',
      avatarBg: 'bg-cyan-500',
      joinedDate: 'Nov 15, 2023',
      department: 'Customer Service'
    }
  ]);

  const handleViewUser = (user) => {
    console.log('Viewing user:', user);
  };

  const handleSuspendUser = (user) => {
    console.log('Suspending user:', user.name);
  };

  return (
    <DashboardLayout title="Users Management" subtitle="Manage customers, drivers, and store owners">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Users Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage customers, drivers, and store owners</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-100 rounded-2xl p-2 mb-8">
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('all-users')}
            className={`flex-1 min-w-[120px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'all-users'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            All Users
          </button>
          <button
            onClick={() => setActiveTab('customers')}
            className={`flex-1 min-w-[120px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'customers'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Customers
          </button>
          <button
            onClick={() => setActiveTab('owners')}
            className={`flex-1 min-w-[140px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'owners'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Store Owners
          </button>
          <button
            onClick={() => setActiveTab('drivers')}
            className={`flex-1 min-w-[140px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'drivers'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Delivery Guys
          </button>
          <button
            onClick={() => setActiveTab('staff')}
            className={`flex-1 min-w-[100px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'staff'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Staff
          </button>
        </div>
      </div>

      {/* All Users Tab */}
      {activeTab === 'all-users' && (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        Name
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        Email
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        Phone
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Role</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Wallet</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        Created Date
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="font-medium text-gray-900">{user.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{user.email}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{user.phone}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{user.role}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-gray-900">{user.wallet}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-600">{user.createdDate}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="relative">
                          <button
                            onClick={() => setOpenDropdown(openDropdown === user.id ? null : user.id)}
                            className="mx-auto block text-gray-600 hover:text-gray-900 p-1"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                          {openDropdown === user.id && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                              <button
                                onClick={() => {
                                  handleViewUser(user);
                                  setOpenDropdown(null);
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View
                              </button>
                              <button
                                onClick={() => {
                                  handleSuspendUser(user);
                                  setOpenDropdown(null);
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                </svg>
                                Suspend
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {allUsers.map((user) => (
              <div key={user.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${user.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                    {user.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{user.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{user.email}</p>
                    <p className="text-sm text-gray-600">{user.phone}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    user.status === 'Active' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {user.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Type</p>
                    <p className="text-sm font-medium text-gray-900">{user.type}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Joined</p>
                    <p className="text-sm font-medium text-gray-900">{user.joinedDate}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewUser(user)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleSuspendUser(user)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    Suspend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Customers Tab */}
      {activeTab === 'customers' && (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Customer</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Orders</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Total Spent</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${customer.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                            {customer.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{customer.name}</p>
                            <p className="text-sm text-gray-500">{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{customer.phone}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900">{customer.orders}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900">{customer.totalSpent}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          customer.status === 'Active' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewUser(customer)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleSuspendUser(customer)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Suspend"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${customer.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                    {customer.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{customer.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{customer.email}</p>
                    <p className="text-sm text-gray-600">{customer.phone}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    customer.status === 'Active' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {customer.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Orders</p>
                    <p className="text-base font-semibold text-gray-900">{customer.orders}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Total Spent</p>
                    <p className="text-base font-semibold text-gray-900">{customer.totalSpent}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewUser(customer)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleSuspendUser(customer)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    Suspend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Drivers Tab */}
      {activeTab === 'drivers' && (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Driver</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Deliveries</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Rating</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Vehicle</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {drivers.map((driver) => (
                    <tr key={driver.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${driver.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                            {driver.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{driver.name}</p>
                            <p className="text-sm text-gray-500">{driver.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{driver.phone}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900">{driver.deliveries}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <span>★</span>
                          <span className="font-semibold text-gray-900">{driver.rating}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{driver.vehicle}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          driver.status === 'Active' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {driver.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewUser(driver)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleSuspendUser(driver)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Suspend"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {drivers.map((driver) => (
              <div key={driver.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${driver.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                    {driver.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{driver.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{driver.email}</p>
                    <p className="text-sm text-gray-600">{driver.phone}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    driver.status === 'Active' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {driver.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Deliveries</p>
                    <p className="text-base font-semibold text-gray-900">{driver.deliveries}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Rating</p>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-base font-semibold text-gray-900">{driver.rating}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Vehicle</p>
                    <p className="text-sm font-medium text-gray-900">{driver.vehicle}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewUser(driver)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleSuspendUser(driver)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    Suspend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Owners Tab */}
      {activeTab === 'owners' && (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Owner</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Store</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Stores Count</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Revenue</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {owners.map((owner) => (
                    <tr key={owner.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${owner.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                            {owner.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{owner.name}</p>
                            <p className="text-sm text-gray-500">{owner.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{owner.phone}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{owner.storeName}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900">{owner.stores}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900">{owner.totalRevenue}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          owner.status === 'Active' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {owner.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewUser(owner)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleSuspendUser(owner)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Suspend"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {owners.map((owner) => (
              <div key={owner.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${owner.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                    {owner.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{owner.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{owner.email}</p>
                    <p className="text-sm text-gray-600">{owner.phone}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    owner.status === 'Active' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {owner.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Store</p>
                    <p className="text-sm font-medium text-gray-900">{owner.storeName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Stores</p>
                    <p className="text-base font-semibold text-gray-900">{owner.stores}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Revenue</p>
                    <p className="text-base font-semibold text-gray-900">{owner.totalRevenue}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewUser(owner)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleSuspendUser(owner)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    Suspend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Staff Tab */}
      {activeTab === 'staff' && (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Staff Member</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Role</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Department</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((member) => (
                    <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${member.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                            {member.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{member.phone}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{member.role}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{member.department}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          member.status === 'Active' 
                            ? 'bg-black text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}>
                          {member.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewUser(member)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="View"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleSuspendUser(member)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Suspend"
                          >
                            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {staff.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${member.avatarBg} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                    {member.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{member.email}</p>
                    <p className="text-sm text-gray-600">{member.phone}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
                    member.status === 'Active' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {member.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Role</p>
                    <p className="text-sm font-medium text-gray-900">{member.role}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Department</p>
                    <p className="text-sm font-medium text-gray-900">{member.department}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewUser(member)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleSuspendUser(member)}
                    className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                  >
                    Suspend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default Users;
