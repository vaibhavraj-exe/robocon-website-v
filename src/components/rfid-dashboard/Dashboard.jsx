import React from "react";
import Button from "./Button";

export default function Dashboard() {
  const reg_num = "RA2411003011975";

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto gap-3 p-3 bg-gray-900 text-white rounded-xl shadow-md mt-6">
      {/* Reg Number */}
      <div className="w-full text-left text-xs font-medium text-gray-400 border-b border-gray-700 pb-2">
        Reg No: <span className="text-white font-semibold">{reg_num}</span>
      </div>

      {/* Button Component */}
      <Button />
    </div>
  );
}
