import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Student } from './Student';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  courseName!: string;

  @Column()
  duration!: number;

  // Many-to-many relationship with Student
  @ManyToMany(() => Student, (student) => student.courseAttend)
  students!: Student[];
}