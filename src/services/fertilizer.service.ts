import { FertilizerDto } from "../dto/Fertilizer.dto";
import { Fertilizer } from "../models/Fertilizer";

export default class FertilizerService {

    public static async create(fertilizer: FertilizerDto): Promise<any> {
      return await Fertilizer.create(fertilizer);
    }

    public static async getByName(name: string): Promise<FertilizerDto> {
     return await Fertilizer.findOne({name}) as unknown as FertilizerDto
    }
  
}