import mongoose from "mongoose";

// create users model schema for our database
const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  location: { type: String, require: true },
    date: { type: Date, default: Date.now },
});

const userModel = mongoose.model("user", userSchema);

export default userModel