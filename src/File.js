import React, { useRef } from "react";

function ReadFile({ onGeoJsonLoaded }) {
  const fileInputRef = useRef(null);

  const importData = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const geojsonData = JSON.parse(e.target.result);
        console.log(geojsonData);

        // Extract the first coordinate
        const firstFeature = geojsonData.geometry.coordinates[0];

        // Extract coordinates and log to console
        geojsonData.geometry.coordinates.forEach((feature) => {
          //console.log(feature);
        });

        onGeoJsonLoaded(geojsonData, firstFeature); // Pass the data to App.js
      } catch (error) {
        console.error("Error parsing GeoJSON:", error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      <button
        onClick={importData}
        style={{
          backgroundColor: "#4CAF50",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "20px",
        }}
      >
        <input
          type="file"
          ref={fileInputRef}
          accept=".json" // Only accept GeoJSON files
          onChange={handleFileChange}
          style={{ display: "none" }}
        />{" "}
        Read DJI GeoJSON
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </>
  );
}

export default ReadFile;
