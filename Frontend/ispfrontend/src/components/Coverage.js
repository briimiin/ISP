// Coverage.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // Leaflet CSS
import L from 'leaflet';
import './Coverage.css';

// Custom marker icon fix for Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Coverage = () => {
  const position = [-1.4488, 36.931]; // Coordinates for Kitengela

  return (
    <div className="coverage-section">
      <h2>Coverage Area</h2>
      <p>We currently provide service in Kitengela.</p>
      
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Our services are available in Kitengela!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Coverage;