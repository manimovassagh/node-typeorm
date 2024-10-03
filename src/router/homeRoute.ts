import { Express, NextFunction, Request, Response } from "express";
import { AppDataSource } from "../DB/configDB";
import { Course } from "../entity/Course";
import { Student } from "../entity/Student";
import { NotFoundError } from "../error/errors";
import { logger } from "../middleware/logger";
import { formatSuccess } from "../utils/formatter";

export const homeRouteInit = (app: Express) => {
  
    // GET all students route
    app.get('/', async (_req: Request, res: Response, next: NextFunction) => {
      try {
        const students = await AppDataSource.manager.find(Student, { relations: ['courseAttend'] });
  
        // Handle case where no students are found
        if (students.length === 0) {
          throw new NotFoundError("No students found");
        }
  
        formatSuccess(res, students);
      } catch (error) {
        next(error); // Pass the error to the error handler
      }
    });
  
    // GET a specific student by ID
    app.get('/students/:id', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const studentId = req.params.id;
        const student = await AppDataSource.manager.findOne(Student, { 
          where: { id: Number(studentId) }, 
          relations: ['courseAttend']
        });
  
      
        if (!student) {
          throw new NotFoundError(`Student with ID ${studentId} not found`);
        }
  
        formatSuccess(res, student);
      } catch (error) {
        next(error);
      }
    });
  
    // POST create a new student
    app.post('/students', async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { nameOfStudent, courses } = req.body; // Expecting student name and course list in the request body
  
        if (!nameOfStudent || !courses || courses.length === 0) {
          throw new Error("Invalid data: Missing student name or courses");
        }
  
        const newStudent = new Student();
        newStudent.nameOfStudent = nameOfStudent;
        newStudent.courseAttend = await AppDataSource.manager.findByIds(Course, courses);
  
        const savedStudent = await AppDataSource.manager.save(newStudent);
        formatSuccess(res, savedStudent);
      } catch (error) {
        next(error);
      }
    });
  
    // DELETE a student by ID
    app.delete('/students/:id',logger, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const studentId = req.params.id;
        const student = await AppDataSource.manager.findOne(Student, { where: { id: Number(studentId) } });
  
        if (!student) {
          throw new NotFoundError(`Student with ID ${studentId} not found`);
        }
  
        await AppDataSource.manager.remove(student);
        formatSuccess(res, { message: `Student with ID ${studentId} deleted successfully` });
      } catch (error) {
        next(error);
      }
    });
  };