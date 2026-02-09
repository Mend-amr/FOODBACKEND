import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const getfoodByID = async (req: Request, res: Response) => {
  try {
    const food = await FoodModel.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
