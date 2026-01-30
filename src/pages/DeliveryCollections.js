import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const DeliveryCollections = () => {
  const deliveryCollections = [
    { id: 1, driver: 'Robert Brown', collected: 450.00, orders: 12, date: '01/29/2026', status: 'Collected' },
    { id: 2, driver: 'Lisa Anderson', collected: 380.50, orders: 10, date: '01/29/2026', status: 'Pending' }
  ];

  return (
    <DashboardLayout title="Delivery Collections" subtitle="Track delivery driver collections">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Delivery Collections</h1>
        <p className="text-sm sm:text-base text-gray-500">Track delivery driver collections</p>
      </div>

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
    </DashboardLayout>
  );
};

export default DeliveryCollections;
