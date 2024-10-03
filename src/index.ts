import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { User } from './entity/User';
import { AppDataSource } from './ormconfig';

const app = express();
const port = 3000;

// Initialize the TypeORM data source
AppDataSource.initialize()
  .then(async () => {
    console.log('Data Source has been initialized, schema dropped and recreated!');

    const user1 = new User();
    user1.firstName = 'Sophia';
    user1.lastName = 'Smith';
    user1.age = 25;

    const user2 = new User();
    user2.firstName = 'Mani';
    user2.lastName = 'Movassagh';
    user2.age = 48;

    await AppDataSource.manager.save([user1, user2]);

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