import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const getfoodByGategoryID = async (req: Request, res: Response) => {
  try {
    const food = await FoodModel.find({ categoryId: req.params.categoryId });
    if (!food) {
      return res.status(404).json({ message: "Food items not found" });
    }
    res.status(200).json(food);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
