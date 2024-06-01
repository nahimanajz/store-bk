"use client";

import React, { useEffect, useState } from "react";
import * as Icon from "@/components/icons";
import ActionLink from "../common/ActionLink";



type DashboardProps = {
  children: React.ReactNode
};
const Page: React.FC = () => {
  const [data, setData] = useState<DashboardProps>();
  const [activeTab, setActiveTab] = useState(1);

  const activeTabClx =
    "text-[#071C50] dark:text-white text-base font-semibold leading-[24px] border-b-[2px] border-b-[#F7AC25] border-b-w-[32px] pb-2";
  return (
    <>
      <div className="flex justify-between">
        <span className="text-[22px] font-semibold leading-[33px] text-[#071C50] dark:text-white">
          Overview
        </span>
        <span className="flex space-x-8">
          <ActionLink targetPage="/Order/addNew" label="New Order" />
        </span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 mt-6">
        
      </div>
      <div className="mt-12 flex flex-col justify-start gap-4">
        <span className="text-[22px] font-semibold leading-[33px] text-[#333] dark:text-white">
          Store Information
        </span>
        <div className="text flex gap-8">
          <span
            className={`cursor-pointer ${activeTab === 1 && activeTabClx}`}
            onClick={() => setActiveTab(1)}
          >
            Order
          </span>
          <span
            className={`cursor-pointer ${activeTab === 2 && activeTabClx}`}
            onClick={() => setActiveTab(2)}
          >
            Seed
          </span>
          <span
            className={`cursor-pointer ${activeTab === 3 && activeTabClx}`}
            onClick={() => setActiveTab(3)}
          >
            Fertilizer
          </span>
          <span
            className={`cursor-pointer ${activeTab === 4 && activeTabClx}`}
            onClick={() => setActiveTab(4)}
          >
            Land
          </span>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-between gap-8">
        {}
      </div>
    </>
  );
};

export default Page;
