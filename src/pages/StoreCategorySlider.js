import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const StoreCategorySlider = () => {
  const storeCategories = [
    { id: 1, name: 'Americana', icon: '🍔', status: 'Active' },
    { id: 2, name: 'BBQ', icon: '🍗', status: 'Active' },
    { id: 3, name: 'Café y té', icon: '☕', status: 'Active' },
    { id: 4, name: 'Mexicana', icon: '🌮', status: 'Active' },
    { id: 5, name: 'Caribeña', icon: '🥘', status: 'Active' },
    { id: 6, name: 'Italiana', icon: '🍝', status: 'Active' },
    { id: 7, name: 'Pizza', icon: '🍕', status: 'Active' },
    { id: 8, name: 'Helado y postre', icon: '🍨', status: 'Active' },
    { id: 9, name: 'Sandwich', icon: '🥪', status: 'Active' },
    { id: 10, name: 'Vegetariana', icon: '🥗', status: 'Active' },
    { id: 11, name: 'Desayuno', icon: '🍳', status: 'Active' },
    { id: 12, name: 'Irish', icon: '🍺', status: 'Active' }
  ];

  const [enableSlider, setEnableSlider] = useState(false);
  const [sliderPosition, setSliderPosition] = useState('After 1st Store');
  const [sliderSize, setSliderSize] = useState('Small');
  const [sliderStyle, setSliderStyle] = useState('Square');
  const [showLabel, setShowLabel] = useState(false);

  return (
    <DashboardLayout title="Store Category Slider" subtitle="Manage store category sliders">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Store Category Slider</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage store category sliders</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-gray-900">Total</span>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-semibold text-gray-900">{storeCategories.length} Store Categories</span>
        </div>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <span className="text-lg">+</span>
          Add New Store Category
        </button>
      </div>

      {/* Category Badges */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {storeCategories.map((category) => (
            <span key={category.id} className="px-4 py-2 bg-green-600 text-white rounded text-sm font-medium">
              {category.name}
            </span>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Manage Categories
          </button>
        </div>
      </div>

      {/* Settings Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900">Enable Store Category Slider:</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={enableSlider}
                onChange={(e) => setEnableSlider(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900">Slider Position:</label>
            <select
              value={sliderPosition}
              onChange={(e) => setSliderPosition(e.target.value)}
              className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="After 1st Store">After 1st Store</option>
              <option value="After 2nd Store">After 2nd Store</option>
              <option value="After 3rd Store">After 3rd Store</option>
              <option value="Top">Top</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900">Size:</label>
            <select
              value={sliderSize}
              onChange={(e) => setSliderSize(e.target.value)}
              className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900">Style:</label>
            <select
              value={sliderStyle}
              onChange={(e) => setSliderStyle(e.target.value)}
              className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Square">Square</option>
              <option value="Circle">Circle</option>
              <option value="Rounded">Rounded</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900">Show Store Category Slider Label:</label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showLabel}
                onChange={(e) => setShowLabel(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            Save Settings
          </button>
        </div>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {storeCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 text-center">
              <div className="text-5xl mb-2">{category.icon}</div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">{category.name}</h3>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button className="flex-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded text-xs font-medium transition-colors flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
          <span className="text-lg">+</span>
          ADD SLIDE
        </button>
      </div>
    </DashboardLayout>
  );
};

export default StoreCategorySlider;
