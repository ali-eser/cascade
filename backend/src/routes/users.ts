import express, { Request, Response } from 'express';

const router: express.Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send("Fetching all users...");
});

router.post('/', (_req: Request, res: Response) => {
   res.send('Creating new user...');
});

export default router;