import React, { FC } from "react";

interface FormProps {
  title: string;
  children: React.ReactNode;
}

const Form: FC<FormProps> = (props) => {
  return (
    <div className="shadow-sm text-dark md:w-2/4 w-full bg-white my-6">
      <div className="border-b-[0.5px] border-b-dark">
        <h2 className="text-xl font-semibold text-dark py-4 px-[20px]">
          {props.title}
        </h2>
      </div>
      <div className="px-[20px] py-[64px] ">{props.children}</div>
    </div>
  );
};

export default Form;
