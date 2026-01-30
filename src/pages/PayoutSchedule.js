import DashboardLayout from '../components/DashboardLayout';

const PayoutSchedule = () => {
  const payoutSchedules = [
    { id: 1, store: 'Pizza Palace', frequency: 'Weekly', nextPayout: '02/04/2026', amount: 2500.00 },
    { id: 2, store: 'Fresh Mart', frequency: 'Bi-Weekly', nextPayout: '02/11/2026', amount: 1800.00 }
  ];

  return (
    <DashboardLayout title="Payout Schedule" subtitle="Manage payout schedules for stores">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Payout Schedule</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage payout schedules for stores</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-600">Manage payout schedules for stores</p>
        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors">
          Add Schedule
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">ID</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Store Name</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Frequency</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Next Payout</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Expected Amount</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payoutSchedules.map((schedule) => (
                <tr key={schedule.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{schedule.id}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-gray-900">{schedule.store}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{schedule.frequency}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-gray-700">{schedule.nextPayout}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-semibold text-green-600">${schedule.amount.toFixed(2)}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
                      <button className="text-red-600 hover:text-red-700 text-sm font-medium">Delete</button>
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

export default PayoutSchedule;
