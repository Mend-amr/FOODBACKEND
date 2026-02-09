import { Request, Response } from "express";

export const refreshController = async (req: Request, res: Response) => {
  try {
    const { refreshToken } = req.body;

    const newAccessToken = "newAccessToken123456";
    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
