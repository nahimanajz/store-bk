"use client";

import TextInput from "@/components/FormElements/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Farmer, FarmerSchema } from "@/types/custom/Farmer";


export type IFormProps = {
  isEditing?: boolean;
  title: string;
  message: string;
};

export default function Form({
  title,
  message,
  ...rest
}: IFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FarmerSchema),
  });

  const onSubmit: SubmitHandler<Farmer> = (data) => {
    console.log(data);
  };


  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">{title}</h3>
      </div>
      <div className="p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
     
              <div className="flex w-full gap-12">
                <TextInput
                  label={"Full Names"}
                  name={"name"}
                  register={register}
                  errors={errors}
                />
                <TextInput
                  label={"Email"}
                  name={"email"}
                  register={register}
                  errors={errors}
   
                />
              </div>
          <div className="mb-5">
            <input
              type="submit"
              value={"Register"}
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
