import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Addons = () => {
  const [isAddAddonModalOpen, setIsAddAddonModalOpen] = useState(false);

  const [addons] = useState([
    { id: 1, name: 'Extra Cheese', price: 30, icon: '🧀', color: 'bg-gray-100' },
    { id: 2, name: 'Bacon', price: 50, icon: '🥓', color: 'bg-gray-100' },
    { id: 3, name: 'Avocado', price: 40, icon: '🥑', color: 'bg-gray-100' },
    { id: 4, name: 'Extra Sauce', price: 20, icon: '🍯', color: 'bg-gray-100' },
    { id: 5, name: 'Mushrooms', price: 35, icon: '🍄', color: 'bg-gray-100' },
    { id: 6, name: 'Olives', price: 25, icon: '🫒', color: 'bg-gray-100' }
  ]);

  return (
    <DashboardLayout title="Add-ons" subtitle="Manage item add-ons">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Add-ons Management</h1>
          <p className="text-sm text-gray-500 mt-1">Manage additional options for menu items</p>
        </div>
        <button 
          onClick={() => setIsAddAddonModalOpen(true)}
          className="text-white px-6 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
          style={{ backgroundColor: '#ff3008' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Add-on
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Add-on</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Price</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {addons.map((addon) => (
                <tr key={addon.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${addon.color} rounded-full flex items-center justify-center text-2xl flex-shrink-0`}>
                        {addon.icon}
                      </div>
                      <span className="font-semibold text-gray-900">{addon.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-lg font-bold text-[#FF5722]">+${addon.price}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="hover:bg-gray-50 transition-colors">
                <td colSpan="3" className="py-4 px-6">
                  <button
                    onClick={() => setIsAddAddonModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="font-medium">Add Add-on</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {addons.map((addon) => (
          <div key={addon.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 ${addon.color} rounded-full flex items-center justify-center text-3xl flex-shrink-0`}>
                {addon.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-1">{addon.name}</h3>
                <p className="text-lg font-bold text-[#FF5722]">+${addon.price}</p>
              </div>
            </div>
            <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Edit
            </button>
          </div>
        ))}
        <button
          onClick={() => setIsAddAddonModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors bg-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-medium">Add Add-on</span>
        </button>
      </div>

      {/* Add Add-on Modal */}
      {isAddAddonModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Add Add-on</h2>
                  <p className="text-gray-500 mt-1 text-sm">Create a new add-on option</p>
                </div>
                <button 
                  onClick={() => setIsAddAddonModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Add-on Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g., Extra Cheese"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Icon</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="🧀"
                />
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setIsAddAddonModalOpen(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddAddonModalOpen(false)}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Add Add-on
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Addons;
