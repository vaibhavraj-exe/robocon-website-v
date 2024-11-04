"use client";

import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { projects } from "@/constants/constants";

export default function Events() {
  return (
    <div>
      <Header />
      <div className="grid place-items-center py-8">
        <Carousel data={projects}/>
      </div>
      <Footer />
    </div>
  );
}
    