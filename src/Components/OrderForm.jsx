
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { BASE_URL } from '../context/constants';

const OrderForm = () => {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone || cart.length === 0) return;

    const order = {
      name,
      phone,
      items: cart,
      totalPrice
    };

    try {
      const res = await axios.post(BASE_URL + '/order', order);
      setMessage(res.data.message);
      clearCart();
    } catch (err) {
      setMessage('❌ Error placing order');
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">📝 Place Your Order</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
      >
        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Phone Number</label>
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Phone Number"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md text-lg font-semibold transition-all"
        >
          ✅ Confirm Order ({`₹${totalPrice.toFixed(2)}`})
        </button>
      </form>

      {message && (
        <p className="mt-6 text-center text-green-700 font-medium text-lg">{message}</p>
      )}
    </div>
  );
};

export default OrderForm;
