import { Request, Response } from "express";

export const verifyResetPass = async (req: Request, res: Response) => {
  try {
    const { token } = req.query as { token: string };
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
