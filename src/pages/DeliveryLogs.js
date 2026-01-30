import DashboardLayout from '../components/DashboardLayout';

const DeliveryLogs = () => {
  const deliveryLogs = [
    { id: 1, driver: 'Robert Brown', orderId: '#12345', amount: 47.50, collectedAt: '01/29/2026 10:30 AM' },
    { id: 2, driver: 'Lisa Anderson', orderId: '#12346', amount: 44.20, collectedAt: '01/29/2026 11:15 AM' }
  ];

  return (
    <DashboardLayout title="Delivery Collection Logs" subtitle="View detailed delivery collection logs">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Delivery Collection Logs</h1>
        <p className="text-sm sm:text-base text-gray-500">View detailed delivery collection logs</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">View detailed delivery collection logs</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Driver Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Order ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Amount</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Collected At</th>
              </tr>
            </thead>
            <tbody>
              {deliveryLogs.map((log) => (
                <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{log.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-gray-900">{log.driver}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-blue-600">{log.orderId}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-green-600">${log.amount.toFixed(2)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{log.collectedAt}</span>
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

export default DeliveryLogs;
