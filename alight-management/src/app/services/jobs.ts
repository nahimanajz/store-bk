import { config } from "@/config";
import { Job } from "@/types/custom/job";
import axios from "axios";

export const create = async (job:Job) => {
    const { data } = await axios.post(`${config()}/jobs`, job);
    return data;
  };

export const getAll = async ():Promise<Job[]> => {
    const { data } = await axios.get(`${config()}/jobs`);
    return data;
  };

  export const getById = async (id:string):Promise<Job> => {
    const { data } = await axios.get(`${config()}/jobs/${id}`);
    return data;
  };

  export const deleteJob = async (job:Job):Promise<void> => {

    console.log(job)
    const data  = await axios.delete(`${config()}/jobs/${job.id}`);
  };
  
  export const update = async (job:Job):Promise<void> => {
    const data  = await axios.patch(`${config()}/jobs/${job.id}`, job);
  };