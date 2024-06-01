import Link from "next/link";

export default function ActionLink({
  targetPage,
  label,
  className
}: {
  targetPage: string;
  label: string;
  className?:string
}) {

  return (
    <Link
      href={targetPage}
      className={`rounded-md  px-[16px] py-[8px] dark:bg-slate-600 text-white ${className ?? "bg-[#4B93E7]"}`}
    >
      {label}
    </Link>
  );
}
