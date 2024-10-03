import { Express, Request, Response } from "express";
import { Student } from "../entity/Student";
import { AppDataSource } from "../initDB/dbConfig";
import { logger } from "../middleware/logger";
import { formatSuccess } from "../utils/formatter";
export const homeRouteInit = (app: Express) => {
    app.get('/', logger, async (_req: Request, res: Response) => {
        const students = await AppDataSource.manager.find(Student, { relations: ['courseAttend'] });
        formatSuccess(res, students);
        
      });
}
