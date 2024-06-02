import express, { Request, Response } from "express";
import farmerController from "../controllers/FarmerController";

const route = express.Router();

route.post("/farmers", async (req: Request, res: Response) => {
  try {
    
    const data = await farmerController.create(req.body);

    return res
      .status(201)
      .json({ data, message: "Record created successfully" });
  } catch (error:any) {
    return res.status(500).json({ error: error?.message});
  }
});

route.get("/farmers", async (req: Request, res: Response) => {
  try {
    const data = await farmerController.getAll();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});


route.get("/farmers/:id", async (req: Request, res: Response) => {
  try {
    const data = await farmerController.getById(req.params.id);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

export default route;
