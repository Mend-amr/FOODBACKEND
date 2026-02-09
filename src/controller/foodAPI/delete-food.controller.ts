import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";
export const delleteFoods = async (req: Request, res: Response) => {
  try {
    const food = await FoodModel.findByIdAndDelete(req.params.id);
    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }
    res.status(200).json({ message: "Food item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
