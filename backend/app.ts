import express from "express";
import loginRouter from "./src/routes/login";
import itemsRouter from "./src/routes/items";
import usersRouter from "./src/routes/users";

const app = express();

app.use(express.json());

app.use("/api/login", loginRouter);
app.use("/api/items", itemsRouter);
app.use("/api/users", usersRouter);

export default app;