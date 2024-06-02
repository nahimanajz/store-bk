"use client";
import Button from "@/components/Button";
import EditText from "@/components/EditText";
import Form from "@/components/Form";
import TopNav from "@/components/Nav";
import { postRequest } from "@/services/global";
import { ChangeEvent, FC, useState } from "react";
import { IOrder } from "../types/Order";
import { ISeeds } from "../types/Seeds";
import { IFertilizer } from "../types/Fertilizer";
import { ILand } from "../types/land";
import Table from "@/components/Table";

interface OrderProps {}

const Order: FC<OrderProps> = () => {
  const [order, setOrderData] = useState<IOrder | any>({});
  const [seedsData, setSeedsData] = useState<ISeeds | any>({});
  const [fertilizerData, setFertilizerData] = useState<IFertilizer | any>({});
  const [land, setLand] = useState<ILand | any>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderData({
      ...order,
      [e.target.name]: e.target.value,
    });
  };
  const handleSeedChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSeedsData({
      ...seedsData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFertilizerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFertilizerData({
      ...fertilizerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // TODO: combine all the data
    const data = {
      ...order,
      seeds: seedsData,
      fertilizer: fertilizerData,
      land,
    };
    console.log(data);
    postRequest("orders", data);
  };
  if (1 === 1) {
    return (
      <TopNav>
        <Table />
      </TopNav>
    );
  }
  return (
    <TopNav>
      <Form title="Order Info">
        <form className="h-full mb-[20px] grid md:grid-cols-2 grid-col-1 gap-5">
          <EditText
            type={"text"}
            label={"Farmer Id"}
            name={"farmerId"}
            placeholder={" farmer Id"}
            onChange={handleChange}
          />
          <EditText
            type={"number"}
            label={"Land size"}
            name={"size"}
            placeholder={" Land size in acre"}
            onChange={(e) => setLand({ ...land, size: e.target.value })}
          />

          {/* seed  */}
          <EditText
            type={"text"}
            label={"Seeds"}
            name={"name"}
            placeholder={"Seeds Name"}
            onChange={handleSeedChange}
          />
          <EditText
            type={"text"}
            label={"Seeds Quantity"}
            name={"quantity"}
            placeholder={"Seeds Quantity"}
            onChange={handleSeedChange}
          />

          {/* Fertilizers  */}
          <EditText
            type={"text"}
            label={"Fertilizer"}
            name={"name"}
            placeholder={"Fertilizer Name"}
            onChange={handleFertilizerChange}
          />
          <EditText
            type={"text"}
            label={"Quantity seed"}
            name={"amount"}
            placeholder={"Fertilizer amount / quantity"}
            onChange={handleFertilizerChange}
          />
          <EditText
            type={"text"}
            label={"Compatible seed"}
            name={"compatibleSeed"}
            placeholder={"Fertilizer Compatible seed"}
            onChange={handleFertilizerChange}
          />
        </form>
        <Button
          onClick={handleSubmit}
          label={"Place Order"}
          className="bg-primary hover:border-[0.2px] hover:border-primary hover:bg-white text-white hover:text-primary w-full mt-8"
        />
      </Form>
    </TopNav>
  );
};

export default Order;
