import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuList from './Components/MenuList';
import Cart from './Components/Cart';
import OrderForm from './Components/OrderForm';
import OrderHistory from './Components/OrderHistory';

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-900 text-white p-4 flex justify-center gap-6">
        <Link to="/" className="hover:text-yellow-400">Menu</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
        {/* <Link to="/order" className="hover:text-yellow-400">Order</Link> */}
        <Link to="/history" className="hover:text-yellow-400">History</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/history" element={<OrderHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
