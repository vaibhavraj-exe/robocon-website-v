"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "./styles.css";

export default function App() {
  const [captchaVerified, setCaptchaVerified] = useState(false);

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
    fetch(
      "https://script.google.com/macros/s/AKfycby1inkfxrxPi2vNKY1vxblVCzLQvBn4kpEnxPC0z1vnBKSSgvBjreY1IxxI-UlYGPsqmw/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          // Registration successful
          setMessage("YOU ARE REGISTERED FOR THE EVENT");
        } else {
          // Registration failed
          setMessage("Failed to register. Please try again.");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error registering:", error);
        setMessage("Failed to register. Please try again.");
        setLoading(false);
      });
  }
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("loading", loading);
  }, [loading]);
  return (
    <div className="App">
      <Header />
      <h3 className=" justify-center items-center text-center md:px-24 px-10 pt-3  text-white flex flex-col">
       <div className="text-xl m-5">SolidWorks Workshop <br /></div>

        SolidWorks is a powerful 3D CAD software used for designing and modeling mechanical components and assemblies. It offers robust features for creating precise designs, simulations, and documentation. SolidWorks is widely utilized across industries for product development and engineering tasks. From automotive to aerospace, SolidWorks is integral to modern manufacturing and product development workflows.
        {/* <b className="text-red tex"> Price of the workshop: 599 Rs. </b> */}
        
        {/* <span className="text-lg text-red font-extrabold mt-5">PRICE : Rs. 599 /- only</span> */}
      </h3>
      <div className=" flex p-10 gap-10 justify-center items-center flex-wrap">
        <Image
          className=" rounded-lg"
          src="/events/SW Poster R2.png"
          width={350}
          height={350}
          alt=""
        />
        {/* <div className="">
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

              <div className="flex justify-center items-center flex-wrap">
                <input
                  name="Name"
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />
                <ReCAPTCHA
                  className=" flex justify-center items-center scale-75 flex-wrap"
                  sitekey="6LezYnApAAAAAPI9TRQOrngBx-dl2FaruV9R4KYP"
                  onChange={onChange}
                />
              </div>
            </form>
            {loading && message === "" && (
              <p className="text-white flex justify-center items-center p-8">
                Loading...
              </p>
            )}
            {message && (
              <p className="text-white flex justify-center items-center p-8">
                {message}
              </p>
            )}
          </div>
        </div> */}
      </div>
      {/* <div className="text-white text-center justify-center items-center p-8">Upon registration, you will shortly be contacted by our team. Any queries contact us on Instagram <a href="https://www.instagram.com/srmteamrobocon/ " className=" hover:text-red text-lg hover:underline"> @srmteamrobocon. </a>  </div> */}
    <div className="text-white text-center justify-center items-center p-8 pt-0"><span className="text-lg font-bold">We’re all sold out! <br /></span> Can’t squeeze in another chair. But don’t worry, we’ll be back with more exciting events. Stay tuned!” 🎉</div>
      <Footer/>
    </div>
  );
 
}
