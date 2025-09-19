import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Dashboard = () => {
  const [showMap, setShowMap] = useState(true);

  return (
    <div className="dashboard">
      <div className="chat-container">
        <div className="controls">
          <select>
            <option>Select Profession</option>
            <option>Doctor</option>
            <option>Engineer</option>
            <option>Teacher</option>
          </select>
          <select>
            <option>Select Location</option>
            <option>New York</option>
            <option>London</option>
            <option>Tokyo</option>
          </select>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
      <div className="map-container">
        <button onClick={() => setShowMap(!showMap)}>
          {showMap ? 'Hide Map' : 'Show Map'}
        </button>
        {showMap && (
          <>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
            <button className="fetch-button">Fetch</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
