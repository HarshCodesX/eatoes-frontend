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
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📦 Order History</h2>

      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
        <input
          type="tel"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />
        <button
          onClick={fetchOrders}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all"
        >
          🔍 Search
        </button>
      </div>

      {searched && orders.length === 0 && (
        <p className="text-center text-gray-500 text-lg mt-10">
          No order history found for this number.
        </p>
      )}

      {orders.length > 0 && (
        <div className="space-y-5">
          {orders.map(order => (
            <div
              key={order._id}
              className="bg-white p-5 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-lg font-bold text-gray-700">🧾 Order #{order._id}</h4>
                <span className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleString()}
                </span>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
                {order.items.map(i => (
                  <li key={i._id}>
                    {i.name} x <span className="font-medium">{i.quantity}</span>
                  </li>
                ))}
              </ul>
              <p className="text-right text-green-600 font-semibold text-base">
                Total: ₹{order.totalPrice.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
