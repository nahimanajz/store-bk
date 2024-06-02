import React, { FC } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: VoidFunction;
  label: string;

}
const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",

  className = "",

}: ButtonProps) => {
  const baseClasses =
    "p-2 rounded-md inline-flex items-center text-sm justify-center disabled:bg-primary/60 disabled:cursor-not-allowed";
  return (
    <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} ${className} border border-transparent`}>
    
      {label}
      </button>
  );
};

export default Button;