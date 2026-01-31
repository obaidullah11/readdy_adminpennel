import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const AddonCategories = () => {
  const [isAddAddonCategoryModalOpen, setIsAddAddonCategoryModalOpen] = useState(false);
  const [isEditAddonCategoryModalOpen, setIsEditAddonCategoryModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Single Selection',
    description: ''
  });
  const [addons, setAddons] = useState([{ name: '', price: '' }]);
  const [editingCategory, setEditingCategory] = useState(null);

  const [addonCategories] = useState([
    { id: 1, name: 'Toppings', type: 'Single Selection', limit: 0, addonCount: 8, createdAt: '2 months ago' },
    { id: 2, name: 'Sauces', type: 'Multiple Selection', limit: 3, addonCount: 5, createdAt: '3 months ago' },
    { id: 3, name: 'Sides', type: 'Single Selection', limit: 0, addonCount: 6, createdAt: '4 months ago' },
    { id: 4, name: 'Drinks', type: 'Multiple Selection', limit: 5, addonCount: 10, createdAt: '5 months ago' },
    { id: 5, name: 'Extras', type: 'Single Selection', limit: 0, addonCount: 4, createdAt: '6 months ago' }
  ]);

  return (
    <DashboardLayout title="Addon Categories" subtitle="Manage addon categories">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Addon Categories</h1>
          <p className="text-sm text-gray-500 mt-1">Organize add-ons into categories</p>
        </div>
        <button 
          onClick={() => setIsAddAddonCategoryModalOpen(true)}
          className="text-white px-6 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
          style={{ backgroundColor: '#ff3008' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Add Addon Category
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Type</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Limit</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">No. of Addons</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Created At</th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {addonCategories.map((category) => (
                <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{category.name}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span 
                      className="inline-block px-4 py-1.5 rounded-md text-sm font-medium"
                      style={
                        category.type === 'Single Selection' 
                          ? { backgroundColor: 'rgba(255, 48, 8, 0.25)', color: '#ff3008', border: '1px solid rgba(255, 48, 8, 0.4)' }
                          : { backgroundColor: 'rgba(255, 48, 8, 0.15)', color: '#ff3008', border: '1px solid rgba(255, 48, 8, 0.3)' }
                      }
                    >
                      {category.type}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{category.limit === 0 ? '—' : category.limit}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{category.addonCount}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600 text-sm">{category.createdAt}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button 
                      onClick={() => {
                        setEditingCategory(category);
                        setFormData({
                          name: category.name,
                          type: category.type,
                          description: category.description || ''
                        });
                        setAddons([{ name: '', price: '' }]); // Load actual addons here
                        setIsEditAddonCategoryModalOpen(true);
                      }}
                      className="px-6 py-2 text-white rounded-md font-medium transition-colors text-sm"
                      style={{ backgroundColor: '#ff3008' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {addonCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span 
                    className="inline-block px-3 py-1 rounded-md text-xs font-medium"
                    style={
                      category.type === 'Single Selection' 
                        ? { backgroundColor: 'rgba(255, 48, 8, 0.25)', color: '#ff3008', border: '1px solid rgba(255, 48, 8, 0.4)' }
                        : { backgroundColor: 'rgba(255, 48, 8, 0.15)', color: '#ff3008', border: '1px solid rgba(255, 48, 8, 0.3)' }
                    }
                  >
                    {category.type}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Limit</p>
                  <p className="font-medium text-gray-900">{category.limit === 0 ? '—' : category.limit}</p>
                </div>
                <div>
                  <p className="text-gray-500">No. of Addons</p>
                  <p className="font-medium text-gray-900">{category.addonCount}</p>
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Created At</p>
                <p className="font-medium text-gray-600">{category.createdAt}</p>
              </div>
            </div>
            <button 
              onClick={() => {
                setEditingCategory(category);
                setFormData({
                  name: category.name,
                  type: category.type,
                  description: category.description || ''
                });
                setAddons([{ name: '', price: '' }]); // Load actual addons here
                setIsEditAddonCategoryModalOpen(true);
              }}
              className="w-full mt-4 px-4 py-2.5 text-white rounded-md font-medium transition-colors"
              style={{ backgroundColor: '#ff3008' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Edit Addon Category Modal */}
      {isEditAddonCategoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full my-4 sm:my-8 max-h-[95vh] overflow-y-auto">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-xl sm:rounded-t-2xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <h2 className="text-base sm:text-xl font-bold text-gray-900">EDIT ADDON CATEGORY</h2>
                </div>
                <button 
                  onClick={() => {
                    setIsEditAddonCategoryModalOpen(false);
                    setEditingCategory(null);
                    setFormData({ name: '', type: 'Single Selection', description: '' });
                    setAddons([{ name: '', price: '' }]);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span className="text-red-600">*</span>Name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Addon Category Name"
                />
              </div>

              {/* Type Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span className="text-red-600">*</span>Type:
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                >
                  <option value="Single Selection">Single Selection</option>
                  <option value="Multiple Selection">Multiple Selection</option>
                </select>
              </div>

              {/* Description Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description:
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="Short Description (50-80 characters)"
                ></textarea>
                <p className="text-xs text-gray-500">This will be disaplayed in the Items page while selecting Addon Categories</p>
              </div>

              {/* Addons Section */}
              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">ADDONS</h3>
                </div>

                <div className="space-y-3">
                  {addons.map((addon, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <input
                        type="text"
                        value={addon.name}
                        onChange={(e) => {
                          const newAddons = [...addons];
                          newAddons[index].name = e.target.value;
                          setAddons(newAddons);
                        }}
                        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Addon Name"
                      />
                      <div className="flex gap-2 sm:gap-3">
                        <input
                          type="text"
                          value={addon.price}
                          onChange={(e) => {
                            const newAddons = [...addons];
                            newAddons[index].price = e.target.value;
                            setAddons(newAddons);
                          }}
                          className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          placeholder="Addon Price"
                        />
                        {addons.length > 1 && (
                          <button
                            onClick={() => setAddons(addons.filter((_, i) => i !== index))}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center flex-shrink-0"
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setAddons([...addons, { name: '', price: '' }])}
                  className="mt-4 w-full sm:w-auto px-4 sm:px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add Addon
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-200 flex justify-end sticky bottom-0 bg-white rounded-b-xl sm:rounded-b-2xl">
              <button 
                onClick={() => {
                  // Handle update logic here
                  console.log('Update Form Data:', formData);
                  console.log('Update Addons:', addons);
                  console.log('Editing Category ID:', editingCategory.id);
                  setIsEditAddonCategoryModalOpen(false);
                  setEditingCategory(null);
                  // Reset form
                  setFormData({ name: '', type: 'Single Selection', description: '' });
                  setAddons([{ name: '', price: '' }]);
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                style={{ backgroundColor: '#ff3008' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
              >
                UPDATE
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Addon Category Modal */}
      {isAddAddonCategoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full my-4 sm:my-8 max-h-[95vh] overflow-y-auto">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-xl sm:rounded-t-2xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <h2 className="text-base sm:text-xl font-bold text-gray-900">NEW ADDON CATEGORY</h2>
                </div>
                <button 
                  onClick={() => {
                    setIsAddAddonCategoryModalOpen(false);
                    setFormData({ name: '', type: 'Single Selection', description: '' });
                    setAddons([{ name: '', price: '' }]);
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span className="text-red-600">*</span>Name:
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                  placeholder="Addon Category Name"
                />
              </div>

              {/* Type Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  <span className="text-red-600">*</span>Type:
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                >
                  <option value="Single Selection">Single Selection</option>
                  <option value="Multiple Selection">Multiple Selection</option>
                </select>
              </div>

              {/* Description Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description:
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="3"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                  placeholder="Short Description (50-80 characters)"
                ></textarea>
                <p className="text-xs text-gray-500">This will be disaplayed in the Items page while selecting Addon Categories</p>
              </div>

              {/* Addons Section */}
              <div className="border-t border-gray-200 pt-4 sm:pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900">ADDONS</h3>
                </div>

                <div className="space-y-3">
                  {addons.map((addon, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <input
                        type="text"
                        value={addon.name}
                        onChange={(e) => {
                          const newAddons = [...addons];
                          newAddons[index].name = e.target.value;
                          setAddons(newAddons);
                        }}
                        className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        placeholder="Addon Name"
                      />
                      <div className="flex gap-2 sm:gap-3">
                        <input
                          type="text"
                          value={addon.price}
                          onChange={(e) => {
                            const newAddons = [...addons];
                            newAddons[index].price = e.target.value;
                            setAddons(newAddons);
                          }}
                          className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                          placeholder="Addon Price"
                        />
                        {addons.length > 1 && (
                          <button
                            onClick={() => setAddons(addons.filter((_, i) => i !== index))}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center flex-shrink-0"
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setAddons([...addons, { name: '', price: '' }])}
                  className="mt-4 w-full sm:w-auto px-4 sm:px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add Addon
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-200 flex justify-end sticky bottom-0 bg-white rounded-b-xl sm:rounded-b-2xl">
              <button 
                onClick={() => {
                  // Handle save logic here
                  console.log('Form Data:', formData);
                  console.log('Addons:', addons);
                  setIsAddAddonCategoryModalOpen(false);
                  // Reset form
                  setFormData({ name: '', type: 'Single Selection', description: '' });
                  setAddons([{ name: '', price: '' }]);
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                style={{ backgroundColor: '#ff3008' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
              >
                SAVE
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default AddonCategories;