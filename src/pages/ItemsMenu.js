import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const ItemsMenu = () => {
  const [activeTab, setActiveTab] = useState('items');
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isAddAddonCategoryModalOpen, setIsAddAddonCategoryModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const [items] = useState([
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'Pizza',
      price: 299,
      image: '🍕',
      imageBg: 'bg-gray-100',
      available: true,
      description: 'Classic pizza with tomato sauce and mozzarella',
      store: 'Pizza Palace'
    },
    {
      id: 2,
      name: 'Chicken Burger',
      category: 'Burgers',
      price: 199,
      image: '🍔',
      imageBg: 'bg-gray-100',
      available: true,
      description: 'Juicy chicken patty with lettuce and mayo',
      store: 'Burger King'
    },
    {
      id: 3,
      name: 'Caesar Salad',
      category: 'Salads',
      price: 149,
      image: '🥗',
      imageBg: 'bg-gray-100',
      available: false,
      description: 'Fresh romaine lettuce with caesar dressing',
      store: 'Fresh Mart'
    },
    {
      id: 4,
      name: 'Pasta Alfredo',
      category: 'Pasta',
      price: 249,
      image: '🍝',
      imageBg: 'bg-gray-100',
      available: true,
      description: 'Creamy alfredo sauce with fettuccine',
      store: 'Pizza Palace'
    },
    {
      id: 5,
      name: 'Cappuccino',
      category: 'Beverages',
      price: 89,
      image: '☕',
      imageBg: 'bg-gray-100',
      available: true,
      description: 'Rich espresso with steamed milk',
      store: 'Cafe Delight'
    },
    {
      id: 6,
      name: 'Sushi Roll',
      category: 'Asian',
      price: 349,
      image: '🍣',
      imageBg: 'bg-gray-100',
      available: true,
      description: 'Fresh salmon and avocado roll',
      store: 'Noodle House'
    }
  ]);

  const [categories] = useState([
    { id: 1, name: 'Pizza', itemCount: 12, icon: '🍕', color: 'bg-gray-100' },
    { id: 2, name: 'Burgers', itemCount: 8, icon: '🍔', color: 'bg-gray-100' },
    { id: 3, name: 'Salads', itemCount: 6, icon: '🥗', color: 'bg-gray-100' },
    { id: 4, name: 'Pasta', itemCount: 10, icon: '🍝', color: 'bg-gray-100' },
    { id: 5, name: 'Beverages', itemCount: 15, icon: '☕', color: 'bg-gray-100' },
    { id: 6, name: 'Asian', itemCount: 9, icon: '🍜', color: 'bg-gray-100' },
    { id: 7, name: 'Desserts', itemCount: 7, icon: '🍰', color: 'bg-gray-100' },
    { id: 8, name: 'Breakfast', itemCount: 11, icon: '🥞', color: 'bg-gray-100' }
  ]);

  const [addons] = useState([
    { id: 1, name: 'Extra Cheese', price: 30, icon: '🧀', color: 'bg-gray-100' },
    { id: 2, name: 'Bacon', price: 50, icon: '🥓', color: 'bg-gray-100' },
    { id: 3, name: 'Avocado', price: 40, icon: '🥑', color: 'bg-gray-100' },
    { id: 4, name: 'Extra Sauce', price: 20, icon: '🍯', color: 'bg-gray-100' },
    { id: 5, name: 'Mushrooms', price: 35, icon: '🍄', color: 'bg-gray-100' },
    { id: 6, name: 'Olives', price: 25, icon: '🫒', color: 'bg-gray-100' }
  ]);

  const [addonCategories] = useState([
    { id: 1, name: 'Toppings', itemCount: 8, icon: '🍕', color: 'bg-gray-100' },
    { id: 2, name: 'Sauces', itemCount: 5, icon: '🍯', color: 'bg-gray-100' },
    { id: 3, name: 'Sides', itemCount: 6, icon: '🍟', color: 'bg-gray-100' },
    { id: 4, name: 'Drinks', itemCount: 10, icon: '🥤', color: 'bg-gray-100' },
    { id: 5, name: 'Extras', itemCount: 4, icon: '➕', color: 'bg-gray-100' }
  ]);

  const [newItemData, setNewItemData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    store: ''
  });

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setIsEditItemModalOpen(true);
  };

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItemData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddItem = () => {
    console.log('Adding item:', newItemData);
    setIsAddItemModalOpen(false);
    setNewItemData({ name: '', category: '', price: '', description: '', store: '' });
  };

  return (
    <DashboardLayout title="Items & Menu" subtitle="Manage menu items and categories">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Items & Menu</h1>
          <p className="text-sm text-gray-500 mt-1">Manage menu items and categories</p>
        </div>
        <button 
          onClick={() => setIsAddItemModalOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
        >
          Add New Item
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-gray-100 rounded-2xl p-2 mb-8">
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('items')}
            className={`flex-1 min-w-[100px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'items'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Items
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`flex-1 min-w-[120px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'categories'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setActiveTab('addons')}
            className={`flex-1 min-w-[100px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'addons'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Add-ons
          </button>
          <button
            onClick={() => setActiveTab('addon-categories')}
            className={`flex-1 min-w-[160px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'addon-categories'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'bg-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Addon Category
          </button>
        </div>
      </div>

      {/* Items Tab */}
      {activeTab === 'items' && (
        <>
          {/* Header with Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Items Management</h2>
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setIsAddItemModalOpen(true)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <span className="text-lg">+</span>
                Add New Item
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                Bulk CSV Upload
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset All Filters
              </button>
            </div>
          </div>

          {/* Search and Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search with anything..."
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                Export as CSV
              </button>
              <select className="px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        Image
                      </div>
                    </th>
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
                        Item Store
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        Item Category
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                      <div className="flex items-center gap-2">
                        Price
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                        </svg>
                      </div>
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Attributes</th>
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
                  {items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className={`w-12 h-12 ${item.imageBg} rounded-lg flex items-center justify-center text-2xl`}>
                          {item.image}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-gray-900">{item.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{item.store}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{item.category}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-semibold text-gray-900">${item.price}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-500">-</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">2 years ago</span>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleEditItem(item)}
                          className="mx-auto block text-gray-600 hover:text-gray-900"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
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
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 ${item.imageBg} rounded-full flex items-center justify-center text-3xl flex-shrink-0`}>
                    {item.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    <p className="text-xl font-bold text-[#FF5722]">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Store: {item.store}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Available</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={item.available} readOnly />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                    </label>
                  </div>
                </div>
                <button
                  onClick={() => handleEditItem(item)}
                  className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Edit Item
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Categories Tab */}
      {activeTab === 'categories' && (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Category</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Items Count</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((category) => (
                    <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-2xl flex-shrink-0`}>
                            {category.icon}
                          </div>
                          <span className="font-semibold text-gray-900">{category.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{category.itemCount} items</span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                          Manage
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
                <button className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
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
        </>
      )}

      {/* Add-ons Tab */}
      {activeTab === 'addons' && (
        <>
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
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td colSpan="3" className="py-4 px-6">
                      <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors">
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
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Edit
                </button>
              </div>
            ))}
            <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors bg-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <span className="font-medium">Add Add-on</span>
            </button>
          </div>
        </>
      )}

      {/* Addon Categories Tab */}
      {activeTab === 'addon-categories' && (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Category</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Add-ons Count</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {addonCategories.map((category) => (
                    <tr key={category.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center text-2xl flex-shrink-0`}>
                            {category.icon}
                          </div>
                          <span className="font-semibold text-gray-900">{category.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-700">{category.itemCount} add-ons</span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td colSpan="3" className="py-4 px-6">
                      <button
                        onClick={() => setIsAddAddonCategoryModalOpen(true)}
                        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        <span className="font-medium">Add Addon Category</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {addonCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 ${category.color} rounded-full flex items-center justify-center text-3xl flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.itemCount} add-ons</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Manage
                </button>
              </div>
            ))}
            <button
              onClick={() => setIsAddAddonCategoryModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-gray-300 rounded-2xl text-gray-600 hover:border-red-600 hover:text-red-600 transition-colors bg-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <span className="font-medium">Add Addon Category</span>
            </button>
          </div>
        </>
      )}

      {/* Add Item Modal */}
      {isAddItemModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Add New Item</h2>
                  <p className="text-gray-500 mt-1 text-sm">Fill in the item details</p>
                </div>
                <button 
                  onClick={() => setIsAddItemModalOpen(false)}
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
                <label className="block text-sm font-semibold text-gray-700 mb-2">Item Image</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <button className="text-sm font-medium text-gray-900 hover:text-gray-700">Upload Image</button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Item Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={newItemData.name}
                    onChange={handleNewItemChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="e.g., Margherita Pizza"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                  <select
                    name="category"
                    value={newItemData.category}
                    onChange={handleNewItemChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select category</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Burgers">Burgers</option>
                    <option value="Salads">Salads</option>
                    <option value="Pasta">Pasta</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      name="price"
                      value={newItemData.price}
                      onChange={handleNewItemChange}
                      className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Store *</label>
                  <select
                    name="store"
                    value={newItemData.store}
                    onChange={handleNewItemChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select store</option>
                    <option value="Pizza Palace">Pizza Palace</option>
                    <option value="Burger King">Burger King</option>
                    <option value="Fresh Mart">Fresh Mart</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  value={newItemData.description}
                  onChange={handleNewItemChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  placeholder="Brief description of the item..."
                ></textarea>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setIsAddItemModalOpen(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddItem}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}

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

      {/* Add Addon Category Modal */}
      {isAddAddonCategoryModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Add Addon Category</h2>
                  <p className="text-gray-500 mt-1 text-sm">Create a new addon category</p>
                </div>
                <button 
                  onClick={() => setIsAddAddonCategoryModalOpen(false)}
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
                  placeholder="e.g., Toppings"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Icon</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="🍕"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  placeholder="Brief description..."
                ></textarea>
              </div>
            </div>

            <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => setIsAddAddonCategoryModalOpen(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsAddAddonCategoryModalOpen(false)}
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

export default ItemsMenu;
