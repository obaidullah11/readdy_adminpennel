import DashboardLayout from '../components/DashboardLayout';

const PromoSliders = () => {
  const promoSliders = [
    { id: 1, name: 'Promocion Especial', status: 'Inactive', slides: 29, position: 'MAIN', size: 'Extra Large', createdAt: '5 years ago' },
    { id: 2, name: 'Promociones', status: 'Inactive', slides: 1, position: 'MAIN', size: 'Extra Large', createdAt: '5 years ago' }
  ];

  return (
    <DashboardLayout title="Promo Sliders" subtitle="Manage promotional sliders">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Promo Sliders</h1>
        <p className="text-sm sm:text-base text-gray-500">Manage promotional sliders</p>
      </div>

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
    </DashboardLayout>
  );
};

export default PromoSliders;
