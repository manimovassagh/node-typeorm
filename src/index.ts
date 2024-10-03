import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { Student } from './entity/Student';
import { AppDataSource } from './initDB/dbConfig';
import { initDB } from './initDB/initDB';
import { formatSuccess } from './utils/formatter';

initDB();
const app = express();
const port = 3000;

// Basic express route
app.get('/', async (_req: Request, res: Response) => {
  const students = await AppDataSource.manager.find(Student, { relations: ['courseAttend'] });

  formatSuccess(res, students);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});