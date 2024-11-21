import express from "express";
import usersRouter from './src/routes/users';

const app = express();

app.use('/api/users', usersRouter);

export default app;