import express from "express";
import itemService from "../services/items";

const itemsRouter: express.Router = express.Router();

itemsRouter.get("/", async (_req: express.Request, res: express.Response) => {
    try {
        const items = await itemService.fetchItem()
        res.status(200).json(items)
    } catch (e) {
        res.status(500).json({ errMessage: e });
    }
});

itemsRouter.post("/", async (_req: express.Request, res: express.Response) => {
    res.send("Adding new item...");
});

export default itemsRouter;