import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import loginRouter from "./src/routes/login";
import itemsRouter from "./src/routes/items";
import usersRouter from "./src/routes/users";
import commentsRouter from "./src/routes/comments";

const app = express();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (_req, file, callback) => {
    callback(null, "img" + "_" + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (_req: any, file: any, callback: any) => {
  const allowed = ["image/jpeg", "image/png", "image/jpg"];
  if (allowed.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }
});

app.use(cors());

app.use(express.json());

app.use(upload.any());

app.use("/api/comments", commentsRouter);
app.use("/api/login", loginRouter);
app.use("/api/items", itemsRouter);
app.use("/api/users", usersRouter);

export default app;