import { Request, Response } from "express";
import { FoodOrderModel } from "../../models/foodOrder.model";

export const getOrderByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const orders = await FoodOrderModel.find({ userId });
    if (!orders) {
      return res
        .status(404)
        .json({ message: "Orders not found for this user" });
    }
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
