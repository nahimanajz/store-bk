"use client";
export type FieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
  name: string;
  svg?: React.ReactNode;
  register: Function;
  errors: any;
  defaultValue?: any;
};
const TextInput = ({
  type,
  name,
  label,
  placeholder,
  svg,
  register,
  errors,
  defaultValue,
}: FieldProps) => {
   const  className = `w-full rounded-lg ${errors[name]?"border-rose-600": "border-stroke"} border  bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none `
  
   return (
    <div className="mb-4 w-full">
      <label className="mb-2.5 block font-medium text-black dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          name={name}
          type={type ?? "text"}
          {...register(name)}
          placeholder={placeholder ?? `Enter ${label}`}
          className={className}
          defaultValue={defaultValue}
        />

        {svg ? <span className="absolute right-4 top-4">{svg}</span> : ""}
        {errors[name] ?<span className="text-sm text-orange-600"> {errors[name]?.message}   </span>:"" }
        
      </div>
    </div>
  );
};

export default TextInput;
