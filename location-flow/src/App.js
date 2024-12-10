import React, { useState } from "react";
import MapComponent from "./components/Map";
import AddressForm from "./components/AddressForm";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div>
      <h1>Location/Address Flow</h1>
      <MapComponent onLocationSelect={setSelectedLocation} />
      {selectedLocation && <AddressForm location={selectedLocation} />}
    </div>
  );
};

export default App;
