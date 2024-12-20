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

//create a new fruit
router.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const createdFruit = await Fruit.create(req.body);
    console.log(req.body);

    res.json(createdFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//show route - get indiv fruit
router.get("/:id", async (req, res) => {
  try {
    const singleFruits = await Fruit.findById(req.params.id);
    res.json(singleFruits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//update route
router.put("/:id", async (req, res) => {
  try {
    const updatedFruits = await Fruit.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(updatedFruits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const deletedFruits = await Fruit.findByIdAndDelete(req.params.id);
    res.json(deletedFruits);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
