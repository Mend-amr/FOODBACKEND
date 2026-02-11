import { Router } from "express";
import {
  signInController,
  signUpController,
} from "../controller/authenticationApi";
import { resetPassReq } from "../controller/authenticationApi/reset-pass-req.controller";
import { verifyResetPass } from "../controller/authenticationApi/verify-reset-pass-req.controller";

export const authenicationRouter = Router();

authenicationRouter.post("/sign-in", signInController);
authenicationRouter.post("/sign-up", signUpController);
authenicationRouter.post("/reset-pass-req", resetPassReq);
authenicationRouter.get("/verify-reset-pass-req", verifyResetPass);
