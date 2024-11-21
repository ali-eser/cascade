import express from "express";
import itemsRouter from "./src/routes/items";
import usersRouter from "./src/routes/users";

const app = express();

app.use("/api/items", itemsRouter);
app.use("/api/users", usersRouter);

export default app;