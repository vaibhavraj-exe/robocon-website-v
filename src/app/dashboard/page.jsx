'use client';
import React, { useState, useEffect } from 'react';
import Button from '@/components/rfid-dashboard/Button';
import * as XLSX from 'xlsx';

export default function Page() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [isleader, setisLeader] = useState(true);

  useEffect(() => {
    const data = [
      
      {
        name: 'Joselin',
        regNo: '100375',
        Date: 'Wed Mar 19 2025 18:47:49 GMT+0530',
        email: 'joselin@srmist.edu.in',
        In_or_Out: 'In',
      },
      {
        name: 'Pranav Malakar',
        regNo: 'RA2011003011236',
        Date: 'Wed, Mar 19, 2025, 9:15:35 PM GMT+5:30',
        In_or_Out: 'Out',
      },
      {
        name: 'Roel Pais',
        regNo: 'RA2011018010022',
        phone: '916203442875',
        Date: 'Wed, Mar 19, 2025, 6:47:49 PM GMT+5:30',
        In_or_Out: 'In', 
      },
    ];
    setUsers(data);
  }, []);

  // Filtered and Sorted Data
  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.regNo?.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = filteredUsers.sort(
    (a, b) => new Date(a.Date) - new Date(b.Date)
  );

  const name = 'Alan James';

  // Download Excel File
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(sortedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
    XLSX.writeFile(workbook, 'UsersData.xlsx');
  };

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
            value={search}
            placeholder="Registration Number"
            className="border rounded-lg px-3 py-1.5 focus:outline-none w-full sm:w-auto"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Name"
            className="border rounded-lg px-3 py-1.5 focus:outline-none w-full sm:w-auto"
          />
        </div>
        <button
          className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-lg text-sm shadow-md hover:bg-green-600 transition"
          onClick={downloadExcel}
        >
          Download as Excel File
        </button>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto mx-6 mt-4">
        <table className="w-full text-left border-collapse text-black">
          <thead>
            <tr className="bg-gray-100 text-sm uppercase">
              <th className="p-3">S.N</th>
              <th className="p-3">Name</th>
              <th className="p-3">Registration Number</th>
              <th className="p-3">Date</th>
              <th className="p-3">In or Out</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((user, index) => (
              <tr key={index} className="border-b">
                <td className="p-3">{sortedData.length-index}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.regNo}</td>
                <td className="p-3">{user.Date}</td>
                <td className="p-3">{user.In_or_Out}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
