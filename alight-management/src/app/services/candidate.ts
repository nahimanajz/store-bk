
import { config } from "@/config";
import { Farmer } from "@/types/custom/Farmer";

import axios from "axios";

export const register = async (farmer:Farmer) => {

    const { data } = await axios.post(`${config()}/farmers`, farmer);
    return data;
  };

