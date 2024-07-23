import * as React from 'react';
import Map from 'react-map-gl';

function App() {
  return (
    <div id='map' style={{ width: '100vw', height: '100vh'}}> 
    <Map
      mapboxAccessToken="pk.eyJ1Ijoid2FsdGVyLW1vcmF3YSIsImEiOiJjanBwd3kxajMwdDdoM3dzNGhpcXBja3JmIn0.w0EN49Ij81yTIB8scT_1cg"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: '100%', height: '100%'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      
    />
    </div>
  );
}
export default App