import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/packages')
      .then(response => setPackages(response.data))
      .catch(error => console.error('Error fetching packages:', error));
  }, []);

  return (
    <div>
      <h1>Available Packages</h1>
      {packages.map(pkg => (
        <div key={pkg.id}>
          <h3>{pkg.name}</h3>
          <p>{pkg.speed}</p>
          <p>{pkg.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Packages;
