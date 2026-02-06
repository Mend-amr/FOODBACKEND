import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { verifyUserEmail } from "../../../utils/emailVerification";

export const signUpController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const userAPI = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    const token = jwt.sign({ _id: userAPI._id }, "SecretToken", {
      expiresIn: "1h",
    });
    await verifyUserEmail(
      email,
      `${process.env.BACKEND_API}/auth/user-verify?token=${token}`,
    );
    res.status(200).send({
      message: "User registered successfully. Please verify your email.",
      userAPI,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "User registration failed", error: error });
  }
};
