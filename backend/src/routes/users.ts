import express from "express";

const router: express.Router = express.Router();

router.get("/", async (_req: express.Request, res: express.Response) => {
    res.send("Fetching all users...");
});

router.post("/", async (_req: express.Request, res: express.Response) => {
   res.send("Creating new user...");
});

export default router;