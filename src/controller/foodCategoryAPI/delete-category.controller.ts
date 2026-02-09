import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await FoodModel.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
