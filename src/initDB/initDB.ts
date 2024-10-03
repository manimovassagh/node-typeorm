import { User } from "../entity/User";
import { AppDataSource } from "./dbConfig";

export const initDB = async () => {
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
}