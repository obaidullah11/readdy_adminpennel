import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Pages = () => {
  const pages = [
    { id: 1, name: 'Privacy policy', slug: 'privacypolicy', created: '3 years ago', updated: '3 years ago' },
    { id: 2, name: 'Soporte/Asistencia', slug: 'asistencia', created: '2 years ago', updated: '1 year ago' },
    { id: 3, name: 'Delete My Account', slug: 'delete-my-account', created: '2 years ago', updated: '2 years ago' },
    { id: 4, name: 'Refund Policy', slug: 'refund-policy', created: '1 year ago', updated: '1 year ago' },
    { id: 5, name: 'Cancellation Policy', slug: 'cancellation-policy', created: '1 year ago', updated: '1 year ago' }
  ];

  return (
    <DashboardLayout title="Pages" subtitle="Manage content pages">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Pages</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage content pages</p>
      </div>

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
    </DashboardLayout>
  );
};

export default Pages;
