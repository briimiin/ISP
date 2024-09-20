import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import Navbar
import Home from './components/Home';
// import Packages from './components/Packages';
// import Products from './components/Products';
import Cart from './components/Cart';
import Payment from './components/Payment';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <>
      {/* Navbar remains visible on all pages */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
