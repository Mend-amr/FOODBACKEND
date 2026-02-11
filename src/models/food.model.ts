import mongoose, { Schema, models, ObjectId } from "mongoose";

type FoodType = {
  foodName: string;
  price: number;
  image: string;
  ingrediednts: string;
  category: ObjectId;
};
export const FoodSchema = new Schema<FoodType>(
  {
    foodName: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingrediednts: [{ type: String, required: true }],
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true },
);
export const FoodModel = models["Foods"] || mongoose.model("foods", FoodSchema);
