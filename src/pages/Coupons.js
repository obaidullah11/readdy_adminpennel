import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Coupons = () => {
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

  return (
    <DashboardLayout title="Coupons" subtitle="Manage promotional coupons">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Coupons</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage promotional coupons</p>
      </div>

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
    </DashboardLayout>
  );
};

export default Coupons;
