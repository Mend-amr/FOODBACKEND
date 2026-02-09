import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const getcategory = async (req: Request, res: Response) => {
  try {
    const category = await FoodModel.find();
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
