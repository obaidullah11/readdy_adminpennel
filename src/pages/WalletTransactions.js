import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const WalletTransactions = () => {
  const walletTransactions = [
    { id: 1, user: 'John Doe', type: 'Credit', amount: 50.00, balance: 150.00, date: '01/29/2026', description: 'Refund' },
    { id: 2, user: 'Jane Smith', type: 'Debit', amount: 25.00, balance: 75.00, date: '01/29/2026', description: 'Order Payment' }
  ];

  return (
    <DashboardLayout title="Wallet Transactions" subtitle="Manage user wallet transactions">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Wallet Transactions</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage user wallet transactions</p>
      </div>

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
    </DashboardLayout>
  );
};

export default WalletTransactions;
