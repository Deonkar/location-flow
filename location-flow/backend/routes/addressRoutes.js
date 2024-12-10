const express = require("express");
const Address = require("../models/Address");
const router = express.Router();

// Get all addresses
router.get("/", async (req, res) => {
  const addresses = await Address.find();
  res.json(addresses);
});

// Add a new address
router.post("/", async (req, res) => {
  const address = new Address(req.body);
  await address.save();
  res.json(address);
});

// Update address
router.put("/:id", async (req, res) => {
  const updatedAddress = await Address.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedAddress);
});

// Delete address
router.delete("/:id", async (req, res) => {
  await Address.findByIdAndDelete(req.params.id);
  res.json({ message: "Address deleted" });
});

module.exports = router;
