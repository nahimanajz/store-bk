import OrderController from './../controllers/OrderController';
import express, { Request, Response } from "express";


const route = express.Router();

route.post("/orders", async (req: Request, res: Response) => {
  try {
    const data = await OrderController.create(req.body);

    return res
      .status(200)
      .json({ data, message: "Order placed successfully" });
  } catch (error:any) {
    return res.status(500).json({ error: error?.message});
  }
});

route.get("/orders/:id", async (req: Request, res: Response) => {
    try {
      const data = await OrderController.getFarmerOrders(req);
  
      return res
        .status(200)
        .json({ data});
    } catch (error:any) {
      console.log(error)
      return res.status(500).json({ error: error?.message});
    }
  });

export default route;