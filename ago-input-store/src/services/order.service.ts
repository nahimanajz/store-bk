import { Request } from "express";
import { CreateOrderDto, OrderDto } from "../dto/Order.dto";
import { Order } from "../models/Order";
import paginate from "../utils/pagination";

export default class OrderService {
  public static async update(id: string, orderStatus: string): Promise<OrderDto> {
   return await Order.updateOne({_id: id}, {orderStatus: orderStatus as string}) as unknown as OrderDto; 
  }

  public static async create(order: CreateOrderDto): Promise<OrderDto> {
    return await Order.create(order) as unknown as OrderDto;
  }

  public static async getFarmerOrders(req: Request): Promise<OrderDto[]> {
    const farmerId = req.params.id;
    const { offset, limit } = paginate(req);
    return (await Order.find({ farmerId })
      .populate("fertilizerId")
      .populate("seedId")
      .populate("farmerId")
      .skip(offset)
      .limit(limit)
      .exec()) as unknown as OrderDto[];
  }
}
