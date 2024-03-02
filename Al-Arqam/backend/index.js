import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./DB/connection.js";
import createUserRoute from "./routes/CreateUserRoute.js";
// import createUser from "./CRUD/create.js";
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
const localURL = process.env.localURL || "localhost";

connectDB();
app.use(cors());
app.use(express.json());
app.use(createUserRoute);
// createUser()
app.get("/", (req, res) => {
  res.send("<h1>Wellcome</h1>");
});

app.listen(port, () => {
  console.log(`server is running on http://${localURL}:${port}`);
});
