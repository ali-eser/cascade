import express from "express";
import app from "./app";
import { connectToDatabase } from "./src/utils/db"
import { PORT } from "./src/utils/config";

app.use(express.json());

const start = async () => {
  await connectToDatabase();
  app.listen(PORT, (): void => {
    console.log(`Server started on port ${PORT}`);
  });
}

start();
