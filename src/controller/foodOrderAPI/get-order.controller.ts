import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const getOrderController = async (req: Request, res: Response) => {
  try {
    const orders = await FoodModel.find({ userId: req.params.userId });
    if (!orders) {
      return res.status(404).json({ message: "Orders not found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
