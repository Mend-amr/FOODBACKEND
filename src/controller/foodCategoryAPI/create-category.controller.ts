import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newCategory = await FoodModel.create({ name });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
