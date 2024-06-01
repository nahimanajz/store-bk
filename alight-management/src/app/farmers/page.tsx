"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import ActionLink from "@/components/common/ActionLink";

export const Page = () => {
  return (
    <DefaultLayout>
      <div className="flex justify-between py-6">
        <h2 className="text-title-md2 font-semibold text-black dark:text-white">
          Orders
        </h2>

        <ActionLink targetPage={"/orders/addNew"} label={"Add New"} />
      </div>
      {/* <CandidatesTable data={candidates} /> */}
    </DefaultLayout>
  );
};
export default Page;
