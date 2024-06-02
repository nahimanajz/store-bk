import { toast } from 'react-toastify';
import axios from "axios"
import { baseApiUrl } from '@/util';

export const postRequest = (urlSuffix:string, data:any) =>{
    axios.post(`${baseApiUrl}/${urlSuffix}`, data)
    .then((response:any)=>{
      toast(response.data.message)
    }).catch((error)=>{
      console.log(error?.response?.data?.error)
      toast.error(
        error?.response?.data?.error)
    })
} 