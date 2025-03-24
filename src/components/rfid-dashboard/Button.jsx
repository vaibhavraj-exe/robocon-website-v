"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Dashboard() {
  const [isLeader, setIsLeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const path = usePathname();

  const pathLinks =
    path === "/dashboard" ? ["Home"] : path === "/home" ? ["Dashboard"] : ["Home", "Dashboard"];

  const buttonOptions = [
    ...(isLeader
      ? ["Permit Lab", "Make Lab Admin", "Make Main Admin", "Approve User", "Remove User"]
      : []),
    "Add Lab",
    "All Users",
    "Log Out",
  ];

  const pagelink = (text) => {
    if (text === "Dashboard") return "/dashboard";
    if (text === "Home") return "/home";
    if (text === "All Users") return "/all";
    return `/special?page=${text.toLowerCase().replace(/\s+/g, "-")}`;
  };

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  return (
    <div
      className={`w-full  text-white py-8 px-4 shadow-md flex flex-col items-center justify-center relative ${
        menuOpen ? "overflow-hidden" : "overflow-x-hidden"
      }`}
    >
      {/* Hamburger Icon */}
      <div className="absolute top-6 right-6 z-50 sm:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Overlay to Close Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          menuOpen && !isLargeScreen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 max-w-xs w-64 h-full bg-gray-900 text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform sm:relative sm:w-full sm:bg-transparent sm:translate-x-0 sm:block`}
      >
        <div
          className={`flex flex-col items-center gap-3 p-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-2`}
        >
          {[...pathLinks, ...buttonOptions].map((text, index) => (
            <Link key={`btn-${index}`} href={pagelink(text)}>
              <button className="bg-white text-gray-700 px-6 py-2 rounded-xl text-sm shadow-md hover:bg-gray-200 transition min-w-[140px] text-center">
                {text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
