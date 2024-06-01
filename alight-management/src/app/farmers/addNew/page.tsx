"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Form from "@/components/farmer/Form";

const Page = () => {
  return (
    <DefaultLayout>
      <Form
        title={"Register New Farmer"}
        message="Farmer is added successfully"
      />
    </DefaultLayout>
  );
};
export default Page;
