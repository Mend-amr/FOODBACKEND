import { Request, Response } from "express";
import { FoodModel } from "../../models";

export const updateFood = async (req: Request, res: Response) => {
  try {
    const { picture, ingrediednts, name, price } = req.body;
    const foodAPI = await FoodModel.findByIdAndUpdate({
      picture,
      ingrediednts,
      price,
      name,
    });
    res.status(200).send({ message: "Food list update", data: foodAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
