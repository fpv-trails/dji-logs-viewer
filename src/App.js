import * as React from "react";
import { useState, useRef } from "react";
import Map, { Source, Layer } from "react-map-gl";
import mapboxgl from "mapbox-gl"; // Import mapbox-gl
import ReadFile from "./File";

function App() {
  const [geojsonData, setGeojsonData] = useState(null);
  const [viewport, setViewport] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14,
  });

  const mapRef = useRef(); // Define mapRef

  const handleGeoJsonLoaded = (data, firstCoordinate) => {
    setGeojsonData(data);
    // Zoom to the first coordinate if available
    if (firstCoordinate) {
      setViewport({
        longitude: firstCoordinate[0],
        latitude: firstCoordinate[1],
        zoom: 14, // Adjust zoom level as needed
      });
    }
    const map = mapRef.current.getMap();
    map.addSource("route", {
      type: "geojson",
      data,
    });

    map.addLayer({
      id: "route",
      source: "route",
      type: "line",
      paint: {
        "line-color": "red", // Customize the color
        "line-width": 3,
      },
    });

    if (data) {
      const coordinates = data.geometry.coordinates;
      const bounds = coordinates.reduce((bounds, coord) => {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
      map.fitBounds(bounds, {
        padding: 20, // Add some padding around the track
      });
    }
  };

  return (
    <div id="map" style={{ width: "100vw", height: "100vh" }}>
      {/* Button Overlay */}
      <div className="button-overlay">
        <ReadFile onGeoJsonLoaded={handleGeoJsonLoaded} />
      </div>
      <Map
        {...viewport} // spread the viewport to the Map component
        mapboxAccessToken="YOUR_MAPBOX_APIKEY"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onMove={(evt) => setViewport(evt.viewState)}
        ref={mapRef}
      />
    </div>
  );
}
export default App;
