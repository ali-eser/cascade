import express from "express";
import app from "./app";
import { PORT } from "./src/utils/config";

app.use(express.json());

app.listen(PORT, (): void => {
    console.log(`Server started on port ${PORT}`);
});