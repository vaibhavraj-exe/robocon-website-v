/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

import Image from "next/image";
import { BiDownload } from "react-icons/bi";

const RoboConEvent = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full h-auto min-h-screen bg-gray-900">
      <a
        href="https://drive.google.com/file/d/1ovuqpur9EGUKsyiA6gpCZIX_b4urA1J8/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 mb-8 z-10 bg-yellow-500 md:hidden hover:bg-slate-900 hover:text-white text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center"
      >
        <span className="mr-2">Download Brochure</span>
        <BiDownload className="w-5 h-5" />
      </a>

      <div className="w-full md:w-1/2 z-10 flex justify-center ">
        <img
          src="/events/ARC.JPG"
          alt="Automation & Robotics Challenge"
          className="max-w-full h-[600px] rounded-md object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 flex md:flex-col flex-col-reverse items-center justify-center p-8 text-center">
        <h1 className="text-white text-4xl z-10 pt-6 md:text-6xl font-bold">
          AUTOMATION & ROBOTIC CHALLENGE
        </h1>

        <a
  href="https://drive.google.com/file/d/1ovuqpur9EGUKsyiA6gpCZIX_b4urA1J8/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 mb-8 z-10 bg-yellow-500 hover:bg-slate-900 hover:text-white text-black font-bold py-3 px-6 rounded-lg items-center justify-center hidden md:flex"
>
  <span className="mr-2">Download Brochure</span>
  <BiDownload className="w-5 h-5" />
</a>

      </div>

      <div
        className="absolute inset-0 w-full h-full bg-gray-800"
        style={{ clipPath: "polygon(0 0, 0 100%, 50% 50%, 100% 0%)" }}
      ></div>
      <div
        className="absolute inset-0 w-full h-full bg-gray-700"
        style={{ clipPath: "polygon(100% 100%, 100% 0%, 49.9% 49.9%, 0 100%)" }}
      ></div>
    </section>
  );
};

export default RoboConEvent;
