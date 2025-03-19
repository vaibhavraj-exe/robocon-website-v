"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import Button from "@/components/rfid-dashboard/Button";

const formDetails = {
  "permit-lab": {
    title: "Permit Lab Login",
    fields: ["Phone(WHATSAPP)", "Choose Lab"],
    options: ["SRM Team Robocon"],
  },
  "add-lab": {
    title: "Add Lab Login",
    fields: ["Lab Name", "Lab Code For This Period"],
  },
  "all-users": {
    title: "All Users Login",
    fields: ["Email", "Password"],
  },
  "make-lab-admin": {
    title: "Lab Admin Login",
    fields: ["Email", "Password", "Admin Code"],
  },
  "make-main-admin": {
    title: "Main Admin Login",
    fields: ["Email", "Password", "Verification Code"],
  },
  "approve-user": {
    title: "Approve User Login",
    fields: ["Email", "Password", "User ID"],
  },
  "remove-user": {
    title: "Remove User Login",
    fields: ["Email", "Password", "User ID"],
  },
  "log-out": {
    title: "Logout",
    fields: [],
  },
};

export default function Specialpage() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "Welcome";

  const currentForm = formDetails[page] || {
    title: "Unknown Action",
    fields: ["Email", "Password"],
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg mt-10">
      <h1 className="text-2xl font-bold capitalize mb-4">{currentForm.title}</h1>
      <p className="text-gray-300 mb-6">Please log in to continue.</p>

      {currentForm.fields.length > 0 ? (
        <form className="space-y-4">
          {currentForm.fields.map((field, index) => (
            <div key={index}>
              {field === "Choose Lab" ? (
                <div>
                  <label className="block text-gray-300">
                    {field}
                  </label>
                  <select
                    defaultValue="srm-team-robocon"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
                    required
                  >
                   
                    {currentForm.options?.map((lab, labIndex) => (
                      <option key={labIndex} value={lab.toLowerCase().replace(/\s+/g, "-")}>
                        {lab}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    {field}
                  </label>
                  <input
                    type={field === "Password" ? "password" : "text"}
                    placeholder={`Enter your ${field==='Phone(WHATSAPP)'?'Phone Number with country Code(ex:91..)':field.toLowerCase()}`}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
                    required
                  />
                </div>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            Login
          </button>
        </form>
      ) : (
        <p className="text-green-400">You have been logged out successfully.</p>
      )}

      <div className="mt-6">
        <Button />
      </div>
    </div>
  );
}
