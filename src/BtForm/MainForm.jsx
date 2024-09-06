import React from "react";
import { Form } from "./Form";
import { Table } from "./Table";

export const MainForm = () => {
  return (
    <div className="container mx-auto">
      <p className="bg-black text-white font-bold text-[30px] p-[20px]">
        THÔNG TIN SINH VIÊN
      </p>
      <Form />
      
      <Table />
    </div>
  );
};
