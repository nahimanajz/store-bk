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
    /* 
        - A certain amount of seeds can be used on a specific size of land
        - Seeds quantity should not exceed 1kg per 1 acre of land 
        */
  };
  land: {
    size: number;
  };
  fertilizer: {
    name: string;
    compatibleSeed: string | undefined;
    amount: number;
    /**
         A certain amount of fertilizer is used on a specific size of land
         Fertilizer quantity value should not exceed 3kgs on the land size of 1 acre (ex: 1kg per 0.5
         acre, 3kg per 1 acre, ...)  
        */
  };
  amount:number;
}

/**
 *  On farmer placing order, auto calculation of fertilizers and seeds quantity based on the size of the
    land, should happen

*/
