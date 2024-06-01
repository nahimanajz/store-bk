import { CreateOrderDto, OrderDto } from "../dto/Order.dto";
import { Order } from "../models/Order";

export default class OrderService {

    public static async create(order: CreateOrderDto): Promise<any> {
      return await Order.create(order);
    }

    public static async getFarmerOrders(farmerId: string): Promise<OrderDto []> {
        return await Order.find({ farmerId }).populate('fertilizerId').populate('seedId').populate('farmerId').exec() as unknown as OrderDto[];
      }
}