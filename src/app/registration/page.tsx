'use client'
import React, { useState } from 'react'

export default function Registration() {
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map(opt => opt.value)

    if (options.length <= 2) {
      setSelectedDomains(options)
    }
  }

return (
  <div className="max-w-full mx-auto p-10  text-red ">
    <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
    <form className="space-y-4">
      <div>
        <label className="block mb-1 font-medium">Name</label>
        <input type="text" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Reg No.</label>
        <input type="text" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Department</label>
        <input type="text" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Branch</label>
        <input type="text" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Phone No</label>
        <input type="tel" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">SRM ID</label>
        <input type="email" className="w-full border p-2 rounded" placeholder="example@srmist.edu.in" pattern="^[a-zA-Z0-9._%+-]+@srmist\.edu\.in$" required />
      </div>

      <div>
        <label className="block mb-1 font-medium">Personal Email ID</label>
        <input type="email" className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Domain</label>
        <select className="w-full border p-2 rounded" multiple
          value={selectedDomains}
          onChange={handleDomainChange}
        >
          <option value="">-- Select a Domain --</option>
          <option value="sambed">SAMBED</option>
          <option value="siesed">SIESED</option>
          <option value="mcsocd-content">MCSOCD: Content and Sponsorships</option>
          <option value="mcsocd-vfx">MCSOCD: VFX and GFX</option>
          <option value="spaced-coding">SPACED: Coding</option>
          <option value="spaced-webdev">SPACED: WebDev</option>
        </select>
      </div>

      <div className="pt-4">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Submit
        </button>
      </div>
    </form>
  </div>
)
}