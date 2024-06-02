"use client";

import NavLink from "./NavLink";
import { FC, PropsWithChildren } from "react";

interface TopNavProps{
  children: React.ReactNode,
  isCentered?: boolean
}

const TopNav:FC<TopNavProps> = ({ children, isCentered=true })=>{
  return (
    
    <div className=" py-[20px] bg-primary h-screen">
      <nav className="px-[32px] flex md:flex-row flex-col justify-between md:h-[48px] ">
        <div className="text-[30px] font-extrabold">Agro Input Store</div>
        <div>
          <ul className="flex gap-[20px] text-[20px]">
            <li>
              <NavLink label="Farmers" target="/" />
            </li>
            <li>
              <NavLink label="Orders" target="/orders" />
            </li>
          </ul>
        </div>
      </nav>
      <main className={`h-full w-full text-white bg-slate-100 px-[32px] ${!isCentered ? "grid place-items-center":"pt-8"}`}>
        {children}
      </main>
    </div>
  );
};

export default TopNav;
