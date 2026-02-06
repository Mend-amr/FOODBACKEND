import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import jwt from "jsonwebtoken";

export const signInController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userAPI = await UserModel.findOne({ email });
    if (!userAPI) return res.status(404).send({ message: "User not found" });
    if (userAPI.password !== password)
      return res.status(401).send({ message: "Invalid password" });

    const tokenSignIn = jwt.sign({ _id: userAPI._id }, "SecretToken", {
      expiresIn: "1d",
    });
    res.status(200).send({
      message: "Sign-in successful",
      tokenSignIn,
      userAPI,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Sign-in failed", error: error });
  }
};
