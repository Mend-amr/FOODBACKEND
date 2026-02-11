import { Router } from "express";
import { getfoodByGategoryID } from "../controller/foodAPI/get-food-by-categoryid.controller";

import { CreateNewFood } from "../controller/foodAPI/create-new-food.controller";
import { getfoodByID } from "../controller/foodAPI/get-food-by-id.controller";
import { deleteFoods } from "../controller/foodAPI/delete-food.controller";

export const foodRouter = Router();

foodRouter.get("/category", getfoodByGategoryID);
foodRouter.get("/", getfoodByID);
foodRouter.post("/:createFood", CreateNewFood);
foodRouter.delete("/foodId", deleteFoods);
