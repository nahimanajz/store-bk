import { FarmerDto } from "../dto/Farmer.dto";
import FarmerService from "../services/farmer.service";

export default class FarmerController {

  public static async create(payload: FarmerDto): Promise<FarmerDto | any> {
    const isExist = await FarmerService.getByEmail(payload.email);
    if(isExist) {
      throw new Error(`Farmer already exists`);
    }
    return await FarmerService.create(payload);
  }

  public static async getAll(): Promise<FarmerDto[]> {
    return await FarmerService.getAll();
  }

  
  public static async getById(id: string): Promise<FarmerDto> {
    return await FarmerService.getById(id);
  }
  // public static async deleteFarmer(id: string): Promise<string> {
  //  // return await FarmerService.deleteFarmer(id);
  // }
}
