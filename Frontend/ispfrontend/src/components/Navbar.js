import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${id}`);  // In case you're navigating to other pages like Cart, etc.
    }
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><button onClick={() => scrollToSection('packages')}>Packages</button></li>
        <li><button onClick={() => scrollToSection('products')}>Products</button></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
