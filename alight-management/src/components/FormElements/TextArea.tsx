"use client";

import { FC } from "react";
import { FieldProps } from "./TextInput";

const TextArea: FC<FieldProps> = ({
  name,
  label,
  placeholder,
  register,
  errors,
  defaultValue
}) => {
    const clx = `w-full ${errors[name]?"border-rose-600": "border-stroke"} rounded border-[1.5px]  bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary`
  return (
    <div className="mb-6">
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      <textarea
        rows={4}
        {...register(name)}
        placeholder={placeholder ?? `Please enter ${label}`}
        className={clx}
        defaultValue={defaultValue}
       
      >
      
      </textarea>
      {errors[name] ? (
        <span className="text-sm text-orange-600">
          {" "}
          {errors[name]?.message}{" "}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
export default  TextArea