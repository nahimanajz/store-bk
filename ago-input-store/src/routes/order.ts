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

route.get("/orders/farmer/:id", async (req: Request, res: Response) => {
    try {
      const data = await OrderController.getFarmerOrders(req);
      return res
        .status(200)
        .json({ data});
    } catch (error:any) {
      return res.status(500).json({ error: error?.message});
    }
  });
route.put("/orders/:id", async (req: Request, res: Response) => {
    try {
      const data = await OrderController.update(req.params.id, req.body.orderStatus);
      return res
        .status(200)
        .json({ data, message:"Order status changed successfully." });
    } catch (error:any) {
      return res.status(500).json({ error: error?.message});
    }
});

export default route;