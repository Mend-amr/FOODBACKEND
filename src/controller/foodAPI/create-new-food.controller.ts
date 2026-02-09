import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const newfoodBycontroller = async (req: Request, res: Response) => {
  try {
    const FoodAPI = await FoodModel.findById(req.params.id);
    if (!FoodAPI) {
      return res.status(404).json({ message: "Food item not found" });
    }

    res
      .status(200)
      .send({ message: "Food item retrieved successfully", data: FoodAPI });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
