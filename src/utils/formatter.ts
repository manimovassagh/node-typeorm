import { Response } from "express";
export const formatSuccess = (res: Response,data :object) => {
  return  res.json({
        status: "success",
        data: data
      });
};
