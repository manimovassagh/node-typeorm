import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Course } from './Course';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nameOfStudent!: string;

  // Many-to-many relationship with Course
  @ManyToMany(() => Course)
  @JoinTable()  // This creates a join table to link Student and Course
  courseAttend!: Course[];
}