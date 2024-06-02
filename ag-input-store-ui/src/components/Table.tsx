"use client";

import { baseApiUrl } from "@/util";
import axios from "axios";
import { useState, useEffect, ChangeEvent } from "react";
import Button from "./Button";
import { toast } from "react-toastify";
import EditText from "./EditText";

const Table = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(localStorage.getItem("farmerId"));



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
  const handleSearch =  () =>{
    axios.get(`${baseApiUrl}/orders/farmer/${query}?page=1&limit=5`).then((data)=>{
      setOrders(data.data);
    }).catch((error) => {
      console.log(error?.response?.data?.error)
    
    })
  
  }

  const orderz = [
    {
      _id:"d2334-23440-8cc",
      amount:10000,
      seedId:{
        name:"corn",
        amount:2000,
      },
      fertilizerId:{
        name:"npk",
        amount:3000,
        compatibleSeed:'corn'
      },
      land:{
        size:23
      }
    },
    {
      _id:"d2334-23440-88c",
      amount:10000,
      seedId:{
        name:"corn",
        amount:2000,
      },
      fertilizerId:{
        name:"npk",
        amount:3000,
        compatibleSeed:'corn'
      },
      land:{
        size:23
      }
    },
    {
      _id:"d2334-23440-c8c",
      amount:10000,
      seedId:{
        name:"corn",
        amount:2000,
      },
      fertilizerId:{
        name:"npk",
        amount:3000,
        compatibleSeed:'corn'
      },
      land:{
        size:23
      }
    }
  ]

  return (
    <div className="container mx-auto p-4 shadow-sm bg-white text-dark">
      <div className="flex gap-[20px] py-8 w-3/4 items-end">
        <EditText 
          type={"text"} 
          label={"Farmer ID or Email"} 
          name={"farmer"} 
          placeholder={"Farmer ID or Email"} 
          
  
          onChange={(e) => {
              setQuery(e.target.value)
          }} />
          <Button onClick={handleSearch} label="Search" className="bg-primary hover:bg-slate-100 hover:text-primary hover:border-[1px] border-primary h-12"/>
        
      </div>
      {orders.length?(
        <>
        
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2">Order ID</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Seeds</th>
            <th className="py-2">Fertilizer </th>
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
      </table>
        </>
        

      ):( null
          

      )}
    </div>
  );
};

export default Table;
