import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./DB/connection.js";
const app = express();
import foodCategoryModel from "./models/FoodCategory.js";
import foodItemModel from "./models/FoodItems.js";
// import createCaoegory from "./models/Al_Arqam.js";
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
const DATA_URL = process.env.DATA_URL;

connectDB(DATA_URL);
foodCategoryModel();
foodItemModel();

app.get("/", (req, res) => {
  res.send("wellcome");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
