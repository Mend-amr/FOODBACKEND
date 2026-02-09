import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";
export const GreateOrderController = async (req: Request, res: Response) => {
  try {
    const { foodId, quantity } = req.body;
    const foodItem = await FoodModel.findById(foodId);
    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }
    const orderTotal = foodItem.price * quantity;

    res.status(201).json({
      message: "Order created successfully",
      orderDetails: {
        food: foodItem.name,
        quantity,
        total: orderTotal,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
