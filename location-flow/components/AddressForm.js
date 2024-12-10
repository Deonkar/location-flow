import React, { useState } from "react";
import axios from "axios";

const AddressForm = ({ location }) => {
  const [address, setAddress] = useState({
    category: "Home",
    houseNumber: "",
    area: "",
  });

  const handleSubmit = async () => {
    const data = { ...address, location };
    await axios.post("http://localhost:5000/api/addresses", data);
    alert("Address saved!");
  };

  return (
    <form>
      <input
        type="text"
        placeholder="House/Flat/Block No."
        onChange={(e) =>
          setAddress({ ...address, houseNumber: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Apartment/Road/Area"
        onChange={(e) => setAddress({ ...address, area: e.target.value })}
      />
      <button type="button" onClick={handleSubmit}>
        Save Address
      </button>
    </form>
  );
};

export default AddressForm;
