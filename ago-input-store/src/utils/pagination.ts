import { request } from "express";

const paginate = (req: typeof request) => {
  const page: number = req.query?.page as unknown as number || 1;
  const limit: number = req.query?.limit as unknown as number || 5;
  const offset = (page - 1) * limit;
  return { offset, limit };
};

export default paginate;
