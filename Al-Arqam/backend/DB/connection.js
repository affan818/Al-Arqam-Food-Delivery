import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// eslint-disable-next-line no-undef
const DB_URL = process.env.DB_URL;

async function connectDB() {
  const connection = await mongoose
    .connect(DB_URL)
    .then(async () => {
      console.log(`DB connected to ${DB_URL}`);
      const fetch_data = await mongoose.connection.db.collection("foodItems");
      // eslint-disable-next-line no-undef
      global.foodItems = await fetch_data
        .find({})
        .toArray();
    })
    .catch((error) => {
      console.log(`ERROR:- ${error}`);
    });
  return connection;
}

export default connectDB;
