"use client";

import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/AchievementsCarousel";
import Footer from "@/components/Footer";
import { achievements1 } from "@/constants/constants";

export default function Events() {
  return (
    <div>
      <Header />
      <div className="grid place-items-center py-8">
        <h1 style={{color:"white",fontSize:30}}>Achievements</h1>
        <Carousel data={achievements1}/>
      </div>
      <Footer />
    </div>
  );
}
