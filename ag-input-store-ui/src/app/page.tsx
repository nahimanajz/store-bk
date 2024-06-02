"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import EditText from "../components/EditText";
import Button from "../components/Button";
import Form from "../components/Form";
import { Farmer } from "./types/Former";
import { baseApiUrl } from "../util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postRequest } from "@/services/global";
import TopNav from "@/components/Nav";
import { useRouter } from "next/navigation";
import Alert from "@/components/Alert";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState<Farmer | any>({});
  const [response, setResponse] = useState({
    title:'',
    subtitle:'',
    show:false
  })
  const navigate = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
   
    axios
    .post(`${baseApiUrl}/farmers`, data)
    .then((response) => {
      console.log(response.data.message)
     setResponse({...response, title:response.data.data._id, subtitle:response.data.message, show:true})
    })
    .catch((error) => {

     toast.error(error.response.data.error)
    });
  };

  return (
    <>
      <TopNav>
        <Form title="Farmer Info">
          <Alert title={response.title} subtitle={response.subtitle} show={response.show}/>
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
              placeholder={"Email"}
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
