import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { Course } from './entity/Course';
import { AppDataSource } from './initDB/dbConfig';
import { initDB } from './initDB/initDB';
import { Student } from './entity/Student';

const app = express();
const port = 3000;

initDB();
// Basic express route
app.get('/', async (req: Request, res: Response) => {
  // Fetch students with their attended courses
  const students = await AppDataSource.manager.find(Student, { relations: ['courseAttend'] });

  // Send the response with status and the list of students
  res.json({
    status: "success",
    students: students
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});