import DashboardLayout from '../components/DashboardLayout';

const TransactionReports = () => {
  return (
    <DashboardLayout title="Transaction Reports" subtitle="Generate and view detailed transaction reports">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Transaction Reports</h1>
        <p className="text-sm sm:text-base text-gray-500">Generate and view detailed transaction reports</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Transaction Reports</h3>
        <p className="text-sm text-gray-500">Generate and view detailed transaction reports</p>
      </div>
    </DashboardLayout>
  );
};

export default TransactionReports;
