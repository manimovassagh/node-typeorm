import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';
import { initDB } from './DB/initDB';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './middleware/logger';
import { homeRouteInit } from './router/homeRoute';

dotenv.config();

initDB();

const app = express();

app.use(errorHandler);
app.use(logger)
homeRouteInit(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port:  ${port}`);
});