import jwt from 'jsonwebtoken';
import loginService from '../services/login';
import express from "express";

const loginRouter = express.Router();

loginRouter.post("/", async (req, res) => {
    const { username, password } = req.body;

    res.status(200).send(loginService.login(username, password))
})
