import React, { useState } from 'react';
import "./App.css";
import { Location } from "./components/location";

function App() {
  const initialLocations = [
    { name: '1', id: 1 },
    { name: '2', id: 2 },
    { name: '3', id: 3 },
    { name: '4', id: 4 },
    { name: '5', id: 5 },
  ];
  
  const [locations] = useState(initialLocations);
  return (
    <div className="App">
      <h1>Driver App</h1>
      <h2>Company name</h2>
      <h3>Pick a location</h3>
      <div className="location-container">
        {locations.map((location, index) => (
          <Location key={index} location={location} />
        ))}
      </div>
    </div>
  );
}

export default App;