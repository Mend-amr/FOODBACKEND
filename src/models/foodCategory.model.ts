import { Schema } from "mongoose";
import { model } from "mongoose";

const foodCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

export default model("FoodCategory", foodCategorySchema);
{
  model;
}
