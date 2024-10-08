import { Course } from '../entity/Course';
import { Student } from '../entity/Student';
import { AppDataSource } from './configDB';

type IRunDB = () =>void;
export const initDB :IRunDB= () => {
    AppDataSource.initialize()
    .then(async () => {
      console.log('Data Source has been initialized, schema dropped and recreated!');
  
      // Create and save some courses
      const course1 = new Course();
      course1.courseName = 'Mathematics';
      course1.duration = 30;
  
      const course2 = new Course();
      course2.courseName = 'Programming !';
      course2.duration = 40;
  
      const course3 = new Course();
      course3.courseName = 'Chemistry';
      course3.duration = 35;
  
      // Save courses to the database
      await AppDataSource.manager.save([course1, course2, course3]);
  
      // Create and save some students
      const student1 = new Student();
      student1.nameOfStudent = 'Sophia';
      student1.courseAttend = [course1, course2];  // Student attending two courses
  
      const student2 = new Student();
      student2.nameOfStudent = 'Mani';
      student2.courseAttend = [course2, course3];  // Student attending two courses
  
      const student3 = new Student();
      student3.nameOfStudent = 'John';
      student3.courseAttend = [course1];  // Student attending one course
  
      // Save students to the database
      await AppDataSource.manager.save([student1, student2, student3]);
  
  

    })
    .catch((error) => console.log('Error during Data Source initialization:', error));   
}

