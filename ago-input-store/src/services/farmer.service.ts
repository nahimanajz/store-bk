import { Farmer } from "./../models/Farmer";
import { FarmerDto } from "../dto/Farmer.dto";

export default class FarmerService {

  public static async create(farmer: FarmerDto): Promise<any> {
    return await Farmer.create(farmer);
  }

  public static async getAll(): Promise<FarmerDto[]> {
    return await Farmer.find();
  }

  public static async getById(id: string): Promise<FarmerDto | any> {
    return await Farmer.findById(id);
  }

  
  public static async getByEmail(email: string): Promise<FarmerDto | any> {
    return await Farmer.findOne({ email });
  }
}
