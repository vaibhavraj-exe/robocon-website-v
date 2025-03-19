'use client';
import React, { useState } from 'react';
import Button from '@/components/rfid-dashboard/Button';

export default function Page() {
  const name = 'Alan James';
  const [isleader, setisLeader] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black to-gray-600 text-white py-8 px-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">{name}</h1>
        <p className="text-center text-sm mt-1">{isleader ? 'ADMIN' : 'STUDENT'}</p>
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <Button />
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-white shadow-md rounded-xl mx-6 mt-4 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <label className="text-sm text-gray-600">Records of:</label>
          <select className="border rounded-lg px-3 py-1.5 focus:outline-none w-full sm:w-auto">
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
          <input
            type="text"
            placeholder="Registration Number"
            className="border rounded-lg px-3 py-1.5 focus:outline-none w-full sm:w-auto"
          />
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg px-3 py-1.5 focus:outline-none w-full sm:w-auto"
          />
        </div>
        <button className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg text-sm shadow-md hover:bg-green-600 transition">
          Download as Excel File
        </button>
      </div>
    </div>
  );
}
