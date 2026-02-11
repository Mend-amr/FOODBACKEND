import { Request, Response } from "express";

import { FoodCategoryModel, UserModel } from "../../models";
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { categoryName } = req.body;
    const bn = await FoodCategoryModel.findOne.apply({ categoryName });
    if (bn) {
      return res.status(400).send({ message: "iim category bn" });
    }
    const categoryAPI = await FoodCategoryModel.create({ categoryName });
    res.status(200).send({ message: "category create", data: categoryAPI });
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
