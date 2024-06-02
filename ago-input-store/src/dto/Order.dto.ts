export interface CreateOrderDto {
    farmerId: string; //objectId,
    seedId:string,
    fertilizerId:string,
    paymentStatus: "paid" | "not paid",
    orderStatus:"pending" | "approved" | "rejected"
   
}

export interface OrderDto {
  farmerId: string; //objectId,
  seeds: {
    name: string;
    quantity: number;

  };
  land: {
    size: number;
  };
  fertilizer: {
    name: string;
    compatibleSeed: string | undefined;
    amount: number;
  };
  amount:number;
}

