import { Schema, model } from "mongoose";
export const FoodOrderModel = model(
  "FoodOrder",
  new Schema({
    foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
    quantity: { type: Number, required: true },
    orderDate: { type: Date, default: Date.now },
  }),
);
const foodOrderSchema = new Schema({
  foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
  quantity: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

const FoodOrder = model("FoodOrder", foodOrderSchema);

export default FoodOrder;
