"use client";

import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/ProjectCarousel";
import Footer from "@/components/Footer";
import { projects } from "@/constants/constants";

export default function Events() {
  return (
    <div>
      <Header />
      <div className="grid place-items-center py-8">
      <h1 style={{color:"white",fontSize:30 , marginBottom:10}}>Projects</h1>
        <Carousel data={projects}/>
      </div>
      <Footer />
    </div>
  );
}
    