import DashboardLayout from '../components/DashboardLayout';

const PushNotifications = () => {
  return (
    <DashboardLayout title="Push Notifications" subtitle="Send push notifications to users">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send Push Notifications</h1>
        <p className="text-sm sm:text-base text-gray-500">Send push notifications to users</p>
      </div>

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
    </DashboardLayout>
  );
};

export default PushNotifications;
