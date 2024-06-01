
import { SeedDto } from "../dto/Seed.dto";
import { Seed } from "../models/Seed";

export default class SeedService {
    public static async create(seed:SeedDto): Promise<any> {
  
      return await Seed.create(seed);
    }
}