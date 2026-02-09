import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const updatedCategory = await FoodModel.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true },
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
