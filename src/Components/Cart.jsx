


import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    navigate('/order');
  };

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map(item => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-5 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow"
            >
              <div className="mb-2 sm:mb-0">
                <h4 className="text-xl font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">Quantity: <span className="font-medium">{item.quantity}</span></p>
              </div>
              <p className="text-lg font-semibold text-green-600 mt-1 sm:mt-0">₹{item.price * item.quantity}</p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 text-xl font-bold text-gray-800">
            <span>Total:</span>
            <span className="text-green-700">₹{total.toFixed(2)}</span>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handlePlaceOrder}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-200"
            >
              ✅ Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
