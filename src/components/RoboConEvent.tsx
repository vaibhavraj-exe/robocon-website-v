/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";

import Image from 'next/image';

const RoboConEvent = () => {
  return (
    <section className="relative flex   flex-col-reverse md:flex-row items-center justify-between w-full h-auto min-h-screen bg-gray-900">
      
      <div className="w-full md:w-1/2 z-10 flex justify-center ">
        <img
          src="/events/ARC.JPG"  
          alt="Automation & Robotics Challenge"
          className="max-w-full h-[600px] rounded-md object-contain"
        />
      </div>

     
      <div className="w-full md:w-1/2 flex md:flex-row flex-col-reverse items-center justify-center p-8 text-center">
        <h1 className="text-white text-4xl z-10 pt-6 md:text-6xl font-bold">
        AUTOMATION &
ROBOTIC
CHALLENGE
        </h1>
      </div>

     
      <div className="absolute inset-0 w-full h-full bg-gray-800" style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%, 100% 0%)' }}></div>
      <div className="absolute inset-0 w-full h-full bg-gray-700" style={{ clipPath: 'polygon(100% 100%, 100% 0%, 49.9% 49.9%, 0 100%)' }}></div>
    </section>
  );
};

export default RoboConEvent;

