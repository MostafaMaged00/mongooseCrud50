require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const conn = require("./config/db");
conn();

const starterFruits = require("./config/seed");
const Fruit = require("./models/fruits");
const fruitRoutes = require("./routes/fruitRoutes");

//use middleware
app.use(express.json());
app.use("/api/fruits", fruitRoutes);

//Home route
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

//seed route to populate dtabase
app.get("/fruits/seed", async (req, res) => {
  // res.send("<h1>mongo is the db</h1>");
  try {
    await Fruit.deleteMany({});
    await Fruit.create(starterFruits);
    res.json(starterFruits);
  } catch (error) {
    console.log(`something went worng loading data: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});
