"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import EditText from "../components/EditText";
import Button from "../components/Button";
import Form from "../components/Form";
import { Farmer } from "./types/Former";
import { baseApiUrl } from "../util";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postRequest } from "@/services/global";
import TopNav from "@/components/Nav";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState<Farmer | any>({});
  const navigate = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    postRequest("farmers", data, "farmer");
    navigate.push("/orders")
  
  };

  return (
    <>
      <TopNav >
        <Form title="Farmer Info">
          <form action="" className="space-y-[20px]">
            <EditText
              type={"text"}
              label={"Full Names"}
              name={"Names"}
              placeholder={"Names"}
              onChange={handleChange}
            />
            <EditText
              type={"text"}
              label={"Email"}
              name={"email"}
              placeholder={"Names"}
              onChange={handleChange}
            />
            <Button
              onClick={handleSubmit}
              label={"Register"}
              className="bg-primary hover:border-[0.2px] hover:border-primary hover:bg-white text-white hover:text-primary w-full"
            />
          </form>
        </Form>
      </TopNav>
      <ToastContainer />
    </>
  );
}
