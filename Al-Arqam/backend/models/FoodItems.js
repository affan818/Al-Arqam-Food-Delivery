import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema({
  CategoryName: { type: String, require: true, trim: true },
  name: { type: String, require: true, trim: true },
  img: { type: String, require: true },
  options: [{ half: { type: String }, full: { type: String } }],
  description: { type: String },
});

const foodItemModel = mongoose.model("foodItem", foodItemSchema);

export default foodItemModel;
