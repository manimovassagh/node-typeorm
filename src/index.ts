import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { User } from './entity/User';
import { AppDataSource } from './ormconfig';

const app = express();
const port = 3000;

// Initialize the TypeORM data source
AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');

    // Create and save a new user
    const user = new User();
    user.firstName = 'Sophia';
    user.lastName = 'Smith';
    user.age = 25;
    const user2 = new User();
    user.firstName = 'Mani';
    user.lastName = 'Movassagh';
    user.age = 48;
    await AppDataSource.manager.save(user);

    // Fetch all users
    const users = await AppDataSource.manager.find(User);
    console.log('All users: ', users);
  })
  .catch((error) => console.log('Error during Data Source initialization:', error));

// Basic express route
app.get('/', async (req: Request, res: Response) => {
  const users = await AppDataSource.manager.find(User);
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});