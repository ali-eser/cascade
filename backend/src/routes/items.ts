import express from "express";

const router: express.Router = express.Router();

router.get("/", async (_req: express.Request, res: express.Response) => {
    res.send("Fetching all items...");
});

router.post("/", async (_req: express.Request, res: express.Response) => {
   res.send("Adding new item...");
});

export default router;