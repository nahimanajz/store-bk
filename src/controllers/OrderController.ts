import { CreateOrderDto } from "./../dto/Order.dto";
import { OrderDto } from "../dto/Order.dto";
import FarmerService from "../services/farmer.service";
import OrderService from "../services/order.service";
import seedService from "../services/seed.service";
import LandService from "../services/land.service";
import FertilizerService from "../services/fertilizer.service";

export default class OrderController {
  public static async create(payload: OrderDto): Promise<OrderDto | any> {
    /**
     * Implement all business logic here then put them in middleware afterwards
     */
    const hasFarmer = await FarmerService.getById(payload.farmerId);
    if (!hasFarmer) {
      throw new Error(`Farmer with id ${payload.farmerId} is not found`);
    }
     this. calculateSeedQuantity(payload)
     this.calculateFertilizerQuantity(payload)

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
  
  public static async getFarmerOrders(farmerId: string): Promise<OrderDto[] | any> {
    return await  OrderService.getFarmerOrders(farmerId)
   }

/**
   On farmer placing order, auto calculation of fertilizers and seeds quantity based on the size of the
    land, should happen

*/

       /**
        * @description 
        - A certain amount of seeds can be used on a specific size of land
        - Seeds quantity should not exceed 1kg per 1 acre of land 
        @return void
        */
   private static calculateSeedQuantity(payload: OrderDto){
    
    if(payload.seeds.quantity > payload.land.size){
        throw new Error("Seeds quantity should not exceed 1kg per 1 acre of land")
    }
   }


   /**
    * @description
     A certain amount of fertilizer is used on a specific size of land
        Fertilizer quantity value should not exceed 3kgs on the land size of 1 acre (ex: 1kg per 0.5
        acre, 3kg per 1 acre, ...)  
        @return void
    */

   private static calculateFertilizerQuantity(payload: OrderDto){
    const amount = payload.fertilizer.amount 
    const landSize = payload.land.size

    if(amount > landSize*2 ){
        throw new Error(`Fertilizer quantity value should not exceed ${amount} kgs on the land size of ${landSize} acre`)
    }
   }
}
