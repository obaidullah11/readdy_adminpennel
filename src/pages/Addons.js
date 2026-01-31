import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Addons = () => {
  const [isAddAddonModalOpen, setIsAddAddonModalOpen] = useState(false);
  const [isEditAddonModalOpen, setIsEditAddonModalOpen] = useState(false);
  const [editingAddon, setEditingAddon] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: ''
  });

  const [addons, setAddons] = useState([
    { id: 1, name: 'test addon', price: 1.00, addonCategory: 'Complemento pequeño #1', createdAt: '7 months ago', isActive: true },
    { id: 2, name: 'Papas con Trufas & Parmesano', price: 7.50, addonCategory: 'Elige Tus Papas Fritas', createdAt: '8 months ago', isActive: true },
    { id: 3, name: 'Papas con Tocineta y Queso', price: 6.75, addonCategory: 'Elige Tus Papas Fritas', createdAt: '8 months ago', isActive: true },
    { id: 4, name: 'Extra Cheese', price: 2.50, addonCategory: 'Toppings', createdAt: '9 months ago', isActive: false },
    { id: 5, name: 'Bacon', price: 3.00, addonCategory: 'Toppings', createdAt: '9 months ago', isActive: true }
  ]);

  const toggleAddonStatus = (addonId) => {
    setAddons(addons.map(addon => 
      addon.id === addonId ? { ...addon, isActive: !addon.isActive } : addon
    ));
  };

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
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Price</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Addon Category</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Created At</th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">
                  <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </th>
              </tr>
            </thead>
            <tbody>
              {addons.map((addon) => (
                <tr key={addon.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="font-medium text-gray-900">{addon.name}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{addon.price.toFixed(2)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-700">{addon.addonCategory}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-gray-600 text-sm">{addon.createdAt}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-3">
                      <button 
                        onClick={() => {
                          setEditingAddon(addon);
                          setFormData({
                            name: addon.name,
                            price: addon.price.toString(),
                            category: addon.addonCategory
                          });
                          setIsEditAddonModalOpen(true);
                        }}
                        className="px-6 py-2 text-white rounded-md font-medium transition-colors text-sm"
                        style={{ backgroundColor: '#ff3008' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
                      >
                        Edit
                      </button>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={addon.isActive} 
                          onChange={() => toggleAddonStatus(addon.id)}
                          className="sr-only peer" 
                        />
                        <div 
                          className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
                          style={{ backgroundColor: addon.isActive ? '#ff3008' : '#e5e7eb' }}
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
        {addons.map((addon) => (
          <div key={addon.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{addon.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Price</p>
                  <p className="font-medium text-gray-900">{addon.price.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Category</p>
                  <p className="font-medium text-gray-900">{addon.addonCategory}</p>
                </div>
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Created At</p>
                <p className="font-medium text-gray-600">{addon.createdAt}</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <button 
                  onClick={() => {
                    setEditingAddon(addon);
                    setFormData({
                      name: addon.name,
                      price: addon.price.toString(),
                      category: addon.addonCategory
                    });
                    setIsEditAddonModalOpen(true);
                  }}
                  className="px-6 py-2 text-white rounded-md font-medium transition-colors text-sm"
                  style={{ backgroundColor: '#ff3008' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
                >
                  Edit
                </button>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={addon.isActive} 
                    onChange={() => toggleAddonStatus(addon.id)}
                    className="sr-only peer" 
                  />
                  <div 
                    className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
                    style={{ backgroundColor: addon.isActive ? '#ff3008' : '#e5e7eb' }}
                  ></div>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Add-on Modal */}
      {isEditAddonModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Edit Addon</h2>
                <button 
                  onClick={() => {
                    setIsEditAddonModalOpen(false);
                    setEditingAddon(null);
                    setFormData({ name: '', price: '', category: '' });
                  }}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-5">
              {/* Addon Name Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <label className="text-sm font-medium text-gray-700 sm:text-right">
                  <span className="text-red-600">*</span>Addon Name:
                </label>
                <div className="sm:col-span-3">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Addon Name"
                  />
                </div>
              </div>

              {/* Price Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <label className="text-sm font-medium text-gray-700 sm:text-right">
                  <span className="text-red-600">*</span>Price:
                </label>
                <div className="sm:col-span-3">
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Addon Price in $"
                  />
                </div>
              </div>

              {/* Addon's Category Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <label className="text-sm font-medium text-gray-700 sm:text-right">
                  <span className="text-red-600">*</span>Addon's Category:
                </label>
                <div className="sm:col-span-3">
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                  >
                    <option value="">Select Category</option>
                    <option value="Mini Complemento #1">Mini Complemento #1</option>
                    <option value="Complemento pequeño #1">Complemento pequeño #1</option>
                    <option value="Elige Tus Papas Fritas">Elige Tus Papas Fritas</option>
                    <option value="Toppings">Toppings</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={() => {
                  setIsEditAddonModalOpen(false);
                  setEditingAddon(null);
                  setFormData({ name: '', price: '', category: '' });
                }}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  // Handle update logic here
                  console.log('Update Addon:', formData);
                  console.log('Editing Addon ID:', editingAddon.id);
                  setIsEditAddonModalOpen(false);
                  setEditingAddon(null);
                  setFormData({ name: '', price: '', category: '' });
                }}
                className="px-6 py-2.5 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                style={{ backgroundColor: '#ff3008' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
              >
                Update Addon
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Add-on Modal */}
      {isAddAddonModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Add New Addon</h2>
                <button 
                  onClick={() => setIsAddAddonModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-5">
              {/* Addon Name Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <label className="text-sm font-medium text-gray-700 sm:text-right">
                  <span className="text-red-600">*</span>Addon Name:
                </label>
                <div className="sm:col-span-3">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Addon Name"
                  />
                </div>
              </div>

              {/* Price Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <label className="text-sm font-medium text-gray-700 sm:text-right">
                  <span className="text-red-600">*</span>Price:
                </label>
                <div className="sm:col-span-3">
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Addon Price in $"
                  />
                </div>
              </div>

              {/* Addon's Category Field */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <label className="text-sm font-medium text-gray-700 sm:text-right">
                  <span className="text-red-600">*</span>Addon's Category:
                </label>
                <div className="sm:col-span-3">
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                  >
                    <option value="">Select Category</option>
                    <option value="mini-complemento-1">Mini Complemento #1</option>
                    <option value="complemento-pequeno-1">Complemento pequeño #1</option>
                    <option value="elige-tus-papas-fritas">Elige Tus Papas Fritas</option>
                    <option value="toppings">Toppings</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 flex justify-end gap-3">
              <button 
                onClick={() => setIsAddAddonModalOpen(false)}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddAddonModalOpen(false)}
                className="px-6 py-2.5 text-white rounded-lg font-medium transition-colors text-sm sm:text-base"
                style={{ backgroundColor: '#ff3008' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e02b07'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff3008'}
              >
                Add Addon
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Addons;
