import cors from "cors";
import { configDotenv } from "dotenv";
import express, { Application, Request, Response } from "express";
import { connect } from "node:http2";
import connectToMongoDB from "./mongodb";
import { authenicationRouter } from "./routers";

configDotenv();

const port = 10000;
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authenicationRouter);

app.listen(port, async () => {
  await connectToMongoDB();
  console.log(`Server is running ${port}`);
});
