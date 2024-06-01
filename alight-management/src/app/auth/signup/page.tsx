"use client";
import React, { useState } from "react";
import Link from "next/link";
import PublicLayout from "@/components/Layouts/PublicLayout";
import TextInput from "@/components/FormElements/TextInput";
import * as Icon from "@/components/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import { toast } from "react-toastify";
import { Farmer, FarmerSchema } from "@/types/custom/Farmer";


const SignUp: React.FC = () => {
  const [showPassword,setShowPassword] = useState(false);
  const togglePassword =()=> setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver:yupResolver(FarmerSchema)
  });
  
  const onSubmit: SubmitHandler<Farmer> = (data) => {
    //signup(data)
    toast.info("user signup successfully")
  };
  return (
    <PublicLayout title="Sign up to HR Management">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="First Name"
          name={"firstName"}
          register={register}
          errors={errors}
          svg={<Icon.PersonIcon />}
        />
       <TextInput
          label="Last Name"
          name={"lastName"}
          register={register}
          errors={errors}
          svg={<Icon.PersonIcon />}
        />

        <TextInput
          label="Email"
          name={"email"}
          register={register}
          errors={errors}
          svg={<Icon.EnvelopeIcon />}
        />
        <TextInput
        type="password"
          label="Password"
          name={"password"}
          register={register}
          errors={errors}
          svg={<Icon.LockIcon onClick={togglePassword} />}
        />

       

        <div className="mb-5">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg  border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          >
            Create account
          </button>
        </div>

        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-primary">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </PublicLayout>
  );
};

export default SignUp;
