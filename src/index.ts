import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { Student } from './entity/Student';
import { AppDataSource } from './initDB/dbConfig';
import { initDB } from './initDB/initDB';
import { formatSuccess } from './utils/formatter';

// Load environment variables from .env file
dotenv.config();

// Initialize the database
initDB();

const app = express();

// Get the port from environment variables or default to 300 if not in production
const port = process.env.PORT || 3000;

// Basic express route
app.get('/', async (_req: Request, res: Response) => {
  const students = await AppDataSource.manager.find(Student, { relations: ['courseAttend'] });

  formatSuccess(res, students);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});