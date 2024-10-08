import React from 'react';
import './Packages.css'; // Custom CSS for card styling

function Packages() {
  const packages = [
    {
      title: 'Basic Plan',
      description: 'Enjoy speeds of up to 50 Mbps, perfect for casual browsing and streaming.',
      price: '$29.99/month',
      features: ['50 Mbps Speed', 'Unlimited Data', 'Free Router'],
    },
    {
      title: 'Premium Plan',
      description: 'Get up to 200 Mbps for serious streaming and gaming.',
      price: '$49.99/month',
      features: ['200 Mbps Speed', 'Unlimited Data', 'Free Installation'],
    },
    {
      title: 'Ultimate Plan',
      description: 'Up to 1 Gbps speeds for heavy users, ideal for smart homes.',
      price: '$99.99/month',
      features: ['1 Gbps Speed', 'Priority Support', 'Free Router & Installation'],
    },
  ];

  return (
    <section className="packages-container">
      {packages.map((pkg, index) => (
        <div className="package-card" key={index}>
          <h3>{pkg.title}</h3>
          <p>{pkg.description}</p>
          <p className="price">{pkg.price}</p>
          <ul>
            {pkg.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      ))}
    </section>
  );
}

export default Packages;
