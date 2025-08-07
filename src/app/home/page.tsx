'use client';
import React from "react";
import Button from "@/components/rfid-dashboard/Button";

export default function Dashboard() {
  const reg_num = "RA2411003011975";
  const user_name = "AMSHU KIRAN BELBASE";

  // Sample data for the table
  const labData = [
    { id: 29, date: "Wed Mar 19 2025 18:47:49 GMT+0530", status: "In" },
    { id: 28, date: "Tue Mar 18 2025 22:02:46 GMT+0530", status: "In" },
    { id: 27, date: "Tue Mar 18 2025 21:11:43 GMT+0530", status: "Out" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black to-gray-600 text-white text-center py-8 rounded-b-3xl shadow-lg">
        <h1 className="text-2xl font-bold">{user_name}</h1>
        <p className="text-sm mt-1">{reg_num}</p>

        {/* Button Group */}
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          
            <Button  />
         
        </div>
      </div>

      {/* Lab Data Section */}
      <div className="max-w-5xl mx-auto mt-6 px-4">
        <h2 className="text-lg font-semibold mb-4">Lab: ROBOCON</h2>
        <table className="w-full border-collapse border border-gray-300 shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm">
              <th className="py-2 px-4">S.N</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">In / Out</th>
            </tr>
          </thead>
          <tbody>
            {labData.map((item, index) => (
              <tr
                key={item.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-50"
                } text-sm`}
              >
                <td className="py-2 px-4 text-center">{item.id}</td>
                <td className="py-2 px-4">{item.date}</td>
                <td
                  className={`py-2 px-4 font-semibold ${
                    item.status === "In" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
