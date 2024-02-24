import mongoose from "mongoose";

const connectDB = (DATA_URL) => {
  return mongoose
    .connect(DATA_URL)
    .then(() => {
      console.log("connection successfully");
    })
    .catch((err) => {
      console.log(`ERROR: ${err}`);
    });
};

export default connectDB;
