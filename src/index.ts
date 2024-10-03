import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';
import { initDB } from './initDB/initDB';
import { homeRouteInit } from './router/homeRoute';

dotenv.config();

initDB();

const app = express();


homeRouteInit(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});