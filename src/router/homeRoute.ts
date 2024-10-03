import { Express, Request, Response } from "express";
import { formatSuccess } from "../utils/formatter";
import { AppDataSource } from "../initDB/dbConfig";
import { Student } from "../entity/Student";
export const homeRouteInit = (app: Express) => {
    app.get('/', async (_req: Request, res: Response) => {
        const students = await AppDataSource.manager.find(Student, { relations: ['courseAttend'] });
      
        formatSuccess(res, students);
      });
}