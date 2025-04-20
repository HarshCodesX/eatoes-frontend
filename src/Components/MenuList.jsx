import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { BASE_URL } from '../context/constants';

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get(BASE_URL + '/menu');
        setMenu(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); // Set loading false after API call
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🍽️ Our Menu</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : menu.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map(item => (
            <div
              key={item._id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border"
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-green-600">₹{item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No menu items available.</p>
      )}
    </div>
  );
};

export default MenuList;




