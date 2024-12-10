const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  category: { type: String, required: true },
  houseNumber: String,
  area: String,
  location: {
    lat: Number,
    lng: Number,
    address: String,
  },
});

module.exports = mongoose.model("Address", AddressSchema);
