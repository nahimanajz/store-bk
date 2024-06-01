"use client";

import { baseApiUrl } from "@/util";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "./Button";
import { toast } from "react-toastify";

const Table = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchOrders();
  }, [currentPage]);

  const fetchOrders = async () => {
    const { data } = await axios.get(
      `${baseApiUrl}/orders/farmer/665af07ca7742ff72e13e468?page=1&limit=5`
    );

    setOrders(data.data);
    setTotalPages(data.length);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const updateOrder = (_id: string, orderStatus: string) => {
    axios
      .put(`${baseApiUrl}/orders/${_id}`, {
        orderStatus,
      })
      .then((response: any) => {
        console.log(response);
        toast.success("order status change success");
      })
      .catch((error) => {
        console.log(error?.response?.data?.error);
        toast.error("something went wrong");
      });
  };

  return (
    <div className="container mx-auto p-4 shadow-sm bg-white text-dark">
      {JSON.stringify(orders)}
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Seed Name & Quantity</th>
            <th className="py-2">Fertilizer Name & Quantity</th>
            <th className="py-2">Land size </th>
            <th className="py-2">Order Status</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders?.map((order: any, index: number) => (
            <tr key={order._id}>
              <td className="border px-4 py-2">#{index + 1}</td>
              <td className="border px-4 py-2">{order?.amount}</td>
              <td className="border px-4 py-2">
                {order?.seedId.quantity} kg of {order?.seedId?.name}{" "}
              </td>
              <td className="border px-4 py-2">
                {order?.fertilizerId.quantity} kg of {order?.fertilizerId?.name}{" "}
              </td>
              <td className="border px-4 py-2">{order?.landId?.size} acre</td>
              <td className="border px-4 py-2">{order?.orderStatus}</td>
              <td className="border px-4 py-2 flex gap-[16px]">
                <Button
                  onClick={() => updateOrder(order._id, "approved")}
                  label="Approve"
                  className="bg-primary hover:bg-slate-100 hover:text-primary hover:border-[1px] border-primary"
                />
                <Button
                  className="bg-primary hover:bg-slate-100 hover:text-primary hover:border-[1px] border-primary"
                  onClick={() => updateOrder(order._id, "rejected")}
                  label="Reject"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
