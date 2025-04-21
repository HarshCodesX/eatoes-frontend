import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { BASE_URL } from '../context/constants';
import { ShoppingCart } from 'lucide-react';

const MenuList = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get(BASE_URL + '/menu');
        setMenu(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className="px-6 py-14 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Explore Our Flavors 🍜
      </h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : menu.length > 0 ? (
        <div className="space-y-8">
          {menu.map(item => (
            <div
              key={item._id}
              className="flex flex-col md:flex-row bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full md:w-60 h-60 object-cover object-center"
                />
              )}
              <div className="flex flex-col justify-between p-6 flex-1">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-green-600">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  >
                    <ShoppingCart size={18} />
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
