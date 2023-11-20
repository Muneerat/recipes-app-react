// Map.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import marker from "../assets/marker-icon-2x.png";

const Map = () => {
  const position = [51.505, -0.09];
  const customIcon = new Icon({
    iconUrl: `${marker}`,
    iconSize: [25, 38],
  });

  return (
    <div className="rounded-md w-5/6 flex justify-center mx-auto  my-6 shadow-md border-2 border-orange-500  ">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <h2>435 Wandering Ct. Sausalito</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
