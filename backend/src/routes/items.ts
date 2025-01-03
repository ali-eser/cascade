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

itemsRouter.post("/", async (req: express.Request, res: express.Response) => {
  const {name, price, description} = req.body;
  
  const itemToAdd = {
    name,
    price,
    description
  };
  
  try {
    const newItem = await itemService.addItem(itemToAdd)
    res.status(201).json(newItem);
  } catch (e) {
    res.status(500).json({ errMessage: e });
  }
});

export default itemsRouter;