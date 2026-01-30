import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Promotions = () => {
  const [activeTab, setActiveTab] = useState('promo-sliders');

  const promotionTabs = [
    { id: 'promo-sliders', title: 'Promo Sliders' },
    { id: 'store-category', title: 'Store Category Slider' },
    { id: 'coupons', title: 'Coupons' },
    { id: 'pages', title: 'Pages' },
    { id: 'push-notifications', title: 'Send Push Notifications' }
  ];

  // Sample data for Promo Sliders
  const promoSliders = [
    { id: 1, name: 'Promocion Especial', status: 'Inactive', slides: 29, position: 'MAIN', size: 'Extra Large', createdAt: '5 years ago' },
    { id: 2, name: 'Promociones', status: 'Inactive', slides: 1, position: 'MAIN', size: 'Extra Large', createdAt: '5 years ago' }
  ];

  // Sample data for Store Categories
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

  // Sample data for Coupons
  const coupons = [
    { id: 1, name: 'MANJAR', store: 'MULTIPLE STORES', code: 'MANJAR', type: 'AMOUNT', discount: '$ 5', status: 'Active', usage: 0, expiryDate: '9 months ago (2024-04-09)', minSubtotal: 25.00, maxDiscount: 'NIL' },
    { id: 2, name: 'DESAYUNO', store: 'MULTIPLE STORES', code: 'DESAYUNO', type: 'PERCENTAGE', discount: '15 %', status: 'Active', usage: 0, expiryDate: '1 year ago (2024-12-31)', minSubtotal: 15.00, maxDiscount: 'NIL' },
    { id: 3, name: 'GRACIAS10', store: 'MULTIPLE STORES', code: 'GRACIAS10', type: 'PERCENTAGE', discount: '10 %', status: 'Active', usage: 0, expiryDate: '1 year ago (2024-11-30)', minSubtotal: 15.00, maxDiscount: 'NIL' },
    { id: 4, name: 'ISABELAZOO', store: 'MULTIPLE STORES', code: 'ISABELAZOO', type: 'AMOUNT', discount: '$ 5', status: 'Active', usage: 0, expiryDate: '1 year ago (2024-08-17)', minSubtotal: 25.00, maxDiscount: 'NIL' },
    { id: 5, name: 'cupon 13 junio', store: 'MULTIPLE STORES', code: 'LOQUIERO', type: 'AMOUNT', discount: '$ 5', status: 'Active', usage: 18, expiryDate: '7 months ago (2024-06-07)', minSubtotal: 25.00, maxDiscount: 'NIL' },
    { id: 6, name: 'MMC2024', store: 'MULTIPLE STORES', code: 'MMC2024', type: 'AMOUNT', discount: '$ 5', status: 'Active', usage: 1, expiryDate: '1 year ago (2024-04-14)', minSubtotal: 15.00, maxDiscount: 'NIL' },
    { id: 7, name: 'M2GO2024', store: 'MULTIPLE STORES', code: 'M2GO2024', type: 'PERCENTAGE', discount: '20 %', status: 'Inactive', usage: 0, expiryDate: '1 year ago (2024-11-02)', minSubtotal: 20.00, maxDiscount: 'NIL' },
    { id: 8, name: 'adicolombia', store: 'Tienda Pueblo Colombia', code: 'adicolombia', type: 'AMOUNT', discount: '$ 10', status: 'Active', usage: 0, expiryDate: '2 years ago (2023-12-01)', minSubtotal: 0.00, maxDiscount: 'NIL' },
    { id: 9, name: 'Sushi', store: 'Sushi On The Road - Miami', code: 'SUSHI', type: 'PERCENTAGE', discount: '30 %', status: 'Active', usage: 0, expiryDate: '2 years ago (2023-11-18)', minSubtotal: 25.00, maxDiscount: 'NIL' },
    { id: 10, name: '25% regalo', store: 'MULTIPLE STORES', code: 'M2GO', type: 'PERCENTAGE', discount: '25 %', status: 'Active', usage: 1, expiryDate: '1 year ago (2024-11-21)', minSubtotal: 0.00, maxDiscount: 'NIL' }
  ];

  // Sample data for Pages
  const pages = [
    { id: 1, name: 'Privacy policy', slug: 'privacypolicy', created: '3 years ago', updated: '3 years ago' },
    { id: 2, name: 'Soporte/Asistencia', slug: 'asistencia', created: '2 years ago', updated: '1 year ago' },
    { id: 3, name: 'Delete My Account', slug: 'delete-my-account', created: '2 years ago', updated: '2 years ago' },
    { id: 4, name: 'Refund Policy', slug: 'refund-policy', created: '1 year ago', updated: '1 year ago' },
    { id: 5, name: 'Cancellation Policy', slug: 'cancellation-policy', created: '1 year ago', updated: '1 year ago' }
  ];

  return (
    <DashboardLayout title="Promotions" subtitle="Manage promotions and marketing">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Promotions</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage promotions and marketing</p>
      </div>

      {/* Tab Bar */}
      <div className="bg-gray-100 rounded-2xl p-2 mb-8">
        <div className="flex gap-2 overflow-x-auto">
          {promotionTabs.map((tab) => (
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

      {/* Promo Sliders Tab */}
      {activeTab === 'promo-sliders' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">Total</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray-900">{promoSliders.length} Sliders</span>
            </div>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <span className="text-lg">+</span>
              Add New Slider
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">No. of Slides</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Position</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Size</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Created At</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {promoSliders.map((slider) => (
                    <tr key={slider.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-900">{slider.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                          {slider.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{slider.slides}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{slider.position}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{slider.size}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{slider.createdAt}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center gap-2">
                          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors">
                            Edit
                          </button>
                          <button className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
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

      {/* Store Category Slider Tab */}
      {activeTab === 'store-category' && (
        <>
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
        </>
      )}

      {/* Coupons Tab */}
      {activeTab === 'coupons' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">Total</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray-900">{coupons.length} Coupons</span>
            </div>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <span className="text-lg">+</span>
              Add New Coupon
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Coupon Applicable Store</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Code</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Type</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Discount</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Usage</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Expiry Date</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Min Subtotal</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Max Discount</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.map((coupon) => (
                    <tr key={coupon.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-900">{coupon.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">{coupon.store}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm font-bold text-gray-900">{coupon.code}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">{coupon.type}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{coupon.discount}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`text-xs px-2 py-1 rounded ${
                          coupon.status === 'Active' 
                            ? 'bg-gray-100 text-gray-700' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {coupon.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{coupon.usage}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-xs text-gray-600">{coupon.expiryDate}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{coupon.minSubtotal.toFixed(2)}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{coupon.maxDiscount}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center">
                          <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors">
                            Edit
                          </button>
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

      {/* Pages Tab */}
      {activeTab === 'pages' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">Total</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-gray-900">{pages.length} Pages</span>
            </div>
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <span className="text-lg">+</span>
              Add a New Page
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Slug</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Created</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Updated</th>
                    <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">
                      <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page) => (
                    <tr key={page.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-900">{page.name}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{page.slug}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{page.created}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-700">{page.updated}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center justify-center">
                          <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors">
                            Edit
                          </button>
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

      {/* Send Push Notifications Tab */}
      {activeTab === 'push-notifications' && (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">8814</h3>
              <p className="text-xs text-gray-500 uppercase">Registered Customers</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">7681</h3>
              <p className="text-xs text-gray-500 uppercase">Subscribers</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-1">7840</h3>
              <p className="text-xs text-gray-500 uppercase">App Users</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-3xl font-bold text-red-600 mb-1">5026</h3>
              <p className="text-xs text-red-500 uppercase">Delete Junk Data</p>
            </div>
          </div>

          {/* Notification Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex">
              {/* Sidebar */}
              <div className="w-48 bg-gray-50 border-r border-gray-200 p-4">
                <button className="w-full text-left px-4 py-3 bg-blue-100 text-blue-900 rounded-lg text-sm font-medium">
                  To Selected
                </button>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                <h2 className="text-sm font-semibold text-gray-900 mb-6 uppercase">
                  Send Push Notification & Alert to Selected Users
                </h2>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    *Select Users:
                  </label>
                  <input
                    type="text"
                    placeholder="Select Users"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default Promotions;
