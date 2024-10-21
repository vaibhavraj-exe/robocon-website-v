"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./styles.css";
import { useRouter } from "next/navigation";

export default function App() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const router = useRouter();

  const onChange = () => {
    setCaptchaVerified(true);
  };

  function Submit(e: any) {
    const formEle = document.querySelector("form");

    e.preventDefault();

    const formData = new FormData(formEle as any);
    const officialEmail = formData.get("OfficialSRMEmailID");
    const contactNumber = formData.get("ContactNumber");
    const WhatsApp = formData.get("WhatsAppNumber");
    const domain1 = formData.get("Domain1");
    const domain2 = formData.get("Domain2");


    // Email validation for @srmist.edu.in domain
    if (officialEmail) {
      if (!(officialEmail as string).endsWith("@srmist.edu.in")) {
        setMessage(
          "Please enter a valid Official SRM Email ID ending with @srmist.edu.in"
        );
        return;
      }
    }

    if (!captchaVerified) {
      setLoading(false);
      setMessage("Please complete the reCAPTCHA to register.");
      return;
    }

    // Contact number validation for 10 digits
    if (contactNumber) {
      setLoading(false);
      if (!/^\d{10}$/.test(contactNumber as any)) {
        setMessage("Please enter a valid contact number");
        return;
      }
    }

    if (WhatsApp) {
      setLoading(false);
      if (!/^\d{10}$/.test(WhatsApp as any)) {
        setMessage("Please enter a valid WhatsApp number");
        return;
      }
    }

    setLoading(true);
    setMessage("");
    setError(false);
    fetch(
      "https://script.google.com/macros/s/AKfycbyuoUw7O0eUfix3pZORKtVN5wNBIGHm6rWI4O6V1ANDJDaN6RojTSPWVeceWV7HDGCi/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          // Registration successful
          setMessage("YOU ARE REGISTERED FOR THE EVENT");
          setTimeout(() => {
            router.push("/orientation_reg/success");
          });
        } else {
          // Registration failed
          setMessage("Failed to register. Please try again.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.error("Error registering:", error);
        setMessage("Failed to register. Please try again.");
        setLoading(false);
      });
  }
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);
  return (
    <div className="App">
      <Header />
      <h3 className=" justify-center items-center text-center md:px-24 px-10 pt-3 text-xl text-white flex flex-col">
        <div className="text-xl m-5">
          Register Here!! <br />
        </div>
        For Our Orientation.
        <span className="text-lg text-red font-extrabold mt-5"></span>
      </h3>
      <div className=" flex p-10 gap-10 justify-center items-center flex-wrap">
        <Image
          className=" rounded-lg"
          src="/events/orientation2024.png"
          width={340}
          height={340}
          alt=""
        />
        <div className="">
          <div className=" justify-center">
            <form className="max-w-md mx-auto" onSubmit={(e) => Submit(e)}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="Name"
                  id="Your Name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Your Name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="FullRegistrationNumber"
                  id="Full Registration Number"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  pattern="^(RA23|RA24)[A-Za-z0-9]{11}$"
  title="The registration number must start with RA23 or RA24 and be 15 characters long."
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Full Registration Number
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="Department"
                  id="Departmentr"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Department
                </label>
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="YourEmail"
                    id="Your Email"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Your Email
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="OfficialSRMEmailID"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />

                  <label className="peer-focus:font-medium absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Official SRM Email ID
                  </label>
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="ContactNumber"
                    id="Contact Number"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Contact Number
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="tel"
                    name="WhatsAppNumber"
                    id="Contact Number"
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    WhatsApp Number
                  </label>
                </div>
              </div>

              <div className="flex gap-7 pb-3 w-fit">
                <div>
                  <label
                    htmlFor="Domain"
                    className="block mb-2 text-sm font-medium text-white whitespace-nowrap"
                  >
                    1st Domain choice
                  </label>
                  <select
                    required
                    name="Domain1"
                    id="Domain"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-1 focus:ring-blue-500 focus:border-blue-500 block   placeholder-gray-400 text-black "
                  >
                    <option disabled selected value="">
                      select any one
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="MCSOD-Corporate">MCSOCD-Creatives</option>
                    <option value="IESED-Electronics">SIESED-Electronics</option>
                    <option value="SPACED-Coding">SPACED-Coding</option>
                    <option value="SAMBED-Mechanical">SAMBED-Mechanical</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="Domain"
                    className="block mb-2 text-sm font-medium text-white whitespace-nowrap"
                  >
                    2nd Domain choice
                  </label>
                  <select
                  required
                    name="Domain2"
                    id="Domain"
                    className="bg-gray-50 border border-gray-300 p-1 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   placeholder-gray-400 text-black "
                  >
                    <option disabled selected value="">
                      select any one
                    </option>
                    <option value="Web Development">Web Development</option>
                    <option value="MCSOD-Corporate">MCSOCD-Creatives</option>
                    <option value="SIESED-Electronics">SIESED-Electronics</option>
                    <option value="SPACED-Coding">SPACED-Coding</option>
                    <option value="SAMBED-Mechanical">SAMBED-Mechanical</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center items-center flex-wrap">
                <input
                  name="Name"
                  type="submit"
                  className={`text-white ${loading ? "bg-gray-900" : "bg-blue-700 hover:bg-blue-800"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  value={loading ? "Loading..." : "Register"}
                  disabled={loading}
                />
                <ReCAPTCHA
                  className=" flex justify-center items-center scale-75 flex-wrap"
                  sitekey="6Ld-Y3ApAAAAAKdw_GfiQCHaPizJFLwok8aMg2Wj"
                  onChange={onChange}
                />
              </div>
            </form>
            {/* {loading && message === "" && (
              <p className="text-white flex justify-center items-center p-8">
                Loading...
              </p>
            )} */}
            {message && (
              <p className="text-white flex justify-center items-center p-8">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="text-white text-center justify-center items-center p-8">
        Any queries contact us on Instagram{" "}
        <a
          href="https://www.instagram.com/srmteamrobocon/ "
          className=" hover:text-red text-lg hover:underline"
        >
          {" "}
          @srmteamrobocon.{" "}
        </a>{" "}
      </div>
      <Footer />
    </div>
  );
}