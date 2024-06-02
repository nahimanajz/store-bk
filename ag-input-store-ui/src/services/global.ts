import { toast } from "react-toastify";
import axios from "axios";
import { baseApiUrl } from "@/util";

export const postRequest = (urlSuffix: string, data: any, type?: String) => {
  axios
    .post(`${baseApiUrl}/${urlSuffix}`, data)
    .then((response: any) => {
      toast(response.data.message);
      localStorage.setItem("farmerId", response.data.data._id);
    })
    .catch((error) => {
      toast.error(error?.response?.data?.error);
    });
};
