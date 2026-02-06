import { Request, Response } from "express";
import { foodOrder.model } from "../../models/foodOrder.model";
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { user, totalPrice, foodOrderItems, status } = req.body;
    const foodOrderAPI = await foodOrder.model.findByIdAndUpdate(
      req.params.id,
      {
        user,
        totalPrice,
        foodOrderItems,
        status,
      },
      { new: true },
    );
    if (!foodOrderAPI) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(foodOrderAPI);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
