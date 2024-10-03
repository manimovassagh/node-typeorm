import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { User } from './entity/User';
import { AppDataSource } from './initDB/dbConfig';
import { initDB } from './initDB/initDB';

const app = express();
const port = 3000;

initDB();
// Basic express route
app.get('/', async (req: Request, res: Response) => {
  const users = await AppDataSource.manager.find(User);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});