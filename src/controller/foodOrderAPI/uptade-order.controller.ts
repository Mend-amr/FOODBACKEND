import { Request, Response } from "express";
import { FoodOrderModel } from "../../models/foodOrder.model";
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { user, totalPrice, foodOrderItems, status } = req.body;
    const foodOrderAPI = await FoodOrderModel.findByIdAndUpdate({
      user,
      totalPrice,
      foodOrderItems,
      status,
    });

    res.status(200).send({ message: "Order updated", data: foodOrderAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: " error", error });
  }
};
