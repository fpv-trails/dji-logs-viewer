// src/Map.js
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = process.env.MAPBOX_API_KEY; // Replace with your actual token

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="400px"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={setViewport}
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  );
}

export default Map;