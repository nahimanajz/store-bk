import { Fertilizer } from "./../models/Fertilizer";
import { CreateOrderDto } from "./../dto/Order.dto";
import { OrderDto } from "../dto/Order.dto";
import FarmerService from "../services/farmer.service";
import OrderService from "../services/order.service";
import seedService from "../services/seed.service";
import LandService from "../services/land.service";
import FertilizerService from "../services/fertilizer.service";
import { Request } from "express";
import { FertilizerDto } from "../dto/Fertilizer.dto";
import { SeedDto } from "../dto/Seed.dto";

export default class OrderController {
  public static async update(id: string, orderStatus:string):Promise<OrderDto> {
    return await OrderService.update(id, orderStatus) 
  }
  public static async create(payload: OrderDto): Promise<OrderDto | any> {
    const hasFarmer = await FarmerService.getById(payload.farmerId);
    if (!hasFarmer) {
      throw new Error(`Farmer with id ${payload.farmerId} is not found`);
    }
    
    this.calculateSeedQuantity(payload);
    this.calculateFertilizerQuantity(payload);
    this.hasSpecificSeed(payload.fertilizer);
    this.validatePayload(payload.fertilizer, payload.seeds);

    const seed = await seedService.create(payload.seeds);

    const land = await LandService.create({
      farmerId: payload.farmerId,
      size: payload.land.size,
    });
    const fertilizer = await FertilizerService.create(payload.fertilizer);

    const order: CreateOrderDto = {
      ...payload,
      seedId: seed._id,
      fertilizerId: fertilizer._id,
      paymentStatus: "not paid",
      orderStatus: "pending",
    };
   
    return await OrderService.create(order);
  }

  public static async getFarmerOrders(req: Request): Promise<OrderDto[] | any> {
    return await OrderService.getFarmerOrders(req);
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
  private static calculateSeedQuantity(payload: OrderDto) {
    if (payload.seeds.quantity > payload.land.size) {
      throw new Error(
        `Seeds quantity should not exceed ${payload.seeds.quantity} kg per ${payload.land.size} acre of land`
      );
    }
  }

  /**
    * @description
     A certain amount of fertilizer is used on a specific size of land
        Fertilizer quantity value should not exceed 3kgs on the land size of 1 acre (ex: 1kg per 0.5
        acre, 3kg per 1 acre, ...)  
        @return void
    */

  private static calculateFertilizerQuantity(payload: OrderDto) {
    const amount = payload.fertilizer.amount;
    const landSize = payload.land.size;

    if (amount > landSize * 2) {
      throw new Error(
        `Fertilizer quantity value should not exceed ${amount} kgs on the land size of ${landSize} acre`
      );
    }
  }
  /**
   *
   * @param payload
   * @description verify whehter fertilizer & seeds exist
   */
  private static validatePayload(fertilizer: FertilizerDto, seeds:SeedDto) {
    
    if (!fertilizer) {
      throw new Error(`Please fill Firtilizer fields`);
    }
    if (!seeds) {
      throw new Error(`Please fill seeds fields`);
    }
  }

  private static async hasSpecificSeed(payload: FertilizerDto) {
    const fertilizer = await FertilizerService.getByName(payload.name);
    if (fertilizer) {
      if (fertilizer?.compatibleSeed !== payload.compatibleSeed) {
        throw new Error(
          `This fertilizer is specified for ${fertilizer.compatibleSeed} seed not implemented.`
        );
      }
    }
  }
}
