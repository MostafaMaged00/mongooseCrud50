const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruits");

//get all fruits
router.get("/", async (req, res) => {
  try {
    const allFruits = await Fruit.find({});
    res.json(allFruits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
