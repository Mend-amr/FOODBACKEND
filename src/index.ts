import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import connectToMongoDB from "./mongodb";
import { authenicationRouter } from "./routers";
import { foodRouter } from "./routers/food.router";
import { foodCategoryRouter } from "./routers/food.Category.router";
import { foodOrderRouter } from "./routers/food.order";

configDotenv();

const port = 10000;
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authenicationRouter);
app.use("/food", foodRouter);
app.use("/food-category", foodCategoryRouter);
app.use("/food-order", foodOrderRouter);

app.listen(port, async () => {
  await connectToMongoDB();
  console.log(`Server is running ${port}`);
});
