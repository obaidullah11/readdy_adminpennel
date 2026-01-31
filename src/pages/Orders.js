import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const allOrders = [
    { 
      id: '#1AGFQLV2', 
      status: 'Delivery Assigned', 
      deliveryBy: 'qazell+4@gmail.com', 
      store: 'Martin\'s BBQ - Manati', 
      mode: 'WALLET', 
      total: 97.74, 
      orderPlacedAt: '2025-12-13 - 10:48 AM',
      fullOrderId: 'OD-12-13-1AGFQLV2',
      deliveryPin: '63715',
      customerName: 'qa',
      customerEmail: 'qazell321@gmail.com',
      customerContact: '+1235235235',
      deliveryAddress: 'manati, Manati, Puerto Rico',
      orderType: 'Delivery',
      items: [{ name: 'Pollo Entero', quantity: 6, price: 72.9 }],
      subtotal: 72.9,
      deliveryCharge: 4.95,
      tax: 8.95,
      taxPercent: '11.50%',
      tip: 10.94,
      paidWithWallet: 97.74,
      distance: '4.30 km',
      assignedDeliveryGuy: 'qazell+4@gmail.com',
      deliveryGuyStatus: 'Offline'
    },
    { 
      id: '#2BGHRMW3', 
      status: 'Preparing', 
      deliveryBy: 'john.doe@gmail.com', 
      store: 'Pizza Palace', 
      mode: 'CARD', 
      total: 45.50, 
      orderPlacedAt: '2025-12-13 - 11:15 AM',
      fullOrderId: 'OD-12-13-2BGHRMW3',
      deliveryPin: '12345',
      customerName: 'John Doe',
      customerEmail: 'john.doe@gmail.com',
      customerContact: '+1234567890',
      deliveryAddress: 'New York, NY',
      orderType: 'Delivery',
      items: [{ name: 'Pepperoni Pizza', quantity: 2, price: 35.50 }],
      subtotal: 35.50,
      deliveryCharge: 5.00,
      tax: 3.00,
      taxPercent: '8.00%',
      tip: 2.00,
      paidWithWallet: 45.50,
      distance: '2.50 km',
      assignedDeliveryGuy: 'john.doe@gmail.com',
      deliveryGuyStatus: 'Online'
    },
    { 
      id: '#3CHISXN4', 
      status: 'On the Way', 
      deliveryBy: 'sarah.w@gmail.com', 
      store: 'Fresh Mart', 
      mode: 'CASH', 
      total: 125.00, 
      orderPlacedAt: '2025-12-13 - 11:30 AM',
      fullOrderId: 'OD-12-13-3CHISXN4',
      deliveryPin: '54321',
      customerName: 'Sarah Williams',
      customerEmail: 'sarah.w@gmail.com',
      customerContact: '+1987654321',
      deliveryAddress: 'Los Angeles, CA',
      orderType: 'Delivery',
      items: [{ name: 'Grocery Items', quantity: 1, price: 110.00 }],
      subtotal: 110.00,
      deliveryCharge: 8.00,
      tax: 5.00,
      taxPercent: '4.50%',
      tip: 2.00,
      paidWithWallet: 0,
      distance: '5.20 km',
      assignedDeliveryGuy: 'sarah.w@gmail.com',
      deliveryGuyStatus: 'Online'
    },
    { 
      id: '#4DIJTYO5', 
      status: 'Delivered', 
      deliveryBy: 'mike.d@gmail.com', 
      store: 'Burger King', 
      mode: 'WALLET', 
      total: 89.99, 
      orderPlacedAt: '2025-12-13 - 10:00 AM',
      fullOrderId: 'OD-12-13-4DIJTYO5',
      deliveryPin: '98765',
      customerName: 'Michael Davis',
      customerEmail: 'mike.d@gmail.com',
      customerContact: '+1122334455',
      deliveryAddress: 'Chicago, IL',
      orderType: 'Delivery',
      items: [{ name: 'Whopper Meal', quantity: 3, price: 75.00 }],
      subtotal: 75.00,
      deliveryCharge: 6.00,
      tax: 5.99,
      taxPercent: '8.00%',
      tip: 3.00,
      paidWithWallet: 89.99,
      distance: '3.80 km',
      assignedDeliveryGuy: 'mike.d@gmail.com',
      deliveryGuyStatus: 'Offline'
    },
    { 
      id: '#5EJKUZP6', 
      status: 'Cancelled', 
      deliveryBy: 'lisa.a@gmail.com', 
      store: 'Cafe Delight', 
      mode: 'CARD', 
      total: 42.00, 
      orderPlacedAt: '2025-12-13 - 09:45 AM',
      fullOrderId: 'OD-12-13-5EJKUZP6',
      deliveryPin: '11111',
      customerName: 'Lisa Anderson',
      customerEmail: 'lisa.a@gmail.com',
      customerContact: '+1555666777',
      deliveryAddress: 'Miami, FL',
      orderType: 'Delivery',
      items: [{ name: 'Coffee & Pastries', quantity: 1, price: 35.00 }],
      subtotal: 35.00,
      deliveryCharge: 4.00,
      tax: 2.00,
      taxPercent: '5.70%',
      tip: 1.00,
      paidWithWallet: 0,
      distance: '1.50 km',
      assignedDeliveryGuy: 'lisa.a@gmail.com',
      deliveryGuyStatus: 'Offline'
    },
    { 
      id: '#6FKLVAQ7', 
      status: 'Order By sta', 
      deliveryBy: 'robert.b@gmail.com', 
      store: 'Sushi Bar', 
      mode: 'CASH', 
      total: 156.80, 
      orderPlacedAt: '2025-12-13 - 12:00 PM',
      fullOrderId: 'OD-12-13-6FKLVAQ7',
      deliveryPin: '22222',
      customerName: 'Robert Brown',
      customerEmail: 'robert.b@gmail.com',
      customerContact: '+1888999000',
      deliveryAddress: 'Seattle, WA',
      orderType: 'Delivery',
      items: [{ name: 'Sushi Platter', quantity: 2, price: 140.00 }],
      subtotal: 140.00,
      deliveryCharge: 10.00,
      tax: 4.80,
      taxPercent: '3.40%',
      tip: 2.00,
      paidWithWallet: 0,
      distance: '6.70 km',
      assignedDeliveryGuy: 'robert.b@gmail.com',
      deliveryGuyStatus: 'Online'
    },
    { 
      id: '#7GLMWBR8', 
      status: 'Preparing', 
      deliveryBy: 'emily.j@gmail.com', 
      store: 'Pizza Palace', 
      mode: 'WALLET', 
      total: 78.25, 
      orderPlacedAt: '2025-12-13 - 11:45 AM',
      fullOrderId: 'OD-12-13-7GLMWBR8',
      deliveryPin: '33333',
      customerName: 'Emily Johnson',
      customerEmail: 'emily.j@gmail.com',
      customerContact: '+1777888999',
      deliveryAddress: 'Boston, MA',
      orderType: 'Delivery',
      items: [{ name: 'Margherita Pizza', quantity: 2, price: 65.00 }],
      subtotal: 65.00,
      deliveryCharge: 7.00,
      tax: 4.25,
      taxPercent: '6.50%',
      tip: 2.00,
      paidWithWallet: 78.25,
      distance: '4.10 km',
      assignedDeliveryGuy: 'emily.j@gmail.com',
      deliveryGuyStatus: 'Online'
    },
    { 
      id: '#8HMNXCS9', 
      status: 'Delivered', 
      deliveryBy: 'david.l@gmail.com', 
      store: 'Fresh Mart', 
      mode: 'CARD', 
      total: 134.50, 
      orderPlacedAt: '2025-12-13 - 09:30 AM',
      fullOrderId: 'OD-12-13-8HMNXCS9',
      deliveryPin: '44444',
      customerName: 'David Lee',
      customerEmail: 'david.l@gmail.com',
      customerContact: '+1666777888',
      deliveryAddress: 'Austin, TX',
      orderType: 'Delivery',
      items: [{ name: 'Fresh Produce', quantity: 1, price: 120.00 }],
      subtotal: 120.00,
      deliveryCharge: 8.50,
      tax: 4.00,
      taxPercent: '3.30%',
      tip: 2.00,
      paidWithWallet: 0,
      distance: '5.90 km',
      assignedDeliveryGuy: 'david.l@gmail.com',
      deliveryGuyStatus: 'Offline'
    }
  ];

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Order By sta': 'bg-orange-100 text-orange-700',
      'Delivery Assigned': 'bg-teal-100 text-teal-700',
      'Preparing': 'bg-blue-100 text-blue-700',
      'On the Way': 'bg-purple-100 text-purple-700',
      'Delivered': 'bg-green-100 text-green-700',
      'Cancelled': 'bg-red-100 text-red-700'
    };
    return statusStyles[status] || 'bg-gray-100 text-gray-700';
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
  };

  return (
    <DashboardLayout title="Orders Management" subtitle="Real-time order tracking and management">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Orders Management</h1>
        <p className="text-sm sm:text-base text-gray-500">Real-time order tracking and management</p>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Store Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Mode
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order Placed At
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {allOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.id}</div>
                    <div className="text-xs text-gray-500">Delivery By: {order.deliveryBy}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${getStatusBadge(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.store}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.mode}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.total}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{order.orderPlacedAt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewDetails(order)}
                      className="inline-flex items-center px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded transition-colors"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {allOrders.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
            <p className="mt-1 text-sm text-gray-500">There are no orders at the moment.</p>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {showModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-100 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-white p-6 sticky top-0 z-10 border-b flex justify-between items-center">
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm">
                  Android Thermal Print
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm flex items-center gap-1">
                  Android Thermal Print ✓
                </button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm flex items-center gap-1">
                  Windows Thermal Print ✓
                </button>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-gray-300 bg-white rounded hover:bg-gray-50 text-sm">
                  Print Bill
                </button>
                <button className="px-4 py-2 border border-gray-300 bg-white rounded hover:bg-gray-50 text-sm">
                  Print Thermal Bill
                </button>
                <button onClick={handleCloseModal} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm">
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Order Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Store and Order Info */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-1">{selectedOrder.store}</h2>
                  <p className="text-gray-600 mb-6">{selectedOrder.fullOrderId}</p>

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Order Date:</p>
                      <p className="font-semibold">{selectedOrder.orderPlacedAt}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Delivery Pin:</p>
                      <p className="font-semibold">{selectedOrder.deliveryPin}</p>
                    </div>
                  </div>

                  {/* Customer Details */}
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-4">Customer Details</h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Name:</span> <span className="font-medium">{selectedOrder.customerName}</span></p>
                      <p><span className="text-gray-600">Email:</span> <span className="font-medium">{selectedOrder.customerEmail}</span></p>
                      <p><span className="text-gray-600">Contact Number:</span> <span className="font-medium">{selectedOrder.customerContact}</span></p>
                      <p><span className="text-gray-600">Delivery Address:</span> <span className="font-medium">{selectedOrder.deliveryAddress}</span></p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="mb-6">
                    {selectedOrder.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center bg-gray-50 p-4 rounded">
                        <div className="flex items-center gap-3">
                          <span className="bg-gray-200 px-3 py-1 rounded font-semibold">{item.quantity}x</span>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <span className="font-semibold">${item.price}</span>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">SubTotal</span>
                      <span className="font-medium">${selectedOrder.subtotal}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery Charge</span>
                      <span className="font-medium">${selectedOrder.deliveryCharge}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">{selectedOrder.taxPercent} (${selectedOrder.tax})</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tip</span>
                      <span className="font-medium">${selectedOrder.tip}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Paid With Wallet</span>
                      <span className="font-medium">${selectedOrder.paidWithWallet}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                      <span>Total</span>
                      <span>${selectedOrder.total}</span>
                    </div>
                  </div>

                  {/* Status Section */}
                  <div className="mt-6 pt-6 border-t">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">STATUS</p>
                        <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded font-semibold">
                          {selectedOrder.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Order Type</p>
                          <p className="text-orange-500 font-semibold">{selectedOrder.orderType}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Payment Mode</p>
                          <p className="text-orange-500 font-semibold">{selectedOrder.mode}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Additional Info */}
              <div className="space-y-6">
                {/* Distance Card */}
                <div className="bg-white rounded-lg p-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">Distance from Store to Customer:</p>
                  <p className="text-2xl font-bold">{selectedOrder.distance}</p>
                </div>

                {/* Order Actions */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-center">Order Actions</h3>
                  <button className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-medium">
                    Cancel Order ▼
                  </button>
                </div>

                {/* Assigned Delivery Guy */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4 text-center">Assigned Delivery Guy:</h3>
                  <p className="text-center mb-1">{selectedOrder.assignedDeliveryGuy}</p>
                  <p className="text-center text-red-500 text-sm mb-4">({selectedOrder.deliveryGuyStatus})</p>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded mb-3">
                    <option>Select Delivery Guy</option>
                  </select>
                  <button className="w-full px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    Re-Assign Delivery
                  </button>
                </div>

                {/* Ongoing Order Timeline */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-center">Ongoing order</h3>
                  <p className="text-center text-sm text-gray-600 mb-4">49 day 6 hr 19 min 30 sec</p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white"></div>
                        <div className="w-0.5 h-full bg-gray-300"></div>
                      </div>
                      <div className="flex-1 pb-4">
                        <p className="text-sm font-semibold">10:48 AM</p>
                        <p className="text-sm text-gray-600">Order assigned to Delivery Guy by Devs</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold">10:48 AM</p>
                        <p className="text-sm text-gray-600">Order placed by {selectedOrder.customerName}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Orders;
