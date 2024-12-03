import loginService from '../services/login';
import express from "express";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await loginService.login(username, password);
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ errMessage: e });
  }
})

export default loginRouter;