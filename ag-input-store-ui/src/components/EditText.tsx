import React, { ChangeEvent } from "react";
import {FC} from "react"
interface Props{
    type: string,
    label:string,
    name:string,
    placeholder:string,
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void 
}

 
const EditText: FC<Props> = ({type, label, name, placeholder, onChange})=> {
  const className = `w-full rounded-lg border-stroke border  bg-transparent py-3 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none `;
  return (
    <div className="w-full">
    <label className="block font-medium text-black dark:text-white">
      {label} test
    </label>

    <input
      name={name}
      type={type ?? "text"}
      placeholder={`Enter ${placeholder}`}
      className={className}
      onChange={onChange}
      required={true}
    />
  </div>
  );
}

export default EditText;
