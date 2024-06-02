import { IFertilizer } from "./Fertilizer";
import { ISeeds } from "./Seeds";
import { ILand } from "./land";

export interface IOrder {
  seeds: ISeeds;
  fertilizers: IFertilizer;
  land: ILand;
  farmerId: string;
  amount:number
}






