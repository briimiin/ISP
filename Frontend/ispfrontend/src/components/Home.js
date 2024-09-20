import React from 'react';
import Packages from './Packages';  // Import the Packages component to be part of Home
import Products from './Products';  // Import the Products component to be part of Home

function Home() {
  return (
    <div>
      {/* Landing Page Section */}
      <section id="home" style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h1>Welcome to Our Internet Service Provider</h1>
        <p>This is the landing page. Scroll down to view more.</p>
      </section>

      {/* Packages Section */}
      <section id="packages" style={{ height: '100vh', backgroundColor: '#e0e0e0' }}>
        <Packages />
      </section>

      {/* Products Section */}
      <section id="products" style={{ height: '100vh', backgroundColor: '#d0d0d0' }}>
        <Products />
      </section>
    </div>
  );
}

export default Home;
