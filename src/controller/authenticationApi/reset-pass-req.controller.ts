import { Request, Response } from "express";
import { UserModel } from "../../models/user.model";
export const resetPassReq = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const resetPass = await UserModel.create({
      email,
    });
    res.status(200).send({
      message: "Password reset request sent successfully",
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ message: "Failed to send password reset request", error: error });
  }
};
