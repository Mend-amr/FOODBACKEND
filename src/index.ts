import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import connectToMongoDB from "./mongodb";
import { foodRouter } from "./routers/food.router";

configDotenv();
const port = 8000;
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use("/food", foodRouter);
app.use("/food-category", foodRouter);
// app.use("/auth", authenticationRouter);
// app.use("/food-order", foodOrderRouter);

app.listen(port, async () => {
  await connectToMongoDB();
  console.log(`Server is running at http://localhost:${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Food Delivery API");
});
