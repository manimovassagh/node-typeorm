import { DataSource } from 'typeorm';
import { Course } from '../entity/Course';
import { Student } from '../entity/Student';
import { User } from '../entity/User';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/database.sqlite',
  synchronize: true, // Auto-sync the schema with the database
  dropSchema: true,  // Drop the database schema and recreate it
  logging: true,
  entities: [User,Course,Student],
});