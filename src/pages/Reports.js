import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('store-performance');
  const [dateRange, setDateRange] = useState('last-7-days');

  const reportCategories = [
    {
      id: 'store-performance',
      title: 'Store Performance',
      description: 'Analyze store metrics, sales trends, and performance indicators'
    },
    {
      id: 'store-wise-orders',
      title: 'Store-Wise Orders',
      description: 'View detailed order statistics and trends for each store'
    },
    {
      id: 'delivery-earnings',
      title: 'Delivery Earnings',
      description: 'Track delivery personnel earnings, trips, and performance'
    }
  ];

  const [fromDate, setFromDate] = useState('01/29/2026');
  const [toDate, setToDate] = useState('01/29/2026');
  const [selectedStore, setSelectedStore] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  // Sample data for Store Performance Report
  const storePerformanceData = [
    { store: 'Pizza Palace', orders: 145, revenue: 45600, rating: 4.8, growth: '+12%' },
    { store: 'Fresh Mart', orders: 132, revenue: 38200, rating: 4.7, growth: '+8%' },
    { store: 'Burger King', orders: 128, revenue: 35800, rating: 4.6, growth: '+15%' },
    { store: 'Cafe Delight', orders: 115, revenue: 28400, rating: 4.9, growth: '+5%' },
    { store: 'Sushi Bar', orders: 98, revenue: 32100, rating: 4.5, growth: '+10%' }
  ];

  // Calculate totals for Store Performance
  const totalStores = storePerformanceData.length;
  const totalOrders = storePerformanceData.reduce((sum, store) => sum + store.orders, 0);
  const totalSales = storePerformanceData.reduce((sum, store) => sum + store.revenue, 0);

  // Sample data for Store-Wise Orders
  const storeOrdersData = [
    { 
      date: '01/29/2026',
      orderId: '#12345',
      completedIn: '25 min',
      taxCharged: 5.50,
      subTotal: 45.00,
      couponAmount: 5.00,
      storeCharge: 2.00,
      netAmount: 47.50,
      commissionRate: '10%',
      commissionAmount: 4.75,
      earningsAfterCommission: 42.75
    },
    { 
      date: '01/29/2026',
      orderId: '#12346',
      completedIn: '30 min',
      taxCharged: 4.20,
      subTotal: 38.00,
      couponAmount: 0.00,
      storeCharge: 2.00,
      netAmount: 44.20,
      commissionRate: '10%',
      commissionAmount: 4.42,
      earningsAfterCommission: 39.78
    },
    { 
      date: '01/29/2026',
      orderId: '#12347',
      completedIn: '22 min',
      taxCharged: 6.80,
      subTotal: 52.00,
      couponAmount: 10.00,
      storeCharge: 2.00,
      netAmount: 50.80,
      commissionRate: '10%',
      commissionAmount: 5.08,
      earningsAfterCommission: 45.72
    }
  ];

  // Calculate totals for Store-Wise Orders
  const orderTotals = {
    taxCharged: storeOrdersData.reduce((sum, order) => sum + order.taxCharged, 0),
    subTotal: storeOrdersData.reduce((sum, order) => sum + order.subTotal, 0),
    couponAmount: storeOrdersData.reduce((sum, order) => sum + order.couponAmount, 0),
    storeCharge: storeOrdersData.reduce((sum, order) => sum + order.storeCharge, 0),
    netAmount: storeOrdersData.reduce((sum, order) => sum + order.netAmount, 0),
    commissionAmount: storeOrdersData.reduce((sum, order) => sum + order.commissionAmount, 0),
    earningsAfterCommission: storeOrdersData.reduce((sum, order) => sum + order.earningsAfterCommission, 0)
  };

  // Sample data for Delivery Earnings
  const deliveryEarningsData = [
    { 
      date: '01/29/2026',
      orderId: '#12345',
      storeName: 'Pizza Palace',
      completedIn: '28 min',
      deliveryBy: 'Robert Brown',
      orderTotal: 47.50,
      deliveryCharges: 5.00,
      deliveryGuyEarnings: 4.50
    },
    { 
      date: '01/29/2026',
      orderId: '#12346',
      storeName: 'Fresh Mart',
      completedIn: '25 min',
      deliveryBy: 'Lisa Anderson',
      orderTotal: 44.20,
      deliveryCharges: 4.50,
      deliveryGuyEarnings: 4.00
    },
    { 
      date: '01/29/2026',
      orderId: '#12347',
      storeName: 'Burger King',
      completedIn: '30 min',
      deliveryBy: 'David Martinez',
      orderTotal: 50.80,
      deliveryCharges: 6.00,
      deliveryGuyEarnings: 5.50
    },
    { 
      date: '01/29/2026',
      orderId: '#12348',
      storeName: 'Cafe Delight',
      completedIn: '27 min',
      deliveryBy: 'Robert Brown',
      orderTotal: 38.00,
      deliveryCharges: 4.00,
      deliveryGuyEarnings: 3.50
    }
  ];

  const [selectedDeliveryGuy, setSelectedDeliveryGuy] = useState('');

  const handleExportReport = () => {
    console.log('Exporting report:', activeTab);
    alert('Report exported successfully!');
  };

  return (
    <DashboardLayout title="Reports" subtitle="Generate and analyze business reports">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Reports</h1>
        <p className="text-sm sm:text-base text-gray-500">Generate and analyze business reports</p>
      </div>

      {/* Tab Bar */}
      <div className="bg-gray-100 rounded-2xl p-2 mb-8">
        <div className="flex gap-2 overflow-x-auto">
          {reportCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex-1 min-w-[160px] px-6 py-3 text-sm sm:text-base font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeTab === category.id
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'bg-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <p className="text-sm text-gray-600">
          {reportCategories.find(r => r.id === activeTab)?.description}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleExportReport}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* Store Performance Report */}
      {activeTab === 'store-performance' && (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{totalStores}</p>
                  <p className="text-sm text-gray-500 uppercase">Total Stores/Restaurants</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-xl">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{totalOrders}</p>
                  <p className="text-sm text-gray-500 uppercase">Total Orders</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-xl">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-3xl font-bold text-gray-900 mb-1">{totalSales.toFixed(2)}</p>
                  <p className="text-sm text-gray-500 uppercase">Total Sales</p>
                </div>
                <div className="bg-green-100 p-3 rounded-xl">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Date Range Filter */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">From</label>
                <input
                  type="text"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  placeholder="MM/DD/YYYY"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">To</label>
                <input
                  type="text"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  placeholder="MM/DD/YYYY"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Store Performance Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Store Name</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Total Orders</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Revenue</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Rating</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Growth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {storePerformanceData.map((store, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6">
                          <span className="font-semibold text-gray-900">{store.store}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-gray-700">{store.orders}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="font-semibold text-gray-900">${store.revenue.toLocaleString()}</span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-1 text-yellow-500">
                            <span>★</span>
                            <span className="font-semibold text-gray-900">{store.rating}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-green-600 font-semibold">{store.growth}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
          )}

          {/* Store-Wise Orders Report */}
          {activeTab === 'store-wise-orders' && (
            <>
              {/* Filters */}
              <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <select
                    value={selectedStore}
                    onChange={(e) => setSelectedStore(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select Store</option>
                    <option value="pizza-palace">Pizza Palace</option>
                    <option value="fresh-mart">Fresh Mart</option>
                    <option value="burger-king">Burger King</option>
                    <option value="cafe-delight">Cafe Delight</option>
                    <option value="sushi-bar">Sushi Bar</option>
                  </select>

                  <input
                    type="text"
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    placeholder="Payment Method..."
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />

                  <select
                    value={orderStatus}
                    onChange={(e) => setOrderStatus(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select...</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>

                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 whitespace-nowrap">From</label>
                    <input
                      type="text"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      placeholder="MM/DD/YYYY"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white w-full"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 whitespace-nowrap">To</label>
                    <input
                      type="text"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      placeholder="MM/DD/YYYY"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white w-full"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-4">
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mb-6">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export to XLS
                </button>
                <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Report
                </button>
              </div>

              {/* Orders Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Order Info</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Completed in</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Tax Charged</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Sub Total</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Coupon Amount</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Store Charge</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Net Amount</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Commission Rate</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Commission Amount</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Earnings after commission</th>
                      </tr>
                    </thead>
                    <tbody>
                      {storeOrdersData.map((order, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.date}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm font-semibold text-gray-900">{order.orderId}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.completedIn}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.taxCharged.toFixed(2)}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.subTotal.toFixed(2)}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.couponAmount.toFixed(2)}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.storeCharge.toFixed(2)}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.netAmount.toFixed(2)}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.commissionRate}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.commissionAmount.toFixed(2)}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{order.earningsAfterCommission.toFixed(2)}</span>
                          </td>
                        </tr>
                      ))}
                      {/* Totals Row */}
                      <tr className="bg-gray-50 font-semibold">
                        <td className="py-4 px-6" colSpan="3">
                          <span className="text-sm font-bold text-gray-900">TOTAL</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-900">{orderTotals.taxCharged.toFixed(2)}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-900">{orderTotals.subTotal.toFixed(2)}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-900">{orderTotals.couponAmount.toFixed(2)}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-900">{orderTotals.storeCharge.toFixed(2)}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-900">{orderTotals.netAmount.toFixed(2)}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-900">-</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-900">{orderTotals.commissionAmount.toFixed(2)}</span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="text-sm text-gray-900">{orderTotals.earningsAfterCommission.toFixed(2)}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Delivery Earnings Report */}
          {activeTab === 'delivery-earnings' && (
            <>
              {/* Filters */}
              <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
                <div className="flex flex-wrap items-center gap-4">
                  <select
                    value={selectedDeliveryGuy}
                    onChange={(e) => setSelectedDeliveryGuy(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">Select Delivery Guy</option>
                    <option value="robert-brown">Robert Brown</option>
                    <option value="lisa-anderson">Lisa Anderson</option>
                    <option value="david-martinez">David Martinez</option>
                    <option value="maria-garcia">Maria Garcia</option>
                  </select>

                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 whitespace-nowrap">From</label>
                    <input
                      type="text"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      placeholder="MM/DD/YYYY"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 whitespace-nowrap">To</label>
                    <input
                      type="text"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      placeholder="MM/DD/YYYY"
                      className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                  </div>

                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mb-6">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export to XLS
                </button>
                <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Report
                </button>
              </div>

              {/* Delivery Earnings Table */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50">
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Order ID</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Store Name</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Completed in</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Delivery By</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Order Total</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Delivery Charges</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Delivery Guy Earnings</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deliveryEarningsData.map((delivery, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{delivery.date}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm font-semibold text-gray-900">{delivery.orderId}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{delivery.storeName}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{delivery.completedIn}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{delivery.deliveryBy}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{delivery.orderTotal.toFixed(2)}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm text-gray-700">{delivery.deliveryCharges.toFixed(2)}</span>
                          </td>
                          <td className="py-4 px-6">
                            <span className="text-sm font-semibold text-green-600">{delivery.deliveryGuyEarnings.toFixed(2)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
    </DashboardLayout>
  );
};

export default Reports;
