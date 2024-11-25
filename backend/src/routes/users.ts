import express from "express";
import userService from "../services/users";

const usersRouter: express.Router = express.Router();

usersRouter.get("/", async (_req: express.Request, res: express.Response) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({ e });
    }
});

usersRouter.post("/", async (req: express.Request, res: express.Response) => {
    try {
        const { username, email, name, password } = req.body;
        const newUser = await userService.addUser(username, email, name, password);

        res.status(201).json(newUser);
    } catch (e) {
        res.status(500).json({ e });
    }

});

export default usersRouter;