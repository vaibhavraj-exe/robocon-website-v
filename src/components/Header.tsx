"use client";

import Image from "next/image";
import { useContext, useEffect } from "react";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import Menu3FillIcon from "remixicon-react/Menu3FillIcon";
import AOS from "aos";
import { useRouter } from "next/navigation";
import { useMenuContext } from "@/context/MenuContext";
import ParticlesCom from "./Particles";

export default function Header() {
  const { isMenuOpen, setMenuValue } = useMenuContext();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const router = useRouter();
  return (
    <div>
      <div className="-z-50">
        <ParticlesCom />
      </div>
      {/* Header section */}
      <div className="mt-12 md:mt-16 pl-10 md:pl-16 flex justify-between z-50 w-full">
        {/* Navbar Logo */}
        <Image
          src={"/textLogo.svg"}
          alt="logo"
          width={210}
          height={200}
          className="w-44 md:w-52 cursor-pointer z-50"
          onClick={() => router.push("/")}
          unoptimized
        ></Image>

        {/* Desktop NavBar */}
        <div
          className="hidden md:flex items-center bg-white text-[#3B3B3B] nav-bar-clip font-semibold"
          data-aos="slide-left"
        >
          <button
            className="ml-16 px-5 hover:text-red hover:scale-105"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="px-5 hover:text-red hover:scale-105"
            onClick={() => router.push("/team")}
          >
            Team
          </button>
          <button
            className="px-5 hover:text-red hover:scale-105"
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
          <button
            className="px-5 hover:text-red hover:scale-105"
            onClick={() => router.push("/achievements")}
          >
            Achievements
          </button>
          <button
            className="px-5 hover:text-red hover:scale-105"
            onClick={() => router.push("/gallery")}
          >
            Gallery
          </button>
          <button
            className="px-5 hover:text-red hover:scale-105"
            onClick={() => router.push("/events")}
          >
            Events
          </button>
          <button
            className="px-5 hover:text-red hover:scale-105"
            onClick={() => router.push("/alumni")}
          >
            Alumni
          </button>
          <button
            className="px-5 hover:text-red hover:scale-105"
            onClick={scrollToBottom}
          >
            Contact Us
          </button>
        </div>

        {/* Phone NavBar */}
        <div
          className={`bg-red nav-bar-clip pl-6 pr-4 flex justify-center items-center md:hidden z-20`}
          data-aos="slide-left"
          onClick={() => {
            setMenuValue(!isMenuOpen);
            console.log(isMenuOpen);
          }}
        >
          {isMenuOpen ? (
            <CloseFillIcon size={30} className="text-white" />
          ) : (
            <Menu3FillIcon size={30} className="text-white" />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } fixed top-0 w-screen h-full px-10 justify-center items-center z-[200] bg-black/20 backdrop-blur-sm md:hidden`}
        onClick={() => setMenuValue(false)}
      >
        <div
          className="bg-red text-white flex flex-col justify-center items-center phone-menu-clip gap-10 p-12 z-20"
          data-aos="fade-right"
        >
          <button
            className="px-8 hover:text-black hover:scale-105"
            onClick={() => router.push("/")}
          >
            Home
          </button>
          {/* <div>

          <span className="relative flex h-3 w-3 ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
            </span>
          <button
            className="px-2 hover:text-black hover:scale-105"
            onClick={() => router.push("/orientation_reg")}
          >
            Events
          </button>
          </div> */}
          <button
            className="px-8 hover:text-black hover:scale-105"
            onClick={() => router.push("/team")}
          >
            Team
          </button>
          <button
            className="px-8 hover:text-black hover:scale-105"
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
          <button
            className="px-8 hover:text-black hover:scale-105"
            onClick={() => router.push("/achievements")}
          >
            Achievements
          </button>
          <button
            className="px-8 hover:text-black hover:scale-105"
            onClick={() => router.push("/gallery")}
          >
            Gallery
          </button>
          <button
            className="px-8 hover:text-black hover:scale-105"
            onClick={() => router.push("/events")}
          >
            Events
          </button>
          <button
            className="px-8 hover:text-black hover:scale-105"
            onClick={() => router.push("/alumni")}
          >
            Alumni
          </button>
          <button
            className="px-8 hover:text-black hover:scale-105"
            onClick={scrollToBottom}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* svg below navbar */}
      <div className="hidden md:flex justify-end mt-5" data-aos="fade-left">
        {/* EVENT alert section*/}
        {/* <div className="nav-bar-clip h-10 bg-red w-64">          
          <div className="px-12 py-2 flex">
            <button className=" text-white font-semibold" onClick={() => router.push("/workshopReg") }>Event Alert!</button>
            <span className="relative flex h-3 w-3 ">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
