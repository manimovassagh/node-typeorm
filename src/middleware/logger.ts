import { NextFunction, Request, Response } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`I am logging Mani !!!!!!!  ${req.method} ${req.path}`);
    next();
};
