import mongoose from "mongoose";

const foodcateSchema = new mongoose.Schema({
  CategoryName: { type: String, require: true, trim: true },
});

const foodCategoryModel = mongoose.model("foodCategory", foodcateSchema);

export default foodCategoryModel;
