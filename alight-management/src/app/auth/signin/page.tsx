"use client"
import React, { useState } from "react";
import Link from "next/link";
import PublicLayout from "@/components/Layouts/PublicLayout";
import TextInput from "@/components/FormElements/TextInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserLogin, UserLoginSchema } from "@/types/custom/user";
import * as Icon from "@/components/icons";
import { signin } from "@/app/services/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UserLoginSchema),
  });

  const onSubmit: SubmitHandler<UserLogin> = async (data) => {
    const user = await signin(data)
    if (user) {
        router.push("/")
    }
    toast.error("Invalid credentials");
  };

  return (
    <PublicLayout title="Sign to HR Management">
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <input
            type="submit"
            value="Sign In"
            className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          />
        </div>

        <div className="mt-6 text-center">
          <p>
            Don’t have any account?{" "}
            <Link href="/auth/signup" className="text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </form>
    </PublicLayout>
  );
};

export default SignIn;
