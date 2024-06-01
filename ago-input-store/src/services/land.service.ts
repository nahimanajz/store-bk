import { LandDto } from "../dto/Land.dto";
import { Land } from "../models/Land";

export default class LandService {
    public static async create(land: LandDto): Promise<any> {

      return await Land.create(land);
    }
}