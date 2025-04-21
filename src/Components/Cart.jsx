import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, IndianRupee } from 'lucide-react';

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    navigate('/order');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-700 flex justify-center items-center gap-2 mb-12">
          <ShoppingCart className="w-8 h-8 text-indigo-600" />
          Cart Overview
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">🛒 Your cart is currently empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left side: cart items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map(item => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Quantity: <span className="font-medium">{item.quantity}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 font-semibold text-lg">
                    <IndianRupee className="w-5 h-5" />
                    {item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            {/* Right side: summary */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md sticky top-6 h-fit">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Summary</h3>

              <div className="flex justify-between items-center text-lg mb-4">
                <span className="text-gray-600">Items:</span>
                <span className="text-gray-800 font-medium">{cart.length}</span>
              </div>

              <div className="flex justify-between items-center text-xl font-semibold border-t pt-4 text-green-700">
                <span>Total:</span>
                <span className="flex items-center gap-1">
                  <IndianRupee className="w-5 h-5" />
                  {total.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md"
              >
                ✅ Place Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
