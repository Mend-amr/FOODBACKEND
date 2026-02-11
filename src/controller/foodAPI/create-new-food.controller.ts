import { Request, Response } from "express";
import { FoodModel } from "../../models/food.model";

export const CreateNewFood = async (req: Request, res: Response) => {
  try {
    const { foodName, price, image, ingrediednts, category } = req.body;
    const FoodAPI = await FoodModel.create({
      foodName,
      price,
      image,
      ingrediednts,
      category,
    });

    res
      .status(200)
      .send({ message: "Food item retrieved successfully", data: FoodAPI });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
