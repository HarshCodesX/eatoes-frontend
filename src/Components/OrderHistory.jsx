import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../context/constants';

const OrderHistory = () => {
  const [phone, setPhone] = useState('');
  const [orders, setOrders] = useState([]);
  const [searched, setSearched] = useState(false);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/order/${phone}`);
      setOrders(res.data);
      setSearched(true);
    } catch (err) {
      console.error(err);
      setOrders([]);
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 p-6 sm:p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-3xl p-8 sm:p-12">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
          📦 Track Your Orders
        </h2>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <input
            type="tel"
            className="w-full sm:w-auto flex-1 px-5 py-3 text-lg border border-gray-300 rounded-xl shadow-inner focus:ring-4 focus:ring-indigo-300 transition-all duration-200"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="📱 Enter phone number"
          />
          <button
            onClick={fetchOrders}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg"
          >
            🔍 Search Orders
          </button>
        </div>

        {searched && orders.length === 0 && (
          <p className="text-center text-gray-500 text-lg mt-12">
            🚫 No order history found for this number.
          </p>
        )}

        {orders.length > 0 && (
          <div className="space-y-6">
            {orders.map(order => (
              <div
                key={order._id}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h4 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                    🧾 Order ID:
                    <span className="text-indigo-600">{order._id}</span>
                  </h4>
                  <span className="text-sm text-gray-500 mt-2 sm:mt-0">
                    {new Date(order.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="bg-gray-100 rounded-xl p-4 mb-4">
                  <ul className="divide-y divide-gray-200">
                    {order.items.map(i => (
                      <li key={i._id} className="py-2 flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{i.name}</span>
                        <span className="text-sm text-gray-500">x {i.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold text-green-600">
                    💰 Total Paid: ₹{order.totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
