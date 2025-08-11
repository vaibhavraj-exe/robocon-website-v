'use client';

import { useState } from 'react';

export default function Page() {
  const [domainError, setDomainError] = useState('');
  const [message, setMessage] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    department: '',
    branch: '',
    phone: '',
    srmEmail: '',
    personalEmail: '',
    domain1: '',
    domain2: 'NA'
  });

  const domainOptions = {
    SAMBED: 'SAMBED (Mechanical)',
    SIESED: 'SIESED (Electronics)',
    'MCSOCD : Content and Sponsorships': 'MCSOCD: Content and Sponsorships',
    'MCSOCD : VFX GFX': 'MCSOCD: VFX GFX',
    'SPACED : Coding': 'SPACED: Coding',
    'SPACED : Web Dev': 'SPACED: WebDev',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert formData to x-www-form-urlencoded string
    // const formBody = new URLSearchParams(formData).toString();

    try {
      const formBody = new URLSearchParams(formData).toString();

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwh2aeEw1gV5mPRLn-bRgCG6QGR4fybaBkhHMDSKQUojJTYQttQJr6K3p4qP7cKjShK/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: formBody,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const res = await response.json();
      if (res.result === "success") {
        setMessage("Registration successful!");
        setFormData({
          name: '',
          regNo: '',
          department: '',
          branch: '',
          phone: '',
          srmEmail: '',
          personalEmail: '',
          domain1: '',
          domain2: 'NA'
        });
      } else {
        setMessage(`Error: ${res.message}`);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      if (error.message == 'Unexpected end of input') {
        setMessage(`Registration successful!\n Confirmation mail sent to your SRM Mail ID.\n || IF YOU DO NOT RECEIVE EMAIL,   🗨️Contact : 7376334488`);
        setFormData({
          name: '',
          regNo: '',
          department: '',
          branch: '',
          phone: '',
          srmEmail: '',
          personalEmail: '',
          domain1: '',
          domain2: 'NA'
        });
      }
      else {
        setMessage(`${error.message} || IF YOU DO NOT RECEIVE CONFIRMATION EMAIL, 📞Contact : 7376334488`);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    if (
      (name === 'domain1' && newFormData.domain2 === value) ||
      (name === 'domain2' && newFormData.domain1 === value)
    ) {
      setDomainError('Same domains not allowed');
      setDisableSubmit(true);
    } else {
      setDomainError('');
      setDisableSubmit(false);
    }
    if (name === 'srmEmail') {
      const trimmedValue = value.trim().toLowerCase();
      if (!trimmedValue.endsWith('@srmist.edu.in')) {
        setDomainError('SRM Email must end with @srmist.edu.in');
        setDisableSubmit(true);
      } else {
        setDomainError('');
        setDisableSubmit(false);
      }
    }
    if (name === 'personalEmail') {
      const trimmedValue = value.trim().toLowerCase();
      if (!trimmedValue.endsWith('@gmail.com')) {
        setDomainError('Personal Email must end with @gmail.com');
        setDisableSubmit(true);
      } else {
        setDomainError('');
        setDisableSubmit(false);
      }
    }
    setFormData(newFormData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 my-8">
      <div className="w-full max-w-lg bg-[#111] p-8 rounded-2xl shadow-[0_0_20px_#ff1e1e] border border-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.15)_1px,transparent_1px)] bg-[length:20px_20px] pointer-events-none"></div>

        <h1 className="text-3xl font-bold text-center mb-6 tracking-widest">
          <span className="text-red-600">Robocon</span> Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: 'Name', name: 'name', placeholder: 'Name as in ID card' },
            { label: 'Registration Number', name: 'regNo', placeholder: 'Registration No.' },
            { label: 'Department', name: 'department', placeholder: 'Department' },
            { label: 'Branch', name: 'branch', placeholder: 'Branch' },
            { label: 'Phone number', name: 'phone', placeholder: 'Phone Number' },
            { label: 'SRM email', name: 'srmEmail', placeholder: 'SRM Email' },
            { label: 'Personal Email', name: 'personalEmail', placeholder: 'Personal Email' }
          ].map(({ label, name, placeholder }) => (
            <div key={name}>
              <label className='block text-red-500 font-semibold uppercase text-sm tracking-widest'>{label}</label>
              <input
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-black border border-red-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
              />
            </div>
          ))}

          <label className="block text-red-500 font-semibold uppercase text-sm tracking-widest">Select your Domain</label>
          <select
            name="domain1"
            value={formData.domain1}
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="">--Select Domain--</option>
            {Object.entries(domainOptions).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          <label className="block text-red-500 font-semibold uppercase text-sm tracking-widest">Select another Domain (Optional)</label>
          <select
            name="domain2"
            value={formData.domain2}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-red-500 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="NA">--Select Domain--</option>
            {Object.entries(domainOptions).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>

          {domainError && (
            <p className="text-red-500 text-sm mt-1">{domainError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-4 rounded-lg shadow-[0_0_15px_#ff1e1e] transition-transform duration-300 hover:scale-105"
            disabled={disableSubmit}
          >
            Submit
          </button>

          {message && <p className="mt-4 text-center text-red-400">{message}</p>}
        </form>
      </div>
    </div>
  );
}
