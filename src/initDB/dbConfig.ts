import { DataSource } from 'typeorm';
import { Course } from '../entity/Course';
import { Student } from '../entity/Student';
import { User } from '../entity/User';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database.sqlite',
  synchronize: true,
  dropSchema: true,
  logging: true,
  entities: [User,Course,Student],
});