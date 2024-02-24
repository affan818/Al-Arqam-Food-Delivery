import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connection.js";
dotenv.config();
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
const localURL = process.env.localURL || "localhost";
 
connectDB()
app.get("/", (req, res) => {
  res.send("<h1>Wellcome</h1>");
});

app.listen(port, () => {
  console.log(`server is running on http://${localURL}:${port}`);
});
