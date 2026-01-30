import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Transactions = () => {
  const [activeTab, setActiveTab] = useState('store-payouts');

  const transactionTabs = [
    { id: 'store-payouts', title: 'Store Payouts' },
    { id: 'payout-schedule', title: 'Payout Schedule' },
    { id: 'delivery-collections', title: 'Delivery Collections' },
    { id: 'delivery-logs', title: 'Delivery Collection Logs' },
    { id: 'wallet-transactions', title: 'Wallet Transactions' },
    { id: 'schedules', title: 'Schedules' },
    { id: 'reports', title: 'Reports' }
  ];

  // Sample data for Store Payouts
  const storePayouts = [
    { id: 1, store: 'Pizza Palace', amount: 1250.50, status: 'Completed', date: '01/28/2026', method: 'Bank Transfer' },
    { id: 2, store: 'Fresh Mart', amount: 890.25, status: 'Pending', date: '01/28/2026', method: 'Bank Transfer' },
    { id: 3, store: 'Burger King', amount: 1450.00, status: 'Completed', date: '01/27/2026', method: 'Bank Transfer' }
  ];

  // Sample data for Payout Schedule
  const payoutSchedules = [
    { id: 1, store: 'Pizza Palace', frequency: 'Weekly', nextPayout: '02/04/2026', amount: 2500.00 },
    { id: 2, store: 'Fresh Mart', frequency: 'Bi-Weekly', nextPayout: '02/11/2026', amount: 1800.00 }
  ];

  // Sample data for Delivery Collections
  const deliveryCollections = [
    { id: 1, driver: 'Robert Brown', collected: 450.00, orders: 12, date: '01/29/2026', status: 'Collected' },
    { id: 2, driver: 'Lisa Anderson', collected: 380.50, orders: 10, date: '01/29/2026', status: 'Pending' }
  ];

  // Sample data for Delivery Collection Logs
  const deliveryLogs = [
    { id: 1, driver: 'Robert Brown', orderId: '#12345', amount: 47.50, collectedAt: '01/29/2026 10:30 AM' },
    { id: 2, driver: 'Lisa Anderson', orderId: '#12346', amount: 44.20, collectedAt: '01/29/2026 11:15 AM' }
  ];

  // Sample data for Wallet Transactions
  const walletTransactions = [
    { id: 1, user: 'John Doe', type: 'Credit', amount: 50.00, balance: 150.00, date: '01/29/2026', description: 'Refund' },
    { id: 2, user: 'Jane Smith', type: 'Debit', amount: 25.00, balance: 75.00, date: '01/29/2026', description: 'Order Payment' }
  ];

  return (
    <DashboardLayout title="Transactions" subtitle="Manage all financial transactions">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Transactions</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage all financial transactions</p>
      </div>

      {/* Tab Bar */}
      <div className="bg-gray-100 rounded-2xl p-2 mb-8">
        <div className="flex gap-2 overflow-x-auto">
          {transactionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[140px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'bg-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Store Payouts Tab */}
      {activeTab === 'store-payouts' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">Manage store payout transactions</p>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
              Process Payouts
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Store Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Method</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {storePayouts.map((payout) => (
                    <tr key={payout.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{payout.id}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-gray-900">{payout.store}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-green-600">${payout.amount.toFixed(2)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          payout.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {payout.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{payout.date}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{payout.method}</span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Payout Schedule Tab */}
      {activeTab === 'payout-schedule' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">Manage payout schedules for stores</p>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
              Add Schedule
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Store Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Frequency</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Next Payout</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Expected Amount</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {payoutSchedules.map((schedule) => (
                    <tr key={schedule.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{schedule.id}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-gray-900">{schedule.store}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{schedule.frequency}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{schedule.nextPayout}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-green-600">${schedule.amount.toFixed(2)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                          <button className="text-red-600 hover:text-red-700 text-sm font-medium">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Delivery Collections Tab */}
      {activeTab === 'delivery-collections' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">Track delivery driver collections</p>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
              Export Report
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Driver Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Amount Collected</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Total Orders</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryCollections.map((collection) => (
                    <tr key={collection.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{collection.id}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-gray-900">{collection.driver}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-green-600">${collection.collected.toFixed(2)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{collection.orders}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{collection.date}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          collection.status === 'Collected' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {collection.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Delivery Collection Logs Tab */}
      {activeTab === 'delivery-logs' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">View detailed delivery collection logs</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Driver Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Order ID</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Collected At</th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryLogs.map((log) => (
                    <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{log.id}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-gray-900">{log.driver}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-blue-600">{log.orderId}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-green-600">${log.amount.toFixed(2)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{log.collectedAt}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Wallet Transactions Tab */}
      {activeTab === 'wallet-transactions' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm text-gray-600">Manage user wallet transactions</p>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
              Export Report
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">User</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Type</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Balance</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {walletTransactions.map((transaction) => (
                    <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{transaction.id}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-gray-900">{transaction.user}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          transaction.type === 'Credit' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`text-sm font-semibold ${
                          transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {transaction.type === 'Credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-gray-900">${transaction.balance.toFixed(2)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{transaction.date}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{transaction.description}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Schedules Tab */}
      {activeTab === 'schedules' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedules Management</h3>
          <p className="text-sm text-gray-500">Configure automated transaction schedules</p>
        </div>
      )}

      {/* Reports Tab */}
      {activeTab === 'reports' && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Transaction Reports</h3>
          <p className="text-sm text-gray-500">Generate and view detailed transaction reports</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Transactions;
