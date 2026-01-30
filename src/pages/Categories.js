import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Categories = () => {
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);

  const [categories] = useState([
    { id: 1, name: 'Pizza', itemCount: 12, icon: '🍕', color: 'bg-gray-100', status: 'Active', createdBy: 'Admin User', createdAt: '2024-01-15' },
    { id: 2, name: 'Burgers', itemCount: 8, icon: '🍔', color: 'bg-gray-100', status: 'Active', createdBy: 'Admin User', createdAt: '2024-01-14' },
    { id: 3, name: 'Salads', itemCount: 6, icon: '🥗', color: 'bg-gray-100', status: 'Active', createdBy: 'Admin User', createdAt: '2024-01-13' },
    { id: 4, name: 'Pasta', itemCount: 10, icon: '🍝', color: 'bg-gray-100', status: 'Inactive', createdBy: 'Admin User', createdAt: '2024-01-12' },
    { id: 5, name: 'Beverages', itemCount: 15, icon: '☕', color: 'bg-gray-100', status: 'Active', createdBy: 'Admin User', createdAt: '2024-01-11' },
    { id: 6, name: 'Asian', itemCount: 9, icon: '🍜', color: 'bg-gray-100', status: 'Active', createdBy: 'Admin User', createdAt: '2024-01-10' },
    { id: 7, name: 'Desserts', itemCount: 7, icon: '🍰', color: 'bg-gray-100', status: 'Active', createdBy: 'Admin User', createdAt: '2024-01-09' },
    { id: 8, name: 'Breakfast', itemCount: 11, icon: '🥞', color: 'bg-gray-100', status: 'Active', createdBy: 'Admin User', createdAt: '2024-01-08' }
  ]);

  return (
    <DashboardLayout title="Categories" subtitle="Manage item categories">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Categories Management</h1>
          <p className="text-sm text-gray-500 mt-1">Organize your menu items into categories</p>
        </div>
        <button 
          onClick={() => setIsAddCategoryModalOpen(true)}
          className="text-white px-6 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
          style={{ backgroundColor: '#ff3008' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Category
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Category ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">No of Items</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Created By</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Created At</th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-900 font-medium">#{category.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                        {category.icon}
                      </div>
                      <span className="font-semibold text-gray-900">{category.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{category.itemCount}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      category.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {category.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{category.createdBy}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{category.createdAt}</span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="mx-auto block text-gray-600 hover:text-gray-900">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="hover:bg-gray-50 transition-colors">
                <td colSpan="3" className="py-4 px-6">
                  <button
                    onClick={() => setIsAddCategoryModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="font-medium">Add Category</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 ${category.color} rounded-full flex items-center justify-center text-3xl flex-shrink-0`}>
                {category.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.itemCount} items</p>
              </div>
            </div>
            <button className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors">
              Manage
            </button>
          </div>
        ))}
        <button
          onClick={() => setIsAddCategoryModalOpen(true)}
          className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors bg-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-medium">Add Category</span>
        </button>
      </div>

      {/* Add Category Modal */}
      {isAddCategoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Add Category</h2>
                  <p className="text-gray-500 mt-1 text-sm">Create a new category</p>
                </div>
                <button 
                  onClick={() => setIsAddCategoryModalOpen(false)}
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g., Desserts"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Icon</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="🍰"
                />
              </div>
              <div>
                <label className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-700">Is Schedulable?</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                  </label>
                </label>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Categories;
