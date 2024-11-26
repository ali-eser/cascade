import express from "express";
import userService from "../services/users";

const usersRouter: express.Router = express.Router();

usersRouter.get("/", async (_req: express.Request, res: express.Response) => {
    try {
        const users = await userService.getUser();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json({ errMessage: e });
    }
});

usersRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.getUser(parseInt(id));
        res.status(200).json(user);
    } catch (e) {
        console.error(e);
        res.status(500).json({ errMessage: e });
    }
});

usersRouter.post("/", async (req: express.Request, res: express.Response) => {
    try {
        const { username, email, name, password } = req.body;
        const newUser = await userService.addUser(username, email, name, password);

        res.status(201).json(newUser);
    } catch (e) {
        res.status(500).json({ errMessage: e });
    }

});

usersRouter.delete("/:id", async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        await userService.removeUser(parseInt(id))
        res.status(200).json({ message: "User removed successfully." });
    } catch (e) {
        res.status(500).json({ errMessage: e });
    }
});

export default usersRouter;