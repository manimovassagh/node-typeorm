import { DataSource } from 'typeorm';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database.sqlite',
  synchronize: true, // Auto creates tables based on entities, disable in production
  logging: true,
  entities: [User],
});