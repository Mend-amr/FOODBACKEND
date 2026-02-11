import { Router } from "express";
import { CreateOrder } from "../controller/foodOrderAPI/create-order.controller";
import { getOrderById } from "../controller/foodOrderAPI/get-order-byUserld.controller";
import { getOrder } from "../controller/foodOrderAPI/get-order.controller";
import { updateOrder } from "../controller/foodOrderAPI/uptade-order.controller";

export const foodOrderRouter = Router();
foodOrderRouter.post("/ ", CreateOrder);
foodOrderRouter.get("/", getOrder);
foodOrderRouter.get("/userId", getOrderById);
foodOrderRouter.patch("/foodOrderId", updateOrder);
