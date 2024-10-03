import { NextFunction, Request, Response } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`✅✅✅✅✅✅✅✅✅✅ [SUCCESS] Logging Mani - Method: ${req.method} Path: ${req.path}`);
    next();
};
