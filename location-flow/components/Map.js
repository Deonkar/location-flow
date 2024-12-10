import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapComponent = ({ google, onLocationSelect }) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const handleMapClick = (mapProps, map, clickEvent) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    setLocation({ lat, lng });
    onLocationSelect({ lat, lng });
  };

  return (
    <Map
      google={google}
      zoom={14}
      initialCenter={{ lat: 37.7749, lng: -122.4194 }}
      onClick={handleMapClick}
    >
      <Marker position={location} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapComponent);
