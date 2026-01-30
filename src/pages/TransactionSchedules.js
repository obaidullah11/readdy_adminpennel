import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const TransactionSchedules = () => {
  return (
    <DashboardLayout title="Transaction Schedules" subtitle="Configure automated transaction schedules">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Transaction Schedules</h1>
        <p className="text-sm sm:text-base text-gray-500">Configure automated transaction schedules</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedules Management</h3>
        <p className="text-sm text-gray-500">Configure automated transaction schedules</p>
      </div>
    </DashboardLayout>
  );
};

export default TransactionSchedules;
