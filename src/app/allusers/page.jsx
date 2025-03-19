'use client';
import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import Button from '@/components/rfid-dashboard/Button';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data = [
      {
        name: "Joselin",
        regNo: "100375",
        phone: "919444345407",
        email: "joselin@srmist.edu.in",
        rfid: "205263276",
        designation: "-",
      },
      {
        name: "Pranav Malakar",
        regNo: "RA2011003011236",
        phone: "918800388442",
        email: "pranav.malakar@gmail.com",
        rfid: "2057394124",
        designation: "-",
      },
      {
        name: "Roel Pais",
        regNo: "RA2011018010022",
        phone: "916203442875",
        email: "rp7012@srmist.edu.in",
        rfid: "2124819651",
        designation: "-",
      },
    ];
    setUsers(data);
  }, []);

  
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.regNo.toLowerCase().includes(search.toLowerCase())
  );


  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredUsers);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "UsersData.xlsx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-blue-500 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          AMSHU KIRAN BELBASE
        </h1>
        <div className="flex space-x-4 justify-center mb-4">
          <Button />
        </div>

        <input
          type="text"
          placeholder="🔍 Search by Name or Registration Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-4 rounded border border-gray-300 text-black"
        />

        
        <button
          onClick={downloadExcel}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        >
          Download as Excel File
        </button>

    
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="w-full text-left border-collapse text-black">
            <thead className="bg-gray-100 text-sm uppercase">
              <tr>
                <th className="p-3">S.N</th>
                <th className="p-3">Name</th>
                <th className="p-3">Registration Number</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">RFID</th>
                <th className="p-3">Designation</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{filteredUsers.length-index}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.regNo}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.rfid}</td>
                  <td className="p-3">{user.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
