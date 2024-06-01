import { CreateOrderDto } from "./../dto/Order.dto";
import { OrderDto } from "../dto/Order.dto";
import FarmerService from "../services/farmer.service";
import OrderService from "../services/order.service";
import seedService from "../services/seed.service";
import LandService from "../services/land.service";
import FertilizerService from "../services/fertilizer.service";
import { Request } from "express";

export default class OrderController {
  public static async create(payload: OrderDto): Promise<OrderDto | any> {
    /**
     * Implement all business logic here then put them in middleware afterwards
     */
    const hasFarmer = await FarmerService.getById(payload.farmerId);
    if (!hasFarmer) {
      throw new Error(`Farmer with id ${payload.farmerId} is not found`);
    }

    const seed = await seedService.create(payload.seeds);

    const land = await LandService.create({
      farmerId: payload.farmerId,
      size: payload.land.size,
    });
    const fertilizer = await FertilizerService.create(payload.fertilizer)

    const order:CreateOrderDto = {
            ...payload, 
            seedId: seed._id,
            fertilizerId:fertilizer._id,
            paymentStatus:  "not paid",
            orderStatus:"pending"
    }
    return await OrderService.create(order);
  }
  
  public static async getFarmerOrders(req: Request): Promise<OrderDto[] | any> {
    return await  OrderService.getFarmerOrders(req)
   }

/**
   On farmer placing order, auto calculation of fertilizers and seeds quantity based on the size of the
    land, should happen

*/

   private static calculateSeedQuantity(payload: OrderDto){
    
    if(payload.seeds.quantity){
        throw new Error("Seeds quantity should not exceed 1kg per 1 acre of land")
    }
    
   }
}
