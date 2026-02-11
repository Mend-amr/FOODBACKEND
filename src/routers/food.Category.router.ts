import { Router } from "express";
import { getcategory } from "../controller/foodCategoryAPI/get-category.controller";
import { createCategory } from "../controller/foodCategoryAPI/create-category.controller";
import { updateCategory } from "../controller/foodCategoryAPI/uptade-category.controller";
import { deleteCategory } from "../controller/foodCategoryAPI/delete-category.controller";

export const foodCategoryRouter = Router();

foodCategoryRouter.get("/", getcategory);
foodCategoryRouter.post("/", createCategory);
foodCategoryRouter.patch("/foodCategoryId", updateCategory);
foodCategoryRouter.delete("/foodCategoryId", deleteCategory);
