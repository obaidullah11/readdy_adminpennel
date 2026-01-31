import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Categories = () => {
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    isSchedulable: false
  });

  const [categories, setCategories] = useState([
    { id: 1577, name: 'qa', itemCount: 0, status: 'DISABLED', createdBy: 'Deve', createdAt: '7 months ago' },
    { id: 1576, name: 'Chicken', itemCount: 1, status: 'ENABLED', createdBy: 'Test Raheel Store', createdAt: '8 months ago' },
    { id: 1575, name: 'Pizza', itemCount: 12, status: 'ENABLED', createdBy: 'Admin User', createdAt: '8 months ago' },
    { id: 1574, name: 'Burgers', itemCount: 8, status: 'DISABLED', createdBy: 'Admin User', createdAt: '9 months ago' },
    { id: 1573, name: 'Salads', itemCount: 6, status: 'ENABLED', createdBy: 'Admin User', createdAt: '9 months ago' }
  ]);

  const toggleCategoryStatus = (categoryId) => {
    setCategories(categories.map(category => 
      category.id === categoryId 
        ? { ...category, status: category.status === 'ENABLED' ? 'DISABLED' : 'ENABLED' } 
        : category
    ));
  };

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
                    <span className="text-sm text-gray-900 font-medium">{category.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{category.name}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{category.itemCount}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span 
                      className="inline-block px-3 py-1 rounded text-xs font-medium"
                      style={
                        category.status === 'ENABLED'
                          ? { backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#16a34a', border: '1px solid rgba(34, 197, 94, 0.3)' }
                          : { backgroundColor: 'rgba(156, 163, 175, 0.15)', color: '#6b7280', border: '1px solid rgba(156, 163, 175, 0.3)' }
                      }
                    >
                      {category.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded">{category.createdBy}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-600">{category.createdAt}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => {
                          setEditingCategory(category);
                          setFormData({
                            name: category.name,
                            isSchedulable: false // Set based on your data
                          });
                          setIsEditCategoryModalOpen(true);
                        }}
                        className="px-4 py-1.5 text-white rounded text-sm font-medium transition-colors"
                        style={{ backgroundColor: '#ff3008' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
                      >
                        Edit
                      </button>
                      <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={category.status === 'ENABLED'} 
                          onChange={() => toggleCategoryStatus(category.id)}
                          className="sr-only peer" 
                        />
                        <div 
                          className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
                          style={{ backgroundColor: category.status === 'ENABLED' ? '#ff3008' : '#e5e7eb' }}
                        ></div>
                      </label>
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

      {/* Edit Category Modal */}
      {isEditCategoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-3xl w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Edit Item Category</h2>
                <button 
                  onClick={() => {
                    setIsEditCategoryModalOpen(false);
                    setEditingCategory(null);
                    setFormData({ name: '', isSchedulable: false });
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Name Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                <label className="text-base font-semibold text-gray-900 sm:text-right">
                  Name:
                </label>
                <div className="sm:col-span-3">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter Category Name"
                  />
                </div>
              </div>

              {/* Is Schedulable Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                <label className="text-base font-semibold text-gray-900 sm:text-right">
                  Is Schedulable?
                </label>
                <div className="sm:col-span-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={formData.isSchedulable}
                      onChange={(e) => setFormData({ ...formData, isSchedulable: e.target.checked })}
                      className="sr-only peer" 
                    />
                    <div 
                      className="w-14 h-7 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all bg-gray-300 peer-checked:bg-red-600"
                    ></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={() => {
                  setIsEditCategoryModalOpen(false);
                  setEditingCategory(null);
                  setFormData({ name: '', isSchedulable: false });
                }}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  // Handle update logic here
                  console.log('Update Category:', formData);
                  console.log('Editing Category ID:', editingCategory.id);
                  setIsEditCategoryModalOpen(false);
                  setEditingCategory(null);
                  setFormData({ name: '', isSchedulable: false });
                }}
                className="px-6 py-2.5 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                style={{ backgroundColor: '#ff3008' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
              >
                Update Category
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {isAddCategoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-3xl w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Add New Item Category</h2>
                <button 
                  onClick={() => setIsAddCategoryModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Name Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                <label className="text-base font-semibold text-gray-900 sm:text-right">
                  Name:
                </label>
                <div className="sm:col-span-3">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter Category Name"
                  />
                </div>
              </div>

              {/* Is Schedulable Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                <label className="text-base font-semibold text-gray-900 sm:text-right">
                  Is Schedulable?
                </label>
                <div className="sm:col-span-3">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div 
                      className="w-14 h-7 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all bg-gray-300 peer-checked:bg-red-600"
                    ></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddCategoryModalOpen(false)}
                className="px-6 py-2.5 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                style={{ backgroundColor: '#ff3008' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
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
